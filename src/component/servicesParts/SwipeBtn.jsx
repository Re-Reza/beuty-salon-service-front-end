import React from 'react'

import { useSwiper } from "swiper/react";

function SwipeBtn(props) {  
    
    const { children, next } = props;
    console.log(props)
    
    const swiper = useSwiper();

    ( function (){
        console.log("TEESTING")
        if(next)
        {
            swiper.slidePrev();

        }else{
            swiper.slideNext();
        }
        props.swipeDone();
    })();



    return(
        // <div role="button" onClick={swipe}> 
        // {
        //     children
        // }
        // </div>
        <></>
    )
}

export default SwipeBtn;
