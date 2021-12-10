import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import "./Swiper.scss";
// import 'swiper/swiper-bundle.css';

import {Comment} from '../Testimonials/component/Comment';

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

export const Swip = ({data}) => {
  return (
    <>
    <Swiper
    //   navigation={true}
    //   slidesPerView={2}
    //   spaceBetween={30}
    >
      {
        data.map(item => (
          <SwiperSlide>
            <Comment
              comment={item.comment}
              photo={item.photo}
              name={item.name}
              email={item.email}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
};
