'use client';

import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setJoined(true);
    setEmail('');
  };

  const lineup = [
    { label: 'Dual Wield — Medium', href: '/#lineup' },
    { label: 'Ratatatat — Strong Cut', href: '/#lineup' },
    { label: 'Quick Draw — Light', href: '/#lineup' },
    { label: 'Double Feed — Espresso', href: '/#lineup' },
  ];

  const company = [
    { label: 'Merch', href: '/merch' },
    { label: 'Contact', href: 'mailto:hello@matralleta.com' },
    {
      label: 'Wholesale',
      href: 'mailto:hello@matralleta.com?subject=Wholesale%20inquiry',
    },
    {
      label: 'Press',
      href: 'mailto:hello@matralleta.com?subject=Press%20inquiry',
    },
  ];

  return (
    <footer className="bg-black text-paper py-14 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Brand */}
          <div>
            <a href="/" aria-label="Matralleta Coffee Co. — home">
              <img
                src="/logo-cream.png"
                alt="Matralleta Coffee Co."
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 text-[13px] leading-relaxed text-paper/60 max-w-[26ch]">
              Small-batch coffee with Baja California roots. Roasted with
              grit, bagged by hand, shipped wherever you are.
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-paper/40">
              Veteran Owned &amp; Operated
            </p>
          </div>

          {/* Lineup */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40 mb-4">
              The Lineup
            </h4>
            <ul className="space-y-2.5">
              {lineup.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-paper/70 hover:text-paper transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-paper/70 hover:text-paper transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The List */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40 mb-4">
              The List
            </h4>
            <p className="text-[13px] leading-relaxed text-paper/60 max-w-[26ch]">
              Be first to know when batches go live and fresh roasts ship. No
              spam, ever.
            </p>
            {!joined ? (
              <form onSubmit={handleSubmit} noValidate className="mt-4 flex">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 px-3.5 py-2.5 text-[13px] bg-paper/10 border border-paper/25 rounded-l-lg text-paper placeholder-paper/40 focus:outline-none focus:border-brand-red transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-[13px] font-semibold rounded-r-lg bg-brand-red hover:bg-brand-red-deep text-paper transition-colors duration-200 whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            ) : (
              <p role="status" className="mt-4 text-[13px] font-semibold text-paper/80">
                You&apos;re on the list. You&apos;ll hear first.
              </p>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-paper/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] tracking-wide text-paper/45">
            © {currentYear} Matralleta Coffee Co. &middot; A Baja Vibes Co.
            brand
          </p>
          <p className="text-[11px] tracking-wide text-paper/45">
            Hecho entre San Diego y Baja California
          </p>
        </div>
      </div>
    </footer>
  );
}
