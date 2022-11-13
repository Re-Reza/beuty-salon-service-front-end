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

    const { userChoiceState, dispatch }  = useContext( reserveContext );
    const { date } = userChoiceState;
    
    console.log(props)
    return (
        <div className={styles['chooseEmployee-section']}>
            {/* {
                props.isDate ? 
                <label className={'mb-3 '+styles['result-label']}>آرایشگران قابل انتخاب در تاریخ : {`${PN.convertEnToPe(date.year)}/${PN.convertEnToPe(date.month)}/${PN.convertEnToPe(date.day)} `}</label>
                :
                <label className={'mb-3 '+styles['result-label']}>انتخاب آرایشگر :</label>
            }
            <div className={styles['chooseEmployee-container']}>
            {
                // state.loading ? <div>
                //     loding...
                // </div>
                // :
                props.employeeList.map((employee, index) => <Employee employeeData={employee} key={index}/> )
            }
            </div> */}
{/* DropDown dropTitle={"خدمات"} chooseItem={chooseItem} type="CATEGORY"  selected={category.value} */}
            <DropDown dropTitle={"انتخاب کارمند"} list={props.list}/> 
            
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