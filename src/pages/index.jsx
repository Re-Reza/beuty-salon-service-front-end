import React, { useState, useEffect } from "react";

import Head from "next/head";

// components 
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import {Introduction, Reservation, CustomerSatisfaction, WhyUsPart} from "../component/home";
import axioxInstance from "../dataService/axiosInstance";
import styles from"../../public/styles/home.module.css";

function Home(){

    return(
        <>
            <Head>
                <title>صفحه اصلی</title>
            </Head>
            <div className="pink-round">
                <div className={styles.home}>
                    <Header homePage={ true } /> 
                    <Introduction/>
                    <Reservation/>
                    <WhyUsPart/>
                    {/* <CustomerSatisfaction/>  */}
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home;