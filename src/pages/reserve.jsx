import React, { useState, useEffect, useReducer } from 'react'

// Component 
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { ChooseService, ChooesReserveType} from "../component/reserve";

import reserveContext from "../component/reserve/reserveContext";
import reserveReducer from "../component/reserve/reserveReducer";

import styles from "../../public/styles/reservePage.module.css";
// import axios from 'axios';
//انتخاب خدمات
// کارمند مورد نظر
//انتخاب تاریخ و ساعت خالی برای کارمند انتخاب شده

// به این شکل روند برنامه اجرا می شود که در با لود شده صفحه خدمات ابتدا خدمت انتخاب می شود سپس
// با توجه به آن خدمت انتخاب شده کارمندان مربوط به آن خدمت را از سرور می گیریم
// بعد از انتخاب کاربر باید تاریخ و ساعت های مربوط به آن کارمند دریافت و تاریه و روز ها رزرو شده و رزرو نشده از هم متمایز شوند
//پس از انتخاب همگی مراحل اطلاعنات با دکه ثبت رزرو به سرور اسال می شوند
const ReservePage = () => {

    const [ userChoiceState, dispatch ] = useReducer( reserveReducer, {
        serviceType: {  
            enValue: null,
            faValue : null,
            // complited: false,            
        },
        employee:{
            value: {},
            // complited: false,     
        },
        date:{
            day:null,
            month: null,
            year: null  
        } 
    }); 

    // const [stepState, setStepState] = useState({
    //     chooseService: true,
    //     chooseEmplyee: false,
    //     chooseDate: false
    // });


    // useEffect( ()=> {
    //     axios.get()
    // }, []);

    // const { chooseEmplyee, chooseDate, chooseService } = stepState; 
/*     let SelectedStep;
    if(chooseEmplyee)
        SelectedStep = ChooseEmplyee;
    else if(chooseService)
        SelectedStep = ChooseService;
    else 
        SelectedStep = ChooseDate; */


    return (
        <>
            <Header homePage={false}/>

            <reserveContext.Provider value = { {
                userChoiceState,
                dispatch
            } }> 
            
                <div className={ styles['reserve-page']}>

                    {/* <div className={ styles['reserve-stepsContainer']}>
                        <ul className='d-flex justify-content-between'>

                            <li className={styles['reserve-step']+" "+ styles['selected-step']}>
                                <span className={"badge rounded-circle bg-dark me-1 "+ styles["stepIcon"]}>۱</span> <span>انتخاب خدمت</span>
                            </li>

                            <li className={styles['reserve-step']}>
                                <span className={"badge rounded-circle bg-dark me-1 "+ styles["stepIcon"]}>۲</span> <span>انتخاب کارمند</span>
                            </li>

                            <li className={styles['reserve-step']}>
                                <span className={"badge rounded-circle bg-dark me-1 "+ styles["stepIcon"]}>۳</span> <span>انتخاب تاریخ و ساعت</span>
                            </li>
                        
                        </ul>
                    </div> */}

                   <div className={styles.reserveSelectionContainer}>
                        
                        <ChooseService />
                        
                        {
                            userChoiceState.serviceType.enValue !=null ? 
                            <ChooesReserveType /> : <></>
                        }
                        
                    </div>
                </div>
        
            </reserveContext.Provider>
            
            <Footer/>
        </>
    )
}

export default ReservePage;
