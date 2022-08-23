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

    return(
        <div className={styles["dashboard-reserveList"]}>
            <div className="table-responsive-xl">
                <table className="table">
                    <thead className="thead-dark">
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
                        listState.items.map((item, index) => <ReserveItem key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>
            </div>
            
        </div>
    )
}