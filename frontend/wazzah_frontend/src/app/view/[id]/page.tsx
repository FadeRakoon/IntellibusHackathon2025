"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { db } from "../../../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

export default function ViewAnswersPage() {
  const { id: questionId } = useParams();
  const [answers, setAnswers] = useState<string[]>([]);
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    if (!questionId) return;

    // Listen for real-time updates from Firestore
    const q = query(collection(db, "answers"), where("questionId", "==", questionId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedAnswers: string[] = [];
      querySnapshot.forEach((doc) => {
        fetchedAnswers.push(doc.data().answer);
      });
      setAnswers(fetchedAnswers);
    });

    return () => unsubscribe();
  }, [questionId]);

  const handleSubmitAnswer = async () => {
    if (!newAnswer.trim()) return;

    await addDoc(collection(db, "answers"), {
      questionId,
      answer: newAnswer,
      createdAt: new Date(),
    });

    setNewAnswer(""); // Clear input after submitting
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Answers</h1>

      <div className="mt-4 w-full max-w-md">
        <h2 className="text-2xl font-semibold">Submit Your Answer:</h2>
        <input
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Enter your answer"
        />
        <button
          onClick={handleSubmitAnswer}
          className="bg-blue-500 text-white px-4 py-2 w-full"
        >
          Submit Answer
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold">Answers:</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index} className="border p-2 my-2 bg-gray-100">
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
