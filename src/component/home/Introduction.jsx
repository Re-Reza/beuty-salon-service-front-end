import React, { useEffect, useState } from "react";

import Link from "next/link";
import Aos from "aos";
import { useCountUp } from "react-countup";
import IntroducitonMovie from "./IntroducitonMovie";
import "aos/dist/aos.css";

import styles from "../../../public/styles/home.module.css";

export function Introduction (){

    useEffect( ()=> {
        Aos.init({
            duration : 1200, //each animation takes two seconds to complete
            once: true,
        });
    }, []);

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
            
            <div className="d-flex w-100 justify-content-center">
                <h2 className={styles["home-introduction-title"]}>
                    <span className="ms-3">به سالن زیبایی ایتوک خوش آمدید</span>
                    <span>
                        <img style={{width:"40px"}} src="/imgs/logo.png" alt="" />
                    </span>
                </h2>
            </div>

            <div className={styles["introduction-middlePart"]}>
 
                <div className={styles["introduction-middlePart-right"]}>

                    <div style={ {fontWeight:"500" }}>

                        <div className="d-flex justify-content-between" style={{width:"170px"}}>
                            <span className="ms-3">
                                <img className="ms-2" style={{ width: "20px"}} src="/imgs/icons/sunIcon.png" alt="open" />
                                ساعت باز
                            </span>

                            <span>
                                08:00
                            </span>
                        </div>

                        <div className="d-flex justify-content-between"  style={{width:"170px"}}>
                            <span className="ms-3">
                            <img className="ms-2" style={{ width: "20px"}}  src="/imgs/icons/moonIcon.png" alt="close" />
                                ساعت بسته
                            </span>

                            <span>
                                22:00
                            </span>
                        </div>

                    </div>

                    <ul className="d-flex">
                    {
                        state.statics.map( (item, index ) => <li style={ {borderLeft: index == state.statics.length-1 ? "" : "2.8px solid var(--purple)"} } className="d-flex flex-column text-center ms-4 ps-4" key={index}>
                            <div>
                                <img style={ { width:"20px", marginLeft : ".2em"}} src="/imgs/icons/plusIcon.png" alt="plus" />
                                <span style={{color:"#000", fontWeight:"700"}} id={"statics"+index}></span>
                            </div>
                            <span style={{color:"var(--grey)"}}>{item.title}</span>
                        </li>)
                    }
                    </ul>

                </div>

                <div className={styles["introduction-middlePart-left"]}>
                    <div className={styles["introduction-img-2"]}></div>
                    <div className={styles["introduction-img-1"]}></div>
                    <div className={ styles["introductionMovieContainer"] }>
                        <IntroducitonMovie/>
                    </div>
                </div>

 
            </div>
            
            <div className="d-flex justify-content-center">
                <div className={styles["introduction-bottomPart"]}>
                    سالن ایتوک دارای تیم مجرب و با بهترین مواد ارایشی ایرانی و خارجی اماده هرگونه خدمت رسانی به شما دوست گرامی است       
                    {/* <img src="/imgs/logo.png" alt="logo" /> */}
                </div>
            </div>
            
        </section>
    )
    
}
