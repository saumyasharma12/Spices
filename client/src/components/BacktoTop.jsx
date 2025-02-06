import React from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-6 flex items-center space-x-3 cursor-pointer sm:space-x-2 lg:space-x-4"
      onClick={handleScrollToTop}
    >
      {/* Circle with Arrow Icon */}
      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full shadow-lg">
        <FaArrowUp className="text-gray-600 text-lg sm:text-xl lg:text-2xl" />
      </div>

      {/* Back to Top Text */}
      <span
        className="text-gray-600 text-xs sm:text-sm lg:text-base flex items-center"
        style={{
          fontFamily: "var(--Fontfamilyfont-family-body)",
          fontSize: "14px", // You can adjust this dynamically with breakpoints too
          fontWeight: 400,
          lineHeight: "var(--Lineheighttext-md)",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecoration: "underline",
          textDecorationSkipInk: "none",
        }}
      >
        Back to Top
      </span>
    </div>
  );
};

export default BackToTop;
