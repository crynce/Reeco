import React, { useState } from "react";
import "./Faq.css";
const answerHtml = (
  <div className="answer">
  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate
    sapiente, error dolorem unde dicta ex quia dolore enim ipsum alias suscipit
    i
  </div>
);
export default function FaqQuestions() {
  const [answer, setAnswer] = useState(false);
  const faqHandler = () => {
    setAnswer((prevState) => !prevState);
  };
  return (
    <div className="faqQuestions">
      <div className="quesText">How many Students can I refer?</div>
      <span className="openAnswer" onClick={faqHandler}>
        +
      </span>
      {answer && answerHtml}
    </div>
  );
}
