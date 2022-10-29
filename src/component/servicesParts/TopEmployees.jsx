import React, { useState } from 'react';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "../../../public/styles/services.module.css"
import 'swiper/css';

export const TopEmployees = ( props ) => {

    const { data } = props;



    return(

        <div>

            <div className={styles["reserve-topEmployees-left"]} >
                
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    
                    {
                        data.map( (item, index) => {
                            const { fName, lName, professions, featurList, biography, rate } = item;
                            return <SwiperSlide key={index}>

                                <div className={styles["topEmployee-item"]}>
                                    <div>
                                        <img src="" alt={fName+lName} />
                                    </div>
                                    
                                    <div>

                                        <div>
                                            <h5>معرفی کارمند</h5>
                                            <div>
                                                <span>{fName+" "+lName}</span>
                                                <span>{}</span>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <ul>
                                            {
                                                featurList.map(feature, inx => <li key={inx}>

                                                </li> )
                                            }
                                            </ul>
                                            <p>{biography}</p>
                                        </div>

                                        <div>
                
                                            <div>
                                                <span>رضایت مشتری</span>
                                                <span>{rate}/10</span>
                                            </div>
                                            
                                            <div>
                                                دکمه های شخصی سازی شده سوایپر
                                            </div>
                
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>
                        })
                    }
                
                </Swiper>

            </div>

            <div className={styles["reserve-topEmployees-right"]}>

                <div>
                    <img style={{width:"80px"}} src="/imgs/logo.png" alt="logo" />
                </div>

                <div>

                    <p>رزرو نوبت با مینا احمدی</p>
                    <Link href="/reserve">
                        <a className={styles[""]}>رزرو نوبت</a>
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default TopEmployees; 