import { Drawer, Dropdown, Image, MenuProps, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { useState } from "react";
import CreatePurchaseOrders from "./components/CreatePurchaseOrders";
import EditPurchaseOrders from "./components/EditPurchaseOrders";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  code_stock: string;
  Create_at: string;
  status: string;
  status_stock: string;
  branch_stock: string;
  supplier: string;
  staff_create: string;
}

// interface childDataType {
//   key: React.Key;
//   id: number;
//   image: string;
//   code_sku: string;
//   name_product: string;
//   quantity: number;
//   unit_price: number;
//   into_money: number;
// }

const PurchaseOrders = () => {
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  const [isDrawerEdit, setIsDrawerEdit] = useState<boolean>(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div className="disabled-div">Sửa</div>,
    },
    {
      key: "2",
      label: <div>Xóa</div>,
      onClick: ({ item, key, keyPath, domEvent }) => {
        console.log({ item, key, keyPath, domEvent });
      },
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã đơn nhập",
      dataIndex: "code_stock",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ngày nhập",
      dataIndex: "Create_at",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Trạng thái nhập",
      dataIndex: "status_stock",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Chi nhánh nhập",
      dataIndex: "branch_stock",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "supplier",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Nhân viên tạo",
      dataIndex: "staff_create",
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

  const data: DataType[] = [
    {
      key: "1",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "2",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "3",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "4",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "5",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "6",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "7",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "8",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
  ];

  //child table
  const childColumns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "id",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      ellipsis: true,
      responsive: ["md"],
      render: (url: string) => <Image src={url} alt={url} />,
    },
    {
      title: "Mã SKU",
      dataIndex: "code_sku",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name_product",
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
      title: "Đơn giá",
      dataIndex: "unit_price",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Thành tiền",
      dataIndex: "into_money",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
  ];

  const childData: any[] = [
    {
      key: "1",
      id: 1,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "2",
      id: 2,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "3",
      id: 3,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "4",
      id: 4,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "5",
      id: 5,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false, // Column configuration not to be checked
      code_stock: record.code_stock,
    }),
  };

  const _onCloseDrawerCreate = () => setIsDrawerCreate(false);

  const _onCloseDrawerEdit = () => setIsDrawerEdit(false);

  return (
    <MainContainer>
      <div className={styles.wrapPurchaseOrders}>
        <div className={styles.wrapHeader}>
          <SearchHeaderTable _onCreate={() => setIsDrawerCreate(true)} />
        </div>
        <div className={styles.wrapContent}>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  columns={childColumns}
                  dataSource={childData}
                  loading={false}
                  pagination={false}
                />
              ),
              rowExpandable: (record) => record.code_stock !== "Not Expandable",
            }}
            loading={false}
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
        title="Tạo đơn nhập hàng"
        placement="right"
        onClose={_onCloseDrawerCreate}
        open={isDrawerCreate}
      >
        <CreatePurchaseOrders />
      </Drawer>
      <Drawer
        title="Sửa đơn nhập hàng"
        placement="right"
        onClose={_onCloseDrawerEdit}
        open={isDrawerEdit}
      >
        <EditPurchaseOrders items={items} />
      </Drawer>
    </MainContainer>
  );
};

export default PurchaseOrders;
