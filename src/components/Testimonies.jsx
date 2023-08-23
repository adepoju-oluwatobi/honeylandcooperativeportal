import React from 'react'
import CustomerImg from '../assets/dummy-off3.png'
import CustomerImg2 from '../assets/dummy-off2.png'

function Testimonies() {
    let scrollLeftBtn = document.getElementById('scroll-left-btn')
    let scrollRightBtn = document.getElementById('scroll-right-btn')
    let testimonyTab1 = document.getElementById('testimony-tab-1')
    let testimonyTab2 = document.getElementById('testimony-tab-2')
    let testimonyTab3 = document.getElementById('testimony-tab-3')

    function scrollLeft()
    {

    }

    function scrollRight()
    {
        
    }
  return (
    <div>
        <p className='md:text-3xl text-2xl mt-8 font-bold text-center'>Testimonies</p>
        <p className='text-xs text-center'>Hear from or valued members</p>

        <div className='flex justify-center items-center md:gap-4 mt-4 p-4'>
            <div className='cursor-pointer' id='scroll-left-btn' onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
             <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
            </svg>
            </div>

            <div className='bg-slate-600 p-8 rounded-lg w-[280px]' id='testimony-tab-1'>
                <p className='text-xs md:text-sm text-white'>
                “I want to appreciate the excos of this great society
                for rising for my help this year June. It happened that i needed to write an exam last month August , which i must pay the fees on/before July. I was so worried, i couldn’t apply for a loan because, i’m still owning, to cut the long
                </p>
               <div className='flex flex-col justify-center items-center'>
               <div className='w-[80px]'>
                <img src={CustomerImg} alt="" />
                </div>
                <div>
                    <p className='text-white'>FirstName <span className='font-bold text-slate-800'>LastName</span></p>
                </div>
               </div>
            </div>

            <div className='bg-slate-600 p-8 rounded-lg w-[280px] hidden' id='testimony-tab-1'>
                <p className='text-xs md:text-sm text-white'>
                “I want to appreciate the excos of this great society
                for rising for my help this year June. It happened that i needed to write an exam last month August , which i must pay the fees on/before July. I was so worried, i couldn’t apply for a loan because, i’m still owning, to cut the long
                </p>
               <div className='flex flex-col justify-center items-center'>
               <div className='w-[80px]'>
                <img src={CustomerImg2} alt="" />
                </div>
                <div>
                    <p className='text-white'>FirstName <span className='font-bold text-slate-800'>LastName</span></p>
                </div>
               </div>
            </div>

            <div className='bg-slate-600 p-8 rounded-lg w-[280px] hidden' id='testimony-tab-1'>
                <p className='text-xs md:text-sm text-white'>
                “I want to appreciate the excos of this great society
                for rising for my help this year June. It happened that i needed to write an exam last month August , which i must pay the fees on/before July. I was so worried, i couldn’t apply for a loan because, i’m still owning, to cut the long
                </p>
               <div className='flex flex-col justify-center items-center'>
               <div className='w-[80px]'>
                <img src={CustomerImg} alt="" />
                </div>
                <div>
                    <p className='text-white'>FirstName <span className='font-bold text-slate-800'>LastName</span></p>
                </div>
               </div>
            </div>

            <div className='cursor-pointer' id='scroll-right-btn' onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
            </svg>
            </div>
        </div>
    </div>
  )
}

export default Testimonies