import React from 'react';

import Link from "next/link";

import styles from "../../../public/styles/footer.module.css";


function Footer() {

    return (
        <footer className={styles.footer}>

            <section>
                <div className={styles['footer-title'] }> تماس با ما</div>

                <div className={styles['footer-part'] }>
                    <span className={styles['footer-part-title']}>آدرس</span>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان </p>
                </div>

                <div className={styles['footer-part']}>
                    <span className={styles['footer-part-title']}>شماره تماس</span>
                    <span>0000000</span>
                </div>

                <div className={styles['footer-part']}>
                    <span className={styles['footer-part-title']}>ایمیل</span>
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
                     سالن ایتوک
                </span>

                <ul className={styles["footer-linkList"] +' mt-4'}>
                    <li className={styles['footer-hover']}>
                        <Link  href="/">
                            <a>درباره ما</a>
                        </Link>
                    </li>
                    <li className={styles['footer-hover']}>
                        <Link  href="/">
                            <a>پرسش و پاسخ ها</a>
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

            <section className='d-flex flex-column'>  

                <span className={styles['footer-title']+" mb-3"}>
                    شبکه های اجتماعی
                </span> 

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
                    
                <p className={styles["footer-text"]+" "+"text-center text-muted"}>طراحی شده در شرکت توسعه نرم افزار ایتوک هرگونه کپی برداری از این طرح پیگرد قانونی دارد </p>

            </section>

        </footer>
        
    )
}

export default React.memo(Footer);