import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import avatar from "../assests/Avatar.png";
import { getCompanyStatus } from "../utils";
import { FaSearch } from "react-icons/fa";

const OnBoardedCompaniesData = [
  {
    company_name: "Texlaculture",
    company_number: "INV-17048",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "244",
    Last_billing: "07 Aug 2022",
    Status: "Active",
  },
  {
    company_name: "Pinch Life",
    company_number: "INV-17049",
    Onboarding_date: "11 Feb 2022",
    GoLive_date: "07 May 2022",
    Total_user_balance: "1000",
    Last_billing: "07 Aug 2022",
    Status: "Active",
  },
  {
    company_name: "O Buddy",
    company_number: "INV-17948",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "144",
    Last_billing: "07 Aug 2022",
    Status: "Draft",
  },
  {
    company_name: "Oracle",
    company_number: "INV-18045",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "244",
    Last_billing: "07 Aug 2022",
    Status: "Draft",
  },
  {
    company_name: "Swiggy",
    company_number: "INV-17048",
    Onboarding_date: "11 Feb 2022",
    GoLive_date: "07 May 2022",
    Total_user_balance: "1000",
    Last_billing: "07 Aug 2022",
    Status: "Active",
  },
  {
    company_name: "O Buddy",
    company_number: "INV-17988",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "144",
    Last_billing: "07 Aug 2022",
    Status: "Active",
  },
  {
    company_name: "Tesla Corporation",
    company_number: "INV-18048",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "244",
    Last_billing: "07 Aug 2022",
    Status: "Draft",
  },
  {
    company_name: "Adobe",
    company_number: "INV-19048",
    Onboarding_date: "11 Feb 2022",
    GoLive_date: "07 May 2022",
    Total_user_balance: "1000",
    Last_billing: "07 Aug 2022",
    Status: "Active",
  },
  {
    company_name: "Amazon",
    company_number: "INV-47048",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "144",
    Last_billing: "07 Aug 2022",
    Status: "Draft",
  },
  {
    company_name: "Google",
    company_number: "INV-17948",
    Onboarding_date: "12 jan 2022",
    GoLive_date: "07 Aug 2022",
    Total_user_balance: "144",
    Last_billing: "07 Aug 2022",
    Status: "Active",
  },
];

const OnBoardedCompanies = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState("ALL");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = OnBoardedCompaniesData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(OnBoardedCompaniesData.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const columnColors = ["bg-red-100", "bg-blue-100", "bg-green-100"];

  return (
    <div className="bg-white px-4 pb-2 rounded-[8px] shadow-lg flex-1">
      <div className="border-gray border-b-[1px] pb-1">
        <h1 className="text-lg font-semibold ">OnBoarded Companies</h1>
      </div>
      <div className="flex gap-3 w-full pt-4">
        <div className="relative inline-block w-[8rem]">
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="block bg-white border border-gray-300 p-2 rounded text-gray-700 text-sm"
          >
            <option value="ALL">ALL</option>
            <option value="Commercial">Commercial</option>
            <option value="Domestic">Domestic</option>
          </select>
        </div>
        <div className="flex items-center bg-white border border-gray-300 rounded flex-1">
          <FaSearch className="ml-2" color="gray" />
          <input
            type="text"
            className="h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[15px] leading-[20px] font-normal"
            placeholder="Search Client or invoice number..."
          />
        </div>
      </div>
      <div className="mt-3">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <td className="p-3">Company Name</td>
              <td className="p-3">Onboarding date</td>
              <td className="p-3">Go-Live Date</td>
              <td className="p-3">Total User base</td>
              <td className="p-3">Last Billing</td>
              <td className="p-3">Status</td>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((company, index) => (
              <tr key={index}>
                <td
                  className={`p-4 ${columnColors[index % columnColors.length]}`}
                >
                  <div className={`flex items-center`}>
                    <img className="p-2" src={avatar} alt="company-logo" />
                    <div className="flex flex-col">
                      <p>{company.company_name}</p>
                      <p>{company.company_number}</p>
                    </div>
                  </div>
                </td>
                <td className="text-center">{company.Onboarding_date}</td>
                <td className="text-center">{company.GoLive_date}</td>
                <td className="text-center">{company.Total_user_balance}</td>
                <td className="text-center">{company.Last_billing}</td>
                <td className="text-center">
                  {getCompanyStatus(company.Status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end ">
        <div className="pr-10">
          {currentPage} - {totalPages} of {totalPages}
        </div>
        <div>
          <FaChevronLeft
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="cursor-pointer disabled:opacity-50  text-gray-600 mr-10"
          />
        </div>
        <div>
          
            <FaChevronRight 
                 onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages} 
                className="cursor-pointer disabled:opacity-50 text-gray-600"
            />
         
        </div>
      </div>
    </div>
  );
};

export default OnBoardedCompanies;
