'use client'
import React, { useState } from 'react'
import style from '../LoRe.module.css'
import { useRouter } from 'next/navigation'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const notify = (message) => toast.error(message);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            notify("All fields are necessary.");
            return;
        }

        try {
            const resUserExists = await fetch("/api/userExist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                notify("User already exist")
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    phone
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                window.location.href= "/"
            } else {
                // console.log("User registration failed.");
            }
        } catch (error) {
            // console.log("Error during registration: ", error);
        }
    };
    return (
        <div className={style.registerDiv}>
             <ToastContainer />
            <h1>Registration</h1>
            <form onSubmit={handleSubmit} className={style.form} style={{ 'height': "40vh" }}>
                <div className={style.inputDiv}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="phone">Phone No.</label>
                    <input type="number" placeholder='Phone No.' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className={style.btn} style={{ 'background': "rgba(221, 135, 5, 0.815)" }}>Register</button>
                <p className={style.formPara}>Have an account? <a href="/login">Sign In</a></p>
            </form>
        </div>
    )
}

export default Register