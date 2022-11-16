import React, { useState, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import pd from "persian-date";
import SwipeBtn from "../servicesParts/SwipeBtn";

import reserveContext from "./reserveContext";

import styles from "../../../public/styles/reservePage.module.css";

function DateBoxSwiper(props){

    const { days } = props; 

    // const temp = [...days, ...days, ...days];

    const [ state, setState ] = useState({
        next : false,
        prev : false
    });

    const { dispatch } = useContext(reserveContext);
    
    function selectDateHandler(date){
        const [ year, month, day ] = date.split("/");

        dispatch({
            type : "SET_DATE",
            payload : {
                year,
                month, day
            }
        });
    }

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

    const aa = ['1401/08/05', '1401/08/05', '1401/08/05', '1401/08/05', '1401/08/05']

    return(
        <div className="w-100 d-flex align-items-center ">
            <div  onClick={()=> swipeSlide("next")} className='ms-2' role="button">
                <img style={{width:"25px"}} src="/imgs/icons/servie-swiper-aR.png" alt="arrowRigth" />
            </div>

            <Swiper
            slidesPerView={4}
            // spaceBetween={10}
            initialSlide={0}
            modules={[Navigation]}
            >
            {
                days.map((item, index) => {
                    const [year, month, day] = item.split("/");
                    return <SwiperSlide key={index}>
                    <div onClick={()=> selectDateHandler(item) } className={styles["date-box-item"]}>
                        <div>
                        {
                            new pd([parseInt(year),parseInt(month),parseInt(day)]).toLocale('fa').format('dddd')
                        }
                        </div>
                        <div>
                        {
                            day
                        }
                        </div>
                        <div>
                        {
                            new pd([parseInt(year),parseInt(month),parseInt(day)]).toLocale('fa').format('MMMM')
                        }
                        </div>
                    </div>
                </SwiperSlide>;
                })
            }

            {
                state.next || state.prev ? 
                <SwipeBtn swipeDone={swipeDone} next={state.next}/> : <></>
            }
            </Swiper>

            <div onClick={()=> swipeSlide("prev")} className='me-2' role="button">
                <img style={{width:"20px"}} src="/imgs/icons/servie-swiper-aL.png" alt="arrowLeft" />
            </div> 
        </div>
    )
}

export default DateBoxSwiper;