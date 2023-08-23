import React from 'react'
import Services from '../components/Services'
import Header from '../components/Header'
import ServicesMobile from '../components/ServicesMobile'
import Benefits from '../components/Benefits'
import { Link } from 'react-router-dom'
import Testimonies from '../components/Testimonies'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="">
      <Header />
      <div className="bg-[url(./assets/mobile-hero.png)] md:bg-[url(./assets/Hero-Background.png)] h-[50vh] md:h-[80vh] w-[100%] bg-cover bg-no-repeat text-white ">
        <div className='flex flex-col justify-center items-center'>
          <p className="hero-heading pt-[10%] md:pt-[15%] lg:pt-[] w-[20ch] m-auto mb-4 md:text-3xl">
            Enrich your future with our flexible saving plan
          </p>

          <p className="hero-desc pb-2 md:text-sm">
            We understand the difficulty in saving in an economy that is not so
            pocket friendly and that why we are here. Choose from our flexible
            plans to begin saving for the future.
          </p>

          <Link to="/about">
            <p className="hero-btn cursor-pointer">Know More</p>
          </Link>
        </div>
      </div>
      <Services />
      <ServicesMobile />
      <Benefits />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default HomePage