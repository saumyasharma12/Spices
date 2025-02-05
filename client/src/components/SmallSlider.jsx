import React, { useState } from "react";

const items = [
  "Eligibility Criteria",
  "Certification",
  "Texts and Inspections",
  "Packaging and Labelling",
  "Pre-shipping",
  "Banking",
  "Shipper",
];

export default function SmallSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[72px] bg-white overflow-x-auto no-scrollbar">
      <div className="flex w-full justify-between px-8 gap-8 whitespace-nowrap">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center px-6 py-4 text-lg cursor-pointer transition-all 
              ${activeIndex === index ? "text-blue-500 font-bold" : "text-gray-700"}
            `}
            onClick={() => setActiveIndex(index)}
          >
            {item}
            {activeIndex === index && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-blue-500 transition-all duration-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
