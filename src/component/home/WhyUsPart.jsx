import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../../../public/styles/home.module.css";

export function WhyUsPart(){

    useEffect(() => {
        
        Aos.init({
            duration : 700,
            once : true
        });

    }, []);

    return(
        <section className={styles["whyus-section"]}>
            
            <div className={styles["whyus-right"]}>

                <h4 className={styles["whyus-right-title"]} data-aos="fade-up" data-aos-delay="300">چرا ما ؟</h4>

                <p data-aos="fade-left" data-aos-delay="500" className={styles["whyus-des"]}>
ارایشگاه ایتوک با بهرمندی از بهترین و به روز ترین امکاتان ارایشی  و مرغوب ترین مواد ارایشی تایید شده از سازمان غذا و دارو اروپا و امریکا با بهرگیری از فرمولاسیون جدید و ارگانیگ 
به خدمت شما مشتری محترم در اماده است              
                </p>

                <ul className={styles["whyus-list"]}>
                    <li data-aos="fade-up" data-aos-delay="600" className={styles["whyus-list-item"] }>دارای کادر حرفه ای و مجرب </li>
                    <li data-aos="fade-up" data-aos-delay="750" className={styles["whyus-list-item"] }>دارای مواد ارگانیگ و با کیفیت </li>
                    <li data-aos="fade-up" data-aos-delay="900" className={styles["whyus-list-item"] }>دارای هزینه ی معقول و به صرفه </li>
                </ul>
                
                <div>
                    <button className={styles['whyus-btn']}>
                        ادامه مطلب
                    </button>
                </div>

            </div>
            
            <div className={styles["whyus-left-container"]}>
                <div className={styles["whyus-left"]} >
                    <div data-aos="fade-right" data-aos-delay="400" className={styles['gallery-img-1']+" "+styles['gallery-img']}></div>
                    <div data-aos="fade-left" data-aos-delay="500" className={styles['gallery-img-2']+" "+styles['gallery-img']}></div>
                    <div data-aos="fade-right" data-aos-delay="600" className={styles['gallery-img-3']+" "+styles['gallery-img']}></div>
                    <div data-aos="zoom-in-up" data-aos-delay="900" className={styles['gallery-img-4']+" "+styles['gallery-img']}></div>
                    <div  className={styles['gallery-img-5']+" "+styles['gallery-img']}></div>
                    <div className={styles['gallery-img-6']+" "+styles['gallery-img']}></div>
                    <div className={styles['gallery-img-7']+" "+styles['gallery-img']}></div>
                    <div className={styles['gallery-img-8']+" "+styles['gallery-img']}></div>
                    <div className={styles['gallery-img-9']+" "+styles['gallery-img']}></div>
                    <div className={styles['gallery-img-10']+" "+styles['gallery-img']}></div>
                </div>
            </div>
        
        </section>
    )
}