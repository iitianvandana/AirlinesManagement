"use client";
import { useState, useEffect } from "react";
import flightImage from "../../public/flight.webp";
import rightArrow from "../../public/rightArrow.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import airportArray from "../Data/airports";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Flight() {
  const [filterFlightData, setFilterFlightData] = useState([]);
  const [filterFlightData2, setFilterFlightData2] = useState([]);
  const [fromPlace, setFromPlace] = useState("");
  const [from2Place, setFrom2Place] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [to2Place, setTo2Place] = useState("");

  const [storageTime, setStorageTime] = useState();

  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);

  let bookingData = {};
  let bookingData2 = {};
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const notify = (message) => toast.error(message);

  useEffect(() => {
    console.log(filterFlightData2.length, "fl");
    setStorageTime(localStorage.getItem("toTime"));

    // """"""""""""Data 1 lOGIC"""""""""""
    let data = JSON.parse(localStorage.getItem("flightData"));

    const flightFromPlace = airportArray.filter((e) => {
      return e.code == data[0].origin;
    });
    const flightToPlace = airportArray.filter((e) => {
      return e.code == data[0].destination;
    });

    setFromPlace(flightFromPlace[0].city);
    setToPlace(flightToPlace[0].city);

    let data1Filter = [
      ...new Map(data.map((item) => [item.flight_no, item])).values(),
    ];
    setFilterFlightData(data1Filter);

    // """"""""""""Data 2 lOGIC"""""""""""
    let data2 = JSON.parse(localStorage.getItem("flightData2"));

    const flightFrom2Place = airportArray.filter((e) => {
      return e.code == data2[0].origin;
    });
    // if
    const flightTo2Place = airportArray.filter((e) => {
      return e.code == data2[0].destination;
    });
    setFrom2Place(flightFrom2Place[0].city);
    setTo2Place(flightTo2Place[0].city);

    let data2Filter = [
      ...new Map(data2.map((item) => [item.flight_no, item])).values(),
    ];
    setFilterFlightData2(data2Filter);
  }, []);
  const handleContinue = () => {
    if (adults != 0) {
      if (storageTime != 0) {
        if (
          localStorage.getItem("bookingData") &&
          localStorage.getItem("bookingData2")
        ) {
          window.location.href = "/booking";
        } else {
          notify("Please select two flights");
        }
      } else {
        if (localStorage.getItem("bookingData")) {
          window.location.href = "/booking";
        } else {
            notify("Please select any one flights");
          }
      }
    } else {
      notify("Passengers are Required!");
    }
    localStorage.setItem("adults", adults);
    localStorage.setItem("childrens", childrens);
  };

  return (
    <>
      <div className={`d-flex ${styles.flightDiv}`}>
        <ToastContainer />
        <div className={styles.pessengers}>
          <h3>Passengers</h3>
          <hr className="m-3" />
          {/* Passengers */}

          <div className="passengers">
            <h5>Adults: </h5>
            <input
              type="number"
              style={{ fontSize: "10px", width: "100%" }}
              placeholder="Choose passengers between 1 to 9"
              onChange={(e) => {
                setAdults(e.target.value);
              }}
              className="form-control"
            />
            <hr className="my-4" />
            <h5>Childrens: </h5>
            <input
              type="number"
              style={{ fontSize: "10px", width: "100%" }}
              placeholder="Choose passengers between 1 to 9"
              onChange={(e) => {
                setChildrens(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>

        <div className={styles.showFlight}>
          {/* Data 1 table */}
          <div className="mb-4">
            <h1 className="text-center text-decoration-underline">
              {fromPlace}{" "}
              <Image
                src={rightArrow}
                alt={rightArrow}
                width={100}
                height={80}
              />{" "}
              {toPlace}
            </h1>

            <table className={styles.tables}>
              <thead>
                <tr>
                  <th style={{ paddingBottom: "10px" }} scope="col">
                    Sort By:
                  </th>
                  <th style={{ paddingBottom: "10px" }} scope="col">
                    Depart
                  </th>
                  <th style={{ paddingBottom: "10px" }} scope="col"></th>
                  <th style={{ paddingBottom: "10px" }} scope="col">
                    Arrive
                  </th>
                  <th style={{ paddingBottom: "10px" }} scope="col">
                    Price
                  </th>
                  <th style={{ paddingBottom: "10px" }} scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {filterFlightData.map((e) => {
                  return (
                    <tr
                      key={e.index}
                      style={{
                        borderBottom: "11px solid #fff",
                        borderRadius: "5px",
                        background: "#ef7a18ba",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      <td
                        style={{
                          margin: "auto",
                          width: "20vw",
                          padding: "19px",
                        }}
                      >
                        <p style={{ margin: "0px" }}>
                          <Image
                            src={flightImage}
                            alt="flight Image"
                            width={20}
                          />{" "}
                          {e.airline}
                        </p>
                        <p className={styles.para}>{e.flight_no}</p>
                      </td>
                      <td>
                        <p style={{ margin: "0px" }}>{e.depart_time}</p>
                        <p className={styles.para}>{fromPlace}</p>
                      </td>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13,9.03544443 C14.6961471,9.27805926 16,10.736764 16,12.5 C16,14.263236 14.6961471,15.7219407 13,15.9645556 L13,21.5207973 C13,21.7969397 12.7761424,22.0207973 12.5,22.0207973 C12.2238576,22.0207973 12,21.7969397 12,21.5207973 L12,15.9645556 C10.3038529,15.7219407 9,14.263236 9,12.5 C9,10.736764 10.3038529,9.27805926 12,9.03544443 L12,3.5 C12,3.22385763 12.2238576,3 12.5,3 C12.7761424,3 13,3.22385763 13,3.5 L13,9.03544443 L13,9.03544443 Z M12.5,15 C13.8807119,15 15,13.8807119 15,12.5 C15,11.1192881 13.8807119,10 12.5,10 C11.1192881,10 10,11.1192881 10,12.5 C10,13.8807119 11.1192881,15 12.5,15 Z"
                            transform="rotate(90 12.5 12.51)"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <p style={{ margin: "0px" }}>{e.arrival_time}</p>
                        <p className={styles.para}>{toPlace}</p>
                      </td>
                      <td>₹{e.economy_fare}</td>
                      <td>
                        <input
                          type="radio"
                          name="addFlight"
                          onClick={() => {
                            let date = new Date();
                            bookingData = {
                              origin: fromPlace,
                              destination: toPlace,
                              departureTime: e.depart_time,
                              departureWeek: weekday[e.depart_weekday],
                              arrivalWeek: weekday[e.arrival_weekday],
                              arrivalTime: e.arrival_time,
                              price: e.economy_fare,
                              bookingDate: date.getDate(),
                              airline: e.airline,
                              flightNo: e.flight_no,
                              duration: e.duration,
                            };
                            localStorage.setItem(
                              "bookingData",
                              JSON.stringify(bookingData)
                            );
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Data 2 table */}
          {storageTime == 0 ? (
            <div></div>
          ) : (
            <div>
              <h1 className="text-center text-decoration-underline">
                {toPlace}{" "}
                <Image
                  src={rightArrow}
                  alt={rightArrow}
                  width={100}
                  height={80}
                />
                {fromPlace}
              </h1>

              <table className={styles.tables}>
                <thead>
                  <tr>
                    <th style={{ paddingBottom: "10px" }} scope="col">
                      Sort By:
                    </th>
                    <th style={{ paddingBottom: "10px" }} scope="col">
                      Depart
                    </th>
                    <th style={{ paddingBottom: "10px" }} scope="col"></th>
                    <th style={{ paddingBottom: "10px" }} scope="col">
                      Arrive
                    </th>
                    <th style={{ paddingBottom: "10px" }} scope="col">
                      Price
                    </th>
                    <th style={{ paddingBottom: "10px" }} scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {filterFlightData2.map((e) => {
                    return (
                      <tr
                        key={e.index}
                        style={{
                          borderBottom: "11px solid #fff",
                          borderRadius: "5px",
                          background: "#ef7a18ba",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        <td
                          style={{
                            margin: "auto",
                            width: "20vw",
                            padding: "19px",
                          }}
                        >
                          <p style={{ margin: "0px" }}>
                            <Image
                              src={flightImage}
                              alt="flight Image"
                              width={20}
                            />{" "}
                            {e.airline}
                          </p>
                          <p className={styles.para}>{e.flight_no}</p>
                        </td>
                        <td>
                          <p style={{ margin: "0px" }}>{e.depart_time}</p>
                          <p className={styles.para}>{from2Place}</p>
                        </td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M13,9.03544443 C14.6961471,9.27805926 16,10.736764 16,12.5 C16,14.263236 14.6961471,15.7219407 13,15.9645556 L13,21.5207973 C13,21.7969397 12.7761424,22.0207973 12.5,22.0207973 C12.2238576,22.0207973 12,21.7969397 12,21.5207973 L12,15.9645556 C10.3038529,15.7219407 9,14.263236 9,12.5 C9,10.736764 10.3038529,9.27805926 12,9.03544443 L12,3.5 C12,3.22385763 12.2238576,3 12.5,3 C12.7761424,3 13,3.22385763 13,3.5 L13,9.03544443 L13,9.03544443 Z M12.5,15 C13.8807119,15 15,13.8807119 15,12.5 C15,11.1192881 13.8807119,10 12.5,10 C11.1192881,10 10,11.1192881 10,12.5 C10,13.8807119 11.1192881,15 12.5,15 Z"
                              transform="rotate(90 12.5 12.51)"
                            ></path>
                          </svg>
                        </td>
                        <td>
                          <p style={{ margin: "0px" }}>{e.arrival_time}</p>
                          <p className={styles.para}>{to2Place}</p>
                        </td>
                        <td>₹{e.economy_fare}</td>
                        <td>
                          <input
                            type="radio"
                            name="addFlight2"
                            onClick={() => {
                              let date = new Date();
                              bookingData2 = {
                                origin: from2Place,
                                destination: to2Place,
                                departureTime: e.depart_time,
                                departureWeek: weekday[e.depart_weekday],
                                arrivalWeek: weekday[e.arrival_weekday],
                                arrivalTime: e.arrival_time,
                                price: e.economy_fare,
                                bookingDate: date.getDate(),
                                airline: e.airline,
                                flightNo: e.flight_no,
                                duration: e.duration,
                              };
                              localStorage.setItem(
                                "bookingData2",
                                JSON.stringify(bookingData2)
                              );
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <div className="d-grid gap-2 d-md-flex justify-content-center">
            <Link
              className={`btn btn-outline-danger my-4 mx-4 ${styles.back}`}
              href="/"
            >
              ⇐ Back
            </Link>

            <button
              className={`btn btn-outline-danger my-4 mx-4 ${styles.continue}`}
              onClick={() => {
                handleContinue();
              }}
            >
              Continue ⇒
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
