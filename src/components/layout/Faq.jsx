import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import faqs from "../../Constants/faqs";
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleParagraph = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" w-full ">
      <h2 className="text-3xl font-medium w-full  text-gray-800 leading-[48px] pb-6">
        FAQs
      </h2>

      <div className=" mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white p-6 ${
              index === faqs.length - 1 ? "border-b-2 border-t-2" : "border-t-2"
            } border-gray-100 `}
          >
            <h3
              className="text-lg font-medium text-gray-800 flex justify-between items-center cursor-pointer"
              onClick={() => toggleParagraph(index)}
            >
              {faq.title}
              <RiArrowDropDownLine
                className={`inline text-3xl text-[#6a47ce] transition-transform duration-300 ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500  ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transformOrigin: "bottom",
              }}
            >
              <p className={`text-gray-500 mt-2`}>{faq.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
