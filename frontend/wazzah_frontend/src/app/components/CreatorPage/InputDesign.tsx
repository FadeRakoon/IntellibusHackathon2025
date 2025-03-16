"use client";
import * as React from "react";
import { QuestionCreator } from "./QuestionCreator";
import { ResponseGrid } from "./ResponseGrid";

function InputDesign() {
  const [currentQuestion, setCurrentQuestion] = React.useState("hi");

  const handleQuestionSubmit = (question: string) => {
    setCurrentQuestion(question);
  };

  return (
    <main className="p-8 mx-auto max-w-none max-md:p-4 max-md:max-w-[991px] max-sm:p-2 max-sm:max-w-screen-sm">
      <QuestionCreator onSubmit={handleQuestionSubmit} />
      <ResponseGrid questionText={currentQuestion} />
    </main>
  );
}

export default InputDesign;
