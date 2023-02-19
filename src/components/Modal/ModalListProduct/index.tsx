import { Avatar, Checkbox, Divider, List, Modal, Skeleton } from "antd";
import SearchHeaderTable from "components/SearchHeaderTable";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./styles.module.scss";

interface IProps {
  data: any;
  isModalOpen: boolean;
  _onSubmit: () => void;
  _onClose: () => void;
  _setData: any;
}

const ModalListProduct = ({
  isModalOpen,
  _onSubmit,
  _onClose,
  data,
  _setData,
}: IProps) => {
  return (
    <Modal
      title="Chọn sản phẩm"
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
            dataLength={data.length}
            next={() => {}}
            hasMore={data.length < 50}
            loader={false}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollable-list-product-modal"
          >
            <List
              dataSource={data}
              renderItem={(item: any) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
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
