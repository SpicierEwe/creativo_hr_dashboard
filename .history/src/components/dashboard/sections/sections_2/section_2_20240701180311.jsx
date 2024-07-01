import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import CustomPieChart from "./charts/pie_chart";
import CustomBarChart from "./charts/bar_chart";

export default function Section2() {
  return (
    <div className="flex flex-col 2xl:flex-row w-full  gap-10 mt-7 justify-between ">
      {/* =================== 
      Pie Chart
        =========================*/}
      <div className="bg-primary w-fit rounded-xl">
        <div className="flex flex-col lg:flex-row  gap-3 lg:justify-between p-5 text-start lg:items-center ">
          <h2 className="font-bold">Working Format</h2>
          <button className=" flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Today
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="relative">
          <CustomPieChart />
        </div>
      </div>
      {/* bar stats */}
      <div className="bg-primary p-2 rounded-2xl w-full ">
        <div className="flex flex-col lg:flex-row w-fit lg:w-full gap-3 lg:justify-between p-5">
          <div className="text-xl text-start flex flex-col gap-5  ">
            <h2 className="">Orders</h2>
            <h2 className="text-[#ff814a] text-3xl">189k</h2>
          </div>

          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar">
          <CustomBarChart />
        </div>
      </div>{" "}
      <div className="bg-primary p-2 rounded-2xl w-full ">
        <div className="flex flex-col lg:flex-row w-fit lg:w-full gap-3 lg:justify-between p-5">
          <div className="text-xl text-start flex flex-col gap-5  ">
            <h2 className="">Orders</h2>
            <h2 className="text-[#ff814a] text-3xl">189k</h2>
          </div>

          <button className="btn flex justify-between items-center gap-2 bg-accent_light p-1 px-2 rounded-lg w-fit">
            Week
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <div className="overflow-auto hide-scrollbar">
          <CustomBarChart />
        </div>
      </div>
    </div>
  );
}
