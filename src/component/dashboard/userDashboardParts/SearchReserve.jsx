import React, { useState } from 'react';

import { searchByDate } from "../../../dataService/userDashboardProvider";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

import "react-multi-date-picker/styles/colors/yellow.css";

function SearchReserve(props){


    const [ state, setState] = useState({
        date:null
    });

    const setSearchDtate = (event) => {
        try{
            const { year, month, day } = event;
            const m = month.number<10 ? "0"+month.number : month.number;
            const d = day<10 ? "0"+day : day;
            setState({
                ...state,
                date : year+"/"+m+"/"+d
            });
        }
        catch( err ){
            setState({
                ...state,
                date : null
            });
        }
    }

    function sreachSubmit(){
        console.log(state.date)
        searchByDate(state.date ? state.date : "", props.currentReserve ? 0 : 1).then(response => {
            props.setNewData( response.data.result);
            console.log(response);
        }).catch( err => console.log(err));
    }

    return(
        <div className='d-flex mb-4 flex-column' style={ {color : "var(--dark)" }}>
            <label className='mb-2'>تاریخ مورد نظر</label>
            <div>
                <DatePicker onChange={setSearchDtate} animations = {[
                    opacity(),
                    transition({
                    from: 40,
                    transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                    }),
                ]}
                // render={<InputIcon/>}
                format="YYYY/MM/DD"
                className="yellow"
                // mapDays={ ({date}) => {     
                //     if(date.weekDay.number == 7) 
                //         return{
                //                 disabled: true,
                //         } 
                // }}
                // inputClass={styles["calendarInput"]} 
                calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
                />
                <button style={{background : "inherit"}} onClick={ sreachSubmit } className="me-2"><i className="fa fa-search" style={{color:"var(--dark)"}} aria-hidden="true"></i></button>
            </div>
                    
        </div>

    )
}

export default SearchReserve;