import React from "react";
import { FaCoffee, FaLeaf, FaUtensils, FaArrowRight } from "react-icons/fa";

const BottomPart = () => {
  return (
    <div className="relative w-full max-w-[1120px] h-auto md:h-[600px] mx-auto bg-[#F5F5F5] flex flex-col md:flex-row items-center shadow-lg rounded-lg px-6 md:px-20 py-10">
      {/* Left Part with Icons */}
      <div className="flex flex-col gap-6 md:space-y-8 w-full md:w-1/2">
        <div className="flex items-center space-x-4">
          <FaCoffee className="text-black text-3xl" />
          <h2 className="text-3xl text-black font-bold">Coffee</h2>
        </div>
        <div className="flex items-center space-x-4">
          <FaLeaf className="text-gray-600 text-3xl" />
          <h2 className="text-2xl text-gray-600">Spices</h2>
        </div>
        <div className="flex items-center space-x-4">
          <FaUtensils className="text-gray-600 text-3xl" />
          <h2 className="text-2xl text-gray-600">Tea</h2>
        </div>
      </div>

      {/* Right Part with headings and arrows */}
      <div className="flex flex-col gap-6 md:space-y-8 w-full md:w-1/2 mt-8 md:mt-0">
        {[
          "Coffee Board of India",
          "Global Coffee Trade",
          "India’s Coffee Exports",
          "Introduction to Coffee",
        ].map((text, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-2xl text-gray-900 font-semibold border-b-2 border-gray-400 pb-2 w-full">
              {text}
            </h2>
            <FaArrowRight className="text-gray-600 text-2xl ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomPart;
