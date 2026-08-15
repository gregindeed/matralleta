'use client';

import { useState } from 'react';

export default function QtyPicker() {
  const [qty, setQty] = useState(1);

  const step = (delta: number) => {
    setQty((q) => Math.min(10, Math.max(1, q + delta)));
  };

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-espresso-soft/70">
        Qty
      </p>
      <div className="mt-2 inline-flex items-center rounded-md border-2 border-kraft/40 bg-white/50 overflow-hidden">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={qty <= 1}
          aria-label="Decrease quantity"
          className="px-3 py-1.5 text-sm font-bold text-espresso hover:bg-paper-deep/60 disabled:text-espresso-soft/30 disabled:hover:bg-transparent transition-colors duration-150"
        >
          &minus;
        </button>
        <span
          aria-live="polite"
          className="min-w-9 text-center text-xs font-semibold text-espresso border-x-2 border-kraft/40 py-1.5"
        >
          {qty}
        </span>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={qty >= 10}
          aria-label="Increase quantity"
          className="px-3 py-1.5 text-sm font-bold text-espresso hover:bg-paper-deep/60 disabled:text-espresso-soft/30 disabled:hover:bg-transparent transition-colors duration-150"
        >
          +
        </button>
      </div>
    </div>
  );
}
