import React from 'react';

import Accordion from './Acrodin';

import styles from "../../../public/styles/aboutUs.module.css";

export function EmployeesAccordion (props) {


    return(
        <div className={styles["employee-accordionContainer"]}>
            <ul className={styles["employee-accordionList"]}>
            {
                props.data.map((item, index) => <Accordion isLast={ props.data.length-1 == index ? true : false} item={item} key={index} />)
            }
            </ul>
        </div>
    );  
}

