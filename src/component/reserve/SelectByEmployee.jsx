import React, { useContext, useEffect, useState } from "react";

import { ChooseEmployee, ChooseDate, ReserveResult} from "../reserve";
import reserveContext from "./reserveContext";
import { provideEmployessOfServive, provideEmployeeTimeWork } from "../../dataService/reserveProvider";

import styles from "../../../public/styles/reservePage.module.css";

export function SelectByEmployee () {

    const [ state, setState ] = useState({
        employeeList : [],
        date : {
            freeDays : [],
            start : null, 
            end : null
        }
    });

    const { userChoiceState, dispatch } = useContext( reserveContext );
    // const { date } = useContext( reserveContext ).userChoiceState;
    const { service, employee, date, requestDate } = userChoiceState;
    console.log(requestDate)
    useEffect(() => {
        
        provideEmployessOfServive(service.id).then(response => {
            console.log(response);
            setState({
                ...state,
                employeeList : response.data.result
            });

        }).catch( err => {
            console.log(err);
        });

    }, [service.id]);

    useEffect( () => {

        if(employee.employeeId)
        {
            provideEmployeeTimeWork(service.id, employee.employeeId).then( response => {
                console.log(response);
                setState({
                    ...state,
                    date : response.data.result
                });
            }).catch( err => {
                console.log(err);
            })
        }
        
    }, [employee.employeeId, requestDate]);

    return (
        <div className={styles.selectedByEmployee}> 
            <div className="d-flex flex-wrap justify-content-between">
                <ChooseEmployee employeeList={state.employeeList} />
                { 
                    employee.employeeId ? 
                    <ChooseDate isDate={false} date={state.date} />  : <></>
                }
            </div>
            {
                date.day &&  employee.employeeId ?
                <ReserveResult /> : <></>
            }
        </div>
    );
}