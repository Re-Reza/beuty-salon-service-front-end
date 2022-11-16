import React, { useState, useEffect, useReducer } from 'react'

import Head from "next/head";

// Component 
import Footer from "../component/footer/Footer";
import { ChooseService, ChooesReserveType, ReserveHeader } from "../component/reserve";

import reserveContext from "../component/reserve/reserveContext";
import reserveReducer from "../component/reserve/reserveReducer";

import styles from "../../public/styles/reservePage.module.css";

//انتخاب خدمات
// کارمند مورد نظر
//انتخاب تاریخ و ساعت خالی برای کارمند انتخاب شده

// به این شکل روند برنامه اجرا می شود که در با لود شده صفحه خدمات ابتدا خدمت انتخاب می شود سپس
// با توجه به آن خدمت انتخاب شده کارمندان مربوط به آن خدمت را از سرور می گیریم
// بعد از انتخاب کاربر باید تاریخ و ساعت های مربوط به آن کارمند دریافت و تاریه و روز ها رزرو شده و رزرو نشده از هم متمایز شوند
//پس از انتخاب همگی مراحل اطلاعنات با دکه ثبت رزرو به سرور اسال می شوند
const ReservePage = () => {

    const [ userChoiceState, dispatch ] = useReducer( reserveReducer, {
        category: {  
            id: null,
            value : null,
        },
        service : {
            id : null,
            value : null,
        },
        employee:{
            employeeId : null,
            personId : null,
            fName : null,
            lName : null
        },
        date:{
            day:null,
            month: null,
            year: null  
        },
        requestDate : false,
        selectByEm : false
    }); 

    return (
        <>
            <Head>
                <title>رزرو</title>
            </Head>
            
            <div className='pink-round'>

                <reserveContext.Provider value = { {
                    userChoiceState,
                    dispatch 
                } }> 
                    
                    <div className={ styles['reserve-page']}>
                        
                        <ReserveHeader />
                        
                        <div className={styles.reserveSelectionContainer}>
            
                            <ChooseService />
                            
                            {
                                userChoiceState.service.id !=null ? 
                                <ChooesReserveType /> : <></>
                            }
                            
                        </div>

                    </div>

                </reserveContext.Provider>
                
                <Footer/>

            </div>
        </>
    )
}

// export async function getServerSideProps(context) {

// }

export default ReservePage;
