import React from "react";
import { FaHome } from "react-icons/fa";
import headerImage from "../assets/images/hrader.png";
import Card from "./Card";

export default function Header() {
  return (
    <div className="relative w-full h-[610px] mt-2">
      {/* Background Image with Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 89.37%), url(${headerImage})`,
        }}
      ></div>

      {/* Rectangle with Text */}
      <div className="absolute top-[-60px] left-[5%] w-[90%] sm:w-full sm:left-[90px] h-[214px] z-10 flex items-center px-4 sm:px-6">
        <div className="flex flex-wrap items-center space-x-2 text-white text-sm sm:text-base">
          <FaHome className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>/</span>
          <span>Commodity Focus</span>
          <span>/</span>
          <span>Spices</span>
          <span>/</span>
          <span>Exporting spices from India</span>
        </div>
      </div>

      {/* Card */}
      <Card />
    </div>
  );
}
