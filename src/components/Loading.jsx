import React from 'react'
import Header from './Header';

function Loading() {
  return (
    <div>
        <Header />
      <div className=" flex justify-center items-center h-[100vh]">
        <p className="w-[150px] h-[150px] bg-black text-white rounded-full text-center p-4 flex justify-center items-center font-bold shadow-xl text-xl">
          {" "}
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loading