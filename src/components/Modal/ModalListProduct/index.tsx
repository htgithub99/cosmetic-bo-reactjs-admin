import { Image, Checkbox, Divider, List, Modal, Skeleton } from "antd";
import classNames from "classnames";
import SearchHeaderTable from "components/SearchHeaderTable";
import InfiniteScroll from "react-infinite-scroll-component";
import useProduct from "utils/hooks/useProduct";

import styles from "./styles.module.scss";

interface IProps {
  isModalOpen: boolean;
  _onSubmit: () => void;
  _onClose: () => void;
}

const ModalListProduct = ({ isModalOpen, _onSubmit, _onClose }: IProps) => {
  const { productData } = useProduct();
  console.log({ productData });

  const stylesImage = {
    borderRadius: "5px",
  };

  return (
    <Modal
      title="Chọn sản phẩm"
      centered
      width={800}
      open={isModalOpen}
      okText="Xác nhận"
      cancelText="Thoát"
      onOk={() => _onSubmit && _onSubmit()}
      onCancel={() => _onClose && _onClose()}
    >
      <SearchHeaderTable btnHeaderImport={false} />
      <div className={styles.wrapContent}>
        <div className={styles.content_title}>
          <Checkbox defaultChecked={false}>Đã chọn 2 sản phẩm</Checkbox>
        </div>
        <div className={styles.content_data} id="scrollable-list-product-modal">
          <InfiniteScroll
            dataLength={productData?.length || 0}
            next={() => {}}
            hasMore={productData?.length < 50}
            loader={false}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollable-list-product-modal"
          >
            <List
              dataSource={productData}
              renderItem={(item: any) => (
                <List.Item
                  key={item.email}
                  className={classNames(
                    styles.wrapListMeta,
                    "custom-ant-image-mask"
                  )}
                >
                  <Checkbox />
                  <List.Item.Meta
                    avatar={
                      <Image
                        style={{ ...stylesImage }}
                        src={item.picture.large}
                        width={50}
                      />
                    }
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div className={styles.wrapDetailProduct}>
                    <div className={styles.detailProduct__entryPrice}>
                      Giá nhâp: <span>9000</span>
                    </div>
                    <div className={styles.detailProduct__entryPrice}>
                      Tồn: <span>8</span> | Có thể bán: <span>8</span>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
    </Modal>
  );
};

export default ModalListProduct;
