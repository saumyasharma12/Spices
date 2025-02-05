import React, { useState } from "react";

export default function RightSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex-1 px-8">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold text-blue-700">Registered company</h2>
      <p className="text-gray-700 mt-4">
        To legally engage in exporting spices from India, it is essential to
        establish a registered company. This crucial step lays the groundwork
        for your export business and ensures compliance with Indian laws and
        regulations.
      </p>

      {/* Subheading */}
      <h3 className="text-xl font-semibold mt-8">
        Why Company Registration Matters for Spice Exporters?
      </h3>

      {/* Accordion */}
      <div className="mt-4">
        {[
          {
            title: "Legal Entity",
            content:
              "A registered company provides a legal framework for your business operations. It distinguishes your business entity from your personal assets, offering protection from personal liabilities.",
          },
          {
            title: "Credibility and Trust",
            content:
              "Having a registered company enhances your business's credibility. It makes it easier for customers, suppliers, and other business partners to trust your operations, which is essential in the competitive spice export market.",
          },
          {
            title: "Access to Funding",
            content:
              "With a registered company, you gain access to various funding options, such as business loans, grants, or investor opportunities, which can help your spice export business grow and scale.",
          },
          {
            title: "Government Benefits",
            content:
              "A registered company allows you to avail yourself of government schemes and incentives designed to support exporters. These benefits include tax exemptions, export subsidies, and other assistance programs.",
          },
          {
            title: "Legal Compliance",
            content:
              "Being a registered company ensures that your business complies with all relevant laws and regulations in India. It also provides a clear structure for tax filings, labor laws, and import-export compliance.",
          },
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-3 text-lg font-medium flex justify-between items-center"
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
}
