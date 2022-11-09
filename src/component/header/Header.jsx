import React, { memo } from "react";

//components
import { HeadTop, NavBar, HeaderContact } from "../header"
import Slider from "./slider/Slider";
import styles from  "../../../public/styles/header.module.css";
import HeaderLabel from "../elements/HeaderLabel";

import { motion } from "framer-motion";

// import Link from "next/link";

function Header(props){

    const { homePage, aboutUs } = props;
    
    const aboutImgRVar = {
        onscreen : {    
            top : 0,
            transition : {
                type: "spring",
                duration : 1,
            }
        },
        offscreen : {
            top : 500
        }
    };

    const aboutImgLVar = {
        onscreen : {    
            bottom : 0,
            transition : {
                type: "spring",
                duration : 1,
            }
        },
        offscreen : {
            bottom : 500
        }
    };

    return (
        <header className={ homePage ? styles["header"] + " "+styles["home-header"] : styles["header"]}>

            <div className={styles['headerContainer']}>

                {
                    homePage == true ?                              //ease
                    <motion.div animate={{ rotate : 9, top : "-88px" }} initial={{rotate : 180, top : "-80%"}} transition={ {duration :.8} }
                    className={styles['home-page-header-imgContainer']}>
                        <img src="/imgs/home-header-img.jpg" className={styles['home-page-header-img']} alt="header-image" />
                    </motion.div>
                    :
                    <></>
                }
                
                <div className={homePage == true ? styles["header-contentContainer"] : styles["header-contentContainer"]+ " w-100"}>
                    <HeadTop homePage={homePage}/>
                    <div className={homePage == true ? "" : styles["service-header-headBottom"]}>
                        {
                        homePage == true || aboutUs == true ? <></> : 
                        <motion.div style={{position:"relative"}} animate={{  left:"0" }} initial={{left:"50%"}} transition={ {duration : 1.5, type: "spring",} } className={styles["service-header-imgContainer"]}>
                            <img className={styles["service-header-img"]} src="/imgs/service-header.png" alt="header-img" />
                        </motion.div>
                        }
                        {
                            aboutUs == true ? 
                            <div className={styles["header-aboutUs-right-imgContainer"] } >
                                
                                <motion.div style={{position:"relative"}} initial={{top : "100%"}} animate={{ top:"0", transition : {duration : 1.5, type: "spring",  delay : .2 } }} className={styles["header-aboutUs-imgContainer"]}>
                                    <img className={styles["header-aboutUs-img"]} src="/imgs/about-usHeader.png" alt="headerimg1" />
                                </motion.div>

                                <motion.div style={{position:"relative"}} initial={{top : "-100%"}} animate={{  top :"0", transition : {duration : 1.5, type: "spring", delay : .2 }  }} className={styles["header-aboutUs-imgContainer"]}>
                                    <img style={{ margin: " 6em 1.3em 0 0"}} className={styles["header-aboutUs-img"]} src="/imgs/gallery-img3.png" alt="headerimg2" />
                                </motion.div>
                            
                            </div>
                            :<></>
                        }
                        <div className={homePage == true ? "" : styles["service-header-contentContainer"]}>
                            <NavBar homePage={homePage}/>
                            
                            {
                                homePage ? <></> : 
                                <div className="d-flex flex-column align-items-end mt-3" style={{overflowX:"hidden"}}>
                                
                                <motion.div style={{position: "relative"}} initial={{left:"-50%"}} animate={ { left:"0" } } transition={ {duration : .3, delay: .4} }>
                                    <HeaderLabel/>
                                </motion.div>

                                <motion.div style={{position: "relative"}} initial={{left:"-50%"}} animate={ { left:"-3%" } } transition={ {duration : .3, delay: .6} }>
                                    <HeaderLabel/>
                                </motion.div>

                                <motion.div style={{position: "relative"}} initial={{left:"-50%"}} animate={ { left:"-6%" } } transition={ {duration : .3, delay: .8} }>
                                    <HeaderLabel/>
                                </motion.div>

                            </div>

                            }
                            {
                                aboutUs != true ? 
                                <div className={homePage ==true ? styles["slider-container"] : styles["slider-container"]+ " mt-4"}>
                                    <Slider homePage = {homePage} />
                                </div> 
                                : 
                                <div className={styles["header-aboutUs-intro"]}>
                                    <h2 className={styles["header-aboutUs-intro-h2"]}>زیبایی خود را به ما بسپارید </h2>
                                    <p className={styles["header-aboutUs-intro-p"]}>ارایشگاه ایتوک با بهرمندی از بهترین و به روز ترین امکاتان ارایشی  و مرغوب ترین مواد ارایشی تایید شده از سازمان غذا و دارو اروپا و امریکا با بهرگیری از فرمولاسیون جدید و ارگانیگ 
از جمله مواد تتو کراتین رنگ مو و کراتین و..... به خدمت شما مشتری محترم در اماده است     </p>
                                </div>
                            }
                        </div>
                    </div>


                </div>

            </div>

            {
                homePage == true ? 
                <HeaderContact />
                :<></>
            }

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