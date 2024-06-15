"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  useEffect(() => {
    if (localStorage.getItem("bookingData")) {
      localStorage.removeItem("bookingData");
      localStorage.removeItem("bookingData2");
      localStorage.removeItem("flightData");
      localStorage.removeItem("flightData2");
    }
  }, []);
  return (
    <>
      <div className={styles.home}>
        <div className={styles.rightHome}>
          <h1>LOWEST FARE</h1>
          <h3>FIND BEST DEALS</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            ratione laboriosam. Quae natus, et dolorem quasi eveniet dolor
            asperiores error mollitia animi esse. Itaque rem, exercitationem
            commodi labore in voluptates.
          </p>

          <Link href={"/addflight"} className={`btn btn-primary ${styles.rightHomeBtn} `}>
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
