import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import styles from "../../../public/styles/aboutUs.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Aos from "aos";
import "aos/dist/aos.css";

function EmployeeSwiper () {

    useEffect( () => {
                
        Aos.init({
            duration : 1500,
            once : true
        });
        
    }, []);


    return(
        <div className={styles["aboutUs-swiper-container"]}>  

            <h4 data-aos="fade-up" className={styles["aboutUs-top-articleTitle"] } >تیم ما</h4>

            <Swiper data-aos="fade-up" data-aos-delay="300"
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">

                    <SwiperSlide>
                        <img src="/imgs/about employee1.png" />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src="/imgs/about employee2.png" />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src="/imgs/about employee3.png" />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src="/imgs/about employee4.png" />
                    </SwiperSlide>    
            </Swiper>
        </div>
    )
}

export default EmployeeSwiper;