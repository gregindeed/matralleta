'use client';

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="relative flex-1 min-h-[75vh] bg-paper flex items-center px-6 py-12 lg:py-16 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-10 lg:gap-x-20 lg:gap-y-6 items-center">
        {/* Logo lockup — first on mobile, top-left on desktop */}
        <div className="order-1 lg:col-start-1 lg:row-start-1 text-center lg:text-left fade-up">
          <h1 className="sr-only">Matralleta Coffee Co.</h1>
          <div className="max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center">
            <img
              src="/logo.png"
              alt="Matralleta Coffee Co."
              className="w-full"
            />
            <p className="mt-4 lg:mt-5 pl-[0.35em] text-kraft-deep font-semibold text-xs lg:text-sm uppercase tracking-[0.35em]">
              San Diego &times; Baja CA
            </p>
          </div>
        </div>

        {/* Packaging — front and center on mobile, right column on desktop */}
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex flex-col items-center fade-up fade-up-delay">
          <div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-espresso/10 blur-2xl rounded-full"
            aria-hidden="true"
          ></div>
          <img
            src="/hero-bag.webp"
            alt="Matralleta Dual Wield whole-bean coffee in a kraft paper bag"
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl drop-shadow-2xl float-slow"
          />
          {/* Batch caption */}
          <a href="#lineup" className="mt-5 lg:mt-6 text-center group">
            <p className="font-display text-base lg:text-lg uppercase tracking-wide text-espresso group-hover:text-brand-red transition-colors duration-200">
              Batch 001 &mdash; Dual Wield
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-kraft-deep">
              See the full lineup &darr;
            </p>
          </a>
        </div>

        {/* Copy + email — after the bag on mobile, under the logo on desktop */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 text-center lg:text-left fade-up">
          <div className="hidden lg:block mt-1 h-px w-16 bg-kraft/50" aria-hidden="true"></div>

          <p className="lg:mt-7 font-display text-2xl lg:text-3xl uppercase tracking-tight text-espresso leading-snug">
            Small batch. Fully loaded.
          </p>

          <p className="mt-4 text-base lg:text-lg text-espresso-soft leading-relaxed max-w-md mx-auto lg:mx-0">
            Baja-born beans. San Diego attitude. Shipped wherever you are.
            Four cuts in limited runs &mdash; from first-light citrus to
            full-burst cocoa and chili &mdash; roasted with grit and bagged
            by hand.
          </p>

          {/* Email capture */}
          <form
            id="early-access"
            onSubmit={handleSubmit}
            noValidate
            className="mt-7 max-w-sm mx-auto lg:mx-0"
          >
            {status !== 'success' ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  className="flex-1 px-4 py-2.5 text-sm bg-white border-2 border-kraft/40 rounded-lg text-espresso placeholder-espresso-soft/50 focus:outline-none focus:border-brand-red transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm bg-brand-red hover:bg-brand-red-deep active:scale-[0.98] text-paper rounded-lg font-semibold transition-all duration-200 whitespace-nowrap shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/30"
                >
                  Get First Dibs
                </button>
              </div>
            ) : (
              <p
                role="status"
                className="px-4 py-2.5 bg-white/60 border-2 border-kraft/40 rounded-lg text-sm font-semibold text-espresso text-center sm:text-left"
              >
                Welcome to the crew. Watch for the first drop.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="mt-3 text-sm font-medium text-brand-red-deep">
                Please enter a valid email address.
              </p>
            )}
            {status !== 'success' && (
              <p className="mt-3 text-xs text-espresso-soft/70">
                First access to drops &bull; Fresh roast alerts &bull; No
                spam, ever
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
