// Header.js
import React from "react";
import { FaHome } from "react-icons/fa"; // Import the Home icon from react-icons/fa
import headerImage from "../assets/images/hrader.png";
import Card from "./Card";

export default function Header() {
  return (
    <div className="relative w-full h-[610px] mt-[8px]">
      {/* Background Image with Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 89.37%), url(${headerImage})`,
        }}
      ></div>

      {/* Rectangle with Text */}
      <div 
        className="absolute top-[-60px] left-[90px] w-full h-[214px] z-10 flex items-center px-6"
      >
        <div className="flex items-center space-x-2 text-white">
          <FaHome className="w-6 h-6" /> {/* Home Icon */}
          <span>/</span>
          <span>Commodity Focus</span>
          <span>/</span>
          <span>Spices</span>
          <span>/</span>
          <span>Exporting spices from India</span>
        </div>
      </div>

      {/* Card */}
      <Card /> {/* Use the Card component here */}
    </div>
  );
}
