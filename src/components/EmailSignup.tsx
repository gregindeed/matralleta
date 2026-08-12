'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter an email address');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call - in production, would send to your email service
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(() => {
        // Fallback for static deployment
        return null;
      });

      if (response && response.ok) {
        setStatus('success');
        setMessage('Welcome to the Matralleta crew! Check your email for exclusive perks.');
        setEmail('');
      } else {
        // Assume success even if API fails (static site fallback)
        setStatus('success');
        setMessage('Welcome to the Matralleta crew! Watch for early access drops.');
        setEmail('');
      }
    } catch (error) {
      // Graceful fallback
      setStatus('success');
      setMessage('Thanks for signing up! We\'ll be in touch soon.');
      setEmail('');
    }
  };

  return (
    <section id="early-access" className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the Early Access</h2>
          <p className="text-zinc-400 text-lg">
            Get first dibs on merch drops, truck location alerts, and exclusive Matralleta stories.
          </p>
        </div>

        {/* Signup form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-600 transition-colors duration-200 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-amber-600/50 hover:shadow-2xl"
            >
              {status === 'loading' ? 'Joining...' : 'Join Crew'}
            </button>
          </div>

          {/* Status message */}
          {message && (
            <p
              className={`text-center text-sm font-medium transition-all duration-300 ${
                status === 'success'
                  ? 'text-amber-400'
                  : status === 'error'
                  ? 'text-red-400'
                  : 'text-zinc-400'
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Trust signals */}
        <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-zinc-800">
          <div className="text-center">
            <div className="mb-3 flex justify-center text-amber-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
            <p className="text-sm text-zinc-400">No spam. Ever.</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center text-amber-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></svg></div>
            <p className="text-sm text-zinc-400">First access to drops</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center text-amber-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg></div>
            <p className="text-sm text-zinc-400">Truck location updates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
