import React, { useRef } from "react";

import styles from "../../../public/styles/reservePage.module.css";


function DropDownItem(props){

    const { item, type, selectOption, index, isLast } = props;

    const itemRef = useRef(null);
 
    function selectHandler(){
        const value = itemRef.current.innerHTML;
        selectOption(value, item.id);
    }

    return(
        <div className={isLast ? styles["DropDown-options-options"] : styles["DropDown-options-options"]+" "+styles["option-border"] } 
            onClick={selectHandler} >
            
            <div className={styles["DropDown-options-options-imgContainer"]}>
                <img className={styles["DropDown-options-options-img"]} src="/imgs/about-3.png" alt="option-img" />
            </div>
           
            <div className={styles["DropDown-options-optionInfo"]}>
                <div ref={itemRef} style={{color: "var(--grey)", fontWeight: "800", marginBottom: ".5em"}}>{type == "CATEGORY" ? item.categoryTitle : item.serviceTitle}</div>
                <div className='d-flex' style={{color : "var(--grey2)", fontWeight:"500", fontSize:".9em"}}>
                    <span style={{marginLeft : "2.5em"}}>
                        رضایت مشتری
                    </span>

                    <span>9.8/10</span>
                </div>
            </div>
       
        </div>
    )
} 

export default DropDownItem;