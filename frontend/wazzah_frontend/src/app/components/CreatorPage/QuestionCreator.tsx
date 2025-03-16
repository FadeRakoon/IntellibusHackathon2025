"use client";
import * as React from "react";

interface QuestionCreatorProps {
  onSubmit: (question: string) => void;
}

export const QuestionCreator: React.FC<QuestionCreatorProps> = ({
  onSubmit,
}) => {
  const [question, setQuestion] = React.useState("");

  const handleSubmit = () => {
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <section className="p-6 mb-8 bg-gray-50 rounded-xl max-sm:p-4">
      <h2 className="mb-6 text-2xl font-bold text-black">Create Question</h2>
      <div className="mb-4 bg-white rounded-lg border border-gray-200 border-solid h-[100px]">
        <textarea
          className="w-full h-full p-3 bg-transparent border-none resize-none focus:outline-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
        />
      </div>
      <button
        onClick={handleSubmit}
        className="px-6 py-3 text-base text-white bg-indigo-700 rounded-lg cursor-pointer hover:bg-indigo-800 transition-colors"
      >
        Add Question
      </button>
    </section>
  );
};
