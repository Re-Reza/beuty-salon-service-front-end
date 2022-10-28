import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../../../public/styles/home.module.css";

export function WhyUsPart(){

    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    return(
        <section className={styles["whyus-section"]}>
            
            <div className={styles["whyus-right"]}>

                <h4 className="text-purple">چرا ما ؟</h4>

                <p className={styles["whyus-des"]}>
ارایشگاه ایتوک با بهرمندی از بهترین و به روز ترین امکاتان ارایشی  و مرغوب ترین مواد ارایشی تایید شده از سازمان غذا و دارو اروپا و امریکا با بهرگیری از فرمولاسیون جدید و ارگانیگ 
به خدمت شما مشتری محترم در اماده است              
                </p>

                <ul className={styles["whyus-list"]}>
                    <li className={styles["whyus-list-item"] }>دارای کادر حرفه ای و مجرب </li>
                    <li className={styles["whyus-list-item"] }>دارای مواد ارگانیگ و با کیفیت </li>
                    <li className={styles["whyus-list-item"] }>دارای هزینه ی معقول و به صرفه </li>
                </ul>
                
                <div>
                    <button className={"pink-btn "+styles['whyus-btn']}>
                        ادامه مطلب
                    </button>
                </div>

            </div>
            
            <div className={styles["whyus-left"]} >
                <div className={styles['gallery-img-1']+" "+styles['gallery-img']}></div>
                <div className={styles['gallery-img-2']+" "+styles['gallery-img']}></div>
                <div className={styles['gallery-img-3']+" "+styles['gallery-img']}></div>
                <div className={styles['gallery-img-4']+" "+styles['gallery-img']}></div>
                <div className={styles['gallery-img-5']+" "+styles['gallery-img']}></div>
            </div>
        
        </section>
    )
}