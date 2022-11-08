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
        ]
    })

    return (
        <div>

            <div>
            {
                state.rates.map((item, index) => <RateColumn horizontal={true} item={item} key={index}/>)
            }
            </div>

            <div>

                <div>میانگین امتیازات</div>
                <div></div>

            </div>
            
            <div>
                <div style={ {borderLeft: "2.8px solid var(--grey)"} } className="d-flex flex-column text-center ms-2 ps-2">
                    <span style={{color:"#000", fontSize:".9em" ,fontWeight:"500"}}>تعداد نظرات</span>
                    <div>
                        <img style={ { width:"20px", marginLeft : ".2em"}} src="/imgs/icons/plusIcon.png" alt="plus" />
                        <span style={{color:"var(--grey2)", fontSize:".85em", fontWeight:"650"}}>500</span>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

