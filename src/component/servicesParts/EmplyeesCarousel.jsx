import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import PN from "persian-number";



const EmplyeesCarousel = ( props ) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const { topEmpolyess, category }  = props;
    console.log(topEmpolyess)

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
        {
            topEmpolyess.map( (item, index) => {
            const { picurl, name, rate} = item;
            
            return <Carousel.Item key={index}>
                
                    <img src={picurl} alt={name} />
                    <Carousel.Caption>
                        <h3>{name} </h3>
                        <h5>متخصص {category}</h5>
                        <h6 className='mt-3'>میزان رضایت : ۱۰ / {PN.convertEnToPe(rate)}</h6>
                    </Carousel.Caption>
    
                </Carousel.Item>
            })
        }
        </Carousel>
    );
}

export default EmplyeesCarousel; 