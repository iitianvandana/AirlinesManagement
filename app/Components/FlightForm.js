"use client";
import React, { useState } from "react";
import airportArray from "../Data/airports";
import flightData from "../Data/international";
import styles from "../page.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FlightForm = () => {
  const [from, setFrom] = useState("Atlanta");
  const [to, setTo] = useState("Atlanta");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [classes, setClasses] = useState("economy");
  const [filterFlightData, setFilterFlightData] = useState([]);
  const [filterFlightData2, setFilterFlightData2] = useState([]);

  const notify = (message) => toast.error(message);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from | !to | !departureDate | !classes) {
      notify("All fields are required!");
    } else {
      const filterFlight = Array.from(flightData).filter((e) => {
        return e.origin === from && e.destination === to;
      });

      const filterFlight2 = Array.from(flightData).filter((e) => {
        return e.origin === to && e.destination === from;
      });
      localStorage.setItem("flightData", JSON.stringify(filterFlight));
      localStorage.setItem("fromTime", departureDate);

      localStorage.setItem("toTime", returnDate);
      localStorage.setItem("flightData2", JSON.stringify(filterFlight2));
      // console.log(filterFlight2);

      setFilterFlightData(filterFlight);
      setFilterFlightData2(filterFlight2);

      let localFlightData = JSON.parse(
        localStorage.getItem("flightData2")
      ).length;
      if (localFlightData != "") {
        window.location.href = "/flight";
      } else {
        notify("There is no flight is avaliable. Please select another");
      }
      console.log(
        localFlightData != "" ? console.log("Complete") : console.log("blank")
      );
    }
  };

  return (
    <div>
      <ToastContainer />
      <form
        style={{
          width: "50vw",
          background: "#dddbdb5f",
          color: "#451212b5",
          fontWeight: "bolder",
        }}
        onSubmit={handleSubmit}
        className={`border p-3 ${styles.divForm}`}
      >
        <div className="mb-3">
          <label htmlFor="from" className="form-label">
            From
          </label>
          <div className="placeFrom">
            <select
              className="form-select form-select-sm"
              id="from"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              aria-label=".form-select-sm example"
            >
              {airportArray.map((e) => {
                return (
                  <option key={e.code} value={e.code}>
                    {e.city} ({e.country})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="to" className="form-label">
            To
          </label>
          <div className="placeFrom">
            <select
              className="form-select form-select-sm"
              id="to"
              onChange={(e) => {
                setTo(e.target.value);
              }}
              aria-label=".form-select-sm example"
            >
              {airportArray.map((e) => {
                return (
                  <option key={e.code} value={e.code}>
                    {e.city} ({e.country})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="departureDate" className="form-label">
            Departure Date
          </label>
          <input
            type="date"
            min="2024-5-30"
            max="2024-8-30"
            onChange={(e) => {
              setDepartureDate(e.target.value);
            }}
            className="form-control"
            id="departureDate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            Return Date
          </label>
          <input
            type="date"
            min="2024-5-30"
            max="2024-8-30"
            onChange={(e) => {
              setReturnDate(e.target.value);
            }}
            className="form-control"
            id="returnDate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">
            Class
          </label>
          <select
            className="form-select"
            id="class"
            onChange={(e) => {
              setClasses(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
          <button
            className="btn btn-primary my-2"
            style={{ background: "#0b5ed7b8" }}
          >
            Search Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightForm;
