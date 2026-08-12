export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[48rem] bg-amber-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Badge */}
        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-600/20 text-amber-400 border border-amber-600/40">
          San Diego Coffee Culture
        </span>

        {/* Wordmark */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
            Matralleta
          </h1>
          <p className="text-amber-500 font-semibold text-sm md:text-base uppercase tracking-[0.4em]">
            Coffee Truck &bull; Est. San Diego
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl">
          We didn&apos;t just build a coffee truck. We built a movement. Honest espresso, bold vibes, and stories served fresh every day.
        </p>

        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          From a raw idea to a street-culture institution, Matralleta is where coffee meets community. Every cup tells a story of craft, grit, and San Diego streets.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          
            href="#early-access"
            className="px-10 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-amber-600/50 hover:shadow-2xl"
          >
            Get Early Access
          </a>
          
            href="#journey"
            className="px-10 py-4 border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 rounded-lg font-semibold transition-all duration-200 text-center"
          >
            See Our Journey
          </a>
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
