'use client';

import { useState } from 'react';

type Batch = {
  num: string; // internal key only
  role: string;
  name: string;
  cut: string;
  notes: string;
  status: string;
  tagline: string;
  strongCut?: boolean;
  image?: string; // drop a /public path here when card art is ready
  bg?: string; // optional photographic panel backdrop
  tone: string; // panel background
  dark?: boolean; // true = light text on dark panel
};

const roster: Batch[] = [
  {
    num: '001',
    role: 'The Flagship',
    name: 'Dual Wield',
    cut: 'Medium Roast',
    notes: 'Honey • Cinnamon',
    status: 'First Up',
    tagline: 'Balanced. One in each hand.',
    image: '/hero-bag.webp',
    bg: '/dualwield-bg.webp',
    tone: '#d9b98f',
    dark: true,
  },
  {
    num: '002',
    role: 'The Loud One',
    name: 'Ratatatat',
    cut: 'Dark Roast',
    notes: 'Cocoa • Chili',
    status: 'Roasting Now',
    strongCut: true,
    tagline: 'The loud one. Full burst.',
    image: '/ratatatat-bag.webp',
    bg: '/ratatatat-bg.webp',
    tone: '#c22f22',
    dark: true,
  },
  {
    num: '003',
    role: 'The Fast One',
    name: 'Quick Draw',
    cut: 'Light Roast',
    notes: 'Citrus • Honeysuckle',
    status: 'Coming Soon',
    tagline: 'Bright and fast. First light.',
    image: '/quickdraw-bag.webp',
    tone: '#222222',
    dark: true,
  },
  {
    num: '004',
    role: 'The Technical One',
    name: 'Double Feed',
    cut: 'Espresso Roast',
    notes: 'Dark Chocolate • Brown Sugar',
    status: 'Coming Soon',
    tagline: 'Built for doubles — 18g in, 36g out.',
    image: '/doublefeed-bag.webp',
    bg: '/doublefeed-bg.webp',
    tone: '#8f7134',
    dark: true,
  },
];

export default function Lineup() {
  const [active, setActive] = useState(0);

  return (
    <section id="lineup">
      {/* Title bar */}
      <div className="bg-espresso py-3 px-6 flex items-center justify-center gap-4">
        <span className="hidden sm:block h-px w-12 bg-paper/30" aria-hidden="true"></span>
        <p className="pl-[0.35em] text-[11px] font-semibold uppercase tracking-[0.35em] text-paper/80 text-center">
          The Lineup &mdash; Four Cuts. No Filler.
        </p>
        <span className="hidden sm:block h-px w-12 bg-paper/30" aria-hidden="true"></span>
      </div>

      {/* Full-bleed expanding panels */}
      <div className="flex flex-col lg:flex-row h-[85vh] lg:h-[62vh]">
        {roster.map((batch, i) => {
          const isActive = i === active;
          const text = batch.dark ? 'text-paper' : 'text-espresso';
          const subText = batch.dark ? 'text-paper/70' : 'text-espresso-soft';
          return (
            <div
              key={batch.num}
              role="button"
              tabIndex={0}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              aria-expanded={isActive}
              className={`relative overflow-hidden text-left transition-all duration-500 ease-in-out border-espresso/15 border-t lg:border-t-0 lg:border-l first:border-t-0 lg:first:border-l-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-red ${
                isActive ? '' : 'cursor-pointer hover:brightness-105'
              }`}
              style={{
                backgroundColor: batch.tone,
                flexGrow: isActive ? 6 : 1,
                flexBasis: 0,
                ...(batch.bg
                  ? {
                      backgroundImage: `url(${batch.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}),
              }}
            >
              {batch.bg && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none"
                  aria-hidden="true"
                ></div>
              )}

              {/* Collapsed label */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <p
                  className={`font-display uppercase tracking-widest whitespace-nowrap text-sm lg:text-base lg:-rotate-90 ${text}`}
                >
                  {batch.name}
                </p>
              </div>

              {/* Expanded content */}
              <div
                className={`absolute inset-0 flex transition-opacity duration-300 ${
                  isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Copy */}
                <div className="flex flex-col justify-center p-7 lg:p-14 max-w-lg">
                  <div className="flex items-center gap-3">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${subText}`}>
                      {batch.role}
                    </p>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full border whitespace-nowrap ${
                        batch.dark
                          ? 'border-paper/40 text-paper/80'
                          : 'border-kraft/50 text-kraft-deep'
                      }`}
                    >
                      {batch.status}
                    </span>
                  </div>

                  <h3 className={`mt-3 font-display text-3xl lg:text-5xl uppercase tracking-tight leading-none ${text}`}>
                    {batch.name}
                  </h3>

                  {batch.strongCut && (
                    <p className="mt-2 inline-block self-start px-2 py-1 rounded text-[10px] font-bold uppercase tracking-[0.3em] text-paper bg-brand-red">
                      Strong Cut
                    </p>
                  )}

                  <p className={`mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] ${subText}`}>
                    {batch.cut} &bull; {batch.notes}
                  </p>

                  <p className={`mt-3 text-sm lg:text-base leading-relaxed ${subText}`}>
                    {batch.tagline}
                  </p>

                  <div className="mt-7 flex items-center gap-4">
                    <span
                      className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] rounded-lg cursor-not-allowed ${
                        batch.dark
                          ? 'bg-paper/15 text-paper/50'
                          : 'bg-espresso/10 text-espresso-soft/50'
                      }`}
                      title={batch.status}
                    >
                      Out of Stock
                    </span>
                    <a
                      href="#early-access"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                        batch.dark
                          ? 'text-paper/80 hover:text-paper'
                          : 'text-brand-red hover:text-brand-red-deep'
                      }`}
                    >
                      Get notified
                    </a>
                  </div>
                </div>

                {/* Art — mobile corner accent */}
                {batch.image && (
                  <img
                    src={batch.image}
                    alt=""
                    aria-hidden="true"
                    className="sm:hidden absolute right-1 bottom-1 w-36 opacity-90 pointer-events-none"
                  />
                )}

                {/* Art */}
                {batch.image ? (
                  <div className="relative flex-1 hidden sm:block">
                    <img
                      src={batch.image}
                      alt={`${batch.name} packaging`}
                      className={`absolute inset-0 w-full h-full object-contain p-8 ${batch.bg ? 'object-bottom pb-4' : 'object-center'}`}
                    />
                  </div>
                ) : (
                  <div className="relative flex-1 hidden sm:flex items-center justify-center">
                    <p
                      className={`font-display uppercase tracking-widest text-7xl lg:text-8xl opacity-10 select-none ${text}`}
                    >
                      {batch.name.split(' ')[0]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
