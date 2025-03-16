'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../../firebase';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';

export default function AnswerPage() {
  const { id: questionId } = useParams();
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    await addDoc(collection(db, 'answers'), {
      questionId,
      answer,
      timestamp: new Date(),
    });

    setAnswer('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Submit Your Answer</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Enter your answer"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
