import React, { useState, useRef } from 'react'

import { convertEnToPe } from "persian-number";
import { setFinalTime } from "../../../dataService/employeeProvider";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/yellow.css"
import styles from "../../../../public/styles/dashboard.module.css";
import { useMediaQuery } from 'react-responsive';


const EmployeeResItem = ( props ) => {

    const { id, serviceTitle, reserveDate, row, customerId ,payment ,customerName, 
        customerLastname, customerPhone, reserveTime, status, serviceId } = props.item;
    
        console.log(props.item)
    
    const paymentInputRef = useRef(null);

    const [newDateState , setNewDate ] = useState({
        year: null,
        month: null,
        day: null,
        hour: null,
        minute:null,
    });

    const ws = useRef(null);
    const selectRef = useRef(null);

    const isPhone = useMediaQuery({
        query: "(max-width: 550px)"
    });

    const setCustomerDate = (event) => {
        const { year, month, day, hour, minute } = event;
        newDateState.year = year;
        newDateState.month = month<10? "0"+month.number : month.number;
        newDateState.day = day<10? "0"+day : day;
        newDateState.hour = hour<10? "0"+hour : hour;
        newDateState.minute = minute<10? "0"+minute : minute;
    }

    const sendNewCustomerDate = () => {

        const { year, month, day, hour, minute } = newDateState;
        const payment = paymentInputRef.current.value.trim() == "" ? null : paymentInputRef.current.value.trim()
        let newData = {
            payment
        };

        if(year)
            newData.newTime = hour+":"+minute+" "+year+"/"+month+"/"+day;
        if(selectRef.current.options[selectRef.current.selectedIndex].value !== "null")
            newData.newStatus = selectRef.current.options[selectRef.current.selectedIndex].value;
        console.log(newData);
        if(Object.keys(newData).length > 0 )
        {
            setFinalTime(id, newData).then( response => {
                // if(newData.newStatus){

                // }
                // else{
                //     setNewDate({
                //         ...newDateState,
                //         year: null,
                //         month: null,
                //         day: null,
                //         hour: null,
                //         minute:null,
                //         reserveTime : response.data.result.reserveTime,
                //         status : "finalized"
                //     });                    
                // }
                props.setRequest();
            }).catch( err => {
                console.log(err);
            });
        }
    }

    return (
        <tr>
            <th scope="row">{convertEnToPe(row)}</th>
            <td>{serviceTitle}</td>
            <td>{customerName +" "+ customerLastname}</td>
            <td>{reserveDate}</td>
            {
                props.history ? 
                <td>{status == "cancelled" ? "کنسل شده" : "انجام شده" }</td>
                :
                <>
                    <td className={styles['employee-date-modifier']}>
                    {
                        status == "waiting" ? 
                        <>
                        <DatePicker ref={ws} onChange={setCustomerDate} animations = {[
                            opacity(),
                            transition({
                            from: 40,
                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                            }),
                        ]}
                        plugins={[
                            <TimePicker hideSeconds key={0} position={isPhone? "bottom" :"left"} />,
                        ]}
                        format=" HH:mm , YYYY/MM/DD"
                        className="yellow"
                        mapDays={ ({date}) => {     
                            if(date.weekDay.number == 7) 
                                return{
                                        disabled: true,
                                } 
                        }}
                        inputClass={styles["calendarInput"]}
                        minDate={ props.start }
                        calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
                    />
                    
                    </>
                    :<>{reserveTime}</>
                    }
                    </td>
                    <td>
                        <input defaultValue={parseFloat(payment).toLocaleString} ref={ paymentInputRef }  c className={styles["change-info-input"]+" "+styles["cost-input"]} type="number" />
                    </td>
                    <td>                        
                        <select ref={selectRef} className="form-select form-select-sm">
                            <option value="null">انتخاب کنید</option>
                            <option value="done">انجام شده</option>
                            <option value="cancelled">کنسل شده</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={ sendNewCustomerDate } className={styles["reserve-send-newDate-btn"]+" me-4"}>اعمال</button>
                    </td>
                </>
            }
        </tr>
    )
}

export default EmployeeResItem;

