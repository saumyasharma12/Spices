import React from "react";
import { ChevronDown } from "lucide-react";

const Pna = () => {
  const cardData = [
    {
      heading: "Tax Compliance",
      paragraph:
        "PAN is mandatory for filing income tax returns. As a spice exporter, you will need to file income tax returns to report your profits and pay taxes on your export earnings.",
    },
    {
      heading: "Financial Transactions",
      paragraph:
        "PAN is required for various financial transactions, including opening bank accounts, making investments, and conducting large cash transactions.",
    },
    {
      heading: "GST Registration",
      paragraph:
        "PAN is a prerequisite for obtaining GST registration, which is essential for conducting business within India, including domestic transactions related to your export operations.",
    },
    {
      heading: "Other Legal Requirements",
      paragraph:
        "PAN may be required for various other legal and regulatory purposes, such as obtaining import-export licenses and other necessary permits.",
    },
  ];

  const obtainPanData = [
    {
      heading: "Online Application",
      paragraph:
        "You can apply for a PAN card online through the NSDL or UTIITSL websites.",
    },
    {
      heading: "Offline Application",
      paragraph:
        "You can also apply for a PAN card offline by submitting the application form to designated centers.",
    },
    {
      heading: "Required Documents",
      paragraph:
        "The required documents for PAN card application may vary depending on the application method and applicant type. Generally, you will need to provide proof of identity and address, along with recent photographs.",
    },
  ];

  const additionalRequirements = [
    { title: "Importer Exporter Code (IEC)" },
    { title: "Authorized Dealer (AD) Code" },
    { title: "FSSAI Registration" },
  ];

  return (
    <div className="flex flex-col items-start px-4 py-8">
      <h2 className="text-[#124673] text-[30px] font-bold leading-9 w-[274px]">
        PAN Registration
      </h2>
      <p className="max-w-[625px] text-gray-700 mt-4">
        Exporters can maintain foreign currency accounts to receive payments
        from overseas buyers, which can help to hedge against currency
        fluctuations.
      </p>
      <h3 className="text-[24px] font-bold mt-6">
        Why is PAN Essential for Spice Exporters?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-1 rounded-lg">
            <h4 className="text-[16px] font-bold leading-6">{card.heading}</h4>
            <p className="text-gray-700 mt-2">{card.paragraph}</p>
          </div>
        ))}
      </div>

      {/* How to Obtain a PAN Card? */}
      <h3 className="text-[24px] font-bold mt-8">How to Obtain a PAN Card?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {obtainPanData.map((card, index) => (
          <div key={index} className="bg-white p-1 rounded-lg">
            <h4 className="text-[16px] font-bold leading-6">{card.heading}</h4>
            <p className="text-gray-700 mt-2">{card.paragraph}</p>
          </div>
        ))}
      </div>

      {/* Guide Link */}
      <div className="w-[740px] h-[75.88px] bg-gray-200 rounded-tl-[12px] mx-auto mt-4 flex justify-center items-center">
        <p className="text-center text-lg font-medium">
          To know more, read our comprehensive guide on{" "}
          <a href="#guide" className="text-blue-500 underline hover:text-blue-700">
            How to apply for PAN registration.
          </a>
        </p>
      </div>

      {/* Additional Requirements Section */}
      <div className="w-[631px] h-[247px] rounded-lg mt-8 mx-1 p-4 text-left">
        {additionalRequirements.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4  last:border-b-0"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pna;
