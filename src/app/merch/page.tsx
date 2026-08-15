import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import SizePicker from '@/components/SizePicker';
import QtyPicker from '@/components/QtyPicker';

export const metadata: Metadata = {
  title: 'Merch — Matralleta Coffee Co.',
  description:
    'Matralleta Coffee Co. merch: tees, hats, stickers and mugs. Same rules as the bags — kraft, cream, black and red. Coming soon.',
};

export default function MerchPage() {
  return (
    <main className="min-h-screen flex flex-col text-espresso">
      {/* Top bar */}
      <div className="bg-espresso py-3 px-6 flex items-center justify-center gap-4">
        <span className="hidden sm:block h-px w-12 bg-paper/30" aria-hidden="true"></span>
        <a
          href="/"
          className="pl-[0.35em] text-[11px] font-semibold uppercase tracking-[0.35em] text-paper/80 hover:text-paper transition-colors duration-200"
        >
          Matralleta Coffee Co.
        </a>
        <span className="hidden sm:block h-px w-12 bg-paper/30" aria-hidden="true"></span>
      </div>

      {/* Header */}
      <section className="bg-paper px-6 pt-10 pb-6 text-center">
        <h1 className="font-display text-3xl lg:text-4xl uppercase tracking-tight">
          Merch
        </h1>
        <p className="mt-3 text-sm text-espresso-soft max-w-md mx-auto">
          Same rules as the bags &mdash; kraft, cream, black and red. The logo
          small, the attitude big.
        </p>
      </section>

      {/* Hero product — the Pocket Logo Tee */}
      <section className="bg-paper px-6 lg:px-12 pb-14 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="group relative flex justify-center">
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-espresso/10 blur-2xl rounded-full"
              aria-hidden="true"
            ></div>
            <div className="relative w-full max-w-sm lg:max-w-md float-slow">
              <img
                src="/merch/tee-front.webp"
                alt="OG Pocket Logo Tee — front"
                className="w-full drop-shadow-2xl transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/merch/tee-back.webp"
                alt="OG Pocket Logo Tee — back"
                className="absolute inset-0 w-full drop-shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-kraft-deep">
              Merch Flagship
            </p>
            <h2 className="mt-2 font-display text-xl lg:text-2xl uppercase tracking-tight">
              OG Pocket Logo Tee
            </h2>
            <p className="mt-1 text-sm font-bold text-kraft-deep">$32</p>
            <p className="mt-3 text-sm text-espresso-soft leading-relaxed max-w-sm mx-auto lg:mx-0">
              Heavyweight black tee. Pocket arch up front, full arch across
              the back &mdash; San Diego &times; Baja CA on both. The base of
              the line &mdash; where the merch starts. Hover to flip it.
            </p>
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              <SizePicker />
              <QtyPicker />
            </div>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
              <span
                title="First run not printed yet"
                className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] rounded-lg bg-espresso/10 text-espresso-soft/50 cursor-not-allowed"
              >
                Out of Stock
              </span>
              <a
                href="/#early-access"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-red hover:text-brand-red-deep transition-colors duration-200"
              >
                Get notified
              </a>
            </div>

            <p className="mt-3 text-[11px] text-espresso-soft/60 max-w-sm mx-auto lg:mx-0">
              First run isn&apos;t printed yet &mdash; the list hears the
              moment it lands.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
