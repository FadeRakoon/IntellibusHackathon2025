"use client";
import React, { useState, KeyboardEvent } from "react";

interface QuestionInputProps {
  onSubmit: (answer: string) => void;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({ onSubmit }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    onSubmit(userAnswer);
    setUserAnswer("");
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="w-full max-w-[1200px] bg-[#F8F9FA] rounded-[12px] p-6">
      <h1 className="text-[24px] font-[700] text-[#000] mb-8">
        Q1: What is your favorite color?
      </h1>
      <div className="w-full bg-[#fff] border-[1px] border-[#E9ECEF] rounded-[8px] p-4 mb-6">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Type your answer here..."
          className="w-full text-[16px] outline-none"
          aria-label="Answer input"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#4318D1] text-[#fff] px-6 py-3 rounded-[8px] text-[16px]"
      >
        Submit Answer
      </button>
    </section>
  );
};
