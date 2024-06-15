"use client";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [star, setStar] = useState();
  const [message, setMessage] = useState("");
  const [storeRatingMessage, setStoreRatingMessage] = useState("");
  let storeMessage;

  const notify = (message) => toast.error(message);

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  useEffect(() => {
    setStar(getRandomInt(3, 5));
    storeMessage = localStorage.getItem("ratingMessage");
    setStoreRatingMessage(storeMessage);
  }, []);

  const handleMessageSubmit = () => {
    if (message.length == 0) {
      notify("fill the form then submit!");
    } else {
      localStorage.setItem("ratingMessage", message);
      window.location.reload();
    }
  };

  return (
    <div className="ratingBG">
      <ToastContainer />
      <div className="rating">
        <div className="stars mb-4" style={{ textAlign: "center" }}>
          <Rating
            stop={5}
            initialRating={star}
            fullSymbol={
              <RiStarSFill
                style={{
                  fontSize: "40px",
                  background: "red",
                  marginLeft: "3px",
                  borderRadius: "50%",
                  padding: "7px",
                }}
                color="yellow"
              />
            }
            emptySymbol={
              <RiStarSLine
                style={{
                  fontSize: "40px",
                  background: "red",
                  marginLeft: "3px",
                  borderRadius: "50%",
                  padding: "7px",
                }}
                color="yellow"
              />
            }
          />
        </div>

        <div>
          <label
            htmlFor="message"
            style={{ textAlign: "start" }}
            className="form-label"
          >
            Write Message about this site:{" "}
          </label>
          <input
            type="text"
            id="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Views Here"
            rows={5}
            className="form-control"
          />
          <button
            className="btn btn-primary my-4"
            onClick={() => {
              handleMessageSubmit();
            }}
          >
            SUBMIT
          </button>

          {storeMessage != "" ? (
            <p>
              <span className="fw-bold">Text you views about this site: </span><br />
              {storeRatingMessage}
            </p>
          ) : (
            <p>No text you views about this site</p>
          )}
        </div>
      </div>
    </div>
  );
}
