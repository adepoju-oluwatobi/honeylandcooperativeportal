import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { server_cooperative } from "../server";

function EditUser() {
  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Retrieve the user's authentication token from cookies
  const document_cookies = window.localStorage.getItem("admin_token");
  // var token = document_cookies.split("=")[1];

  // Set up the axios request configuration with the token
  var config = {
    headers: {
      Authorization: `Bearer ${document_cookies}`,
    },
  };

  // Fetch the user data when the component mounts
  useEffect(() => {
    axios
      .get(`${server_cooperative}/${id}`, config)
      .then((res) => {
        // Update the state with the fetched user data
        res.data.msg.data.map((data) => {
          setData(data);
          return data._id;
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle the form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Send a patch request to update the user data
    axios.patch(`${server_cooperative}/${id}`, data, config).then((res) => {
      // Display a success toast message
      toast.info("Data updated successfully!");
      // Navigate back to the dashboard
      navigate("/admin-dashboard");
    });
  }
  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-[100vh] bg-no-repeat bg-cover pt-[5%]">
        <div>
          <form
            action=""
            className="flex flex-col w-fit m-auto bg-black bg-opacity-60 p-4"
            onSubmit={handleSubmit}
          >
            <input placeholder="ID" type="text" value={data._id} disabled />
            <input
              placeholder="Members Name"
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              placeholder="Monthly Savings"
              type="number"
              value={data.monthly_saving}
              onChange={(e) =>
                setData({ ...data, monthly_saving: e.target.value })
              }
            />
            <input
              placeholder="Loan Amount"
              type="number"
              value={data.loan_amount}
              onChange={(e) =>
                setData({ ...data, loan_amount: e.target.value })
              }
            />
            <input
              placeholder="Loan Balance"
              type="number"
              value={data.loan_balance}
              onChange={(e) =>
                setData({ ...data, loan_balance: e.target.value })
              }
            />
            <input
              placeholder="Loan Monthly Deduction"
              type="number"
              value={data.monthly_deduction}
              onChange={(e) =>
                setData({ ...data, monthly_deduction: e.target.value })
              }
            />
            <input
              placeholder="Available Balance"
              type="number"
              value={data.available_balance}
              onChange={(e) =>
                setData({ ...data, available_balance: e.target.value })
              }
            />
            <button className="bg-violet-500 border-0 text-white p-2 cursor-pointer rounded-xl">
              Update
            </button>
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

export default EditUser;
