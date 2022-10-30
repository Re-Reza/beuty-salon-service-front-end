import React from 'react';

import { useSwiper } from 'swiper/react';

//useSwiper must be used by components inside a Swiper element.

const CustomeSwiperBtns = (props) => {

    const swiper = useSwiper();
  
    return (    
        <div className='d-flex justify-content-center mt-2'>
            <div role="button" className='ms-3' onClick={() => swiper.slideNext()}><i className="fa text-purple fa-arrow-right" aria-hidden="true"></i></div>
            
            <div style={{fontWeight:"500"}}>
                <span className='text-purple'>{swiper.activeIndex+1}</span>
                <span className='text-grey'>/{props.allSlideLength}</span>
            </div>

            <div role="button" className='me-3' onClick={() => swiper.slidePrev()}><i className="fa text-purple fa-arrow-left" aria-hidden="true"></i></div>
        </div>
    )
}

export default CustomeSwiperBtns;
