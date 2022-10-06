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
import styles from "../../../../public/styles/dashboard.module.css"
import { useMediaQuery } from 'react-responsive';

const ReserveItem = ( props ) => {

    const { id, serviceTitle, reserveDate, row, customerId , 
        customerName, customerLastname, customerPhone, 
        reserveTime, status, serviceId, employeeFname, employeeLname, employeeId } = props.item;
    
    const [newDateState , setNewDate ] = useState({
        year: null,
        month: null,
        day: null,
        hour: null,
        minute:null,
        reserveTime : reserveTime ? reserveTime : null, 
        status : status
    });

    const ws = useRef(null);

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
        console.log(newDateState);
    }

    const sendNewCustomerDate = () => {
        console.log(newDateState);
        const { year, month, day, hour, minute } = newDateState;
        const newData = hour+":"+minute+"|"+year+"/"+month+"/"+day
        setFinalTime(id, newData).then( response => {
            setNewDate({
                reserveTime : response.data.result,
                status : "finalized"
            })
        }).catch( err => {
            console.log(err);
        })

    }

    function splitDate(date){
        return date.split('/')
    }

    function convertToPersian(value){
        console.log(value);
        const parts = value.split('|');
        console.log(parts)
        console.log( splitDate(parts[1]) );
        
    }

    const dateParts = splitDate(reserveDate);
    return (
        <tr>
            <th scope="row">{convertEnToPe(row)}</th>
            <td>{serviceTitle}</td>
            <td style={{minWidth:"100px"}}>{customerName +" "+ customerLastname}</td>
            <td style={{minWidth:"150px"}}>{employeeFname+" "+employeeLname}</td>
            <td>{` ${convertEnToPe(dateParts[0])}/${convertEnToPe(dateParts[1])}/${convertEnToPe(dateParts[2])} `}</td>
            {
                props.history ? 
                <td>{status == "cancelled" ? "کنسل شده" : "انجام شده" }</td>
                :
                <>
                    <td className={styles['employee-date-modifier']} style={{minWidth:"150px"}}>
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
                            minDate={ props.start } maxDate = { props.end }
                            calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
                        />
                       
                    </td>
                    <td style={{minWidth:"100px"}}>
                    {
                        //convertToPersian(newDateState.reserveTime )
                        newDateState.status == "finalized" ?
                        newDateState.reserveTime: ""
                    }
                    </td>
                    <td style={{minWidth:"100px"}}>
                        <select  className="form-select form-select-sm">
                            <option >انتخاب کنید</option>
                            <option value="1">انجام شده</option>
                            <option value="2">کنسل شده</option>
                        </select>
                   
                    </td>
                    <td style={{minWidth:"100px"}}>
                        <button onClick={ sendNewCustomerDate } className={styles["reserve-send-newDate-btn"]+" me-4"}>اعمال</button>
                    </td>
                </>
            }
        </tr>
    )
}

export default ReserveItem;

