import { Button } from "antd";
import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

interface IProps {
  data: any;
}

const SliderBanner = ({ data }: IProps) => {
  console.log({ data });

  return (
    <>
      <Swiper
        navigation={false}
        modules={[Pagination, Navigation]}
      >
        {data?.map(({ url, id }: { url: string; id: number }) => (
          <SwiperSlide key={id}>
            <div className={styles.slide_item}>
              <div className={styles.item__left}>
                <h1>Facial Cream</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis.
                </p>
                <Button htmlType="button">BUY NOW</Button>
              </div>
              <div className={styles.item__right}>
                <img src={url} alt={url} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default React.memo(SliderBanner);
