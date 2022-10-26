import React, { useState, useEffect } from "react";

import Slide from "./Slide";
import styles from  "../../../../public/styles/header.module.css";

function Slider(){

    //لورم ایپسوم متن ساختگی با تولیدسادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    const [ contentState, setContentState ] = useState({
        content : [
            {
                slideTitle : "بهترین ها را با ما تجربه کنید ",
                slideDescription : "ارایشگاه ایتوک با بهرمندی از بهترین و به روز ترین امکاتان ارایشی  و مرغوب ترین مواد ارایشی تایید شده از سازمان غذا و دارو اروپا و امریکا با بهرگیری از فرمولاسیون جدید و ارگانیگ از جمله مواد تتو کراتین رنگ مو و کراتین و..... به خدمت شما مشتری محترم در اماده است",
                btnInfo : "مشاهده سرویس"
            },
            {
                slideTitle : "خدمات مو و اکستنشن",
                btnInfo : "مشاهده سرویس",
                slideDescription : "بهترین خدمات مو و اکستنشن در مجموعه ما"
            },
            {
                slideTitle : "خدمات ناخن و کاشت",
                btnInfo : "مشاهده سرویس",
                slideDescription : "زیبایی ناخن و کاشت ناخن در مجموعه ما"
            },
            {
                slideTitle : "رنگ مو و کاشت مو",
                btnInfo : "مشاهده سرویس",
                slideDescription : "بهترین خدمات کاشت مو و رنگ مو در مجموعه ما"
            },
        ],
        showSlide : 0
    });

    useEffect( ()=> {
        setTimeout(() => {
            setContentState({
                ...contentState, 
                showSlide: (contentState.showSlide+1) % contentState.content.length
            });
        }, 4500);
    }, [contentState.showSlide] );

    return (
        <div className={styles["slider"]}>
            {
                contentState.content.map( (item, index) => <Slide key={index} content={item} showSlide={index==contentState.showSlide?"show-slide":""}/> )
            }
        </div>
    )

}

export default Slider; 