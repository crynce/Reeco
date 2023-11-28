import React, { useState } from "react";
import "./Faq.css";
import FaqQuestions from "./FaqQuestions";

export default function Faq() {
  return (
    <div className="faqContainerPrimary">
      <div className="faqContainerSecondary">
        <h2 className="faqHeading">FAQs</h2>
        <div className="faqQuestionContainer">
          <FaqQuestions />
          <FaqQuestions />
          <FaqQuestions />
          <FaqQuestions />
          <FaqQuestions />
          <FaqQuestions />
        </div>
        <button className="agreeRefer">Agree & Refer</button>
      </div>
    </div>
  );
}
