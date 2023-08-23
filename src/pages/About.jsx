import React from 'react'
import Benefits from '../components/Benefits'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonies from '../components/Testimonies'

function About() {
  return (
    <div>
      <Header />
      <div className="mt-4 p-4">
        <p className="font-bold text-2xl text-center">About Us</p>
        <div className="shadow-xl p-4 w-[300px] md:w-[600px] m-auto rounded-xl">
          <p className="text-xs md:text-base">
            Honeyland Welfare Society was established in 2009 at the Ipaja
            branch of Honeyland Schools with just few members and over the
            years, membership has grown to about three hundred and six {`(306)`}{" "}
            as at 2023, excluding members who have disengaged from the services
            of the Honeyland Schools. Membership is drawn from the six campuses
            of Honeyland schools as well as Ross College. Membership is open
            only to any staff member of the Honeyland Schools and Ross College
            on permanent appointment.
          </p>
          <div className="mt-4">
            <p className='font-bold p-4'>Our Mission</p>
            <p className="text-xs md:text-base">
              To enhance qualitative life for members through cooperative
              multipurpose operations and timely provision of a readily
              available/easily accessible financial solutions.
            </p>
          </div>
          <div className="mt-4">
            <p className='font-bold p-4'>Our Vision</p>
            <p className="text-xs md:text-base">
              To be a a leading Cooperative Society of high standard, playing a
              major role in providing financial solutions (and otherwise)
              towards economic empowerment, sustainability and well-being of
              members, thereby impacting on their lives for a better future.
            </p>
          </div>
          <div className="mt-4">
            <p className='font-bold p-4'>Our Operations</p>
            <p className="text-xs md:text-base">
              The major operation of our Cooperative Society is the granting of
              Normal Loan, Equipment Loan, as well as returns on various
              Investments ventured into by the cooperative. In addition, the
              Society engages in periodic Commodity Sales of Bags of Rice,
              Gallons of Vegetable Oil, to members as a form of welfare package
              during festive periods.
            </p>
          </div>
        </div>
      </div>
      <Benefits />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default About