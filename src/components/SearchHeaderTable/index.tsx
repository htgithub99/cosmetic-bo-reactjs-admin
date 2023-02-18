import {
  SearchOutlined,
  DownloadOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import styles from "./styles.module.scss";

interface IProps {
  _onCreate: () => void;
}
const SearchHeaderTable = ({ _onCreate }: IProps) => {
  const _onSearch = () => {};

  return (
    <>
      <div className={styles.wrapBtnHeaderTable}>
        <div className={styles.btn__import}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            htmlType="button"
            size="large"
          >
            Nhập file
          </Button>
          <Button
            type="primary"
            icon={<UploadOutlined />}
            htmlType="button"
            size="large"
          >
            Xuất file
          </Button>
        </div>
        <div className={styles.btn_create}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            htmlType="button"
            size="large"
            onClick={() => _onCreate && _onCreate()}
          >
            Tạo mới
          </Button>
        </div>
      </div>
      <div className={styles.wrapSearchHeaderTable}>
        <div className={styles.search_item}>
          <Input
            size="large"
            placeholder="Tìm mã đơn nhập, đơn đặt hàng, tên, SĐT, mã NCC"
            prefix={
              <SearchOutlined style={{ fontSize: "18px", color: "#08c" }} />
            }
          />
        </div>
        <div className={styles.search_button}>
          <Button type="primary" htmlType="button" size="large">
            Lưu bộ lọc
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchHeaderTable;