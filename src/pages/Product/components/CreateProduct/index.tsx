import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { createProduct } from "api/product";
import { useMutation } from "react-query";

import styles from "./styles.module.scss";

const CreateProduct = () => {
  const [form] = useForm();

  const { mutate: _onSubmit } = useMutation(
    (payload) => createProduct(payload),
    {
      onSuccess: () => {},
      onError: (error) => {},
    }
  );

  return (
    <>
      <div className={styles.wrapCreateProduct}>
        <Form form={form} layout="vertical" onFinish={_onSubmit}>
          <Form.Item
            label="Tên sản phẩm"
            required
            name="product_name"
            tooltip="This is a required field"
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
          <Form.Item
            label="Giá nhập"
            required
            name="entry_price"
            tooltip="This is a required field"
          >
            <InputNumber
              prefix="￥"
              className="w-100"
              placeholder="Nhập giá nhập"
            />
          </Form.Item>
          <Form.Item label="Loại sản phẩm" name="product_type">
            <Select
              showSearch
              placeholder="Chọn loại sản phẩm"
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
                  value: "Nước hoa",
                  label: "Nước hoa",
                },
                {
                  value: "Dầu gội",
                  label: "Dầu gội",
                },
                {
                  value: "Phấn trang điểm",
                  label: "Phấn trang điểm",
                },
              ]}
            />
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Giá cộng tác viên"
                required
                tooltip="This is a required field"
                name="contributor_price"
              >
                <InputNumber
                  className="w-100"
                  prefix="￥"
                  placeholder="Nhập giá cộng tác viên"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Giá bán"
                required
                tooltip="This is a required field"
                name="price"
              >
                <InputNumber
                  className="w-100"
                  prefix="￥"
                  placeholder="Nhập giá bán"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Số lượng"
                required
                tooltip="This is a required field"
                name="quantity"
              >
                <InputNumber className="w-100" placeholder="Nhập số lượng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Chi nhánh" name="branch">
                <Select
                  showSearch
                  placeholder="Chọn chi nhánh"
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
                      value: "Chi nhánh 1",
                      label: "Chi nhánh 1",
                    },
                    {
                      value: "Chi nhánh 2",
                      label: "Chi nhánh 2",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
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

export default CreateProduct;
