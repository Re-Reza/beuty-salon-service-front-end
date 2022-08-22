import React, { useEffect } from "react";

import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../../../public/styles/home.module.css";

export function Services (){

    useEffect( ()=> {
        Aos.init({
            duration : 1200, //each animation takes two seconds to complete
            once: true,
        });

    }, []);

    return (
        <section className={styles["services-section"]}>
            <div className={styles["services-section-top"]}>
                <h1>به <span className={styles["main-title"]}>سالن زیبایی</span> خوش آمدید</h1>

                <p className="text-muted mt-4">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا</p>
            </div>
            
            <div className="mt-5">
                <h3 className="mb-5">خدمات سالن زیبایی</h3>
                
                <div className={styles["services-section-imgContainer"]}>

                    <Link href="/">   
                        <a data-aos="fade-up" className={styles["service-item"]}>
                            <div className={styles["service-item-imgContainer"]}>
                                <img src="http://buddhathemes.com/html/trendsalon/images/service-img2.jpg" alt="hair" />
                            </div>
                            <h5 className={styles["service-title"]}>رنگ و کوتاه کردن مو</h5>
                        </a>
                    </Link>

                    <Link href="/">
                        <a data-aos="fade-up" data-aos-delay="200" className={styles["service-item"]}>
                            <div  className={styles["service-item-imgContainer"]}>
                                <img src="https://demo.w3layouts.com/demos_new/template_demo/26-02-2021/beauty-salon-demo_Free/1671668668/web/images/5.jpg" alt="nail" />
                            </div>
                            <h5 className={styles["service-title"]}>خدمات ناخن</h5>
                        </a>
                    </Link>

                    <Link href="/">
                        <a data-aos="fade-up" data-aos-delay="400" className={styles["service-item"]}>
                            <div  className={styles["service-item-imgContainer"]}>
                                <img src="https://demo.w3layouts.com/demos_new/template_demo/26-02-2021/beauty-salon-demo_Free/1671668668/web/images/1.jpg" alt="skin" />
                            </div>
                            <h5 className={styles["service-title"]}>پوست</h5>
                        </a>
                    </Link>

                    <Link href="/">
                        <a data-aos="fade-up" data-aos-delay="600" className={styles["service-item"]}>
                            <div  className={styles["service-item-imgContainer"]}> 
                                <img src="https://demo.w3layouts.com/demos_new/template_demo/26-02-2021/beauty-salon-demo_Free/1671668668/web/images/4.jpg" alt="makeup" />
                            </div>
                            <h5 className={styles["service-title"]}>میکاپ</h5>
                        </a>
                    </Link>

                </div>

            </div>

        </section>
    )
    
}
