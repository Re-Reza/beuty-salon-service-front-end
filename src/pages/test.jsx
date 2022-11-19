import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
const test = () => {
  return (
    <div>
        <h1>this is test</h1>
        <div style={{position:"relative", display : "flex"}}>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
        </div>
    </div>
  )
}

export default test;
