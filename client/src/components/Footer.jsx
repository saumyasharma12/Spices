import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:items-center gap-6 mb-8">
          {/* Logo and Search Bar */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            <div className="flex items-center">
              <span className="text-2xl font-bold">CultivAlte</span>
            </div>
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search CultivAlte"
                className="w-full py-1.5 px-3 rounded-full bg-gray-800 text-white text-sm focus:outline-none"
              />
              <button
                className="absolute right-3 top-2/4 transform -translate-y-2/4 text-white text-sm"
                aria-label="Search"
              >
                🔍
              </button>
            </div>
          </div>

          {/* Three Columns */}
          <div className="flex flex-wrap justify-between w-full lg:w-2/3 gap-6 lg:gap-4">
            <div className="flex flex-col gap-1 text-sm w-full sm:w-1/2 lg:w-auto">
              <h4 className="text-base">Useful Links</h4>
              <a href="/" className="text-xs">Commodity finder</a>
              <a href="/" className="text-xs flex items-center">
                Market Insights
                <span className="ml-1 text-[10px] text-gray-500 font-medium">New</span>
              </a>
            </div>
            <div className="flex flex-col gap-1 text-sm w-full sm:w-1/2 lg:w-auto">
              <h4 className="text-base">Company</h4>
              <a href="/" className="text-xs">About us</a>
              <a href="/" className="text-xs">Careers</a>
              <a href="/" className="text-xs">Press</a>
              <a href="/" className="text-xs">News</a>
              <a href="/" className="text-xs">Contact</a>
            </div>
            <div className="flex flex-col gap-1 text-sm w-full sm:w-1/2 lg:w-auto">
              <h4 className="text-base">Resources</h4>
              <a href="/" className="text-xs">Blog</a>
              <a href="/" className="text-xs">Newsletter</a>
              <a href="/" className="text-xs">Events</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xs text-gray-400 w-full sm:w-auto text-center sm:text-left">
              © 2024 Global Ispice Platforms Pvt Ltd
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <a href="/" className="text-xs text-gray-400">Terms</a>
              <a href="/" className="text-xs text-gray-400">Cookie Policy</a>
              <a href="/" className="text-xs text-gray-400">Your Privacy Choices</a>
              <a href="/" className="text-xs text-gray-400">Disclaimer</a>
              <a href="/" className="text-xs text-gray-400">Privacy Policy</a>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
            CultivAlte® is part of Global Ispice Platforms Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
