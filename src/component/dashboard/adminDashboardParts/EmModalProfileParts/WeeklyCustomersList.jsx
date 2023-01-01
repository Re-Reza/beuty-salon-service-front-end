import React, { useState, useEffect } from 'react';

import WeeklyCustomerItem from "./WeeklyCustomerItem";

import styles from "../../../../../public/styles/dashboard.module.css";

import { provideCustomerReserves } from "../../../../dataService/employeeProvider";
  
function WeeklyCustimersList (props) {

    const [ state, setState ] = useState({
        reserveList : [],
        loading : true
    });

    useEffect(() => {
        provideCustomerReserves(props.info.employeeId).then( response => {
            console.log(response);
            setState({
                loading : false,
                reserveList : response.data.result
            });
        }).catch( err => {
            console.log(err);
        })
    }, []);

    let filteredList;
    
    if(props.history)
        filteredList = state.reserveList.filter( item => item.status == 'done' || item.status == 'cancelled');
    else 
        filteredList = state.reserveList.filter( item => item.status == 'waiting' || item.status == 'finalized');   

    
    if( filteredList.length ==0)
        return <div className='fs-4' style={{color:"var(--yellow)"}}>
            رزروی پیدا نشد
        </div>

    return (
            state.loading ? 
            <></> : 
            <div className={styles['modalProfile-weeklycustomers-container']}>
                <ul className={styles['modalProfile-weeklycustomersPart']}>
                {
                    filteredList.map( (item, index) => <WeeklyCustomerItem item={item} key={index}/>)
                }
                </ul>
            </div>
    )
}

export default WeeklyCustimersList;