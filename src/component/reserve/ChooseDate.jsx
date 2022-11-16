import React, { useEffect, useRef, useContext } from 'react'

import reserveContext from './reserveContext';

// import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/yellow.css"
// import InputIcon from "react-multi-date-picker/components/input_icon"
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
// import InputIcon from "react-multi-date-picker/components/input_icon"
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

import DateBoxSwiper from "./DateBoxSwiper";

import styles from "../../../public/styles/reservePage.module.css";
import ReserveResult from './ReserveResult';

export const ChooseDate = (props) => {

    const { userChoiceState: { date}, dispatch } = useContext( reserveContext ); 

    const { start, end, freeDays } = props.date;

    let year;
    let month;
    if(start)
    {
        const splitedDate = start.split('/');
        month = splitedDate[1];
        year = splitedDate[0];       
    }

    function setDate(event){
        try{
            const { day, month: {number}, year } = event;
            const date = {
                year : year,
                month : number<10? "0"+ number : number,
                day : day<10? "0"+day : day
            }
            dispatch({
                type : props.isDate ? "SET_DATE_2" : "SET_DATE",
                payload : date 
            });
        }
        catch(e){
            const date = {
                year : null,
                month : null,
                day : null
            }
            dispatch({
                type : props.isDate ? "SET_DATE_2" : "SET_DATE",
                payload : date 
            });
        }
    }

    function validateDay(day){
        //check that giving day is in free days or not
        const result = freeDays.split('/')[2].find( item => item == day);
        return result ? false : true;
    }

    return (
        <div style={{margin:props.isDate ? "" : "auto"}} className={styles['choose-date-container']+" calender-parent"}>
            {
                props.isDate == true ? 
                    <Calendar onChange={ setDate } 
                    // className="yellow"
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

                    minDate={start} maxDate = {end}
                    calendar={persian} locale={persian_fa} 
                /> :
                <>
                {
                    freeDays.length == 0 ? <div style={{fontWeight:"700", fontSize:"1.2em", color:"var(--grey2)"}} className='text-center'>تایم کاری کارمند پر است!</div>:
                    <DateBoxSwiper selectedDate={date} initialMonth={month} days={freeDays} year={year}/>
                }
                </>

            }
            
            {
                props.isDate ? <></> :
                <div style={{marginTop: "3em"}}>
                {
                    freeDays.length != 0 ? <ReserveResult/> : <></>
                }
                </div>
            }

        </div>
    )
}
