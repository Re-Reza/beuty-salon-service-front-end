import React from "react";

import Link from "next/link";
import styles from "../../../public/styles/home.module.css";

export function Details() {
    //link to about us page
    return (
        <section className={styles["detailSection"]}>
            <h3 className="fs-3 font-weight-bold">درباره آرایشگاه زیبایی</h3>
            <div className={styles["detailSection-box"]}>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                <Link href="/">
                    <a className={styles["slide-btn"]+" btn mt-4"}>درباره ما</a>
                </Link>
            </div>
        </section>
    )
}
