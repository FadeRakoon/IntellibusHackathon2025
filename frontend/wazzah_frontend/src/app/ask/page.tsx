"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AskPage() {
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState<string | null>(null);

  const handleGenerateLink = () => {
    if (!question.trim()) return;
    const newQuestionId = uuidv4(); // Generate unique ID for the question
    setQuestionId(newQuestionId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Ask a Question</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border p-2 w-full max-w-md mb-4"
        placeholder="Enter your question"
      />
      <button
        onClick={handleGenerateLink}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Generate Link
      </button>

      {questionId && (
        <div className="mt-4">
          <p className="text-lg">Share this link:</p>
          <input
            readOnly
            value={`${window.location.origin}/view/${questionId}`}
            className="border p-2 w-full max-w-md"
          />
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                `${window.location.origin}/view/${questionId}`
              )
            }
            className="bg-green-500 text-white px-4 py-2 mt-2"
          >
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}
