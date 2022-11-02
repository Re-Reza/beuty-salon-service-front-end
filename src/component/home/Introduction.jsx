import React, { useEffect, useState } from "react";

// import Link from "next/link";
import { useCountUp } from "react-countup";
import IntroducitonMovie from "./IntroducitonMovie";
import { motion } from "framer-motion";
import styles from "../../../public/styles/home.module.css";

export function Introduction (){

    // const controls = useAnimation();
    // const [ref, inView] = useInView();
  
    // useEffect(() => {
    //   if (inView) {
    //     controls.start("onscreen");
    //   }
    // }, [controls, inView]);

    const varientLogoRigth = {
        onscreen: {
            right : 0,
            transition: {
              type: "spring",
              duration : 1.5, delay: 0.2
            }
        },
        offscreen: {
            right : "-100%",
        },
    };

    const varientLogoLeft = { 
        onscreen : {
            left : 0,
            transition : {
                type: "spring",
                duration : 1.5, delay: 0.2
            }
        },
        offscreen : {
            left : "-200"
        }
    }

    const varientTitle = { 
        onscreen : {
            bottom : "0vh",
            transition : {
                type: "spring",
                duration : .7
            }
        },
        offscreen : {
            bottom: "-30vh"
        }
    }

    const sunVar = {
        onscreen : {
            rotate : 360,
            transition : {
                duration : 2,
                delay : 0,
                repeat : Infinity,
                // repeatType: Infinity,
                repeatDelay: 0,
                ease: "linear",
            }
        },
        offscreen : {
            rotate : 0
        }
    }

    const moonVAr = {
        onscreen : {
            scale : 1.5,
            transition : {
                type: "spring",
                duration : 3,
                delay : 0,
                repeat : Infinity,
                // repeatType: Infinity,
                repeatDelay: 0,
            }
        },
        offscreen : {
            scale : 0
        }
    }

    const imgBoxVar = { 
        onscreen : {
            opacity : 1,
            transition : {
                type: "spring",
                duration : 4,
                delay : .1
            }
        },
        offscreen : {
            opacity : 0,
        }
    }

    const [ state, setState] = useState({
        statics : [
            { title : "تعداد عروس", quantity : 100},
            { title : "ساعات باز بوده", quantity : 200},
            { title : "تعداد مشتری", quantity : 300}
        ]
    });
    const [ item1, item2, item3] = state.statics;

    const {} = useCountUp({
        start:0, 
        duration: 3,
        end:item1.quantity,
        scrollSpyOnce: true,
        enableScrollSpy: true,
        ref: "statics0", 
    });

    const {} = useCountUp({
        start:0, 
        scrollSpyOnce: true,
        duration: 3,
        end:item2.quantity,
        enableScrollSpy: true,
        ref: "statics1", 
    });

    const {} = useCountUp({
        start:0, 
        scrollSpyOnce: true,
        duration: 3,
        end:item3.quantity,
        enableScrollSpy: true,
        ref: "statics2", 
    });


    return (
        <section className={styles["introduction-section"]}>
            
            <div className="d-flex w-100 justify-content-start">

                <h2 className={styles["home-introduction-title"]}>
                    {/* <motion.span variants={varientLogoRigth} whileInView="onscreen" viewport={{ once: true, amount: 1 }} initial="offscreen" style={{position: "relative"}}>
                        <img style={{width:"40px"}} src="/imgs/logo.png" alt="" />
                    </motion.span> */}

                    <motion.span variants={varientTitle}
                     whileInView="onscreen" viewport={{ once: true, amount: 1 }}  initial="offscreen" style={{position: "relative"}} className="ms-3 me-3">به سالن زیبایی ایتوک خوش آمدید</motion.span>

                    <motion.span whileInView="onscreen"
            viewport={{ once: true, amount: 1 }} variants={varientLogoLeft} initial="offscreen" style={{position: "relative"}}>
                        <img style={{width:"50px"}} src="/imgs/logo.png" alt="" />
                    </motion.span>

                </h2>
            </div>

            <div className={styles["introduction-middlePart"]}>
 
                <div className={styles["introduction-middlePart-right"]}>

                    <div style={ {fontWeight:"500", fontSize : "1.3em", marginRight:"1em" }}>

                        <div className="d-flex justify-content-between" style={{width:"220px"}}>
                            <span className="ms-3 mb-2">
                                <motion.img variants={sunVar} initial="offscreen" whileInView="onscreen" className="ms-3" style={{ width: "30px"}} src="/imgs/icons/sunIcon.png" alt="open" />
                                ساعت باز
                            </span>

                            <span>
                                08:00
                            </span>
                        </div>

                        <div className="d-flex justify-content-between"  style={{width:"220px"}}>
                            <span className="ms-3">
                            <motion.img initial="offscreen"  whileInView="onscreen" className="ms-3" style={{ width: "30px"}}  src="/imgs/icons/moonIcon.png" alt="close" />
                                ساعت بسته
                            </span>

                            <span>
                                22:00
                            </span>
                        </div>

                    </div>

                    <ul className="d-flex">
                    {
                        state.statics.map( (item, index ) => <li style={ {borderLeft: index == state.statics.length-1 ? "" : "2.8px solid var(--grey)"} } className="d-flex flex-column text-center ms-4 ps-4" key={index}>
                            <div>
                                <img style={ { width:"30px", marginLeft : ".2em"}} src="/imgs/icons/plusIcon.png" alt="plus" />
                                <span style={{color:"#00312E", fontSize:"1.25em", fontWeight:"750"}} id={"statics"+index}></span>
                            </div>
                            <span style={{color:"var(--pinkT2)", fontWeight:"500"}}>{item.title}</span>
                        </li>)
                    }
                    </ul>

                </div>

                <div className={styles["introduction-middlePart-left"]}>
                    <motion.div initial="offscreen"  whileInView="onscreen" viewport={{ once: true, amount: 1 } } variants={imgBoxVar} className={styles["introduction-img-2"]}></motion.div>
                    
                    <motion.div initial="offscreen"  whileInView="onscreen" variants={imgBoxVar} viewport={{ once: true, amount: 1 }} className={styles["introduction-img-1"]}></motion.div>
                    
                    <motion.div initial="offscreen"  whileInView="onscreen" variants={imgBoxVar} viewport={{ once: true, amount: 1 }} className={ styles["introductionMovieContainer"] }>
                        <IntroducitonMovie/>
                    </motion.div>
                </div>

 
            </div>
            
            <div className="d-flex justify-content-center">
                <motion.div variants={varientTitle} initial="offscreen"  whileInView="onscreen" viewport={{ once: true, amount: 1 }} style={{position : "relative"}} className={styles["introduction-bottomPart"]}>
                    سالن ایتوک دارای تیم مجرب و با بهترین مواد ارایشی ایرانی و خارجی اماده هرگونه خدمت رسانی به شما دوست گرامی است       
                    {/* <img src="/imgs/logo.png" alt="logo" /> */}
                </motion.div>
            </div>
            
        </section>
    )
    
}
