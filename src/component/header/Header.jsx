import React, { memo } from "react";

//components
import { HeadTop, NavBar } from "../header"
import Slider from "./slider/Slider";
import styles from  "../../../public/styles/header.module.css";
import HeaderLabel from "../elements/HeaderLabel";
import Link from "next/link";

function Header(props){

    const { homePage } = props;

    return (
        <header className={ homePage ? styles["header"] + " "+styles["home-header"] : styles["header"]}>

            <div className={styles['headerContainer']}>

                <div className={styles['home-page-header-imgContainer']}>
                    <img src="/imgs/home-header-img.jpg" className={styles['home-page-header-img']} alt="header-image" />
                </div>
                
                <div className={styles["header-contentContainer"]}>
                    <HeadTop />
                    <NavBar />
                    <div className="d-flex flex-column align-items-end">
                        <HeaderLabel />
                        <HeaderLabel />
                        <HeaderLabel />
                    </div>
                    {
                        homePage ? 
                        <div className={styles["slider-container"]}>
                            <Slider/>
                        </div>
                        :<></>  
                    }
                </div>

            </div>

            <div className="w-100 d-flex justify-content-center">

                <div className={styles["header-bottom-contact"]}>

                    <div>
                        <img src="/imgs/logo.png" styles={{width:"30px"}} alt="logo" />
                        <span style={{fontWeight : "550"}}> با مدیریت مدیری</span>
                    </div>

                    <div>
                        <span className="me-3">
                            <Link href="#">
                                <a>
                                    <img  style={{width:"24px"}} src="/imgs/icons/phoneIcon.png" alt="phone" />
                                </a>
                            </Link>
                        </span>
                        <span  className="me-3">
                            <Link href="#">
                                <a>
                                    <img  style={{width:"25px"}} src="/imgs/icons/insIcon.png/" alt="instragram" />
                                </a>
                            </Link>
                        </span>
                        <span className="me-3">
                            <Link href="#">
                                <a>
                                    <img  style={{width:"25px"}} src="/imgs/icons/whatsAppIcon.png/" alt="whatsapp" />
                                </a>
                            </Link>
                        </span>
                        <span  className="me-3">
                            <Link href="#">
                                <a>
                                    <img style={{width:"29px"}} src="/imgs/icons/telegramIcon.png/" alt="telegram" />
                                </a>
                            </Link>
                        </span>
                    </div>

                </div>

            </div>


        </header>
    )
}

// export async function getServerSideProps(){
   
//     try {
//         const response = await axiosInstance.get("home/provideUserInfo");
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// }

export default memo(Header);