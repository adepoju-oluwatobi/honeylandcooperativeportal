import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import UnderConst from '../assets/under-construction-sign-vector.jpg'

function UnderConstruction() {
  return (
   <div>
    <Header />
     <div className='w-fit h-screen m-auto mt-[10%]'>
       <img className='w-[100%]' src={UnderConst} alt="" />
        <p 
        className='p-4 text-white bg-black w-fit rounded-lg m-auto my-4 cursor-pointer'>
            <Link to='/login'>Go back to Login</Link></p>
    </div>
   </div>
  )
}

export default UnderConstruction