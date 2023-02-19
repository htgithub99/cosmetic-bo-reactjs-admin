import {
  HomeOutlined,
  SettingOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import classNames from "classnames";
import { RoutePath } from "constants/constant";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useToggleSideNav from "utils/hooks/useToggleSideNav";
import styles from "./styles.module.scss";

const { SubMenu } = Menu;

export default function SideNav() {
  const { collapsed, toggleSideNav } = useToggleSideNav();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("1");

  const routes = [
    {
      key: "1",
      text: "Trang chủ",
      url: RoutePath.HOME_PATH,
      icon: <HomeOutlined />,
    },
    {
      key: "2",
      text: "Sản phẩm",
      icon: <TableOutlined />,
      children: [
        {
          key: "2.1",
          text: "Danh sách sản phẩm",
          url: RoutePath.PRODUCT_LIST_PATH,
        },
        {
          key: "2.2",
          text: "Quản lý kho",
          url: RoutePath.PRODUCT_VARIANTS_PATH,
        },
        {
          key: "2.3",
          text: "Đặt hàng nhập",
          url: RoutePath.PRODUCT_ORDER_PATH,
          disabled: true,
        },
        {
          key: "2.4",
          text: "Nhập hàng",
          url: RoutePath.PRODUCT_PURCHASE_ORDERS_PATH,
        },
        {
          key: "2.5",
          text: "Kiểm hàng",
          url: RoutePath.PRODUCT_CHECK_GOODS_PATH,
          disabled: true,
        },
        {
          key: "2.6",
          text: "Chuyển hàng",
          url: RoutePath.PRODUCT_SHIPPING_PATH,
          disabled: true,
        },
        {
          key: "2.7",
          text: "Nhà cung cấp",
          url: RoutePath.PRODUCT_SUPPLIER_PATH,
          disabled: true,
        },
        {
          key: "2.8",
          text: "Điều chỉnh giá vốn",
          url: RoutePath.PRODUCT_CAPPITAL_PRICE_ADJUSTMENT_PATH,
          disabled: true,
        },
      ],
    },
    {
      key: "3",
      text: "Đơn hàng",
      icon: <SettingOutlined />,
      children: [
        {
          key: "3.1",
          text: "Tạo đơn và giao hàng",
          url: RoutePath.ORDER_CREATE_PATH,
        },
        {
          key: "3.2",
          text: "Danh sách đơn hàng",
          url: RoutePath.ORDER_LIST_PATH,
        },
        {
          key: "3.3",
          text: "Khách trả hàng",
          url: RoutePath.ORDER_CUSTOMER_PAYS_PATH,
        },
      ],
    },
    {
      key: "4",
      text: "Khách hàng",
      icon: <TableOutlined />,
      children: [
        {
          key: "4.1",
          text: "Danh sách khách hàng",
          url: RoutePath.CLIENT_LIST_PATH,
        },
        {
          key: "4.2",
          text: "Nhóm khách hàng",
          url: RoutePath.CLIENT_CUSTOMER_GROUP_PATH,
        },
      ],
    },
    {
      key: "5",
      text: "Bán tại quầy",
      url: RoutePath.SELLING_COUNTER_PATH,
      icon: <TableOutlined />,
    },
    {
      key: "6",
      text: "Đăng xuất",
      icon: <TableOutlined />,
    },
  ];

  useEffect(() => {
    routes.forEach((route) => {
      if (location.pathname.startsWith(route.url || "###")) {
        setSelectedKey(route.key);
      }
      if (route.children) {
        route.children.forEach((childRoute) => {
          if (location.pathname.startsWith(childRoute.url || "###")) {
            setSelectedKey(childRoute.key);
          }
        });
      }
    });
  }, [location.pathname]);

  return (
    <div
      className={classNames({
        [styles.sideNav]: true,
        [styles.sideNavCollapsed]: collapsed,
      })}
    >
      <div className={styles.wrapLogo}>
        <Link to="/" className={classNames({ "toggle-side-nav": collapsed })}>
          <img
            src="https://sapo.dktcdn.net/fe-cdn-production/images/logo_sapo_white.svg"
            alt="logo"
          />
        </Link>
        <span
          onClick={() => toggleSideNav()}
          className="material-symbols-outlined"
        >
          more_vert
        </span>
      </div>
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={[]}
        mode="inline"
        inlineCollapsed={collapsed}
        theme={"dark"}
      >
        {routes.map((route) => {
          if (route.children) {
            return (
              <SubMenu key={route.key} icon={route.icon} title={route.text}>
                {route.children?.map((childRoute) => (
                  <Menu.Item
                    disabled={childRoute?.disabled}
                    key={childRoute.key}
                  >
                    <Link to={childRoute?.disabled ? "#" : childRoute.url}>
                      {childRoute.text}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={route.key} icon={route.icon}>
              <Link to={route.url || "#"}>{route.text}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
}
