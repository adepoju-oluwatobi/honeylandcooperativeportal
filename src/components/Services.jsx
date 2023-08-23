import React from 'react'
import SavingsImg from '../assets/savings-img.png'
import LoanImg from "../assets/loan-img.jpg"
import PurchaseImg from "../assets/purchase-img-3.jpg"
import { Link } from 'react-router-dom'

function Services() {
    let card_1 = document.getElementById('card-1')
    let card_2 = document.getElementById('card-2')
    let card_3 = document.getElementById('card-3')
    let s = document.getElementById('s')
    let l = document.getElementById('l')
    let p = document.getElementById('p')

    function savings(){
        card_1 = document.getElementById('card-1').style.display = ""
        card_2 = document.getElementById('card-2').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "none"
        s = document.getElementById('s').style.background = "#8EAC90"
        s = document.getElementById('s').style.color = "white"
        l = document.getElementById('l').style.background = "none"
        l = document.getElementById('l').style.color = "black"
        p = document.getElementById('p').style.background = "none"
        p = document.getElementById('p').style.color = "black"
       

    }

    function loan(){
        card_2 = document.getElementById('card-2').style.display = "flex"
        card_1 = document.getElementById('card-1').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "none"
        s = document.getElementById('s').style.background = "none"
        s = document.getElementById('s').style.color = "black"
        l = document.getElementById('l').style.background = "#8EAC90"
        l = document.getElementById('l').style.color = "white"
        p = document.getElementById('p').style.background = "none"
        p = document.getElementById('p').style.color = "black"
    }

    function purchase(){
        card_1 = document.getElementById('card-1').style.display = "none"
        card_2 = document.getElementById('card-2').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "flex"
        s = document.getElementById('s').style.background = "none"
        s = document.getElementById('s').style.color = "black"
        l = document.getElementById('l').style.background = "none"
        l = document.getElementById('l').style.color = "black"
        p = document.getElementById('p').style.background = "#8EAC90"
        p = document.getElementById('p').style.color = "white"
       
    }
  return (
    <div className="hidden md:block">
      <p className="md:text-3xl md:mt-4 font-bold text-center">Services</p>

      <div className="flex gap-4 justify-center mt-2">
        <div
          className="service-tab-title text-white bg-black cursor-pointer transition-all duration-[300] ease-in-out"
          id="s"
          onClick={savings}
        >
          Savings
        </div>
        <div
          className="service-tab-title text-black border-b border-black cursor-pointer transition-all duration-[300] ease-in-out"
          id="l"
          onClick={loan}
        >
          Loan
        </div>
        <div
          className="service-tab-title text-black border-b border-black cursor-pointer transition-all duration-[300] ease-in-out"
          id="p"
          onClick={purchase}
        >
          Purchases
        </div>
      </div>

      <div className="p-4 md:flex justify-center" id="card-1">
        <div>
          <img
            className="services-img transition-all duration-[300] ease-in-out"
            src={SavingsImg}
            alt=""
          />
        </div>
        <div className="pl-4 flex flex-col justify-between items-center md:items-start gap-4">
          <div>
            <p className="w-[40ch] text-center md:text-left text-xs md:text-sm mt-4">
              “By Definition, Saving – For Anything – Requires Us To Not Get
              Things Now So That We Can Get Bigger Ones Later.”
              <p className="font-bold py-2"> — Jean Chatzky </p>
              <p>Let's get you started with as little as possible.</p>
            </p>
          </div>
          <div>
            <Link to="/contact">
              <button className="service-tab-title bg-black text-white">
                Start Savings
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 justify-center hidden" id="card-2">
        <div>
          <img className="services-img" src={LoanImg} alt="" />
        </div>
        <div className="pl-4 flex flex-col justify-between items-center md:items-start gap-4">
          <div>
            <p className="w-[40ch] text-center md:text-left text-xs md:text-sm mt-4">
              Our low interest rate loan facility has over the years helped
              increase the welfare of our members.
              <p className="font-bold py-2 text-lg">Apply for one now!</p>
            </p>
          </div>
          <div>
            <Link to="/login">
              <button className="service-tab-title bg-black text-white">
                Get a Loan
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 justify-center flex-row hidden" id="card-3">
        <div>
          <img className="services-img" src={PurchaseImg} alt="" />
        </div>
        <div className="pl-4 flex flex-col justify-between items-center md:items-start gap-4">
          <div>
            <p className="w-[40ch] text-center md:text-left text-xs md:text-sm mt-4">
              With access to appliances and edibles purchases credit facilities,
              you can get to increase your standard of living.
            </p>
          </div>
          <div>
            <Link to="/login">
              <button className="service-tab-title bg-black text-white hover:bg-green-700">
                Make a Purchase
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services