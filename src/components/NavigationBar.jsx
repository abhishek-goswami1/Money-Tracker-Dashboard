import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { IoMdAnalytics } from "react-icons/io";
import { TbTransactionRupee } from "react-icons/tb";
import { MdHelpCenter } from "react-icons/md";

const navlinks = [
  { name: "Dashboard", icon: <MdDashboard /> },
  { name: "Activity", icon: <RxActivityLog /> },
  { name: "Analytics", icon: <IoMdAnalytics /> },
  { name: "Transactions", icon: <TbTransactionRupee /> },
  { name: "Help Center", icon: <MdHelpCenter /> },
];

function NavigationBar() {
  const [activeNavIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-1/6 h-screen relative flex flex-col border border-r-1 px-10 py-12">
      <div className="flex space-x-2 items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://img.magnific.com/free-psd/money-illustration-isolated_23-2151568514.jpg"
          alt="Logo"
        />
        <span>Money Tracker</span>
      </div>

      <div className=" w-6 h-6 bg-[#ff8c8c] rounded-full absolute -right-[12px] top-12 flex itmes-center justify-center ">
        <rightArrow className=" text-white  w-3.75 " />
      </div>

      <div className="mt-10 flex flex-col space-y-8">
        {navlinks.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isVisuallyActive =
            activeNavIndex === index &&
            (hoveredIndex === null || hoveredIndex === index);

          return (
            <div
              key={index}
              className={`flex space-x-3 p-2 rounded cursor-pointer transition-all duration-200 items-center ${
                isVisuallyActive || isHovered
                  ? "bg-[#ff8c8c] text-white font-semibold"
                  : "text-gray-700"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
            >
              <span className="text-xl flex items-center">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavigationBar;
