import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importing the checkmark icon

const RegisterProcess = () => {
  return (
    <div className="text-left my-8 pt-12 pl-12 text-start">
      <h2 className="text-3xl font-semibold mb-6">Registration Process</h2>
      
      <p className="mb-8">
        The specific registration process varies depending on the chosen company type. Generally, it involves:
      </p>

      <div className="w-[400px] h-[323.45px] bg-gray-200 rounded-[16px] p-6 relative">
        <ul className="space-y-7">
          <li className="flex items-center justify-start space-x-4">
            <FaCheck className="text-black text-xl" />
            <span className="flex-1 text-start">Choosing a unique company name</span>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <FaCheck className="text-black text-xl" />
            <span className="flex-1 text-start">Obtaining necessary documents (e.g., identity proofs, address proofs, PAN card)</span>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <FaCheck className="text-black text-xl" />
            <span className="flex-1 text-start">Filing the required forms with the Registrar of Companies (ROC)</span>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <FaCheck className="text-black text-xl" />
            <span className="flex-1 text-start">Paying the prescribed fees</span>
          </li>
        </ul>
      </div>

      <div className="w-[740px] h-[75.88px] bg-gray-200 rounded-tl-[12px] mx-auto mt-4 flex justify-center items-center">
        <p className="text-center text-lg font-medium">
        To know more, read our comprehensive guide on guide{' '}
          <a href="#guide" className="text-blue-500 underline hover:text-blue-700">how to register a company</a>.
        </p>
      </div>
    </div>
  );
};

export default RegisterProcess;
