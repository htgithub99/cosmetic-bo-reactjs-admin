import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";

import styles from "./styles.module.scss";

const CreateOrder = () => {
  
  const [form] = useForm();

  return (
    <>
      <div className={styles.wrapCreateOrder}>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Tên khách hàng"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="Nhập tên khách hàng" />
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Trạng thái đơn hàng">
                <Select
                  showSearch
                  placeholder="Chọn trạng thái đơn hàng"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                    {
                      value: "5",
                      label: "Resolved",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Trạng thái Thanh toán">
                <Select
                  showSearch
                  placeholder="Chọn trạng thái Thanh toán"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                    {
                      value: "5",
                      label: "Resolved",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Khách phải trả"
            required
            tooltip="This is a required field"
          >
            <InputNumber className="w-100" placeholder="Nhập khách phải trả" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateOrder;
