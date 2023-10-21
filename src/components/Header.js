import React from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import {GiUsaFlag} from "react-icons/gi";
import  profile  from "../assests/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg h-[70px] px-[25px]">
      <div className="flex items-center rounded-[5px]">
        <FaSearch />
        <input
          type="text"
          className="h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
        />
      </div>
      <div className="flex items-center relative">
        <div className="flex items-center gap-[25px] pr-[25px]">
          <GiUsaFlag size={"1.5rem"} />
          <FaRegBell size={"1.5rem"} color="grey"/>
          <BsPeopleFill size={"1.5rem"} color="grey"/>
        </div>
        <div className="h-[50px] w-[50px] rounded-full cursor-pointer flex items-center justify-center relative">
            <img className="rounded-full"  src={profile} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Header;
