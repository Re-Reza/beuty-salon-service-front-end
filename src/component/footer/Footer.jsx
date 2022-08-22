import React from 'react';

import Link from "next/link";

import styles from "../../../public/styles/footer.module.css";


function Footer() {

    return (
        <footer className={styles.footer}>

            <section>

                <div className={styles['footer-part'] }>
                    <span className={styles['footer-title']}>آدرس</span>
                    <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان </span>
                </div>

                <div className={styles['footer-part']}>
                    <span className={styles['footer-title']}>شماره تماس</span>
                    <span>0000000</span>
                </div>

                <div className={styles['footer-part']}>
                    <span className={styles['footer-title']}>ایمیل</span>
                    <Link  href="#" onClick={(e)=> {
                        window.location.href = "mailto:aaa@gmail.com" ;
                        e.preventDefault();
                    }}>
                        <a className={styles['footer-hover']}>
                            aaa@gmail.com
                        </a>
                    </Link>
                </div>

            </section>

            <section>

                <span className={styles['footer-title']}>
                     سالن زیبایی
                </span>

                <ul className={styles["footer-linkList"] +' mt-4'}>
                    <li className={styles['footer-hover']}>
                        <Link  href="/">
                            <a>درباره ما</a>
                        </Link>
                    </li>
                    <li className={styles['footer-hover']}>
                        <Link  href="/">
                            <a>خدمات</a>
                        </Link>
                    </li>
                    <li className={styles['footer-hover']}>
                        <Link  href="/">
                            <a>شرایط و قواعد</a>
                        </Link>
                    </li>
                    <li className={styles['footer-hover']}>
                        <Link  href="/">
                            <a>همکاری با ما</a>
                        </Link>
                    </li>
                </ul>

            </section>

            <section>   
                <div className={styles["footer-bottom-iconContainer"]}>
                    <span className={styles["footer-social-container"]+" "+styles["facebook"]}>
                            <Link href="#">
                                <a className={styles["footer-icon"]}><i className={styles["footer-social-icon"]+" fa fa-facebook"} aria-hidden="true"></i></a>
                            </Link>
                    </span>
                    
                    <span className={styles["footer-social-container"]+" " +styles["instagram"]}>
                            <Link  href="#">
                                <a className={styles["footer-icon"]}><i className={styles["footer-social-icon"]+" fa fa-instagram"} aria-hidden="true"></i></a>
                            </Link>
                    </span>
                    
                    <span className={styles["footer-social-container"]+" "+styles["twitter"]} >
                            <Link  href="#">
                                <a className={styles["footer-icon"]}><i className={styles["footer-social-icon"]+" fa fa-twitter"} aria-hidden="true"></i></a>
                            </Link>
                    </span>
                    
                    <span className={styles["footer-social-container"]+" "+styles["youtube"]}>
                            <Link  href="#">
                                <a className={styles["footer-icon"]}><i className={styles["footer-social-icon"]+" fa fa-youtube"} aria-hidden="true"></i></a>
                            </Link>
                    </span>

                </div>
                    
                <p className='text-center text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام </p>

            </section>

        </footer>
        
    )
}

export default React.memo(Footer);