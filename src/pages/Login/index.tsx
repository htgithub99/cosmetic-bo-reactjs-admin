import { Button, Form, Input } from "antd";
import { signin } from "api/authentication";
import MainContainer from "components/MainContainer";
import { handleErrorMessage } from "i18n";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { Link, Navigate } from "react-router-dom";
import styles from "./style.module.scss";

export default function Login() {
  const { t } = useTranslation();

  const navigateToSignUp = () => {};

  const { mutate: onFinish } = useMutation((payload) => signin(payload), {
    onSuccess: (data) => {
      Cookies.set("token", data?.data?.token);
    },
    onError: (error) => handleErrorMessage(error),
  });
  // signin

  const isAuthenticated = !!Cookies.get("token");
  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <MainContainer>
      <div className={styles.wrapLogin}>
        <div className={styles.wrapHeader}>
          <div className={styles.imgLogo}>
            <img
              src="https://sapo.dktcdn.net/sso-service/images/Sapo-logo.svg"
              alt=""
            />
          </div>
          <h1>Đăng nhập vào cửa hàng của bạn</h1>
          <p>
            Truy cập cửa hàng <Link to="#">www.bocosmetic.com</Link>
          </p>
        </div>
        <div className={styles.wrapContent}>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input placeholder="Email/Số điện thoại của bạn" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                type="password"
                placeholder="Mật khẩu đăng nhập cửa hàng"
                autoComplete="new-password"
              />
            </Form.Item>
            <div className={styles.btnSubmitLogin}>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit-login"
              >
                Đăng nhập
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </MainContainer>
  );
}
