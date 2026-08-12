'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white transition-colors duration-300">
        {/* Dark mode toggle */}
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-amber-600 hover:bg-amber-700 transition-colors duration-200 shadow-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>)}
          </button>
        </div>

        {/* Main content */}
        <Hero />
        <EmailSignup />
        <Footer />
      </div>
    </div>
  );
}
