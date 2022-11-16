import React, { useState } from 'react'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";

import Link from 'next/link';
import { motion } from "framer-motion";
import SwipeBtn from "./SwipeBtn";
import { useRouter } from "next/router";
import styles from "../../../public/styles/services.module.css";

export function PopularServices(props) {

    const [ state, setState ] = useState({
        next : false,
        prev : false
    });

    function swipeSlide(key){
        setState({
            ...state,
            [key] : true
        });
    }

    function swipeDone(){
        setState({
            prev : false,
            next : false
        })
    }

    const [ routeState, setRouteState ] = useState({
        routes : [ 
            { path : "/hair" , title : "مو" },
            { path : "/nail" , title : "ناخن" },
            { path : "/skin" , title : "پوست" },
            { path : "/makeup" , title : "میکاپ" }
        ]
    });
    


    const router = useRouter();
    const { service } = router.query;
    console.log(router.query.service)

    const varientLogoRigth = {
        onscreen: {
            right : 0,
            transition: {
              type: "spring",
              duration : 1.5, delay: 0.2
            }
        },
        offscreen: {
            right : -500,
        },
    };

    const varientLogoLeft = { 
        onscreen : {
            left : 0,
            transition : {
                type: "spring",
                duration : 1.5, delay: 0.2
            }
        },
        offscreen : {
            left : -500
        }
    }

    const varientTitle = { 
        onscreen : {
            bottom : "0vh",
            transition : {
                type: "spring",
                duration : .7
            }
        },
        offscreen : {
            bottom: "-20vh"
        }
    }

    const linksVarient = {
        onscreen : {
            left : 0,
            transition : {
                type: "",
                duration : .8
            }
        },
        offscreen : {
            left : "100%"
        }
    }

    return(
        <section className={styles["service-popularService"]}>

            <h2 className={styles["service-popularService-title"]}>
                <motion.span variants={varientLogoRigth} whileInView="onscreen" viewport={{ once: true, amount: 1 }} initial="offscreen" style={{position: "relative"}}><img style={{width:"62px"}} className="ms-2" src="/imgs/logoGreen.png" alt="logo" /></motion.span>
                <motion.span variants={varientTitle} whileInView="onscreen" viewport={{ once: true, amount: 1 }} initial="offscreen" style={{position: "relative"}}>محبوب ترین خدمات عنوان</motion.span>
                <motion.span variants={varientLogoLeft} whileInView="onscreen" viewport={{ once: true, amount: 1 }} initial="offscreen" style={{position: "relative" }} ><img style={{width:"62px"}} className="me-2"  src="/imgs/logoGreen.png" alt="logo" /></motion.span>
            </h2>

            <motion.ul variants={linksVarient} whileInView="onscreen" viewport={{ once: true }} initial="offscreen" style={{position: "relative"}} className={styles["service-popularService-servicesLinks"]}>
            {
                routeState.routes.map((item, index) => <li key={index} className={item.path == "/"+service ? styles["service-popularService-servicesLinks-li"]+" "+ styles["active-link"] : styles["service-popularService-servicesLinks-li"]}>
                <Link href={`/service${item.path}`}>
                    <a>{item.title}</a>
                </Link>
            </li>)
            }
            </motion.ul>

            <div className="mt-5 d-flex align-items-center">

                <div  onClick={()=> swipeSlide("next")} className='ms-2' role="button">
                    {/* <i style={{fontSize:"1.5em", color:"var(--purple)"}} className="fa fa-chevron-right ttt" aria-hidden="true"></i> */}
                    <img style={{width:"40px"}} src="/imgs/icons/servie-swiper-aR.png" alt="arrowRigth" />
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={35}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[ Autoplay ]}
                >
                {
                    props.data.map((item, index) => {
                        
                        const {serviceTitle, employee, rate, img} = item;

                        return <SwiperSlide key={index}>
                            
                            <div className={styles["service-popularService-swiperItem"]} style={ { backgroundImage : `url(${img})` } }>

                                <div className={styles["service-popularService-swiperItem-info"]}>
                                    <div style={{color:"#000", fontSize:"1.1em", fontWeight:"700"}}>{serviceTitle}</div>

                                    <div className='d-flex justify-content-around text-grey w-100 mt-2 mb-2' style={{fontSize:".8em", color: "var(--grey2)", fontWeight : "650" }}>
                                        <span>{employee}</span>
                                        <span> رضایت {rate}/10</span>
                                    </div>

                                    <Link href="/reserve">
                                        <a className='green-btn mt-1' style={{fontSize:"1em", padding : " .3em 1.4em", borderRadius:"10px"}}>رزرو نوبت</a>
                                    </Link>

                                </div>

                            </div>
                        
                        </SwiperSlide>
                    })
                }
                
                {
                    state.next || state.prev ? 
                    <SwipeBtn swipeDone={swipeDone} next={state.next}/> : <></>
                }

                </Swiper>

                <div onClick={()=> swipeSlide("prev")} className='me-2' role="button">
                    <img style={{width:"32px"}} src="/imgs/icons/servie-swiper-aL.png" alt="arrowLeft" />
                </div> 
         
            </div>

        </section>
    );
}

export default PopularServices;


{/* <div>
    <SwipeBtn sw={Swiper} next={true} >
        below tag will automatically send as props.childern
        <i className="fa text-danger fa-chevron-right ttt" aria-hidden="true"></i>
    </SwipeBtn>
</div>  */}