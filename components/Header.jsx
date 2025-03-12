import React from "react";
import {
  RiNotification3Line,
  RiArrowDownWideFill,
} from "react-icons/ri";
import icon from "../public/icon.jpg";

const Header = () => {
  return (
    <header className="bg-[#1f2b3e] md:pl-78 text-white fixed left-0 top-0 w-full p-8 flex justify-end items-center border-b border-gray-500">
      <ul className="flex items-center gap-4">
        <li className="cursor-pointer">
          {" "}
          <RiNotification3Line className="text-lg" />
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <img
            src={icon}
            alt=""
            className="w-8 h-8 object-cover rounded-full ring-2 ring-gray-300"
          />{" "}
          User <RiArrowDownWideFill />{" "}
        </li>
      </ul>
    </header>
  );
};

export default Header;
