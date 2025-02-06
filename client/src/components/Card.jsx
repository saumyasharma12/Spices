import React from "react";
import logoImage from "../assets/images/logoimg.png";

const Card = () => {
  return (
    <div className="absolute top-[209px] left-[5%] sm:left-[161px] w-[90%] sm:w-[670px] p-[20px] sm:p-[40px] bg-white shadow-lg border-t-8 border-[#F29727]">
      {/* Container for small heading and logo image */}
      <div className="flex flex-wrap items-center justify-between">
        {/* Small Heading */}
        <div className="text-[#F29727] text-[20px] sm:text-[24px] font-bold leading-[28.8px] tracking-[0.005em]">
          SPICES
        </div>

        {/* Logo Image - Placed next to small heading */}
        <img
          src={logoImage}
          alt="Logo"
          className="w-[50px] sm:w-[61px] h-[50px] sm:h-[58px] rounded-t-[20px] shadow-lg"
        />
      </div>

      {/* Large Heading */}
      <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold leading-[40px] sm:leading-[48px] tracking-[0.005em] text-[#1E1E1E]">
        Exporting Spices from India
      </h2>

      {/* Paragraph */}
      <p className="mt-6 sm:mt-9 text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[24px] tracking-[0.005em] text-[#1E1E1E]">
        The Spices Board of India promotes spices cultivation, export, and research through various initiatives and regulations.
      </p>
    </div>
  );
};

export default Card;
