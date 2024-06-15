"use client";
import React, { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Buy = ({ makePayment, amountT }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tAm, setTAm] = useState();

  const notify = (message) => toast.error(message);

  useEffect(() => {
    setTAm(localStorage.getItem("totalAmount"));
  }, []);

  const handleClick = () => {
    const bookFirst = JSON.parse(localStorage.getItem("bookingData"));
    const bookSecond = JSON.parse(localStorage.getItem("bookingData2"));
    const amountTotal = localStorage.getItem("totalAmount");
    const departTime = localStorage.getItem("fromTime");
    const returnDate = localStorage.getItem("toTime");

    if (amountTotal >= 500000) {
      notify("Only 5 Lakh limit is avaliable. Payment Limit is reached");
    } else {
      makePayment({ productId: "example_ebook" });
      let bookingObject;

      if (localStorage.getItem("toTime") != 0) {
        bookingObject = {
          originFirst: bookFirst.origin,
          originSecond: bookSecond.origin,
          destinationFirst: bookFirst.destination,
          destinationSecond: bookSecond.destination,
          durationFirst: bookFirst.duration,
          durationSecond: bookSecond.duration,
          flightNoFirst: bookFirst.flightNo,
          flightNoSecond: bookSecond.flightNo,
          totalAmount: amountTotal,
          departureTimeFirst: bookFirst.departureTime,
          departureTimeSecond: bookSecond.departureTime,
          departureWeekFirst: bookFirst.departureWeek,
          departureWeekSecond: bookSecond.departureWeek,
          arrivalTimeFirst: bookFirst.arrivalTime,
          arrivalTimeSecond: bookSecond.arrivalTime,
          arrivalWeekFirst: bookFirst.arrivalWeek,
          arrivalWeekSecond: bookSecond.arrivalWeek,
          airlineFirst: bookFirst.airline,
          airlineSecond: bookSecond.airline,
          departTime: departTime,
          returnDate: returnDate,
        };
        console.log(bookFirst, bookSecond, amountTotal, bookingObject);
      } else {
        bookingObject = {
          originFirst: bookFirst.origin,
          destinationFirst: bookFirst.destination,
          durationFirst: bookFirst.duration,
          flightNoFirst: bookFirst.flightNo,
          totalAmount: amountTotal,
          departureTimeFirst: bookFirst.departureTime,
          departureWeekFirst: bookFirst.departureWeek,
          arrivalTimeFirst: bookFirst.arrivalTime,
          arrivalWeekFirst: bookFirst.arrivalWeek,
          airlineFirst: bookFirst.airline,
          departTime: departTime,
        };
      }

      if (localStorage.getItem("paymentId")) {
        localStorage.setItem("myBooking", JSON.stringify(bookingObject));
      }
    }
  };

  return (
    <div
      className="d-flex flex-column my-4"
      style={{ width: "50vw", margin: "auto" }}
    >
      <ToastContainer />
      <h1 className={`text-center ${styles.h1Style}`}>Payment Proceed</h1>
      <button
        style={{ color: "white", WebkitTextStroke: "white 0.5px" }}
        onClick={() => {
          handleClick();
        }}
        disabled={isLoading}
        className={`btn btn-primary ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : `Pay ₹${tAm}`}
      </button>
    </div>
  );
};

export default Buy;
