"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import avatar from '../../public/avatar1.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navLeft">
          <div className="navBrand">FlightSeems.com</div>
          <ul className="navList">
            <li className="navItem">
              <a href="/">Home</a>
            </li>
            <li className="navItem">
              <a href="/profile">My Booking</a>
            </li>
            <li className="navItem">
              <a href="/rateus">Rate Us</a>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <a href={"/profile"}>
            <Image src={avatar} alt="avatar" height={30} width={30} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
