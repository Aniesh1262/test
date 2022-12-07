import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Login from "./Login";

const Navbar = () => {
  const { email, imageUrl, name } = useSelector((state) => state.user);
  const guestLinks = (
    <ul>
      {email ? (
        <li>
          <div>{`Hi, ${name}`}</div>
        </li>
      ) : (
        <li>
          <Login />
        </li>
      )}
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1 className="text-primary">Just Book</h1>
      <Fragment>{guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
