import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { server } from "../server";
import Header from "../components/Header";
import { coperativeUserContext } from "../components/Context";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Dashboard from "./Dashboard";

function AdminRegistration() {
  const { name, setName, email, setEmail, password, setPassword } = useContext(
    coperativeUserContext
  );
  const navigate = useNavigate();


  //************************************************************************************ */
  async function registerFunction(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${server}/registration`, {
        username: name,
        email: email,
        password: password,
      });
      toast.success(
        `${res.data.users.name} Your account have been successfully created`
      );
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <div>
      <div className="bg-[url(./assets/login-background-mobile.png)] bg-cover bg-no-repeat h-[100vh] w-full">
        <Header />
        <div></div>
        <div className="mt-6">
          <p className="heading text-center mb-4">Admin Registration</p>
          <form action="" className="text-center" onSubmit={registerFunction}>
            <div>
              <input
                type="text"
                placeholder="Enter your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/**
            *  <label className='text-white' htmlFor="proof of payment">Upload proof of payment</label>
            <div> <input className='w-[200px] text-white text-xs' type="file" placeholder='Upload' /></div>
            */}
            <div id="register">
              {" "}
              <button className="primary-btn">Register</button>
            </div>

            <div className="text-xs mt-4">
              <p className="text-white">
                Already a member?
                <Link className="text-blue-500" to="/login">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminRegistration;
