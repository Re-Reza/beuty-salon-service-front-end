import React from 'react';

import styles from "../../../public/styles/reservePage.module.css";

function DropDownEmployeeItem(props) {

    const { employeeId, personId, fName, lName, profileImg, phone} = props.item;

    const { chooseEmployee, isLast} = props; 
    
    function selectHandler(){
        props.closeDrop();
        chooseEmployee( employeeId, personId, fName, lName);
    }

    return(
        <div className={isLast ? styles["DropDown-options-options"] : styles["DropDown-options-options"]+" "+styles["option-border"] } 
        onClick={selectHandler} >
            
            <div className={styles["DropDown-options-options-imgContainer"]}>
                <img className={styles["DropDown-options-options-img"]} src={profileImg ? `http://localhost:4000/${profileImg}` : "/imgs/user.png"} alt="option-img" />
            </div>
        
            <div className={styles["DropDown-options-optionInfo"]}>

                <div>{fName} {lName}</div>
                <div>{phone}</div>

            </div>
   
        </div>
    )
}

export default DropDownEmployeeItem;
