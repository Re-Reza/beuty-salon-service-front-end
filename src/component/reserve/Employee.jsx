import React, {useContext} from "react";

import styles from "../../../public/styles/reservePage.module.css";

import reserveContext from "./reserveContext";

function Employee( props ){

    const {firstname, lastname, email, id, time_work} = props.employee;

    const {userChoiceState, dispatch}  = useContext(reserveContext);

    const setEmployee = () => {
        dispatch({
            type : "SET_EMPLOYEE",
            payload : props.employee 
        })
    } 
    //userChoiceState.employee.value.id
    let comStyle = null;
    if(userChoiceState.employee.value != null ) {
        comStyle = userChoiceState.employee.value.id == id ?
        styles["reserve-employee"]+" "+styles["selectedEmployee"] :  styles["reserve-employee"];
    }
    
    return (
        <div onClick={setEmployee} className={ comStyle || styles["reserve-employee"]}>
            <img className={styles["reserve-employee-img"]+"  rounded-circle"} src="/imgs/service-imgs/makeup1.png" alt={firstname+lastname}/>
            <div className={styles["reserve-employee-info"]}>
                <p className="text-break">{firstname} {lastname}</p>
                <p className="text-break">{email}</p>
            </div>
        </div>
    )

}

export default Employee;