'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import TruckJourney from '@/components/TruckJourney';
import MerchPreview from '@/components/MerchPreview';
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
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Main content */}
        <Hero />
        <TruckJourney />
        <MerchPreview />
        <EmailSignup />
        <Footer />
      </div>
    </div>
  );
}
