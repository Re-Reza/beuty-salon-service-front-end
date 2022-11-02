import React, { memo } from "react";

//components
import { HeadTop, NavBar, HeaderContact } from "../header"
import Slider from "./slider/Slider";
import styles from  "../../../public/styles/header.module.css";
import HeaderLabel from "../elements/HeaderLabel";

import { motion } from "framer-motion";

// import Link from "next/link";

function Header(props){

    const { homePage } = props;

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
                        homePage == true ? <></> :
                        <motion.div style={{position:"relative"}} animate={{  left:"0" }} initial={{left:"50%"}} transition={ {duration : 1.5, type: "spring",} } className={styles["service-header-imgContainer"]}>
                            <img className={styles["service-header-img"]} src="/imgs/service-header.png" alt="header-img" />
                        </motion.div>
                        }
                        <div className={homePage == true ? "" : styles["service-header-contentContainer"]}>
                            <NavBar/>
                            
                            {/* <div className="d-flex flex-column align-items-end" style={{overflowX:"hidden"}}>
                                
                                <motion.div style={{position: "relative"}} initial={{left:"-50%"}} animate={ { left:"0" } } transition={ {duration : .3, delay: .4} }>
                                    <HeaderLabel/>
                                </motion.div>

                                <motion.div style={{position: "relative"}} initial={{left:"-50%"}} animate={ { left:"-3%" } } transition={ {duration : .3, delay: .6} }>
                                    <HeaderLabel/>
                                </motion.div>

                                <motion.div style={{position: "relative"}} initial={{left:"-50%"}} animate={ { left:"-6%" } } transition={ {duration : .3, delay: .8} }>
                                    <HeaderLabel/>
                                </motion.div>

                            </div> */}

                            <div className={homePage ==true ? styles["slider-container"] : styles["slider-container"]+ " d-fle"}>
                                <Slider homePage = {homePage} />
                            </div>
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