export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 lg:py-0 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-600/20 text-amber-400 border border-amber-600/40">
              🚐 San Diego Coffee Culture
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Matralleta
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
            We didn't just build a coffee truck. We built a movement. Honest espresso, bold vibes, and stories served fresh every day.
          </p>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            From a raw idea to a street-culture institution, Matralleta is where coffee meets community. Every cup tells a story of craft, grit, and San Diego streets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="#early-access"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-amber-600/50 hover:shadow-2xl"
            >
              Get Early Access
            </a>
            <a
              href="#journey"
              className="px-8 py-4 border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 rounded-lg font-semibold transition-all duration-200 text-center"
            >
              See Our Journey
            </a>
          </div>
        </div>

        {/* Truck visual side */}
        <div className="relative h-96 lg:h-full flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder truck image with gradient fallback */}
            <div className="w-full h-full bg-gradient-to-br from-amber-900 via-amber-800 to-zinc-900 flex items-center justify-center">
              <svg
                className="w-40 h-40 text-amber-600 opacity-30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path
                  fillRule="evenodd"
                  d="M2 7a2 2 0 012-2h12a1 1 0 01.894.553l1.659 3.318A2 2 0 0119 11H3a2 2 0 01-1-3.732V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-6">
              <p className="text-amber-400 font-semibold text-lg">Coffee Truck • San Diego</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
