import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperInsta.scss";
import 'swiper/swiper-bundle.css';

import Posts from "../Instagram/component/Posts";

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

export const SwiperInsta = ({data}) => {
  return (
    <>
    <Swiper
      navigation={true}
      slidesPerView={3}
      spaceBetween={30}
    >
      {
        data.map(item => (
          <SwiperSlide>
            <Posts
              img={item.img}
              text={item.text}
              tags={item.tags}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
};
