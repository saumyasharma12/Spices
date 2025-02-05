// Card.js
import React from "react";
import logoImage from "../assets/images/logoimg.png"; // Import logo image

const Card = () => {
  return (
    <div className="absolute top-[209px] left-[161px] w-[670px] p-[40px] bg-white shadow-lg border-t-8 border-[#F29727]">
      {/* Container for small heading and logo image */}
      <div className="flex items-center space-x-4">
        {/* Small Heading */}
        <div className="w-[520px] h-[49px] text-[#F29727] text-[24px] font-bold leading-[28.8px] tracking-[0.005em]">
          SPICES
        </div>

        {/* Logo Image - Placed next to small heading */}
        <img
          src={logoImage}
          alt="Logo"
          className="w-[61px] h-[58px] rounded-t-[20px] shadow-lg" // Adjust styles for logo
        />
      </div>

      {/* Large Heading */}
      <h2 className="w-[620px] h-[48px] mt-2 text-[40px] font-bold leading-[48px] tracking-[0.005em] text-[#1E1E1E]">
        Exporting Spices from India
      </h2>

      {/* Paragraph */}
      <p className="mt-9 text-[16px] font-medium leading-[24px] tracking-[0.005em] text-[#1E1E1E]">
        The Spices Board of India promotes spices cultivation, export, and research through various initiatives and regulations.
      </p>
    </div>
  );
};

export default Card;
