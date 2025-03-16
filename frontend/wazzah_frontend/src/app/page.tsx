'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [responses, setResponses] = useState([
    {answer: "no"}, 
    {answer: "jada kingdom1"},
    {answer: "gyal a gyal morewhile"},
  ])
  const [response, setResponse] = useState({answer: ''})
  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
        <h1 className='text-4xl p-4 text-center'>Slimmaz or Thickaz?</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>
          <form className='grid grid-cols-6 items-center text-black'>
            <input
              className='col-span-3 p-3 border'
              type='text'
              placeholder='Enter Item'
            />
            <button 
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
