import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { server_cooperative } from "../server";

function Add() {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    email: "",
    available_balance: "",
    monthly_saving: "",
    loan_amount: "",
    loan_balance: "",
    monthly_deduction: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const document_cookies = window.localStorage.getItem("admin_token");
    //var token = document_cookies.split("=")[1];
    console.log(document_cookies)
    var config = {
      headers: {
        Authorization: `Bearer ${document_cookies}`,
      },
    };

    axios
      .post(`${server_cooperative}`, inputData, config)
      .then((res) => {
        toast.success("Data added successfully");
        navigate("/admin-dashboard");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-auto bg-no-repeat bg-cover">
        <p className="text-center font-bold text-3xl pt-[20px]">
          Register a new member
        </p>
        <div className="pb-4">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col w-fit bg bg-opacity-50 m-auto bg-black p-4 mt-4"
          >
            <input
              placeholder="Members Name"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
              required
            />
            <input
              placeholder="Email"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              required
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
              required
            />
            <input
              placeholder="Monthly Savings"
              type="number"
              onChange={(e) =>
                setInputData({ ...inputData, monthly_saving: e.target.value })
              }
              required
            />
            <input
              placeholder="Loan Amount"
              type="number"
              onChange={(e) =>
                setInputData({ ...inputData, loan_amount: e.target.value })
              }
            />
            <input
              placeholder="Loan Balance"
              type="number"
              onChange={(e) =>
                setInputData({ ...inputData, loan_balance: e.target.value })
              }
            />
            <input
              placeholder="Loan Monthly Deduction"
              type="number"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  monthly_deduction: e.target.value,
                })
              }
            />
            <input
              placeholder="Available Balance"
              type="number"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  available_balance: e.target.value,
                })
              }
            />
            <input
              type="submit"
              className="bg-violet-500 border-0 text-white p-2 cursor-pointer"
            />
          </form>
          <Link to="/admin-dashboard">
            <div className="flex justify-center">
              <p className="p-2 bg-red-500 w-[80px] text-white rounded-lg text-center mt-4">
                Back
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Add;
