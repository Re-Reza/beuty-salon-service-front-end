import React from "react";

import Link from "next/link";

import styles from  "../../../public/styles/header.module.css";

export function HeaderContact(){
    return (
            <div className="w-100 d-flex justify-content-center">

            <div className={styles["header-bottom-contact"]}>
                
                <div>
                    <img src="/imgs/logoGreen.png" style={{width:"65px", marginLeft : "1em"}} alt="logo" />
                    <span style={{fontWeight : "700", fontSize:"1.28em"}}> با مدیریت مدیری</span>
                </div>
                
                <div>
                    <span className="me-3">
                        <Link href="#">
                            <a>
                                <img  style={{width:"32px"}} src="/imgs/icons/phoneIcon.png" alt="phone" />
                            </a>
                        </Link>
                    </span>
                    <span  className="me-3">
                        <Link href="#">
                            <a>
                                <img  style={{width:"32px"}} src="/imgs/icons/insIcon.png/" alt="instragram" />
                            </a>
                        </Link>
                    </span>
                    <span className="me-3">
                        <Link href="#">
                            <a>
                                <img  style={{width:"32px"}} src="/imgs/icons/whatsAppIcon.png/" alt="whatsapp" />
                            </a>
                        </Link>
                    </span>
                    <span  className="me-3">
                        <Link href="#">
                            <a>
                                <img style={{width:"32px"}} src="/imgs/icons/telegramIcon.png/" alt="telegram" />
                            </a>
                        </Link>
                    </span>
                </div>

            </div>

        </div>
    )
}