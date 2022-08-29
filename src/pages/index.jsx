import React, { useState, useEffect } from "react";

import Head from "next/head";

// components 
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import {Services, Details, CustomerSatisfaction, Gallery} from "../component/home";

import styles from"../../public/styles/home.module.css";

function Home(){

    return(
        <>
            <Head>
                <title>صفحه اصلی</title>
            </Head>
            <div className={styles.home}>
                <Header homePage={ true } /> 
                <Services/>
                <Details/>
                <Gallery/>
                <CustomerSatisfaction/> 
                <Footer/>
            </div>
        </>
    )
}

export default Home;