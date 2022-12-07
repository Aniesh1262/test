import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import AlertModal from "../components/AlertModal";
import Login from "../components/Login";

const DisplayShowDetails = ({}) => {
  const selectedShow = useSelector((state) => state.shows.selectedShow);
  const { email } = useSelector((state) => state.user);
  console.log("showIs", selectedShow);

  const { name, rating, description, image, time, venue } = selectedShow;
  return (
    <>
      <div className="container">
        <div>{name}</div>
        <div>{rating}</div>
        <div>{description}</div>
        <div className="img">
          <img src={image} />
        </div>
        <div>{venue}</div>
        <div>{time}</div>

        {email ? (
          <button type="button" className="btn btn-success">
            Book
          </button>
        ) : (
          <div>
            <p>Login to book</p>
            <Login />
          </div>
        )}
        {/* <button
                    type="button"
                    className="btn btn-success"
                    data-bs-target="#staticBackdrop"
                    data-bs-toggle="modal"
                    onClick={() => {
                        setSignUpAlert(true);
                    }}
                >
                    Book
                </button> */}
      </div>
    </>
  );
};

export default DisplayShowDetails;
