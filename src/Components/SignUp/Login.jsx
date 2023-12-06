import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './SignUp.module.css'
import server from '../../../server.json'
import axios from "axios";


const Login = () => {
    const [data, setData] = useState({ status: 0, errorMsg: '' })
    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        const data = e.currentTarget;
        const userData = {
            email: data[0].value,
            password: data[1].value,
        };

        axios.post(`${server.server}/api/login`, userData)
            .then((response) => {
                setData({
                    status: response.status
                })
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                debugger;

            })
            .catch((error) => {
                debugger
                setData({
                    status: error.response.status,
                    errorMsg: error.response.data.msg
                })

            });
    };
    return (
        <section className='main'>
            <form className={s.form_main} noValidate='true' onSubmit={handleSubmit}>
                <div className={s.form__inner}>
                    <h1 className={s.h1}>Log in</h1>
                    <span className={s.text}>Don't have accaunt? <NavLink className={s.link} to='/sign-up'>Sign Up</NavLink></span>

                    <input className={s.input} type="email" placeholder="Email" name="" id="email" />
                    <input className={s.input} type="password" placeholder="Password" id="password" />

                    {data.status === 422 && <span className={s.error}>{data.errorMsg}</span>}
                    {data.status === 200 && <span className={s.success}>You have successfully logged in</span>}

                    <button className={s.btn} type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Login
