import React, { useState } from "react";
import { ChevronUp, Menu } from "lucide-react";

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
    <nav className="w-full max-w-[1280px] h-[100px] px-[var(--container-padding-desktop)] flex items-center justify-between mx-auto">
      {/* Logo */}
      <div className="text-xl font-bold text-black">
        Cultiv<span className="text-yellow-400">A</span>lte
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 mb-0">
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
      <div className="space-x-4 hidden md:block">
        <button className="bg-white text-[#124673] px-4 py-2 rounded hover:bg-green-100">
          Login
        </button>

        <button className="bg-[#124673] text-white px-4 py-2 rounded hover:bg-[#124673]">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 md:hidden">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                item === "Commodity Focus" ? "text-orange-500" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
