import React from 'react';

const GstCard = () => {
  return (
    <div className="my-4 pt-12 px-3 text-start">
      <h2 className="text-3xl font-semibold mb-6 text-left">Key Aspects of GST for Spice Exporters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">GST Rates</h3>
          <p>The GST rate applicable to spices varies depending on the type of spice and its classification. It's crucial to understand the applicable GST rate for your specific products.</p>
        </div>
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">Record Keeping</h3>
          <p>Maintaining accurate and detailed records of all GST-related transactions is essential for compliance. This includes invoices, purchase bills, and other relevant documents.</p>
        </div>
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">GST Returns</h3>
          <p>Spice exporters are required to file periodic GST returns, including details of sales, purchases, and tax liabilities. Timely filing of returns is crucial to avoid penalties.</p>
        </div>
        <div className="w-[360px] h-[240px] bg-gray-200 rounded-tl-[15px] pt-12 p-5">
          <h3 className="text-xl font-bold mb-4">GST Audits</h3>
          <p>Businesses may be subject to GST audits to verify the accuracy of their tax returns and ensure compliance with GST regulations.</p>
        </div>
      </div>
    </div>
  );
};

export default GstCard;
