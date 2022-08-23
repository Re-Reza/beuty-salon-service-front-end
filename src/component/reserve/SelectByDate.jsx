import React, { useContext } from 'react';

import { ChooseEmployee, ChooseDate, ReserveResult} from "../reserve";
import reserveContext from "./reserveContext";

export function SelectByDate(){
    const employeeValue  = useContext( reserveContext ).userChoiceState.employee.value;
    console.log(Object.keys(employeeValue) );
    const { date } = useContext( reserveContext ).userChoiceState;

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex  flex-wrap justify-content-between'>
            <ChooseDate isDate={true} />
            <ChooseEmployee isDate={true} />
     
            </div> 

            <div>
            {
                date.day &&  Object.keys(employeeValue).length ?
                <ReserveResult /> : <></>
            }
            </div>

        </div>
    )
}