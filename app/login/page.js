'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import style from '../LoRe.module.css'


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const router = useRouter();
    const notify = (message) => toast.error(message);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        console.log(res)
  
        if (res.error) {
          notify("Invalid Credentials");
          return;
        }
  
        router.replace("/");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
        <div className={style.loginDiv}>
           <ToastContainer />
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className={style.form} style={{"borderTop": "3px solid green"}}>
                <div className={style.inputDiv}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} id='email' name='email' />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} id='password' name='password' />
                </div>
                <button className={style.btn}>Login</button>
                <p className={style.formPara}>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}

export default Login