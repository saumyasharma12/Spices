import React, { useState } from 'react';

const GstAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-left my-8 pt-12 pl-12">
      {/* Heading for GST Registration */}
      <h2 className="text-3xl font-semibold mb-6 text-[#124673]">GST Registration</h2>
      
      {/* Paragraph for GST Overview */}
      <p className="mb-8 text-lg">
        Goods and Services Tax (GST) is a comprehensive, multi-stage tax levied on the supply of goods and services within India. For spice exporters, GST registration is a major compliance requirement.
      </p>

      {/* Heading for Why GST Registration is Crucial */}
      <h3 className="text-2xl font-semibold text-black mb-6">
        Why is GST Registration Crucial for Spice Exporters?
      </h3>

      {/* Accordion */}
      <div className="mt-4">
        {[
          {
            title: "Legal Compliance",
            content:
              "GST registration is mandatory for most businesses involved in the supply of goods and services, including spice exporters. Operating without GST registration can lead to penalties and legal repercussions.",
          },
          {
            title: "Input Tax Credit (ITC)",
            content:
              "Input Tax Credit (ITC): GST-registered businesses can claim input tax credit on the taxes paid for inputs and raw materials. This reduces the overall tax burden, making business operations more cost-effective and competitive in the market.",
          },
          {
            title: "Enhanced Credibility",
            content:
              "Enhanced Credibility: Being GST-registered enhances the credibility of your business. Customers, suppliers, and investors view a GST-registered business as a more trustworthy and legitimate entity, which can boost business growth and attract potential partners.",
          },
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-3 text-lg font-medium flex justify-between items-center hover:bg-gray-100 transition-all"
            >
              {item.title}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && item.content && (
              <p className="text-gray-600 mt-2 px-4">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GstAccordion;
