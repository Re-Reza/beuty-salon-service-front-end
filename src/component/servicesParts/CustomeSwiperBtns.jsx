import React, { useState } from 'react';

import { useSwiper } from 'swiper/react';

//useSwiper must be used by components inside a Swiper element.

function CustomeSwiperBtns(props) {

    const swiper = useSwiper();
    const [ state, setState ] = useState(); 
    console.log(swiper.activeIndex);
    return (    
        <div className='d-flex justify-content-center mt-2'>
            <div role="button" className='ms-3' onClick={() => swiper.slideNext()}><i className="fa text-dark fa-arrow-right" aria-hidden="true"></i></div>
            
            <div style={{fontWeight:"600", fontSize:"1.1em"}}>
                <span className='text-grey'>{swiper.activeIndex+1}</span>
                <span className='text-dark'>/{props.allSlideLength}</span>
            </div>

            <div role="button" className='me-3' onClick={() => swiper.slidePrev()}><i className="fa text-dark text-purple fa-arrow-left" aria-hidden="true"></i></div>
        </div>
    )
}

export default CustomeSwiperBtns;
