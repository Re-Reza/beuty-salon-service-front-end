import React, {useEffect, useState, useContext} from 'react'

import Employee from './Employee';

import axios from "axios";
// npm i node-fetch@2.6.1
import fetch from 'node-fetch';

import reserveContext from "./reserveContext";
import DropDown from '../elements/dropDown';

import styles from "../../../public/styles/reservePage.module.css";

export function ChooseEmployee ( props ) {

    const [ state, setState ] = useState({
        loading: false,
    });

    console.log(props.employeeList)
    const { userChoiceState, dispatch }  = useContext( reserveContext );
    const { date, employee } = userChoiceState;
    console.log(employee);
    const selectedEmployee = employee.fName ?  employee.fName+" "+employee.lName : null;

    function chooseEmployee( employeeId, personId, fName, lName){
        dispatch({
            type :"SET_EMPLOYEE",
            payload : {
                employeeId,
                personId,
                fName,
                lName
            }
        });
    }

    return (
        <div className={styles['chooseEmployee-section']}>
            {/* DropDown dropTitle={"خدمات"} chooseItem={chooseItem} type="CATEGORY"  selected={category.value} */}
            <DropDown chooseEmployee={ chooseEmployee } type="SET_EMPLOYEE" selectEmployee={true} selected={selectedEmployee} dropTitle={"انتخاب کارمند"} list={props.employeeList}/> 
        </div>
    )
}

// export async function getServerSideProps() {
//     const { userChoiceState, dispatch}  = useContext( reserveContext );
//     const selectedService = userChoiceState.serviceType.value;
//     console.log(selectedService);
//     let data;
//     try {
//         console.log("here")
//         const response = await fetch(`http://localhost:4000/${selectedService}Employees`);
//         data = await response.json();
//         console.log(data)
//     }catch( err ){
//         console.log(err);
//     }

//     return {
//         props : {
//             data: data,
//         }
//     }
// }