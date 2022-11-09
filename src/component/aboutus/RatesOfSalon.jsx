import React, { useState } from 'react';

import RateColumn from '../elements/RateColumn';

import styles from "../../../public/styles/aboutUs.module.css";

export const RatesOfSalon = () => {

    const [ state, setState ] = useState({
        rates :[
            { title : "7", rate :  "70"},
            { title : "5", rate :  "50"},
            { title : "4", rate :  "40"},
            { title : "3", rate :  "30"},
            { title : "2", rate :  "20"}
        ],
        checkedStars : [true, true, true, true, false]
    });


    return (
        <div className={styles["aboutUs-rateSalonContainer"]}>
            <div className={styles["aboutUs-rateSalon-contentContainer"]}>

                <div className={styles["aboutUs-rateSalon-rateColumns"]}>
                {
                    state.rates.map((item, index) => <RateColumn rateOfSalon={true} horizontal={true} item={item} key={index}/>)
                }
                </div>

                <div className={styles["aboutUs-rateSalon-middlePart"]}>

                    <div>میانگین امتیازات</div>
                    <div className={styles["aboutUs-rateSalon-starsContainer"]}>
                    {
                        state.checkedStars.map((item, index)=> <i className={item ? "fa fa-star "+styles["checkedStar"] : "fa fa-star "+styles["starColor"]} key={index} aria-hidden="true"></i>)
                    }
                    </div>

                </div>

                <div className={styles["aboutUs-rateSalon-leftPart"]}>
                    <div style={ {borderRight: "2.8px solid var(--grey)", height : "100%", paddingRight:"1em"} } className="d-flex flex-column justify-content-center text-center ms-2 ps-2">
                        <span style={{color:"#000", fontSize:".9em" ,fontWeight:"500", marginBottom:".7em"}}>تعداد نظرات</span>
                        <div>
                            <img style={ { width:"35px", marginLeft : ".1em"}} src="/imgs/icons/plusIcon.png" alt="plus" />
                            <span style={{color:"var(--grey2)", fontSize:"1.2em", fontWeight:"650"}}>500</span>
                        </div>
                    </div>
                </div>

                </div>
        </div>
    )
}

