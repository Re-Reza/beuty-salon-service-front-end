import React from "react";

import styles from  "../../../../public/styles/header.module.css";

function Slide(props){

    const { slideTitle, btnInfo, slideDescription} = props.content;
    
    return (
        <div className={styles["slideItem"]+ " "+styles[props.showSlide]}>
            <div>
                <h3 className={styles["slide-title"]}>{slideTitle}</h3>
                <p className={styles["slide-description"]}>{slideDescription}</p>
            </div>
            <button className={"btn "+styles["slide-btn"]}>{btnInfo}</button>
        </div>
    )
}

export default Slide;