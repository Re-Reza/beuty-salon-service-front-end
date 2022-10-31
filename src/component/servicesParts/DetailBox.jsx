import React from 'react'

import Link from 'next/link';

import styles from "../../../public/styles/services.module.css";

export function DetailBox (props) {

    const { serviceTitle, description, img } = props.item;
 
    return(
        <div style={{margin:props.indx %2 == 0 ? "0 0 0 40%" : "0 40% 0 0"}} className={styles["service-deatilBox"]}>

            <div className={styles["service-deatilBox-right"]+' d-flex flex-column'} >

                <h5 className='text-purple' style={{fontWeigh:"550"}}>{serviceTitle}</h5>
                <p>{description}</p>
                <div className='d-flex justify-content-end'>
                    <Link href="/reserve">
                        <a style={{border:"1px solid var(--purple)"}}className={'purple-btn '+styles["reserve-topEmployees-reserBtn"]}>رزرو نوبت</a>
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

