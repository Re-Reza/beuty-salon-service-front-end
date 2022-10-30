import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import Link from 'next/link';

export function PopularServices(props) {

    return(
        <section>
            <h2>محبوب ترین خدمات عنوان</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
            >
            {
                props.data.map((item, index) => {
                    
                    const {serviceTitle, employee, rate, img} = item;

                    return <SwiperSlide key={index}>
                        
                        <div style={ { background : `url(${img})`} }>

                            <div>
                                <div>{serviceTitle}</div>

                                <div>
                                    <span>{employee}</span>
                                    <span>میزان رضایت {rate}/10</span>
                                </div>

                                <Link href="/reserve">
                                    <a className='pink-btn'>رزرو نوبت</a>
                                </Link>

                            </div>

                        </div>
                    
                    </SwiperSlide>
                })
            }
            </Swiper>
        </section>
    )
}

export default PopularServices;
