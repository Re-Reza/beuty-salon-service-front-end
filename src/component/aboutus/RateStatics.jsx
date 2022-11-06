import React, { useEffect, useState } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

import RateColumn from './RateColumn';
import RateCustomer from "./RateCustomer";

import styles from "../../../public/styles/aboutUs.module.css";

export const RateStatics= () => {


    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    const [state, setState ] = useState({
        rateNumbers : [
            { title : "رضایت مشتری", rate : 3000 },
            { title : "نظرات مثبت", rate :  40000 },
            { title : "رضایت مشتری", rate : 2000 }
        ],
        rateStatics : [
            { month : "فرودین", rate : 50.5 },
            { month : "اردیبهشت", rate : 68.8 },
            { month : "خرداد", rate : 68 },
            { month : "تیر", rate : 50 },
            { month : "مرداد", rate : 70 },
            { month : "شهریور", rate : 50 },
            { month : "مهر", rate : 32},
            { month : "آبان", rate : 100 },
            { month : "آذر", rate : 92 },
            { month : "دی", rate : 25 },
            { month : "بهمن", rate : 50 },
            { month : "اسفند", rate : 80 }
        ]
    });

    return (
        <section className={styles["aboutUs-rateStatics"]}>

            <div className={styles["aboutUs-rateStatics-container"]}>

                <div className={styles["aboutUs-rateStatics-content-container"]}>

                    <div className={styles["aboutUs-rateStatics-content-container-right"]}>
                    {
                        state.rateStatics.map((item, index) => <RateColumn item={item} key={index} />)
                    }
                    </div>

                    <div className={styles["aboutUs-rateStatics-content-container-left"]}>
                    {
                        state.rateNumbers.map((item, index) => <RateCustomer index={index} isLast={index == state.rateNumbers.length-1 ? true : false} item={item} key={index} />)
                    }
                    </div>

                </div>

                <div className={styles["aboutUs-rateStatics-divider"]}></div>


            </div>

        </section>  
    )
}


