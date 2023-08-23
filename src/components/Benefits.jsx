import React from "react";
import Officials from "./Officials";

function Benefits() {
  return (
    <div className="bg-[url(./assets/Our-official-background.png)] bg-cover bg-no-repeat p-4">
      <p className="md:text-3xl text-2xl mt-4 font-bold text-center">
        Benefits
      </p>
      <div className="flex flex-wrap gap-2 justify-center items-center mt-4 text-center">
        <div className="bg-white p-4  w-[200px] h-[180px] shadow-2xl flex flex-col gap-2 justify-center items-center rounded-lg">
          <p className="text-[#37733A] font-bold text-4xl">5%</p>
          <p>interest on loans within 12 months</p>
        </div>
        <div className="bg-white p-4  w-[200px] h-[180px] shadow-2xl flex flex-col gap-2 justify-center items-center rounded-lg">
          <p>
            Get{" "}
            <span className="text-[#37733A] font-bold text-lg">purchases</span>{" "}
            on loan twice a year
          </p>
        </div>
        <div className="bg-white p-4  w-[200px] h-[180px] shadow-2xl flex flex-col gap-2 justify-center items-center rounded-lg">
          <p>
            Get yearly{" "}
            <span className="text-[#37733A] font-bold text-lg">dividends</span>{" "}
            at the end of the year
          </p>
        </div>
      </div>
      <Officials />
    </div>
  );
}

export default Benefits;
