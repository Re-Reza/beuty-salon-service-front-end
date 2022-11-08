import React, { useState, useRef } from "react";

import RateColumn from "../elements/RateColumn";
import AccordinSwiper from "./AccordinSwiper";

import styles from "../../../public/styles/aboutUs.module.css";

function Accordion(props) {

    const { fName, lName, phone, email, servicesSaticsfaction, workInfo  } = props.item;

    const [ state, setState ] = useState({
        show  : false
    });

    const contentRef = useRef(null);

    function toggleAcordion(){
        setState ({
            ...state,
            show : !state.show
        });
    }

    return(
        <il className={styles["acordion-item"]}>
            
            <div onClick={toggleAcordion} className={styles["acordion-item-button"]} style={{borderBottom:props.isLast || state.show ? "" : "1.5px solid #000"}}>
                <div className={styles["acordion-item-button-icon"]}>
                {
                    state.show ? 
                    <img style={{width:"35px"}} src="/imgs/icons/accordionBottomIdcon.png" alt="bottomIcon" />
                    :
                    <img style={{width:"35px"}} src="/imgs/icons/accordionRightIdcon.png" alt="rightIcon" />
                }
                </div>

                <div className={styles["acordion-item-button-middle"]}>

                    <div className={styles["acordion-item-button-middle-infoContainer"]}>

                        <div className="d-flex flex-column">
                            <span style={{fontWeight : "800", marginBottom:".45em"}}>{fName} {lName}</span>
                            <span className={styles["acordion-item-button-middle-info-title"]}>{email}</span>
                            <span className={styles["acordion-item-button-middle-info-title"]}>{phone}</span>
                        </div>

                        <div className="d-flex flex-column" style={{alignItems : "baseline"}}>
                            <span className={styles["acordion-item-button-middle-info-title"]}>نام</span>
                            <span className={styles["acordion-item-button-middle-info-title"]}>ایمیل</span>
                            <span className={styles["acordion-item-button-middle-info-title"]}>شماره</span>
                        </div>

                    </div>

                </div>
                
                <div className={styles["acordion-item-imgProfileContainer"]+" d-flex justify-content-end"}>
                    <img  className={styles["acordion-item-imgProfile"]} src="/imgs/gallery-img2.png" alt="profile" />
                </div>
            
            </div>

            <div ref={contentRef} style={{maxHeight : state.show ? contentRef.current.scrollHeight+"px" : "0px"}} className={state.show ? styles["acordion-item-content"]+" "+styles["show-acordion"] : styles["acordion-item-content"]}>

                <div className={styles["accordinSwiper-container"]}>
                    <AccordinSwiper/>
                </div>

                <div className="d-flex  align-items-center">
                {
                    workInfo.map( (item, index ) => <div style={ {borderLeft: index == workInfo.length-1 ? "" : "2.8px solid var(--grey)"} } className="d-flex flex-column text-center ms-2 ps-2" key={index}>
                        <span style={{color:"#000", fontSize:".9em" ,fontWeight:"500"}}>{item.title}</span>
                        <div>
                            <img style={ { width:"20px", marginLeft : ".2em"}} src="/imgs/icons/plusIcon.png" alt="plus" />
                            <span style={{color:"var(--grey2)", fontSize:".85em", fontWeight:"650"}}>{item.quan}</span>
                        </div>
                    </div>)
                    }
                </div>

                <div className={styles["acordion-item-content-ratecolumnsContainer"]}>
                {
                    servicesSaticsfaction.map( (item, index) => <RateColumn horizontal={true} item={item} key={index}/>)
                }
                </div>
            </div>  

        </il>
    )

}

export default Accordion;
