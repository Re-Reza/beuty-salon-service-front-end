import React, { useEffect } from "react";

import Aos from "aos";
import EmployeeSwiper from "../component/aboutus/EmployeeSwiper";

import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { TopPart } from "../component/aboutus";

import styles from "../../public/styles/aboutUs.module.css";
import "aos/dist/aos.css";


function AboutUs() {

    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    return (
        <>
            <Header homePage={false}/>

            <div className={styles['aboutUs-page']+" mt-5"}>

                <TopPart/>

                <EmployeeSwiper/>

            </div>

            <Footer/>
        </>
    )
}

export default AboutUs;