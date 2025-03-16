'use client';
import React, { useState, useEffect } from 'react';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useParams } from 'next/navigation';

export default function AnswerPage() {
  const { id } = useParams(); // Get question ID from URL
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Fetch the question
  useEffect(() => {
    const fetchQuestion = async () => {
      if (!id) return;
      const docRef = doc(db, 'questions', id as string);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setQuestion(docSnap.data().question);
      } else {
        setQuestion('Question not found');
      }
    };

    fetchQuestion();
  }, [id]);

  // Submit an answer
  const submitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === '') return;

    await addDoc(collection(db, 'questions', id as string, 'answers'), {
      answer: answer.trim(),
    });

    setAnswer('');
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold'>Answer the Question</h1>
      <p className='text-xl mt-4'>{question}</p>

      <form onSubmit={submitAnswer} className='mt-4'>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className='border p-2'
          type='text'
          placeholder='Type your answer...'
        />
        <button className='bg-green-500 text-white p-2 mt-2' type='submit'>
          Submit Answer
        </button>
      </form>
    </main>
  );
}