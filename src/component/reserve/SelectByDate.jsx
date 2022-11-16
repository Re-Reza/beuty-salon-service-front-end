import React, { useContext, useState, useEffect } from 'react';

import { ChooseEmployee, ChooseDate, ReserveResult} from "../reserve";
import reserveContext from "./reserveContext";
import { provideDateRange, provideEmployeesOfDate } from "../../dataService/reserveProvider";

export function SelectByDate(){

    const [ state, setState ] = useState({
        employeeList : [],
        date : {},
    });

    const { employee, date, service, requestDate}  = useContext(reserveContext).userChoiceState;

    useEffect(() => {
        
        provideDateRange().then( response => {
            setState({
                ...state,
                date : response.data.result
            });

        }).catch( err => {
            console.log(err);
        });

    }, [requestDate]);

    useEffect(()=> {

        if(date.day){
            provideEmployeesOfDate(date.year+"/"+date.month+"/"+date.day, service.id).then( response => {
                console.log(response);
                setState({
                    ...state,
                    employeeList : response.data.result
                })
            }).catch( err => console.log(err) );
        }

    }, [date.day, service.id]);


    console.log(employee)

    return (
        <div className={'d-flex flex-column '} style={ {display:"grid", gridTemplateColumns:"repeat(2, 1fr)"} } >
            <div className='d-flex  flex-wrap justify-content-between'>
                <ChooseDate date={state.date} isDate={true} />
                {
                    date.day ? <ChooseEmployee employeeList={state.employeeList} isDate={true} />
                    : <></>
                }
     
            </div> 

            <ReserveResult />


            <div className="reserve-note">در اسرع وقت جهت مشاوره باهاتون تماس گرفته میشه </div>

            

        </div>
    )
}