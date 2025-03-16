'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome to Q&A</h1>

      <div className="flex gap-4">
        {/* Redirect to the Ask Page */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
          onClick={() => router.push('/ask')}
        >
          Ask a Question
        </button>

        {/* Redirect to Answer Page (User enters link manually) */}
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-md"
          onClick={() => router.push('/answer')}
        >
          Answer a Question
        </button>
      </div>
    </main>
  );
}