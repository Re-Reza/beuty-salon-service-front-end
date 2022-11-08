import React, { useState } from "react";

import RateColumn from "./RateColumn";

import styles from "../../../public/styles/aboutUs.module.css";

function Accordion(props) {

    const { fName, lName, phone, email, servicesSaticsfaction, workInfo  } = props.item;

    const [ state, setState ] = useState({
        show  : false
    });

    function toggleAcordion(){
        setState ({
            ...state,
            show : !state.show
        });
    }

    return(
        <il className={styles["acordion-item"]}>
            
            <div onClick={toggleAcordion} className={styles["acordion-item-button"]} style={{borderBottom:props.isLast ? "" : "1.5px solid #000"}}>
                <div className={styles["acordion-item-button-icon"]}>
                {
                    state.show ? 
                    <img src="/imgs/icons/accordionBottomIdcon.png" alt="bottomIcon" />
                    :
                    <img src="/imgs/icons/accordionRightIdcon.png" alt="rightIcon" />
                }
                </div>

                <div className={styles["acordion-item-button-middle"]}>

                    <div>
                         <span>{fName} {lName}</span> <span>نام</span>
                    </div>
                    
                    <div>
                         <span>{email}</span> <span>ایمیل</span>
                    </div>

                    <div>
                        <span>{phone}</span> <span>شماره</span> 
                    </div>

                </div>
                
                <div className={styles["acordion-item-imgProfileContainer"]}>
                    <img  className={styles["acordion-item-imgProfile"]} src="/imgs/gallery-img2.png" alt="profile" />
                </div>
            
            </div>

            <div className={state.show ? styles["acordion-item-content"]+" "+styles["show-acordion"] : styles["acordion-item-content"]}>

                <div>
                    gdfdddd
                </div>

                <div>
                {
                    // workInfo
                }
                </div>

                <div>
                {
                    servicesSaticsfaction.map( (item, index) => <RateColumn item={item} key={index}/>)
                }
                </div>
            </div>  

        </il>
    )

}

export default Accordion;
