import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from "../ProductCard";
import Container from '../../layout/Container';
import classes from "./DiscountsCarousel.module.scss";

import 'swiper/css';
import 'swiper/css/navigation';

import "./DiscountsCarousel.styles.scss"
import {Navigation} from "swiper/modules"
import { useSelector } from 'react-redux';

const DiscountsCarousel = () => {
  const [data, setData] = React.useState(null);
  const {like, cart:cartItems} = useSelector((state) => state)

  useEffect(() => {
    const fetchaData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/floristman_discounts`);
      const discounts = await res.json();
      setData(discounts);
    }

    fetchaData()
  }, [])


  return (
    <Container className={classes['discounts']}>
      <h2 className={classes["discounts__title"]}>Special Discount</h2>
      {data && (
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >

          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard data={item} liked={item.id in like} selected={item.id in cartItems}/>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  )
}

export default DiscountsCarousel