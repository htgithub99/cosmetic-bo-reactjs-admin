import { Drawer, Dropdown, MenuProps, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { useState } from "react";
import CreateOrder from "./components/CreateOrder";
import EditOrder from "./components/EditProduct";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  code_order: string;
  create_at: string;
  name_customer: string;
  status_order: string;
  status_pay: string;
  guest_must_pay: number;
}

const Order = () => {
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
      title: "Mã đơn hàng",
      dataIndex: "code_order",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ngày tạo đơn",
      dataIndex: "create_at",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "name_customer",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "status_order",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Trạng thái Thanh toán",
      dataIndex: "status_pay",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Khách phải trả",
      dataIndex: "guest_must_pay",
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
      code_order: "SON16979",
      create_at: "19/02/2023 14:59",
      name_customer: "C Thảo",
      status_order: "Hoàn thành",
      status_pay: "Hoàn thành",
      guest_must_pay: 1000,
    },
    {
      key: "2",
      code_order: "SON16979",
      create_at: "19/02/2023 14:59",
      name_customer: "C Thảo",
      status_order: "Hoàn thành",
      status_pay: "Hoàn thành",
      guest_must_pay: 1000,
    },
    {
      key: "3",
      code_order: "SON16979",
      create_at: "19/02/2023 14:59",
      name_customer: "C Thảo",
      status_order: "Hoàn thành",
      status_pay: "Hoàn thành",
      guest_must_pay: 1000,
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false, // Column configuration not to be checked
      code_order: record.code_order,
    }),
  };

  const _onCloseDrawerCreate = () => setIsDrawerCreate(false);

  const _onCloseDrawerEdit = () => setIsDrawerEdit(false);

  return (
    <MainContainer>
      <div className={styles.wrapOrder}>
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
        title="Tạo đơn hàng"
        placement="right"
        onClose={_onCloseDrawerCreate}
        open={isDrawerCreate}
      >
        <CreateOrder />
      </Drawer>
      <Drawer
        title="Sửa đơn hàng"
        placement="right"
        onClose={_onCloseDrawerEdit}
        open={isDrawerEdit}
      >
        <EditOrder items={items} />
      </Drawer>
    </MainContainer>
  );
};

export default Order;
