import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './SignUp.module.css'
import server from '../../../server.json'
import axios from "axios";


const SignUp = () => {
  const [data, setData] = useState({ status: 0, errorMsg: '' })


  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    const data = e.currentTarget;
    const userData = {
      fullName: data[0].value,
      email: data[1].value,
      number: data[2].value,
      password: data[3].value,
      confirmPassword: data[4].value,
      addres: data[5].value,
    };
    axios.post(`${server.server}/api/signup`, userData)
      .then((response) => {
        setData({
          status: response.status
        })
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
          <h1 className={s.h1}>Sign up</h1>
          <span className={s.text}>Already a member? <NavLink className={s.link} to='/log-in'>Log In</NavLink></span>
          <input className={s.input} type="text" placeholder="Fullname" />
          <input className={s.input} type="email" placeholder="Email" name="" id="" />
          <input className={s.input} type="number" placeholder="Phone Number" />
          <input className={s.input} type="password" placeholder="Password" />
          <input className={s.input} type="password" placeholder="Confirm password" />

          <div style={{ height: '2vw', marginBottom: '15px' }} className="selectOption">
            <select style={
              {
                height: '100%',
                width: '100%',
                padding: '4px 3px',
                outline: 'none',
                borderRadius: '4px',
              }} name="regions" id="regions">
              <option className={s.option} value="asgabat">Asgabat</option>
              <option className={s.option} value="balkan">Balkan</option>
              <option className={s.option} value="dasoguz">Dasoguz</option>
              <option className={s.option} value="lebap">Lebap</option>
              <option className={s.option} value="mary">Mary</option>
            </select>
          </div>
          {/* <input className={s.input} type="text" placeholder="Address" /> */}


          {data.status === 422 && <span className={s.error}>{data.errorMsg}</span>}
          {data.status === 200 && <span className={s.success}>User created successfully</span>}
          {data.status === 500 && <span className={s.success}>Internal server error</span>}

          <button className={s.btn} type="submit">Submit</button>
        </div>
      </form>
    </section>

  )

  // function validateForm() {
  //   const fullnameInput = document.getElementById('fullnameInput');
  //   const fullnameError = document.getElementById('fullnameError');
  //   const emailInput = document.getElementById('emailInput');
  //   const emailError = document.getElementById('emailError');
  //   const phoneNumberInput = document.getElementById('phoneNumberInput');
  //   const phoneNumberError = document.getElementById('phoneNumberError');
  //   const passwordInput = document.getElementById('passwordInput');
  //   const passwordError = document.getElementById('passwordError');
  //   const confirmPasswordInput = document.getElementById('confirmPasswordInput');
  //   const confirmPasswordError = document.getElementById('confirmPasswordError');
  //   const addressInput = document.getElementById('addressInput');
  //   const addressError = document.getElementById('addressError');

  //   // Validate fullname
  //   if (fullnameInput.value === '') {
  //     fullnameError.textContent = 'Please enter your fullname';
  //     fullnameInput.focus();
  //     return false;
  //   } else {
  //     fullnameError.textContent = '';
  //   }

  //   // Validate email
  //   const emailRegex = /^\S+@\S+\.\S+$/;
  //   if (!emailRegex.test(emailInput.value)) {
  //     emailError.textContent = 'Please enter a valid email address';
  //     emailInput.focus();
  //     return false;
  //   } else {
  //     emailError.textContent = '';
  //   }

  //   // Validate phone number
  //   if (phoneNumberInput.value === '') {
  //     phoneNumberError.textContent = 'Please enter your phone number';
  //     phoneNumberInput.focus();
  //     return false;
  //   } else {
  //     phoneNumberError.textContent = '';
  //   }

  //   // Validate password
  //   if (passwordInput.value === '') {
  //     passwordError.textContent = 'Please enter a password';
  //     passwordInput.focus();
  //     return false;
  //   } else if (passwordInput.value.length < 8) {
  //     passwordError.textContent = 'Password must be at least 8 characters long';
  //     passwordInput.focus();
  //     return false;
  //   } else {
  //     passwordError.textContent = '';
  //   }

  //   // Validate confirm password
  //   if (confirmPasswordInput.value === '') {
  //     confirmPasswordError.textContent = 'Please enter your password again';
  //     confirmPasswordInput.focus();
  //     return false;
  //   } else if (confirmPasswordInput.value !== passwordInput.value) {
  //     confirmPasswordError.textContent = 'Passwords must match';
  //     confirmPasswordInput.focus();
  //     return false;
  //   } else {
  //     confirmPasswordError.textContent = '';
  //   }

  //   // Validate address
  //   if (addressInput.value === '') {
  //     addressError.textContent = 'Please enter your address';
  //     addressInput.focus();
  //     return false;
  //   } else {
  //     addressError.textContent = '';
  //   }
  // }
}

export default SignUp
