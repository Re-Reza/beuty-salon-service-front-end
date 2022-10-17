import React, { useState, useEffect } from "react";

import { getPlanDates } from "../../../dataService/employeeProvider";

import PlanWeek from "./PlanWeek";
import Loading from "../../elements/Loading";

import styles from "../../../../public/styles/dashbord/plan.module.css";

export function Plan(){

    const [ state, setState ] = useState({
        loading : true,
        data : null
    })

    useEffect( () => {

        getPlanDates().then( response => {
            console.log(response);
            setState({
                loading : false,
                data : response.data.result
            })
        }).catch( err => console.log(err) );

    }, []);

    return (

        state.loading ? 
        <div className="w-100 pt-5 d-flex justify-content-center">
            <Loading />
        </div> : 
        
        <div className={styles["dashboard-plan"]}>

            <PlanWeek data={state.data.firstWeek} isFirst={true}/>
            <PlanWeek data={state.data.secondWeek} />

        </div>  
    )
}

