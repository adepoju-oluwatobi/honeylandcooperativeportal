import React from 'react';
import { useState,useContext } from 'react';
import axios from 'axios';
import {server} from '../server';
import Header from '../components/Header';
import {coperativeUserContext} from '../components/Context'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard';

function Register() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState(""); 
    
    const {name, setName, email, setEmail, password, setPassword} = useContext(coperativeUserContext)
    const navigate = useNavigate();

    //for registration page info
    let regInfo = document.getElementById('reg-info')
    let regInfoCloseBtn = document.getElementById('reg-info-close-btn')

    function regInfoClose(){
        regInfo = document.getElementById('reg-info').style.display = "none"
        regInfoCloseBtn = document.getElementById('reg-info-close-btn').style.display = "none"
    }
    //************************************************************************************ */
    async function registerFunction(e)
    {
      e.preventDefault(); 
     try {
        let res = await axios.post(`${server}/registration`, {
            username: name,
            email: email,
            password: password
        })
        toast.success(`${res.data.users.name} Your account have been successfully created`);
        navigate("/login");
     } catch (error) {
        toast.error(error.response.data.msg);
     } 
     setEmail('');
     setName('');
     setPassword('');
}

  return (
   <div>
     <div className='bg-[url(./assets/login-background-mobile.png)] bg-cover bg-no-repeat h-[100vh] w-full'>
        <Header />
        <div>
                <div id='reg-info' className='container bg-white w-[300px] m-auto mt-4 text-xs flex justify-center items-center'>
                    <p>
                        Please understand that you are to pay a sum of 1000 naira to this <Link className='text-blue-500' to='/account'>account</Link> before proceeding.
                    </p>
                    <div id='reg-info-close-btn' onClick={regInfoClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        <div className='mt-6'>
        <p className='heading text-center mb-4'>Register</p>
        <form action="" className='text-center' onSubmit={registerFunction}>
            <div>
                 <input
                  type="text" 
                  placeholder='Enter your Full Name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
            </div>

            <div>
                <input 
                type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
            <div> 
                <input 
                type="password" 
                placeholder='Enter your password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
           {/**
            *  <label className='text-white' htmlFor="proof of payment">Upload proof of payment</label>
            <div> <input className='w-[200px] text-white text-xs' type="file" placeholder='Upload' /></div>
            */}
           <div id='register'> <button className='primary-btn'>Register</button></div>

           <div className='text-xs mt-4'>
           <p className='text-white'>Already a member?<Link className='text-blue-500' to='/login'>Login here</Link></p>
         </div>
        </form>
        </div>
    </div>
    <Footer />
   </div>
   
  )
}

export default Register