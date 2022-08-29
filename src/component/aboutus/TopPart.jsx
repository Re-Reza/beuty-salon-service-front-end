import React, { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../../../public/styles/aboutUs.module.css";

export const TopPart = () => {


    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    return (
        <section className="d-flex flex-column">

            <article className="d-flex flex-column">

                <div className="d-flex justify-content-center">
                    <h1 data-aos="fade-up"  className={styles["aboutUs-top-tile"]}>
                        <span>درباره</span> &nbsp;
                        <span data-aos-delay="200" className={styles["aboutUs-top-logo"]}>سالن زیبایی</span>
                    </h1>
                </div>

                <div className={ styles["aboutUs-top-description"]}>
                    <p className='text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می  صورت می توان .</p>
                </div>

            </article>

            <article className={styles["aboutUs-top-content"]}>
                
                <div data-aos="fade-left" className={styles["aboutUs-top-imgContainer"]+ " ms-2"}>
                    <img className={styles["aboutUs-top-img"]} src="/imgs/about-1.png" alt="beauty-pic1" />
                </div>

                <div data-aos="fade-right" className={" text-center"}>
                    <h4 className={styles["aboutUs-top-articleTitle"]}>به سایت سالن زیبایی خوش آمدید</h4>
                    <p className='text-muted'>
                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            
            </article>

            <article className={styles["aboutUs-top-content"]+" "+styles["aboutUs-top-content-2"]}>

                <div data-aos-delay="200" data-aos="fade-left" className={"text-center"}>
                    <h4  className={styles["aboutUs-top-articleTitle"]}>بهترین خدمات زیبایی در سالن زیبایی</h4>
                    <p className='text-muted'>
                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>

                <div data-aos-delay="200" data-aos="fade-right" className={styles["aboutUs-top-imgContainer"]+ " ms-2" +" "+styles["aboutUs-top-img2"] }>
                    <img className={styles["aboutUs-top-img"]}  src="/imgs/about-2.png" alt="beauty-pic2" />
                </div>

            </article>
    
        </section>  
    )
}


