import React, { useRef, useState } from "react";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Scrollbar } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import styles from "../../../public/styles/home.module.css";

export function Reservation() {

    const [ state, setState ] = useState({
        content : [
            {
                img : "/hairService.jpeg",
                title : "مو",
                satisfaction : "7"
            },
            {
                img : "/skinService.jpg",
                title : "پوست",
                satisfaction : "4"
            },
            {
                img : "/nailService.jpeg",
                title : "ناخن",
                satisfaction : "8"
            },
            {
                img : "/makeupService.jpg",
                title : "میکاپ",
                satisfaction : "6"
            },
            {
                img : "/hairService.jpeg",
                title : "مو",
                satisfaction : "7"
            },
        ]
    });

    const varientLogoLeft = { 
        onscreen : {
            left : 0,
            transition : {
                type: "spring",
                duration : 1.5, 
                delay: 0.2
            }
        },
        offscreen : {
            left : -500
        }
    }

    return (
        <section className={styles["reserveSection"]}>

            <div className="d-flex justify-content-start align-items-center mb-5">
                <h3 className={styles['reserveSectoinTitle']}>نوبت دهی</h3>
                <motion.img whileInView="onscreen" viewport={{ once: true, amount: .5 }} variants={varientLogoLeft} initial="offscreen" style={{width:"45px", position : "relative"}} src="/imgs/logo.png" />
            </div>

            <div className={styles["swiperContainer"]+" mt-2"}>

                <div style={{padding: "0 1em ", zIndex : "4"}}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        scrollbar={{
                            hide: false,
                            el : ".customScroll",
                            draggable : true,
                        }}
                        modules={[Scrollbar]}
                    >
                    {
                        state.content.map( (item, index) => <SwiperSlide key={index}>
                                <div className={ styles["reserveSwiperItem"] } style={{ background : `url(imgs${item.img})`, backgroundSize:"cover" ,height: "400px", width:"100%" }}>
                                    <div className="w-100 d-flex justify-content-center align-items-end pb-3 h-100">
                                        <div className={ styles["reserveSwiperItem-boxItem"] }>
                                            <h6 className={styles["reserveSwiperItem-boxItem-title"]}>خدمات {item.title}</h6>
                                            <div className="mb-3 mt-2 w-100 d-flex justify-content-between">
                                                <span>رضایت مشتری:</span>
                                                <span>{item.satisfaction}/10</span>
                                            </div>
                                            
                                            <Link  href="/reserve">
                                                <a className={styles["home-reserve-btn"]}>رزرو نوبت</a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }
                    </Swiper>
                </div>

                <div className={styles["reserves-swiperBack"]}>
                    <div style={{height: "9px", width:"100%"}}>
                        <div style={{height :"100%"}} className="customScroll"></div>
                    </div>
                </div>

            </div>

        </section>
    )
}
