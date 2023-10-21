import React, { useState } from "react";
import DashBoard from "./DashBoard";
import { ClientDetails } from "./ClientDetails";

const Body = () => {
  const [openDashboard,setOpenDasboard]=useState(true);
  const [openClientDetail,setopenClientDetail]=useState(false);

  const handleDashboardClick = () => {
    setOpenDasboard(true);
    setopenClientDetail(false);
  }

  const handleClientClick = () => {
    setopenClientDetail(true);
    setOpenDasboard(false);
  }

  return (
    <div  className="pt-[25px] px-[25px]">
      <div className="pb-[10px]">
        <h1 className="text-[24px] leading-[34px] font-semibold cursor-pointer">
          Client Managment
        </h1>
      </div>
      <div className="flex gap-[10px]">
        <button className="text-[18px] leading-[34px] font-normal cursor-pointer border-b-2 border-b-green-700" onClick={handleDashboardClick}>DashBoard</button>
        <button className="text-[18px] leading-[34px] font-normal cursor-pointer" onClick={handleClientClick}>Client Details</button>
      </div>
        { openDashboard ? <DashBoard /> : <ClientDetails />}
    </div>
  );
};

export default Body;
