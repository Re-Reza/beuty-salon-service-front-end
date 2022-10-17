import React, { useState, useRef } from "react";

import { searchReserveByEmOrCustomer, searchReserveByDate } from "../../../../dataService/aminProvider";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
// import InputIcon from "react-multi-date-picker/components/input_icon"
import "react-multi-date-picker/styles/colors/yellow.css";

import styles from "../../../../../public/styles/dashboard.module.css";


function ReserveSearch(props){

    const [ state, setState] = useState({
        searchByDate : false,
        date:null
    });

    const selectRef = useRef(null);
    const inputRef = useRef(null);

    function changeSearchType(event){
        console.log(event.target.value)
        setState({
            ...state,
            searchByDate : event.target.value == 1 ? true : false
        });
    }

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
        const isHistory = props.currentReserve ? 0 : 1;
        if( state.searchByDate ){
            
            searchReserveByDate(state.date ? state.date : "", props.isAdmin ? 0 : 1, isHistory).then(response => {
                props.setNewList(response.data.result);
            }).catch( err => console.log(err));
            
        }
        else{       
            let isEmployee;
            if( props.isAdmin == true)
                isEmployee = selectRef.current.options[selectRef.current.selectedIndex].value;
            else
                isEmployee = 0;
            console.log(isEmployee);
                searchReserveByEmOrCustomer(isEmployee, isHistory,inputRef.current.value, props.isAdmin ? 0 : 1).then( response => {
                    console.log(response);
                props.setNewList(response.data.result);
            }).catch(err => console.log(err) ); 

        }
    }

    return(
        <div className="d-flex flex-column">
            <div className={"d-flex mb-4 "+styles['reserve-searchContainer']}>

                <div className="form-check ms-4">
                    <input checked={!state.searchByDate} onClick={changeSearchType} value="0" className="form-check-input" name="searchInput" id="employeeSearch" type="radio" />
                    
                    <label className="form-check-label" htmlFor="employeeSearch">
                    {
                        props.isAdmin ? "جستجو بر اساس کارمند یا مشتری  " : "جستجو بر اساس مشتری"
                    }
                    </label>
                </div>

                <div className="form-check">
                    <input checked={state.searchByDate} onClick={changeSearchType} value="1" className="form-check-input" name="searchInput" id="dateSearch" type="radio" />
                    
                    <label className="form-check-label" htmlFor="dateSearch">
                        جستجو بر اساس تاریخ
                    </label>
                </div>
            
            
            </div>
            
            <div className='d-flex flex-md-row flex-column justify-content-start align-items-start'>
            {
                state.searchByDate?
                    <div className="mb-4">
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
                        inputClass={styles["calendarInput"]}
                        // minDate={ props.start } maxDate = { props.end }
                        calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
                    />
                    <button onClick={ sreachSubmit } style={{background : "inherit"}} className="me-2"><i className="fa fa-search" style={{color:"var(--dark)"}} aria-hidden="true"></i></button>
                    
                    </div>
                :
                <>
                    <div className='position-relative mb-4 '>
                        <input id={styles["EmployeeModalProfile-History-search-input"]} type="text" ref={inputRef} placeholder={"نام یا شماره تلفن"} />
                        <span onClick={sreachSubmit} className={styles["EmployeeModalProfile-searchIcon"]}><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    {
                        props.isAdmin ? 
                        <select ref={selectRef} className="form-select me-md-4 mb-4 mb-md-0" style={ {width:"180px", boxShadow:"0 0 8px #bdbcbc"} }>
                            <option value="1">کارمند</option>
                            <option value="0">مشتری</option>
                        </select> : <></>
                    }
                </>
            }
            </div>
        </div>
    );
}

export default ReserveSearch;