import React, { useEffect } from 'react'

import Link from 'next/link';
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../../../public/styles/services.module.css";

export function DetailBox (props) {

    const { serviceTitle, description, img } = props.item;

    useEffect(() => {
        
        Aos.init({
            duration : 1000,
            once : true
        });

    }, []);

    return(
        <div style={{margin:props.indx % 2 == 0 ? "0 0 0 40%" : "0 40% 0 0"}} data-aos={props.indx % 2 == 0 ?"fade-down-right":"fade-down-left"} className={styles["service-deatilBox"]}>

            <div className={styles["service-deatilBox-right"]+' d-flex flex-column'} >

                <h5 className='text-grey' style={{fontWeigh:"700", fontSize : "1.4em"}}>{serviceTitle}</h5>
                <p className={styles["service-deatilBox-description"]}>{description}</p>
                <div className='d-flex justify-content-end'>
                    <Link href="/reserve">
                        <a style={{border:"1px solid var(--grey)"}} className={'purple-btn '+styles["reserve-topEmployees-reserBtn"]}>رزرو نوبت</a>
                    </Link>
                </div>

            </div>

            <div className={ styles["service-deatilBox-left"]+' d-flex flex-column'}>

                <p className='text-purple'> نمونه کار {serviceTitle}</p>
                <img className={styles["service-deatilBox-left-img"]} src={img} alt={serviceTitle} />

            </div>

        </div>
    )
}

