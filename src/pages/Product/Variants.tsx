import { Dropdown, MenuProps, Table, Image } from "antd";
import { ColumnsType } from "antd/es/table";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  barcode: string;
  image: string;
  inventory: number;
  retail_price: number;
  product_version_name: number;
}

const Variants = () => {
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
      title: "Mã vạch",
      dataIndex: "barcode",
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
      title: "Tồn kho",
      dataIndex: "inventory",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Giá bán lẻ",
      dataIndex: "retail_price",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Tên phiên bản sản phẩm",
      dataIndex: "product_version_name",
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
      barcode: "8809471816521",
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      inventory: 90,
      retail_price: 1000,
      product_version_name: 1000,
    },
    {
      key: "2",
      barcode: "8809471816521",
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      inventory: 90,
      retail_price: 1000,
      product_version_name: 1000,
    },
    {
      key: "3",
      barcode: "8809471816521",
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      inventory: 90,
      retail_price: 1000,
      product_version_name: 1000,
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false, // Column configuration not to be checked
      barcode: record.barcode,
    }),
  };
  return (
    <MainContainer>
      <div className={styles.wrapVariants}>
        <div className={styles.wrapHeader}>
          <SearchHeaderTable btnCreateHas={false} />
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
    </MainContainer>
  );
};

export default Variants;
