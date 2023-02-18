import { Button, Drawer, Dropdown, MenuProps, Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { useState } from "react";
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

const ListProduct = () => {
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  const [isDrawerEdit, setIsDrawerEdit] = useState<boolean>(false);

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

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "type",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Số lượng",
      dataIndex: "total",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
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
      name: "Nước hoa mini MCM",
      type: "Nước hoa",
      total: 90,
      price: 1000,
    },
    {
      key: "2",
      name: "Kem dưỡng ý dĩ Hatomugi 31sp",
      type: "Nước hoa",
      total: 90,
      price: 1000,
    },
    {
      key: "3",
      name: "Nước hoa chiết 10ml G9 nam",
      type: "Nước hoa",
      total: 90,
      price: 1000,
    },
  ];

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
      <div className={styles.wrapListProduct}>
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
        <EditProduct items={items} />
      </Drawer>
    </MainContainer>
  );
};

export default ListProduct;
