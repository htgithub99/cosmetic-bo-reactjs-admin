import { Button } from "antd";
import { ICardProduct } from "constants/interface";
import styles from "./styles.module.scss";

const CardProduct = ({ item }: ICardProduct) => {
  const { url, star, name, price, promotion } = item;
  return (
    <div className={styles.wrapCardProduct}>
      <div className={styles.cardProduct_img}>
        <img src={url} alt="product" />
      </div>
      <div className={styles.cardProduct_sale}>New</div>
      <div className={styles.cardProduct_addProduct}>
        <Button htmlType="button">Add to cart</Button>
      </div>
    </div>
  );
};

export default CardProduct;
