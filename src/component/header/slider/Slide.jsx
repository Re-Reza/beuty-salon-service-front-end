import React from "react";

import styles from  "../../../../public/styles/header.module.css";

function Slide(props){

    const { slideTitle, btnInfo, slideDescription} = props.content;
    
    return (
        <div className={styles["slideItem"]+ " "+styles[props.showSlide]}>
            <p className={styles["slide-title"]}>{slideTitle}</p>
            <p className={styles["slide-description"]}>{slideDescription}</p>
            <button className={"btn "+styles["slide-btn"]}>{btnInfo}</button>
        </div>
    )
}

export default Slide;