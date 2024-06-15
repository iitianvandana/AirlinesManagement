"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import avatar from "../../public/avatar1.png";
import styles from "../page.module.css";

const Profile = () => {
  const [myBooking, setMyBooking] = useState();
  const [returnTime, setReturnTime] = useState();
  // var mybooking = {};

  useEffect(() => {
    setMyBooking(JSON.parse(localStorage.getItem("myBooking")));
    setReturnTime(localStorage.getItem("toTime"))
  }, []);

  const { data: session } = useSession();
  if (session) {
    return (
      <div style={{ background: "linear-gradient(112deg, rgb(224 230 243), rgb(131 173 243))" }}>
        <br />
        <div
          className="card d-flex flex-row"
          style={{
            width: "45vw",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src={avatar}
            alt={avatar}
            className="card-img-top"
            width={200}
            height={270}
          />
          <div className="card-body">
            <h5 className="card-title">{session.user.name}</h5>
            <p className="card-text">{session.user.email}</p>
            <button className="btn btn-primary" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        </div>
        <h2 className="text-center mt-4">My Bookings</h2>
        <div className="px-4 py-4">
          {localStorage.getItem("myBooking") ? (
            <div>
              {
                <>
                  <div
                    style={{
                      width: "80vw",
                      margin: "auto",
                      background: "white",
                    }}
                    className="p-4"
                  >
                    <h1 className={styles.h1Cus}>Departing Flight</h1>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className={styles.customize}>
                          {myBooking.airlineFirst}
                        </p>
                        <p className={`${styles.customize} ${styles.colorCus}`}>
                          {myBooking.flightNoFirst}
                        </p>
                      </div>
                      <div>
                        <p className={styles.customize}>
                          {myBooking.departureTimeFirst}
                        </p>
                        <p className={`${styles.customize} ${styles.colorCus}`}>
                          {myBooking.departureWeekFirst} {myBooking.departTime}
                        </p>
                        <p
                          className={`${styles.customize} ${styles.colorCus2}`}
                        >
                          {myBooking.originFirst}
                        </p>
                      </div>
                      <div>
                        <p className={styles.customize}>
                          {myBooking.arrivalTimeFirst}
                        </p>
                        <p className={`${styles.customize} ${styles.colorCus}`}>
                          {myBooking.arrivalWeekFirst} {myBooking.departTime}
                        </p>
                        <p
                          className={`${styles.customize} ${styles.colorCus2}`}
                        >
                          {myBooking.destinationFirst}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`${styles.customize} ${styles.colorCus2}`}
                        >
                          {myBooking.durationFirst.slice(0, 2)}h{" "}
                          {myBooking.durationFirst.slice(3, 5)}min
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Returning Flight */}
                  {returnTime == 0 ? <div></div> :
                  <div
                    style={{
                      width: "80vw",
                      margin: "auto",
                      background: "white",
                    }}
                    className="p-4 mt-3"
                  >
                    <h1 className={styles.h1Cus}>Returning Flight</h1>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className={styles.customize}>
                          {myBooking.airlineSecond}
                        </p>
                        <p className={`${styles.customize} ${styles.colorCus}`}>
                          {myBooking.flightNoSecond}
                        </p>
                      </div>
                      <div>
                        <p className={styles.customize}>
                          {myBooking.departureTimeSecond}
                        </p>
                        <p className={`${styles.customize} ${styles.colorCus}`}>
                          {myBooking.departureWeekSecond} {myBooking.returnTime}
                        </p>
                        <p
                          className={`${styles.customize} ${styles.colorCus2}`}
                        >
                          {myBooking.originSecond}
                        </p>
                      </div>
                      <div>
                        <p className={styles.customize}>
                          {myBooking.arrivalTimeSecond}
                        </p>
                        <p className={`${styles.customize} ${styles.colorCus}`}>
                          {myBooking.arrivalWeekSecond} {myBooking.returnTime}
                        </p>
                        <p
                          className={`${styles.customize} ${styles.colorCus2}`}
                        >
                          {myBooking.destinationSecond}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`${styles.customize} ${styles.colorCus2}`}
                        >
                          {myBooking.durationSecond.slice(0, 2)}h{" "}
                          {myBooking.durationSecond.slice(3, 5)}min
                        </p>
                      </div>
                    </div>
                  </div> }
                </>
              }
            </div>
          ) : (
            <div>
              <small>No Booking Here. Please book anyone flight</small>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="text-center mt-4">
      <h2>Not signed in </h2>
      <button className="btn btn-warning" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
};

export default Profile;
