import React, { useEffect, useState } from "react";

import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../../../public/styles/home.module.css";

export function Introduction (){

    useEffect( ()=> {
        Aos.init({
            duration : 1200, //each animation takes two seconds to complete
            once: true,
        });

    }, []);

    const [ state, setState] = useState({

    });

    return (
        <section className={styles["introduction-section"]}>
            
            <div className="d-flex w-100 justify-content-center">
                <h2 className={styles["home-introduction-title"]}>
                    <span className="ms-3">به سالن زیبایی ایتوک خوش آمدید</span>
                    <span>
                        <img style={{width:"40px"}} src="/imgs/logo.png" alt="" />
                    </span>
                </h2>
            </div>

            <div className={styles["introduction-middlePart"]}>
 
                <div className="introduction-middlePart-right">

                    <div style={ {fontWeight:"500" }}>

                        <div className="d-flex justify-content-between" style={{width:"170px"}}>
                            <span className="ms-3">
                                <img className="ms-2" style={{ width: "20px"}} src="/imgs/icons/sunIcon.png" alt="open" />
                                ساعت باز
                            </span>

                            <span>
                                08:00
                            </span>
                        </div>

                        <div className="d-flex justify-content-between"  style={{width:"170px"}}>
                            <span className="ms-3">
                            <img className="ms-2" style={{ width: "20px"}}  src="/imgs/icons/moonIcon.png" alt="close" />
                                ساعت بسته
                            </span>

                            <span>
                                22:00
                            </span>
                        </div>

                    </div>

                    <div>



                    </div>

                </div>

                <div className={styles["introduction-middlePart-left"]}>

                </div>

 
            </div>
            
            <div className={styles["introduction-bottomPart"]}>

            </div>
            
        </section>
    )
    
}
