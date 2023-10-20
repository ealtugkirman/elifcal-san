"use client";
import { useState } from "react";
import ContentTable from "./ContentTable";
import Accordion from "./Accordion";

const tableOfContent = [
  { id: "section1", title: "Ara Dönem Danışmanlıgı" },
  { id: "section2", title: "Boşanma Hukuku" },
  { id: "section3", title: "Aile Hukuku" },
  { id: "section4", title: "Tazminat Hukuku" },
  { id: "section5", title: "Çocuk Hukuku" },
  { id: "section6", title: "Boşanma Süreci" },
];

const faqItems = {
  section1: [
    { question: "Question 1.1", answer: "Answer to question 1.1." },
    { question: "Question 1.2", answer: "Answer to question 1.2." },
    { question: "Question 1.2", answer: "Answer to question 1.2." },

    { question: "Question 1.2", answer: "Answer to question 1.2." },

    { question: "Question 1.2", answer: "Answer to question 1.2." },
  ],
  section2: [
    { question: "Question 2.1", answer: "Answer to question 2.1." },
    { question: "Question 2.2", answer: "Answer to question 2.2." },
    { question: "Question 2.2", answer: "Answer to question 2.2." },

    { question: "Question 2.2", answer: "Answer to question 2.2." },

    { question: "Question 2.2", answer: "Answer to question 2.2." },
  ],
  section3: [
    { question: "Question 3.1", answer: "Answer to question 3.1." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },

    { question: "Question 3.2", answer: "Answer to question 3.2." },

    { question: "Question 3.2", answer: "Answer to question 3.2." },
  ],
  section4: [
    { question: "Question 3.1", answer: "Answer to question 3.1." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },

    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
    ],
   section5: [
    { question: "Question 3.1", answer: "Answer to question 3.1." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },

    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
    ],
    section6: [
    { question: "Question 3.1", answer: "Answer to question 3.1." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },

    { question: "Question 3.2", answer: "Answer to question 3.2." },
    { question: "Question 3.2", answer: "Answer to question 3.2." },
  ],
};

const Faq = () => {
  const [selectedSection, setSelectedSection] = useState(tableOfContent[0].id);

  const handleSectionChange = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <div className="section px-12">
      <ContentTable
        tableOfContent={tableOfContent}
        onSectionChange={handleSectionChange}
        selectedSection={selectedSection}
      />
          <Accordion faqItems={ faqItems[selectedSection] } />
    </div>
  );
};

export default Faq;
