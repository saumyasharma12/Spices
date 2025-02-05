import React from "react";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  const menuItems = [
    "Home",
    "Agri Trade101","Exporters Handbook",
    "Commodity Focus",
    "Resources",
  ];

  return (
    <nav className="bg-white-600 text-black p-4 flex justify-between items-center">
      <div className="flex items-center text-xl font-bold">
        <span className="relative">
          Cultiv
          <span className="text-yellow-400">A</span>
          lte
        </span>
      </div>

      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer flex items-center space-x-1"
            onMouseEnter={() => setOpen(index)}
            onMouseLeave={() => setOpen(null)}
          >
            <span>{item}</span>
            <ChevronUp size={16} className="transition-transform duration-200" />
          </li>
        ))}
      </ul>

      <div className="space-x-4">
        <button className="bg-white text-green-600 px-4 py-2 rounded">Login</button>
        <button className="bg-yellow-400 text-green-800 px-4 py-2 rounded">Contact Us</button>
      </div>
    </nav>
  );
}
