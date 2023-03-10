import { Button, Drawer, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { deleteProduct, getListProduct } from "api/product";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { QueryKey } from "constants/constant";
import { formatMoney } from "constants/format";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  name: string;
  type: string;
  total: number;
  price: number;
}

const Product = () => {
  const queryClient = useQueryClient();
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  
  const [sizePage, setSizePage] = useState<any>({
    name: null,
  });

  const [updateDrawer, setUpdateDrawer] = useState<{
    productId: number | null;
    modalHas: boolean;
  }>({
    productId: null,
    modalHas: false,
  });

  const { data: productData, isLoading: isLoadingProductData } = useQuery(
    [QueryKey.LIST_PRODUCT_KEY, sizePage],
    () => getListProduct(sizePage),
    {}
  );

  const { mutate: onDeleteProduct } = useMutation(
    ({ _id }: any) => deleteProduct(_id),
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
      },
      onError: (error) => handleErrorMessage(error),
      onSettled: () =>
        queryClient.invalidateQueries([QueryKey.LIST_PRODUCT_KEY, sizePage]),
    }
  );

  const onClickUpdateProduct = ({ _id }: any) => {
    setUpdateDrawer({
      productId: _id,
      modalHas: true,
    });
  };

  const _onSearchField = (value: any) => {
    setSizePage({
      ...sizePage,
      name: value,
    });
  };

  const _onPaginationTable = (pageIndex: any) => {
    setSizePage({
      ...sizePage,
      pageIndex,
    });
  }

  const COLUMNS_PRODUCT: ColumnsType<DataType> = [
    {
      title: "T??n s???n ph???m",
      dataIndex: "product_name",
      ellipsis: true,
      responsive: ["md"],
      align: "left",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Lo???i s???n ph???m",
      dataIndex: "product_type",
      ellipsis: true,
      width: 150,
      responsive: ["md"],
      align: "center",
      render: (text: string) => text,
    },
    {
      title: "S??? l?????ng",
      dataIndex: "quantity",
      width: 150,
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      render: (text: string) => text,
    },
    {
      title: "Gi??",
      dataIndex: "price",
      width: 150,
      ellipsis: true,
      responsive: ["md"],
      align: "right",
      render: (text: string) => text,
    },
    {
      title: "T??c v???",
      dataIndex: "action",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            onClick={() => onClickUpdateProduct(record)}
            htmlType="button"
            size="small"
          >
            Ch???nh s???a
          </Button>
          <Popconfirm
            title="X??a s???n ph???m"
            placement="topLeft"
            description="B???n c?? mu???n x??a s???n ph???m n??y kh??ng?"
            onConfirm={() => onDeleteProduct(record)}
            okText="X??c nh???n"
            cancelText="H???y"
          >
            <Button type="dashed" htmlType="button" size="small">
              X??a
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data: DataType[] = productData?.data?.map((item: any) => ({
    ...item,
    key: item._id,
    price: formatMoney(item?.price),
  }));

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false, // Column configuration not to be checked
      name: record.name,
    }),
  };

  const _onCloseDrawerCreate = () => setIsDrawerCreate(false);

  const _onCloseDrawerEdit = () =>
    setUpdateDrawer({
      productId: null,
      modalHas: false,
    });

  return (
    <MainContainer classW="h-100">
      <div className={styles.wrapProduct}>
        <div className={styles.wrapHeader}>
          <SearchHeaderTable
            _onSearchField={(value) => _onSearchField(value)}
            _onCreate={() => setIsDrawerCreate(true)}
          />
        </div>
        <div className={styles.wrapContent}>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={COLUMNS_PRODUCT}
            dataSource={data}
            loading={isLoadingProductData}
            pagination={{
              total: productData?.totalItems,
              showTotal: (total, range) =>
                `T??? ${productData?.pageIndex || 1} ?????n ${total} tr??n t???ng ${productData?.totalItems}`,
              defaultPageSize: productData?.pageSize || 5,
              defaultCurrent: 1,
              onChange: (page) => _onPaginationTable(page)
            }}
          />
        </div>
      </div>
      <Drawer
        title="T???o s???n ph???m"
        placement="right"
        onClose={_onCloseDrawerCreate}
        open={isDrawerCreate}
      >
        <CreateProduct
          _onCloseModal={() => _onCloseDrawerCreate()}
          sizePage={sizePage}
        />
      </Drawer>
      <Drawer
        title="S???a s???n ph???m"
        placement="right"
        onClose={_onCloseDrawerEdit}
        open={updateDrawer.modalHas}
      >
        <EditProduct
          productId={updateDrawer.productId}
          _onCloseModal={() => _onCloseDrawerEdit()}
          sizePage={sizePage}
        />
      </Drawer>
    </MainContainer>
  );
};

export default Product;
