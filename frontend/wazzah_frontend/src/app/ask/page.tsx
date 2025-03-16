'use client';
import { useState, useEffect } from 'react';
import { collection, addDoc, doc, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function AskPage() {
  const [question, setQuestion] = useState('');
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const docRef = await addDoc(collection(db, 'questions'), { 
      question, 
      answers: [] // Ensure answers array is initialized
    });

    setQuestionId(docRef.id);
  };

  // Real-time listener for answers
  useEffect(() => {
    console.log("questionId:", questionId);
    if (!questionId) return;

    const docRef = doc(db, 'questions', questionId);

    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        console.log("Updated Firestore document:", docSnap.data()); // Debugging line
        setAnswers(docSnap.data().answers || []); // Ensure answers array is always an array
      }
    });

    return () => unsub();
  }, [questionId]); // Ensure useEffect runs when questionId changes

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Ask a Question</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Enter your question"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Generate Link
        </button>
      </form>

      {questionId && (
        <div className="mt-4">
          <p className="text-lg">Share this link:</p>
          <input
            readOnly
            value={`${window.location.origin}/answer/${questionId}`}
            className="border p-2 w-full"
          />
          <button
            onClick={() => navigator.clipboard.writeText(`${window.location.origin}/answer/${questionId}`)}
            className="bg-green-500 text-white px-4 py-2 mt-2"
          >
            Copy Link
          </button>

          {/* Display Real-Time Answers */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Answers:</h2>
            <ul>
              
              {answers.length > 0 ? (
                answers.map((answer, index) => (
                  <li key={index} className="border p-2 my-2">{answer}</li>
                ))
              ) : (
                <p>No answers yet</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
