import React from 'react';

const SmallFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-6 pt-9 bg-white border-t border-gray-200 mt-12 w-full">
      {/* Previous Link */}
      <div className="flex flex-col items-end mx-8 sm:mx-4">
        <span className="text-sm text-black">Previous</span>
        <div className="mt-2 flex items-center">
          <span className="text-xl text-black cursor-pointer mr-2">&lt;</span>
          <span className="text-xl text-black cursor-pointer">
            Definition and Classification
          </span>
        </div>
        <hr className="mt-2 border-t-2 border-black w-full" />
      </div>

      {/* Next Link */}
      <div className="flex flex-col items-start mx-8 sm:mx-4">
        <span className="text-sm text-black">Next</span>
        <div className="mt-2 flex items-center">
          <span className="text-xl text-black cursor-pointer">
            Spices in the Age of Colonialism
          </span>
          <span className="text-xl text-black cursor-pointer ml-2">&gt;</span>
        </div>
        <hr className="mt-2 border-t-2 border-black w-full" />
      </div>
    </div>
  );
}

export default SmallFooter;
