"use client"
import React, { useState } from 'react';

const Accordion = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-2/3 p-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border border-gray-200  rounded-lg mb-2">
          <div
            className="cursor-pointer flex justify-between items-center p-3 bg-blue-100 text-black rounded-t-lg"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-xl font-semibold">{item.question}</h3>
            <div>
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform -rotate-180 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-3 bg-blue-200 text-black rounded-b-lg">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
