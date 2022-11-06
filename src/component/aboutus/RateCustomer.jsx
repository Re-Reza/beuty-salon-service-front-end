import React from 'react';

import { useCountUp } from "react-countup";

import styles from "../../../public/styles/aboutUs.module.css";

function RateCustomer(props) {

    const { title, rate, isLast } = props.item;

    const {} = useCountUp({
        start:0, 
        duration: 4,
        end: rate,
        ref: `rateElement${props.index}`, 
        enableScrollSpy: true,
        formattingFn: (number)=>{
            return(number)
        } 
    });

    ///syncfusion
    return (
        <div style={{borderBottom : props.isLast ? ""  : "3px solid var(--grey)"}} className={styles['rateCustomer-container']}>

            <div className="d-flex flex-column align-items-center mt-2 ms-2">
                <spav style={{color : "#6A6767", fontWeight:"650"}}>{title}</spav>
                <spav id={`rateElement${props.index}`} style={{ fontWeight:"600"}}>{rate.toLocaleString()}</spav>
            </div>

            <div className="">
                <img src="/imgs/customerCharacter.png" alt="customerCharacter" />
            </div>

        </div>
    );
}

export default RateCustomer;