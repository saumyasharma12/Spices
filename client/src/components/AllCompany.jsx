import React from 'react';

const AllCompany = () => {
  return (
    <div className="my-4 pt-12 px-3 text-start ">
      <h2 className="text-3xl font-semibold mb-6 text-left ">Types of Companies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">Private Limited Company</h3>
          <p>A popular choice for most businesses, offering limited liability and flexibility in terms of ownership and management.</p>
        </div>
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">Public Limited Company</h3>
          <p>Suitable for large-scale businesses that plan to raise capital through public offerings.</p>
        </div>
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">Partnership</h3>
          <p>A simpler form of business structure suitable for smaller businesses with a few partners.</p>
        </div>
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">Proprietorship </h3>
          <p>A single-owner business, relatively easy to set up but offers limited liability protection.</p>
        </div>
      </div>
      
    </div>
  );
};

export default AllCompany;
