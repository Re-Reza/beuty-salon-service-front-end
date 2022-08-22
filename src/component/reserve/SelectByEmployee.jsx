import React, {useContext} from "react";

import { ChooseEmployee, ChooseDate, ReserveResult} from "../reserve";
import reserveContext from "./reserveContext";

import styles from "../../../public/styles/reservePage.module.css";

export function SelectByEmployee () {

    const employeeValue  = useContext( reserveContext ).userChoiceState.employee.value;

    const { date } = useContext( reserveContext ).userChoiceState;

    return (
        <div className={styles.selectedByEmployee}> 
            <div className="d-flex flex-wrap justify-content-between">
                <ChooseEmployee />
                { 
                    Object.keys(employeeValue).length > 0  ? 
                    <ChooseDate />  : <></>
                }
            </div>
            {
                date.day &&  Object.keys(employeeValue).length ?
                <ReserveResult /> : <></>
            }
        </div>
    );
}