import React, {useState} from "react";

import Modal from 'react-modal';

import { useMediaQuery } from 'react-responsive';

import EmInfo from "./Emlnfo";
import WeeklyCustomersList from "./WeeklyCustomersList";
import FinancialReport from "./FinancialReport";
 
import styles from "../../../../../public/styles/dashboard.module.css";


function EmployeeModalProfile( props ){

    const { openMoal, setOpenMoal, employee : { profileImg, fName, lName, services} } = props; 
    let data="";
    services.forEach( (item, index) => {
        data = data.concat( item.serviceTitle + (index==services.length-1? "" : "، ") )
    })
    const isTablet = useMediaQuery({
        query :"(max-width: 950px)"
    });

    const [ showOptionState, setShowOptionState ] = useState({
        info:true,
        history:false,
        weeklyCustomers:false,
        financialReport:false
    });

    const customStyles = {
        overlay:{
            backgroundColor:"rgba(0,0,0, .5)"
        },
        content:{
            width: isTablet? "80%" : "70%",
            display:"flex",
            margin:"auto",
            padding:"0",
            borderRadius: "8px",
        }
    };
    
    function closeModal(){
        setOpenMoal(false);
    }

    function changeInfoOption( selected ) { 
        Object.keys(showOptionState).forEach(key => {
            showOptionState[key] = false;
        });
        
        setShowOptionState({
            ...showOptionState,
            [selected] : true
        });
    }

    const { info, history, weeklyCustomers, financialReport} = showOptionState; 
    
    let ActiveComponent;
    if( info )
        ActiveComponent = EmInfo;
    else if( weeklyCustomers)
        ActiveComponent = WeeklyCustomersList;
    else if( history )
        ActiveComponent = WeeklyCustomersList;
    else if( financialReport ) 
        ActiveComponent = FinancialReport;

    Modal.setAppElement("#__next");

    return(
        <>
            <Modal
                isOpen={openMoal}
                style={customStyles} >
                <div className={styles["employeeInofo-modal"]}>

                    <div className={styles["employeeInofo-modal-topPart"]} >
                        
                        <div onClick={closeModal} className="align-self-start me-3 mt-2 position-absolute top-0" role="button">
                            <i className="fa text-danger fs-3 fa-times" aria-hidden="true"></i>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <img className={styles["employeeModal-profileImg"]} src={profileImg? "http://localhost:4000/"+profileImg :"/imgs/user.png"} alt="profile-img" />
                            <div className={styles["employeeModal-name"]}>{fName+" "+lName}</div>
                            <div className="text-muted">{data}</div>                            
                        </div>

                    </div>

                    <div className={styles["employeeModal-info"]}>

                        <div className={styles["employeeModal-btn-container"]}>
                            <button onClick={()=>{changeInfoOption("info")}} className={ info ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button"> مشخصات کارمند</button>
                            <button onClick={()=>{changeInfoOption("weeklyCustomers")}} className={ weeklyCustomers ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button">لیست هفتگی مشتریان</button>
                            <button onClick={()=>{changeInfoOption("history")}} className={ history ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button">تاریخچه فعالیت ها</button>  
                            <button onClick={()=>{changeInfoOption("financialReport")}} className={ financialReport ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button">گزارش مالی کارمند</button>    
                        </div>
                        
                        <div className="w-100 d-flex justify-content-center mt-5">
                            <ActiveComponent history={showOptionState.history} info = {props.employee} />
                        </div>
                    
                    </div>

                </div>
                
            </Modal>
        </>
    )
}

export default EmployeeModalProfile;