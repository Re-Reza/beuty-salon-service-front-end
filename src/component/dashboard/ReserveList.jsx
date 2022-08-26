import React, {useState} from "react";

import ReserveItem from "./ReserveItem";

import styles from "../../../public/styles/dashboard.module.css";

export function ReseveList(){

    const [ listState, setListState ] = useState ({
        items : [
            {serviceTitle:"مو", employee: "ccc", date: {year:1401 , month:5, day:31 ,} },
            {serviceTitle:"ناخن", employee: "ccc", date: {year:1401 , month:4, day:1 ,} },
            {serviceTitle:"مو", employee: "ccc", date: {year:1401 , month:3, day:5 ,} },
            {serviceTitle:"پوست", employee: "ccc", date: {year:1401 , month:8, day:2 ,} },
            {serviceTitle:"میکاپ", employee: "ccc", date: {year:1401 , month:12, day:10 ,} },
            {serviceTitle:"ناخن", employee: "ccc", date: {year:1401 , month:11, day:8 ,} },
            {serviceTitle:"پوست", employee: "ccc", date: {year:1401 , month:10, day:9 ,} },
            {serviceTitle:"میکاپ", employee: "ccc", date: {year:1401 , month:9, day:22 ,} },
            {serviceTitle:"مو", employee: "ccc", date: {year:1401 , month:6, day:28 ,} }
        ],
    });

    const [ currentReserve, setCurrentReserve ] = useState (true);

    function toggleReserve(value){
        setCurrentReserve(value);
    }


    return(
        <div className={styles["dashboard-reserveList"]}>
            <div className={styles["dashboard-reserveBtnContainer"]}>
                <button onClick={ ()=>{toggleReserve(false)} } className={ !currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]} >تاریخچه </button>
                <button onClick={()=>{toggleReserve(true)} } className={ currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]}>رزرو های جاری</button>
            </div>
            
            <div className="table-responsive-xl">   
                
            {
                currentReserve ? 

                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ردیف</th>
                        <th scope="col">خدمت</th>
                        <th scope="col">کارمند</th>
                        <th scope="col">تاریخ</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listState.items.map((item, index) => <ReserveItem  history={false} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

                :
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">کارمند</th>
                            <th scope="col">تاریخ</th>
                            <th>وضعیت</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        listState.items.map((item, index) => <ReserveItem history={true} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

            }

            </div>

        </div>
    )
}