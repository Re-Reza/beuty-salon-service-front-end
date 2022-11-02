import React, { useState } from 'react';

import styles from "../../../public/styles/home.module.css";

function IntroducitonMovie () {

    const [state, setState] = useState({
        play:false,
    });

    const {play} = state;

    function playMovie(){
        setState({
            ...state,   
            play:true
        });
    }

    return (
    
        play?
        <video style={{borderRadius : "15px"}} autoPlay controls width="100%" height="100%">
            <source src='/imgs/lorde assassin creed unity.mp4' type="video/mp4"/>
            مرورگر شما از ویدیو پشتیبانی نمی کند
        </video>:
        // <div onClick={playMovie} className={styles['intro-movieCover']} style={{position:"relative", width:"100%", height:"100%"}}>
        //     <div className={styles['video-cover-img']+" d-flex flex-column justify-content-center  align-items-center"}>
        //         <img style={{width:"65px"}}  src='/imgs/logo2.png' alt="معرفی سالن" />
        //         <p style={{fontWeight:"600"}}>معرفی سالن ایتوک</p>
        //     </div>
        //     <div className={styles["MoviePage-playButton"]}>
        //         <img  style={{width:"55px"}}src="/imgs/icons/introductionPlayIcon.png" alt="play" />
        //     </div>
        // </div>
        <div onClick={playMovie} className={styles['intro-movieCover']}>
            <span className='ms-2'>ویدیویی از سالن</span>
            <img className={styles["play-icon"]} style={{width:"53px"}}src="/imgs/icons/introductionPlayIcon.png" alt="play" />
        </div>
    )
}

export default IntroducitonMovie;
