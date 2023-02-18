import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import styles from "./styles.module.scss";

const PageHeader = () => {
  const _onClickAvatar = () => {};

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Tài khoản của tôi
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Thông tin gói dịch vụ
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Lịch sử xuất nhập file
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "Đăng xuất",
    },
  ];

  return (
    <>
      <div className={styles.wrapPageHeader}>
        <div className={styles.pageHeader_left}>
          <h3>Danh sách sản phẩm</h3>
        </div>
        <div className={styles.pageHeader_right}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Bocosmetics
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
