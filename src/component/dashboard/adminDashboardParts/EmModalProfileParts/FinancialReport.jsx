import React, { useEffect, useState } from "react";

import { provideEmployeeFinancialReport } from "../../../../dataService/aminProvider";

import styles from "../../../../../public/styles/dashboard.module.css";

function FinancialReport( props ){

    const { info: { employeeId } } = props

    const [ state, setState ] = useState({
        allSalary : 0,
        prevWeekSalary : 0,
        prevMonthSalary : 0
    });

    useEffect(()=>{
   
        provideEmployeeFinancialReport(employeeId).then( response => {
            console.log(response);
            const { allSalary, prevMonthSalary, prevWeekSalary } = response.data.result;
            setState({
                ...state,
                allSalary,
                prevMonthSalary,
                prevWeekSalary
            });

        }).catch( err => console.log(err));
   
    }, []);

    return (
        <div className={styles["modalProfile-financialReport-container"]}>
            {/* <div className={styles["modalProfile-financialReport-reportTypeContainer"]}>
                <label className="ms-4" htmlFor="report-type">گزارش </label>
                <select style={{width:"max-content"}} id="report-type" className="form-select form-select-sm">
                    <option value="null">انتخاب کنید</option>
                    <option value="7">هفته گذشته</option>
                    <option value="30">ماه گذشته</option>
                    <option value="all">کل گزارشات</option>
                </select>
                <button className="btn me-2"><i className="fa fa-search"></i></button>
            </div> */}
            <div className="d-flex flex-column mb-4">
                <span>در‌آمد هفته گذشته:</span>
                <span className={styles["modalProfile-finanalReport-salaryItem"]}>{state.prevWeekSalary.toLocaleString()}&nbsp; تومان</span>
            </div>

            <div className="d-flex flex-column mb-4"> 
                <span>در‌آمد ماه گذشته:</span>
                <span className={styles["modalProfile-finanalReport-salaryItem"]}>{state.prevMonthSalary.toLocaleString()}&nbsp; تومان</span>
            </div>

            <div className="d-flex flex-column mb-4">
                <span>کل درآمد کارمند:</span>
                <span className={styles["modalProfile-finanalReport-salaryItem"]}>{state.allSalary.toLocaleString()}&nbsp; تومان</span>
            </div>

        </div>
    )
}

export default FinancialReport;