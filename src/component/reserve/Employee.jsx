import React, {useContext} from "react";

import styles from "../../../public/styles/reservePage.module.css";

import reserveContext from "./reserveContext";

function Employee( props ){

    const {fName, lName, phone, profileImg, employeeId, personId, roleId} = props.employeeData;

    const {userChoiceState, dispatch}  = useContext(reserveContext);

    const setEmployee = () => {
        dispatch({
            type : "SET_EMPLOYEE",
            payload : {
                fName,
                lName,
                employeeId,
                personId
            } 
        })
    } 
    
    let comStyle = null;
    if(userChoiceState.employee.fName != null ) {
        comStyle = userChoiceState.employee.fName == fName ?
        styles["reserve-employee"]+" "+styles["selectedEmployee"] :  styles["reserve-employee"];
    }
    
    return (
        <div onClick={setEmployee} className={ comStyle || styles["reserve-employee"]}>
            <img className={styles["reserve-employee-img"]+"  rounded-circle"} src={profileImg? "http://localhost:4000/"+profileImg: "/imgs/service-imgs/makeup1.png" }alt={fName+lName}/>
            <div className={styles["reserve-employee-info"]}>
                <p style={{marginBottom:"0"}} className="text-break">{fName} {lName}</p>
                <p style={{marginBottom:"0"}} className="text-break">شماره موبایل : {phone}</p>
            </div>
        </div>
    )

}

export default Employee;