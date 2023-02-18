import { Col, Row } from "antd";
import CardProduct from "components/CardProduct";
import { ICardProduct } from "constants/interface";
import styles from "./styles.module.scss";

interface IProps {
  data: ICardProduct[] | any;
}
const ListProductItem = ({ data }: IProps) => {
  return (
    <div className={styles.wrapListProduct}>
      <Row gutter={[16, 16]}>
        {!!data?.length &&
          data?.map((item: ICardProduct) => (
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={8}>
              <CardProduct item={item as any} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ListProductItem;
