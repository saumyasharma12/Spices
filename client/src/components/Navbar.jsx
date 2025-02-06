import React, { useState } from "react";
import { ChevronUp, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    "Home",
    "Agri Trade101",
    "Exporters Handbook",
    "Commodity Focus",
    "Resources",
  ];

  return (
    <nav className="w-full max-w-[1280px] h-[100px] px-6 flex items-center justify-between mx-auto">
      {/* Logo */}
      <div className="text-xl font-bold text-black">
        Cultiv<span className="text-yellow-400">A</span>lte
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`relative cursor-pointer flex items-center space-x-1 ${
              item === "Commodity Focus" ? "text-orange-500" : ""
            }`}
            onMouseEnter={() => setOpen(index)}
            onMouseLeave={() => setOpen(null)}
          >
            <span>{item}</span>
            <ChevronUp
              size={16}
              className={`transition-transform duration-200 ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-[#124673] px-4 py-2 rounded hover:bg-green-100">
          Login
        </button>
        <button className="bg-[#124673] text-white px-4 py-2 rounded hover:bg-[#124673]">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setMobileOpen(false)}
        >
          <X size={28} />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-lg ${
                item === "Commodity Focus" ? "text-orange-500" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
