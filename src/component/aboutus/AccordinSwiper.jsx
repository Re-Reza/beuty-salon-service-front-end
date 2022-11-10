import React, { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import CustomeSwiperBtns from "../servicesParts/CustomeSwiperBtns";
import styles from "../../../public/styles/aboutUs.module.css";

function AccordinSwiper (){

    const [ state, setState ] = useState([
        "/imgs/gallery-img5.png",
        "/imgs/gallery-img2.png",
        "/imgs/gallery-img3.png",
        "/imgs/gallery-img1.jpg",
        "/imgs/gallery-img4.jpg"
    ]);


    return (
        <div>
            <Swiper
            onSlideChange={()=>setState([...state])}
            >
            {
                state.map( ( item, index) => <SwiperSlide key={index}>
                    <img className={styles["acordion-swiper-img"]} src={item} alt={"accordinImg"+index} />

                </SwiperSlide>)
            }
                <CustomeSwiperBtns allSlideLength={state.length}/>
            </Swiper>
            
        </div>
    );
}

export default AccordinSwiper;
