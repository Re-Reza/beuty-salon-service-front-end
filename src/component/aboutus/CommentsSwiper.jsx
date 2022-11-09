import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from "../../../public/styles/aboutUs.module.css";

export function CommentSwiper () {

    const [ state, setState] = useState({
        comments : [
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"},
            {serviceTitle : "بافت", rate : "5", customerName : "زهرا محمدی", commentText : "عالییی  بود موهامو بافت کردم پیش ساریناجون واقعا با حوصله و تمییز برام کار کرد", date : "1401/08/22"}
        ]
    });

    return (
        <div className={styles["aboutUs-commentsContainer"]}>
            
            <Swiper
                slidesPerView={4}
                
                spaceBetween={20}
                pagination={{
                    dynamicBullets: true,
                  }}
                modules={[Pagination]}
            >
            {
                state.comments.map( (item, index) => <SwiperSlide key={index}>
                    <div className={styles["aboutUs-commentItemContainer"]}>

                        <div className={styles["aboutUs-commentIte-top"]}>

                            <div  className={styles["aboutUs-commentIte-top-info"]}>

                                <div className="d-flex mb-1">
                                    <span style={{color:"#000", fontWeight:"600"}}>{item.serviceTitle}</span>
                                    <span className={styles["aboutUs-commentIte-top-info-rateBdg"]}>{item.rate}.0</span>
                                </div>

                                <div style={{color:"var(--grey2)", fontWeight:"550"}}>
                                {
                                    item.customerName
                                }
                                </div>

                            </div>

                            <div>
                                <i role="button" className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </div>

                        </div>

                        <div className={styles["aboutUs-commentIte-bottom"]}>
                            
                            <div className={styles["aboutUs-commentIte-bottom-text"]}>
                            {
                                item.commentText
                            }
                            </div>

                            <div className={styles["aboutUs-commentIte-bottom-options"]}> 
                                <div>{item.date}</div>
                                <div className={styles["aboutUs-commentIte-bottom-options-likeOptions"]}>
                                    <span>آیا این دیدگاه مفید است؟</span>
                                    <div className="d-flex me-1">
                                        <span className="ms-1">12</span>
                                        <span><i role="button"  className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="d-flex me-2">
                                        <span>0</span>
                                        <span className="me-1"><i role="button" className="fa fa-thumbs-o-down" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>)
            }
            </Swiper>

        </div>
    )
}

