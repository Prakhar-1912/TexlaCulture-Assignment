import React from "react";
import OnBoardedCompanies from "./OnBoardedCompanies";
import RegionalMetrics from "./RegionalMetrics";

const DashBoard = () => {
  return (
    <div>
      <div className="flex gap-[10px] mt-[25px] pb-[2px]">
        <div className="w-[45%] h-[150px] cursor-pointer transform hover:scale-[103%] transition duration-300 ease-out">
          <h1 className="pl-[15px]">key Performance Indicator</h1>
          <div className="grid grid-cols-3 gap-[15px] mt-[25px] p-[15px]  bg-white rounded-[8px] shadow-lg ">
            <div className="border-l-[4px] border-purple-600 pl-[8px]">
              <h1>Client Retention Rate</h1>
              <p>55%</p>
            </div>
            <div className="border-l-[4px] border-blue-600 pl-[8px]">
              <h1>Client Satisfaction</h1>
              <p>55%</p>
            </div>
            <div className="border-l-[4px] border-green-600 pl-[8px]">
              <h1>Revenue Generated</h1>
              <p>55%</p>
            </div>
          </div>
        </div>

        <div className=" w-[30%] h-[150px] cursor-pointer transform hover:scale-[103%] transition duration-300 ease-out">
          <h1 className="pl-[15px]">Companies Status</h1>
          <div className="grid grid-cols-3 mt-[25px] p-[15px]  bg-white rounded-[8px] shadow-lg">
            <div className="border-l-[4px] border-purple-600 pl-[8px]">
              <h1>Total</h1>
              <p>20</p>
            </div>
            <div className="border-l-[4px] border-blue-600 pl-[8px]">
              <h1>Active</h1>
              <p>15</p>
            </div>
            <div className="border-l-[4px] border-green-600 pl-[8px]">
              <h1>New</h1>
              <p>3</p>
            </div>
          </div>
        </div>
        <div className="w-[25%] h-[150px] cursor-pointer transform hover:scale-[103%] transition duration-300 ease-out">
          <h1 className="pl-[15px]">Active User Base</h1>
          <div className=" bg-white rounded-[8px] shadow-lg">
            <div className="grid grid-cols-2 mt-[15px] p-[10px] ">
              <div className="flex">
                <span className="bg-blue-800 rounded-full text-blue-800">
                  raja
                </span>
                <h1 className="pl-[8px]">89% App User</h1>
              </div>
              <div className="flex">
                <span className="bg-green-500 rounded-full text-green-500">
                  raja
                </span>
                <h1 className="pl-[8px]">11% Web User</h1>
              </div>
            </div>
            <div className="flex w-full gap-2 px-[15px] py-[12px]">
                <div className="flex-1 h-5 bg-blue-800 rounded-3xl"></div>
                <div className="w-11 h-5 bg-green-500 rounded-3xl"></div>
              </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-4 w-full">
          <OnBoardedCompanies />
          <RegionalMetrics />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
