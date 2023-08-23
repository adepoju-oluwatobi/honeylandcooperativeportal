import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

function LoanForm() {
    const navigate = useNavigate();
    function goback(){
        navigate('/dashboard');
    }
  return (
    <div>
      <Header />
      <div className="h-auto p-4 bg-[url(./assets/loan-bg.jpg)] text-white">
        <p className="text-center font-bold text-3xl p-4">Loan Application Form</p>
        <p className="underline font-bold p-2 text-center bg-green-500 text-slate-100 mb-4 w-[250px] md:w-[350px] m-auto">
            <span className="text-lg">Note:</span>You can only access 70% of
            your total savings as loan!
          </p>
        <form action="">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter your own home address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="amount of loan you are applying for"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Purpose of loan"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Terms of payment"
            className="w-[100%]"
            required
          />
          <p>
            <span className="text-lg underline font-bold">Guarantors</span>{" "}
            <span className="font-bold">{`(Note that the guarantors would be contacted upon verification of loan, provide only valid contacts.)`}</span>
          </p>
          <p className="bg-black text-white p-2 w-fit rounded-lg my-4">
            First Guarantor
          </p>
          <input
            type="text"
            placeholder="Enter name of guarntor"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's Phone Number"
            className="w-[100%]"
            required
          />
          <p className="bg-black text-white p-2 w-fit rounded-lg my-4">
            second Guarantor
          </p>
          <input
            type="text"
            placeholder="Enter name of guarntor"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's Phone Number"
            className="w-[100%]"
            required
          />
          <p className="p-4">Next of Kin</p>
           <input
            type="text"
            placeholder="Name"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-[100%]"
            required
          />
          <p>Upload proof of payment</p>
        <input type="file" className="w-[100%] text-sm"/>
            <input type="submit"  className="bg-black text-white ml-[-10px]"/>
        </form>
        <div className="p-4 text-center flex justify-center">
             <p onClick={goback} className="p-2 bg-red-400 w-[260px] px-4 rounded-lg">Cancel and go Back</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoanForm;
