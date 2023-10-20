// components/ContentTable.js
"use client"
import { useState } from "react";

const ContentTable = ({ tableOfContent, selectedSection, onSectionChange }) => {
  return (
    <div className="w-1/3 bg-blue-200 rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Hizmet Alanlarımız</h2>
      <ul className="space-y-2">
        {tableOfContent.map((item, index) => (
          <li className="bg-mainblue rounded-xl px-4 py-2 text-white"  key={index}>
            <a
              href={`#${item.id}`}
              className={`hover:underline ${
                selectedSection === item.id ? 'text-yellow-500' : ''
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentTable;
