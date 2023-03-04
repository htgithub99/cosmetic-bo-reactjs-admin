import {
  SearchOutlined,
  DownloadOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  _onCreate?: () => void;
  btnCreateHas?: boolean;
  btnHeaderImport?: boolean;
  _onSearchField?: (value: any) => void;
}

const SearchHeaderTable = ({
  _onCreate,
  btnCreateHas = true,
  btnHeaderImport = true,
  _onSearchField,
}: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      {btnHeaderImport && (
        <div className={styles.wrapBtnHeaderTable}>
          <div className={styles.btn__import}>
            <Button
              type="dashed"
              icon={<DownloadOutlined />}
              htmlType="button"
              size="large"
            >
              Nhập file
            </Button>
            <Button
              type="dashed"
              icon={<UploadOutlined />}
              htmlType="button"
              size="large"
            >
              Xuất file
            </Button>
          </div>
          <div className={styles.btn_create}>
            {btnCreateHas && (
              <Button
                type="primary"
                icon={<PlusOutlined />}
                htmlType="button"
                size="large"
                onClick={() => _onCreate && _onCreate()}
              >
                Tạo mới
              </Button>
            )}
          </div>
        </div>
      )}
      <div className={styles.wrapSearchHeaderTable}>
        <div className={styles.search_item}>
          <Input
            size="large"
            placeholder="Tìm mã đơn nhập, đơn đặt hàng, tên, SĐT, mã NCC"
            prefix={
              <SearchOutlined style={{ fontSize: "18px", color: "#08c" }} />
            }
            onChange={(event: any) => {
              setInputValue(event?.target?.value);
            }}
          />
        </div>
        <div className={styles.search_button}>
          <Button
            type="dashed"
            htmlType="button"
            size="large"
            onClick={() => _onSearchField && _onSearchField(inputValue)}
          >
            Lưu bộ lọc
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchHeaderTable;
