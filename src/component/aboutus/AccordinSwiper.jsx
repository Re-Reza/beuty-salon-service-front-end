import React, { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "../../../public/styles/aboutUs.module.css";

function AccordinSwiper (){

    const [ state ] = useState([
        "/imgs/gallery-img1.jpg",
        "/imgs/gallery-img2.png",
        "/imgs/gallery-img3.png",
        "/imgs/gallery-img4.jpg",
        "/imgs/gallery-img5.jpg"
    ]);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div>
            <Swiper
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
            
                modules={[Pagination, Navigation]}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                  }}
            >
            {
                state.map( ( item, index) => <SwiperSlide key={index}>
                    <img className={styles["acordion-swiper-img"]} src={item} alt={"accordinImg"+index} />
                    <div className='nextTT' ref={navigationNextRef}>next</div>
                </SwiperSlide>)
            }
            </Swiper>
            


        </div>
    );
}

export default AccordinSwiper;
