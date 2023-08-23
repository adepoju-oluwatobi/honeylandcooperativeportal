import React from 'react'
import ErrorImg from '../assets/error-image.jpeg'
import Header from './Header';
import Footer from './Footer';

function Error() {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center h-[100vh]'>
        <div className="">
          <div className="flex justify-center">
            <img src={ErrorImg} alt="error img" />
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">
              We are sorry, data could not be fetched.
            </p>
            <p className="underline">Things you can try</p>
            <p>Check if you are connected to the internet</p>
            <p>Try reloading the page</p>
            <p>If error persist, contact the developer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error