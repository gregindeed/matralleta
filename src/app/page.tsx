'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Gun image */}
        <div className="mb-8">
          <Image
            src="/og-image.jpg"
            alt="Matralleta"
            width={300}
            height={300}
            priority
            className="object-contain"
          />
        </div>

        {/* Brand name */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-12 text-center tracking-tight">
          Matralleta Coffee Co
        </h1>

        {/* Email signup */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-white border border-zinc-300 rounded text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-zinc-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-zinc-900 text-white font-medium rounded hover:bg-zinc-800 transition-colors"
            >
              Notify
            </button>
          </div>
          {submitted && (
            <p className="text-center text-zinc-700 mt-3 text-sm">
              Thanks! We'll be in touch.
            </p>
          )}
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-6 px-6">
        <div className="max-w-md mx-auto flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-amber-600 transition-colors">Instagram</a>
          <a href="#" className="hover:text-amber-600 transition-colors">TikTok</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
