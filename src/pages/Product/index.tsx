import { Button, Drawer, Dropdown, MenuProps, Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { getListProduct } from "api/product";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { formatMoney } from "constants/format";
import { useState } from "react";
import { useQuery } from "react-query";
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
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  const [isDrawerEdit, setIsDrawerEdit] = useState<boolean>(false);

  const { data: productData, isLoading: isLoadingProductData } = useQuery(
    ["LIST_PRODUCT_KEY"],
    () => getListProduct({}),
    {}
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div>Sửa</div>,
      onClick: ({ item, key, keyPath, domEvent }) => setIsDrawerEdit(true),
    },
    {
      key: "2",
      label: <div>Xóa</div>,
      onClick: ({ item, key, keyPath, domEvent }) => {
        console.log({ item, key, keyPath, domEvent });
      },
    },
  ];

  const COLUMNS_PRODUCT: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "product_name",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "product_type",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Giá",
      dataIndex: "price",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => (
        <div className={styles.wrapAction}>
          <Dropdown menu={{ items }} placement="topCenter" arrow>
            <span className="material-symbols-outlined">more_vert</span>
          </Dropdown>
        </div>
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

  const _onCloseDrawerEdit = () => setIsDrawerEdit(false);

  return (
    <MainContainer>
      <div className={styles.wrapProduct}>
        <div className={styles.wrapHeader}>
          <SearchHeaderTable _onCreate={() => setIsDrawerCreate(true)} />
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
              total: 85,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
              defaultPageSize: 20,
              defaultCurrent: 1,
            }}
          />
        </div>
      </div>
      <Drawer
        title="Tạo sản phẩm"
        placement="right"
        onClose={_onCloseDrawerCreate}
        open={isDrawerCreate}
      >
        <CreateProduct />
      </Drawer>
      <Drawer
        title="Sửa sản phẩm"
        placement="right"
        onClose={_onCloseDrawerEdit}
        open={isDrawerEdit}
      >
        <EditProduct productId={'63fb2f8e678bfd92d033961a'} />
      </Drawer>
    </MainContainer>
  );
};

export default Product;
