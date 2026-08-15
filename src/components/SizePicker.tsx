'use client';

import { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL', '2XL'];

export default function SizePicker() {
  const [selected, setSelected] = useState('M');

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-espresso-soft/70">
        Size
      </p>
      <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelected(size)}
            aria-pressed={selected === size}
            className={`min-w-9 px-2.5 py-1.5 text-xs font-semibold rounded-md border-2 transition-colors duration-150 ${
              selected === size
                ? 'bg-espresso text-paper border-espresso'
                : 'bg-white/50 text-espresso border-kraft/40 hover:border-kraft'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
