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



  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Answers</h1>
      <div className="mt-6 w-full max-w-md">
        <ul>
          {answers.map((answer, index) => (
            <li key={index} className="border p-2 my-2 bg-gray-600">
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
