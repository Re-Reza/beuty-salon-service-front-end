import React from "react";

import styles from "../../../../public/styles/dashbord/plan.module.css";

function PlanItem(props){

    const daysLis = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه"];
    const { item : { dayOfWeek, date }, quantities  } = props;

    function setValue(event){

        props.changeInputState(dayOfWeek, event.target.value);
    }

    return(
        <li className={styles["plan-item"]}>
            <div className={styles["plan-item-top"]}>
                <span>{daysLis[dayOfWeek]}</span>
                <span className="mt-1">{date}</span>
            </div>

            <div className={"w-100 d-flex justify-content-center "+styles['plan-item-input-container']}>
                <input defaultValue={quantities[`d${dayOfWeek}`] || 0} onChange={setValue} type="number" min={0} max={500} className={styles["plan-item-input"]}/>
            </div>
        </li>
    )
}

export default PlanItem;