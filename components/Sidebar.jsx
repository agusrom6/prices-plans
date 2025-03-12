import React from "react";
import { useState } from "react";

import {
  RiDashboardFill,
  RiGlobalLine,
  RiArrowDownWideFill,
  RiMessage3Line,
  RiCalendar2Line,
  RiSettings5Line,
  RiCheckboxBlankCircleFill,
  RiArrowUpWideFill,
  RiLoginCircleLine,
  RiMenuFill,
  RiCloseLargeFill,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShoeMenu] = useState(false);

  const toggleMenu = () => {
    setShoeMenu(!showMenu);
  };
  return (
    <>
      <sidebar
        className={`bg-[#1f2b3e] fixed ${
          showMenu ? "-left-0" : "-left-full"
        } transition-all lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between z-50`}
      >
        <div>
          {/* logo */}
          <div className="mb-8">
            <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
              Logo
            </h1>
          </div>
          {/* nav */}
          <nav>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiDashboardFill /> Analytic
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiGlobalLine /> Social media
              <span>
                <RiArrowDownWideFill />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiMessage3Line /> Message
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiCalendar2Line /> Schedule
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 text-gray-200 py-2 hover:text-gray-200 transition-colors"
            >
              <span className="flex items-center gap-4">
                <RiSettings5Line />
                <div className="flex-1 flex items-center justify-between">
                  Settings <RiArrowUpWideFill />
                </div>
              </span>
              <nav className="border-l border-gray-600 flex flex-col ml-2">
                <a href="" className="pl-8 relative py-2 text-gray-300">
                  <RiCheckboxBlankCircleFill className="absolute -left-1 text-orange-600 text-[8px]  top-[50%] translate-y-[-50%] ring-4 ring-[#1f2b3e] bg-[#1e1f24] rounded-full" />
                  Plan
                </a>
                <a href="" className="pl-8 relative text-gray-400">
                  <RiCheckboxBlankCircleFill className="absolute -left-1 text-[8px] top-[50%]  translate-y-[-50%] ring-4 ring-[#1f2b3e] rounded-full bg-[#1f2b3e]" />
                  Security
                </a>
              </nav>
            </a>
          </nav>
        </div>
        <div>
          <a
            href="#"
            className="flex items-center text-gray-400 gap-4 hover:text-gray-200 transition-colors"
          >
            <RiLoginCircleLine />
            Logout
          </a>
        </div>
      </sidebar>

      {/* btn responsive */}
      <button
        onClick={toggleMenu}
        className="fixed lg:hidden right-4 bottom-4 bg-[#1e1f24]  text-orange-600 text-2xl p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLargeFill /> : <RiMenuFill />}
      </button>
    </>
  );
};

export default Sidebar;
