import React, { useState } from 'react'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";

import Link from 'next/link';

import SwipeBtn from "./SwipeBtn";

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

    return(
        <section className={styles["service-popularService"]}>

            <h2 className={styles["service-popularService-title"]}>
                <span><img styles={{width:"50px"}} className="ms-2" src="/imgs/logo.png" alt="logo" /></span>
                <span>محبوب ترین خدمات عنوان</span>
                <span><img styles={{width:"50px"}}  className="me-2"  src="/imgs/logo.png" alt="logo" /></span>
            </h2>

            <div className="mt-5 d-flex align-items-center">

                <div  onClick={()=> swipeSlide("next")} className='ms-2' role="button">
                    <i style={{fontSize:"1.5em", color:"var(--purple)"}} className="fa fa-chevron-right ttt" aria-hidden="true"></i>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
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
                                    <div style={{color:"var(--purple)", fontSize:"1.1em", fontWeight:"500"}}>{serviceTitle}</div>

                                    <div className='d-flex justify-content-around text-grey w-100 mt-2 mb-2' style={{fontSize:".8em"}}>
                                        <span>{employee}</span>
                                        <span> رضایت {rate}/10</span>
                                    </div>

                                    <Link href="/reserve">
                                        <a className='pink-btn mt-1' style={{color: "var(--grey) !important", fontSize:".9em"}}>رزرو نوبت</a>
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
                    {/* <SwipeBtn next={false}> */}
                    <i style={{fontSize:"1.5em", color:"var(--purple)"}} className="fa fa-chevron-left" aria-hidden="true"></i>   
                    {/* </SwipeBtn> */}
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