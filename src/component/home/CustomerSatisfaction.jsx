import React, { useEffect, useState } from "react";

import PN from "persian-number";

import {useCountUp} from "react-countup";

import styles from "../../../public/styles/home.module.css";

export function CustomerSatisfaction(){

    const [ rateState, setRateSate ] = useState({
        hair : 70,
        nail : 65,
        skin : 80, 
        makeup : 90
    });
    const { hair, nail, skin, makeup } = rateState;

    const {} = useCountUp({
        start:0, 
        duration: 3,
        end:hair,
        ref: "hair-rate", 
        enableScrollSpy: true,
        formattingFn: (number)=>{
            return PN.convertEnToPe(number)+"%"
        } 
    });

    const {} = useCountUp({
        start:0, 
        duration: 3,
        end:nail,
        enableScrollSpy: true,
        ref: "nail-rate", 
        formattingFn: (number)=>{
            return PN.convertEnToPe(number)+"%"
        } 
    });

    const {} = useCountUp({
        start:0, 
        duration: 3,
        end:skin,
        enableScrollSpy: true,
        ref: "skin-rate", 
        formattingFn: (number)=>{
            return PN.convertEnToPe(number)+"%"
        } 
    });

    const {} = useCountUp({
        start:0, 
        duration: 3,
        end:makeup,
        enableScrollSpy: true,
        ref: "makeup-rate", 
        formattingFn: (number)=>{
            return PN.convertEnToPe(number)+"%"
        } 
    });

    useEffect( ()=> {
        //must send request and get rates for each category and put data into state
    }, []);

    return (

        <section className={styles["customerSatisfaction-section"]}>
            
            <div>
                <h2 className="fs-3 font-weight-bold">رضایت مشتریان</h2>
            </div>

            <div className={styles["customerSatisfaction-rates"]}>
                
                <div className={styles["category-rate"]}>
                    <span>مو</span>
                    <span id="hair-rate" className={styles["rate"] +" mt-2"}></span>
                </div>

                <div className={styles["category-rate"]}>    
                    <span id="nail-rate" className={styles["rate"]+ " mb-2"}></span>
                    <span>ناخن</span>
                </div>

                <div className={styles["category-rate"]}>
                    <span >پوست</span>
                    <span id="skin-rate" className={styles["rate"]+ " mb-2"} ></span>
                </div>
                
                <div className={styles["category-rate"]}>
                    <span id="makeup-rate" className={styles["rate"]+" mb-2"}></span>
                    <span>میکاپ</span>
                </div>

            </div>

        </section>
    )
}