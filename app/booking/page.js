"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import BuyProduct from "../Components/razorpay/BuyProduct";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [booking2, setBooking2] = useState([]);

  // -------------------:Amount:---------------------
  const [totalAm, setTotalAm] = useState();

  // ===============:Passengers:==============
  const [adults, setAdults] = useState();
  const [childrens, setChildrens] = useState();

  const [originTime, setOriginTime] = useState("");
  const [destinationTime, setDestinationTime] = useState("");

  let [hour, setHour] = useState();
  let [minute, setMinute] = useState();

  let [hour2, setHour2] = useState();
  let [minute2, setMinute2] = useState();
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData"));
    const bookingData2 = JSON.parse(localStorage.getItem("bookingData2"));

    setBooking(bookingData);
    setBooking2(bookingData2);

    setOriginTime(localStorage.getItem("fromTime"));
    setDestinationTime(localStorage.getItem("toTime"));

    setHour(bookingData.duration.slice(0, 2));
    setMinute(bookingData.duration.slice(3, 5));

    setAdults(Number.parseInt(localStorage.getItem("adults")));
    setChildrens(Number.parseInt(localStorage.getItem("childrens")));

    if (localStorage.getItem("toTime") != "") {
      setHour2(bookingData2.duration.slice(0, 2));
      setMinute2(bookingData2.duration.slice(3, 5));
    }

    // -------:Amounts:-----
    let childrensNu = localStorage.getItem("childrens");
    let adultsNu = localStorage.getItem("adults");

    let childrensTotalAm = (bookingData.price / 3) * childrensNu;
    let adultsTotalAm = (bookingData.price / 1.5) * adultsNu;

    let toAm1 = childrensTotalAm + adultsTotalAm;
    let toAm2;
    if (localStorage.getItem("toTime") != "") {
      let childrensTotalAm2 = (bookingData2.price / 3) * childrensNu;
      let adultsTotalAm2 = (bookingData2.price / 1.5) * adultsNu;
      toAm2 = childrensTotalAm2 + adultsTotalAm2;
    }

    let totalAm;
    if (destinationTime != 0) {
      totalAm = toAm1 + toAm2;
    } else {
      totalAm = toAm1;
    }

    localStorage.setItem("totalAmFirst", toAm1);
    localStorage.setItem("totalAmSecond", toAm2);
    localStorage.setItem("totalAmount", Math.floor(totalAm));

    setTotalAm(Number.parseInt(localStorage.getItem("totalAmount")));
  }, []);

  return (
    <div className={styles.bookingBG}>
      <h1 className={`text-center ${styles.h1Style}`}>Ticket Details</h1>
      <div
        className={`jumbotron d-flex justify-content-around text-center mb-4 ${styles.bookingMainDiv} `}
      >
        <div className={`d-flex flex-column ${styles.booking1Div}`}>
          <p className="m-0 font-weight-bold">{booking.airline}</p>
          <p
            className={styles.para}
            style={{
              fontSize: "12px",
              color: "rgb(58 57 57 / 84%)",
              WebkitTextStroke: "0.5px #8e8e8e",
              fontWeight: "600",
            }}
          >
            {booking.flightNo}
          </p>
        </div>

        <div className={`d-flex flex-column ${styles.booking1Div}`}>
          <p className="m-0">{booking.departureTime}</p>
          <p
            className={styles.para}
            style={{
              fontSize: "12px",
              color: "rgb(58 57 57 / 84%)",
              WebkitTextStroke: "0.5px #8e8e8e",
              fontWeight: "600",
            }}
          >
            {booking.departureWeek} <br /> {originTime}{" "}
          </p>
          <p
            className={styles.para}
            style={{
              fontSize: "12px",
              color: "rgb(58 57 57 / 84%)",
              WebkitTextStroke: "0.5px #8e8e8e",
              fontWeight: "600",
            }}
          >
            {booking.origin}
          </p>
        </div>
        <div className={`d-flex flex-column ${styles.booking1Div}`}>
          <p style={{ margin: "0px" }}>
            {hour}h {minute}min
          </p>
          <hr style={{ margin: "0px", width: "20vw" }} />
          <p
            className={styles.para}
            style={{
              fontSize: "17px",
              color: "rgb(58 57 57 / 84%)",
              WebkitTextStroke: "0px ",
              fontWeight: "600",
            }}
          >
            Passenger: {adults + childrens}
          </p>
        </div>
        <div className={`d-flex flex-column ${styles.booking1Div}`}>
          <p className="m-0">{booking.arrivalTime}</p>
          <p
            className={styles.para}
            style={{
              fontSize: "12px",
              color: "rgb(58 57 57 / 84%)",
              WebkitTextStroke: "0.5px #8e8e8e",
              fontWeight: "600",
            }}
          >
            {booking.arrivalWeek} <br /> {originTime}
          </p>
          <p
            className={styles.para}
            style={{
              fontSize: "12px",
              color: "rgb(58 57 57 / 84%)",
              WebkitTextStroke: "0.5px #8e8e8e",
              fontWeight: "600",
            }}
          >
            {booking.destination}
          </p>
        </div>
      </div>

      {destinationTime == 0 ? (
        <div></div>
      ) : (
        <div
          className={`jumbotron d-flex justify-content-around text-center mb-4 ${styles.bookingMainDiv} `}
        >
          <div className={`d-flex flex-column ${styles.booking1Div}`}>
            <p className="m-0 font-weight-bold">{booking2.airline}</p>
            <p
              className={styles.para}
              style={{
                fontSize: "12px",
                color: "rgb(58 57 57 / 84%)",
                WebkitTextStroke: "0.5px #8e8e8e",
                fontWeight: "600",
              }}
            >
              {booking2.flightNo}
            </p>
          </div>

          <div className={`d-flex flex-column ${styles.booking1Div}`}>
            <p className="m-0">{booking2.departureTime}</p>
            <p
              className={styles.para}
              style={{
                fontSize: "12px",
                color: "rgb(58 57 57 / 84%)",
                WebkitTextStroke: "0.5px #8e8e8e",
                fontWeight: "600",
              }}
            >
              {booking2.departureWeek} <br /> {destinationTime}{" "}
            </p>
            <p
              className={styles.para}
              style={{
                fontSize: "12px",
                color: "rgb(58 57 57 / 84%)",
                WebkitTextStroke: "0.5px #8e8e8e",
                fontWeight: "600",
              }}
            >
              {booking2.origin}
            </p>
          </div>
          <div className={`d-flex flex-column ${styles.booking1Div}`}>
            <p style={{ margin: "0px" }}>
              {hour2}h {minute2}min
            </p>
            <hr style={{ margin: "0px", width: "20vw" }} />
            <p
              className={styles.para}
              style={{
                fontSize: "17px",
                color: "rgb(58 57 57 / 84%)",
                WebkitTextStroke: "0px",
                fontWeight: "600",
              }}
            >
              Passenger: {adults + childrens}
            </p>
          </div>
          <div className={`d-flex flex-column ${styles.booking1Div}`}>
            <p className="m-0">{booking2.arrivalTime}</p>
            <p
              className={styles.para}
              style={{
                fontSize: "12px",
                color: "rgb(58 57 57 / 84%)",
                WebkitTextStroke: "0.5px #8e8e8e",
                fontWeight: "600",
              }}
            >
              {booking2.arrivalWeek} <br /> {destinationTime}
            </p>
            <p
              className={styles.para}
              style={{
                fontSize: "12px",
                color: "rgb(58 57 57 / 84%)",
                WebkitTextStroke: "0.5px #8e8e8e",
                fontWeight: "600",
              }}
            >
              {booking2.destination}
            </p>
          </div>
        </div>
      )}

      <BuyProduct amount={totalAm} />
    </div>
  );
};

export default Booking;
