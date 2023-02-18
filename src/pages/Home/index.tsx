import CardProduct from "components/CardProduct";
import MainContainer from "components/MainContainer";
import {
  DATA_FAKE_LIST_BANNER,
  DATA_FAKE_LIST_PRODUCT,
  DATA_FAKE_LIST_PRODUCT_TYPE,
} from "constants/json";
import ListProductItem from "./components/ListProductItem";
import ListProductType from "./components/ListProductType";
import SliderBanner from "./components/SliderBanner";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <MainContainer>
      <div className={styles.wrapBanner}>
        <SliderBanner data={DATA_FAKE_LIST_BANNER} />
      </div>
      <div className={styles.wrapHome}>
        <div className={styles.home_productType}>
          <ListProductType data={DATA_FAKE_LIST_PRODUCT_TYPE} />
        </div>
        <div className={styles.home_listProduct}>
          <div className={styles.listProduct_title}>
            <h2>Top Sale</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          <div className={styles.listProduct_topsale}>
            <ListProductItem data={DATA_FAKE_LIST_PRODUCT} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
