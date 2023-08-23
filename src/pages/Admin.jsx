import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { coperativeUserContext } from "../components/Context";
import axios from "axios";
import { server } from "../server";

function Admin() {
  // Retrieve 'email' and 'password' states from the context
  const { email, setEmail, password, setPassword } = useContext(
    coperativeUserContext
  );

  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Handle login function when form is submitted
  async function loginFunction(e) {
    e.preventDefault();
    try {
      // Send a POST request to the server to perform login
      let res = await axios.post(`${server}/login`, {
        email: email,
        password: password,
      });

      // Display a success toast with the user's name
      toast.success(`Welcome ${res.data.users.name}`);
      window.localStorage.setItem("admin_token", res.data.token)
      // Navigate to the admin dashboard
      navigate("/admin-dashboard");
    } catch (error) {
      // Display an alert if there's an error
      alert(error.message);
    }
  }

  // Render the login form

  return (
    <div className="bg-[url(./assets/login-background-mobile.png)] bg-cover h-[100vh] w-full">
      <Header />
      <div className="mt-10">
        <p className="heading text-center">Admin Login</p>
        <form action="" className="text-center mt-4" onSubmit={loginFunction}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <button className="primary-btn">Login</button>
          </div>

          <div className="text-xs mt-4">
            <p className="text-blue-500 uderline">
              <Link>Forgot your password?</Link>
            </p>
            <p className="text-white">
              Login as{" "}
              <Link className="text-blue-500" to="/login">
                Member
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin