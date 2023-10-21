import React, { useState } from "react";
import logo from "../assests/logo.png";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TfiDashboard } from "react-icons/tfi";
import { FaChevronRight,FaChevronDown } from "react-icons/fa";
const Sidebar = () => {
    const [open,setOpen] = useState(false);
    const handleClick = () => {
        if(open===false) setOpen(true);
        else if(open===true) setOpen(false);
    }
  return (
    <div className="h-screen px-[25px]">
      <div className="flex justify-center text-center px-[15px] pb-[70px] pt-[30px]">
        <img className="cursor-pointer" src={logo} alt="sidebar-logo" />
      </div>
      <div className="flex justify-start text-left ">
        <p className="text-base">GENERAL</p>
      </div>

      <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
        <div className="flex items-center gap-[15px]">
          <TfiDashboard size={"1.5rem"} />
          <p className="text-lg"> Dashboard</p>
        </div>
        {open?(<FaChevronDown onClick={handleClick}/>):(<FaChevronRight onClick={handleClick}/>)}
      </div>
      {open && (<div>
      <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
        <div className="flex items-center gap-[15px]">
        <HiOutlineBuildingLibrary size={"1.5rem"} />
          <p className="text-lg">Companies</p>
        </div>
        <FaChevronRight />
      </div>
      <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
        <div className="flex items-center gap-[15px]">
        <HiOutlineBuildingLibrary size={"1.5rem"} />
          <p className="text-lg">Supports and Tickets</p>
        </div>
        <FaChevronRight />
      </div>
      <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
        <div className="flex items-center gap-[15px]">
        <HiOutlineBuildingLibrary size={"1.5rem"} />
          <p className="text-lg">User Admins</p>
        </div>
        <FaChevronRight />
      </div>
      </div>)}
    </div>
  );
};

export default Sidebar;
