import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from "react-icons/fa"; // Use FaTwitter instead of FaXTwitter

import Allright from "./Allright";

export default function Hero() {
  return (
    <div className="flex w-full h-auto px-48"> {/* Added px-12 for overall left and right spacing */}
      {/* Left Part */}
      <div className="flex flex-col w-[257px] gap-9 pr-18"> {/* Added pr-8 for right space in left part */}
        {/* Table of Contents */}
        <h2 className="text-lg font-bold">TABLE OF CONTENTS</h2>
        <div className="border-l-2 border-black pl-4 space-y-2">
          <p className="text-blue-700 font-medium">Registered company</p>
          <p>GST registration</p>
          <p>PAN registration</p>
          <p>Importer Exporter Code (IEC)</p>
          <p>Authorized Dealer (AD) code</p>
          <p>FSSAI registration</p>
        </div>

        {/* Icons */}
        <div className="flex gap-4 pt-4">
          <FaLink className="w-6 h-6 text-gray-600" />
          <FaFacebookF className="w-6 h-6 text-gray-600" />
          <FaTwitter className="w-6 h-6 text-gray-600" />
          <FaLinkedinIn className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Right Part */}
      <div className="flex-1 pl-29"> {/* Added pl-8 for left space in right part */}
        <Allright/>
      </div>
      
    </div>
  );
}
