'use client';
import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase';

export default function Home() {
  const [responses, setResponses] = useState([
    {answer: "no"}, 
    {answer: "jada kingdom1"},
    {answer: "gyal a gyal morewhile"},
  ])
  const [response, setResponse] = useState({answer: ''})

  //adding
  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (response.answer !== ''){
      await addDoc (collection(db, 'items'),{
          answer: response.answer.trim(),
      });
      setResponse({answer: ''});
    }
  };


  //reading


  //deleting

  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
        <h1 className='text-4xl p-4 text-center'>Slimmaz or Thickaz?</h1>
        <div className='bg-slate-500 p-4 rounded-lg'>
          <form className='grid grid-cols-6 items-center text-black'>
            <input
              value = {response.answer}
              onChange={(e) => setResponse({ ...response, answer: e.target.value })}
              className='col-span-3 p-3 border'
              type='text'
              placeholder='Enter Item'
            />
            <button 
              onClick={addItem}
              className='text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl'
              type='submit'
            >
              SUBMIT
            </button>
          </form>
          <ul>
            {responses.map((response, id) => (
              <li
                key={id}
                className='my-4 w-full flex justify-between bg-slate-950'
              >
                <div className='p-4 w-full flex justify-between'>
                  <span className='capitalize'>{response.answer}</span>
                  <button
                  //onClick={}
                  className='ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16'
                >
                  X
                </button>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
