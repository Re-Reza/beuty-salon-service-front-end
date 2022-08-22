import React, {useEffect, useState, useContext} from 'react'

import Employee from './Employee';

import axios from "axios";
// npm i node-fetch@2.6.1
import fetch from 'node-fetch';
import PN from "persian-number";


import reserveContext from "./reserveContext";

import styles from "../../../public/styles/reservePage.module.css";

export function ChooseEmployee ( props) {


    const [ state, setState ] = useState({
        loading: false,
        employees:[]
    });

    const { userChoiceState, dispatch}  = useContext( reserveContext );

    const selectedService = userChoiceState.serviceType.enValue;
    const { year, month, day } = userChoiceState.date;
    console.log(PN.convertEnToPe(year)+2 / PN.convertEnToPe(month) / PN.convertEnToPe(day));
    useEffect( ()=>{
        if(selectedService != null)
        {
            setState({
                ...state,
                loading: true
            });
            console.log(`http://localhost:4000/${selectedService}Employees`)
            axios.get(`http://localhost:4000/${selectedService}Employees`).then( response => {
                console.log(response);
                setState( prevState => ({
                    ...prevState,
                    employees : response.data,
                    loading: false
                }) );
            }).catch (err=> console.log(err) );
        }
    }, [selectedService]);

    return (
        <div className={styles['chooseEmployee-section']}>
            {
                props.isDate ? 
                <label className='mb-3'>کارمندان قابل انتخاب در تاریخ : {`${PN.convertEnToPe(day)} / ${PN.convertEnToPe(month)} / ${PN.convertEnToPe(year)} `}</label>
                :
                <label className='mb-3'>انتخاب کارمند :</label>
            }
            <div className={styles['chooseEmployee-container']}>
            {
                state.loading ? <div>
                    loding...
                </div>
                :
                state.employees.map( (item, index) => <Employee employee={item} key={index}/> )
            }
            </div>
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