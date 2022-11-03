import React, { useState } from 'react';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from "swiper";

import CustomeSwiperBtns from "./CustomeSwiperBtns";

import styles from "../../../public/styles/services.module.css"
import 'swiper/css';

export const TopEmployees = ( props ) => {

    const { data } = props;

    const [ state, setState ] = useState({
        currentEmployee : data[0].fName+" "+data[0].lName
    });

    function changeCurrentEmployee(index){
        const { fName, lName } = data[index];
        console.log(data[index]);
        setState({
            ...state,
            currentEmployee : fName+" "+lName
        });
    }

    return(

        <div className={"w-100 d-flex "+styles["topEmployeesContainer"]}>

            <div className={styles["reserve-topEmployees-right"]}>

                <div className='mb-5'>
                    <img style={{width:"110px"}} src="/imgs/logoGreen.png" alt="logo" />
                </div>

                <div className='d-flex flex-column align-items-center'> 

                    <p className='mb-4' style={{fontWeight:"650", fontSize:"1.2em", color:"var(--grey)"}}>برای رزرو نوبت با {state.currentEmployee} کلیک کنید</p>
                    <Link href="/reserve">
                        <a className={styles["reserve-topEmployees-reserBtn"]}>رزرو نوبت</a>
                    </Link>

                </div>

            </div>

            <div className={styles["reserve-topEmployees-left"]} >
                
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[ Autoplay ]}
                    onSlideChange={(e) => changeCurrentEmployee(e.activeIndex)}
                    >
                    {
                        data.map( (item, index) => {
                            const { fName, lName, professions, featurList, biography, rate, profileImg } = item;
                            return <SwiperSlide key={index}>

                                <div className={styles["topEmployee-item"]}>

                                    <div className={styles["topEmployee-item-info"]}>

                                        <div className='d-flex flex-column'>
                                            <h5 className={styles["topEmployee-head-title"]}>
                                                <span>معرفی کارمند</span>
                                                <img style={ {width:"53px"} } className="me-2" src="/imgs/logoGreen.png" alt="logo" />
                                            </h5>
                                            <div className={'d-flex justify-content-around '+styles["topEmployee-head-title-info"]} >
                                                <span className='text-grey'>{fName+" "+lName}</span>
                                                <span className='text-grey'>مختصص مو</span>
                                            </div>
                                        </div>
                                        
                                        <div className='d-flex flex-column'>
                                            <ul className={styles["topEmployee-item-feature-list"]}>
                                            {
                                                featurList.map(( feature, inx) => <li className={styles["topEmployee-item-feature-list-item"]} key={inx}>
                                                    {feature}
                                                </li> )
                                            }
                                            </ul>
                                            <p className={styles["topEmployee-item-biography"]}>{biography}</p>
                                        </div>

                                        <div className='d-flex flex-column'>
                
                                            <div className='d-flex justify-content-around mb-3' style={{padding:"0 3.8em", color:"#000", fontSize:"1.1em", fontWeight:"550"}}>
                                                <span>رضایت مشتری</span>
                                                <span>{rate}/10</span>
                                            </div>
                                            
                                            <CustomeSwiperBtns allSlideLength={data.length}/>
                
                                        </div>

                                    </div>
                                    
                                    <div className={styles["topEmployee-item-profile"]}>
                                        <img className={styles["topEmployee-item-profile-img"]} src={profileImg} alt={fName+lName} />
                                    </div>

                                </div>

                            </SwiperSlide>
                        })
                    }
                
                </Swiper>

            </div>

        </div>
    );
}

export default TopEmployees; 