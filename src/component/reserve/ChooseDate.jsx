import React, { useEffect, useRef, useContext } from 'react'

import reserveContext from './reserveContext';

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/yellow.css"
// import InputIcon from "react-multi-date-picker/components/input_icon"
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
// import InputIcon from "react-multi-date-picker/components/input_icon"
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

import styles from "../../../public/styles/reservePage.module.css";

export const ChooseDate = (props) => {

    const { userChoiceState, dispatch } = useContext( reserveContext ); 
 
    const { start, end, freeDays } = props.date;
    const calenderRef = useRef(null);

    useEffect ( ()=> {
        calenderRef.current.querySelector("input").focus();
    }, []);


    function setDate(event){
        const { day, month: {number}, year } = event;
        // console.log(day, number , year)
        dispatch({
            type : props.isDate ? "SET_DATE_2" : "SET_DATE",
            payload : {
                day: day,
                month : number,
                year : year
            }
        })
    }


    function validateDay(day){
        //check that giving day is in free days or not
        const result = freeDays.find( item => item == day);
        return result ? false : true;
    }

    return (
        <div className={styles['choose-date-container']}>
            {
                props.isDate ? 
                <label className={'mb-3 '+styles['result-label']}>انتخاب تاریخ :</label> :
                <label className={'mb-3 '+styles['result-label']}>تقویم کاری کارمند :</label> 
            }
            
            <DatePicker onChange={ setDate }  animations = {[
                opacity(),
                transition({
                from: 40,
                transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                }),
            ]}
            className="yellow"
            mapDays={ ({date}) => {     
                if(date.weekDay.number == 7) 
                    return{
                            disabled: true,
                    } 
                if(props.isDate == false){
               
                    const result = validateDay(date.day);
                    return {
                        disabled : result,
                    }
                }
            }}
            ref={calenderRef} inputClass={styles["calendarInput"]}
            minDate={ start } maxDate = { end }
            calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
            />
        </div>
    )
}
