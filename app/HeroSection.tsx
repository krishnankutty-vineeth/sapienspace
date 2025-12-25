export default function HeroSection() {
  return (
    <header className="relative isolate w-full min-h-[72vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020826] via-[#08123a] to-[#050513] opacity-95" />

        {/* Planet Horizon SVG */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 bottom-[-8%] w-[140%] max-w-none opacity-60 animate-planet-rise"
          viewBox="0 0 1200 300"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="horizonGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#00112a" />
              <stop offset="60%" stopColor="#09284a" />
              <stop offset="100%" stopColor="#0c2f55" />
            </linearGradient>

            <radialGradient id="glow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#70f0ff" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#70f0ff" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#70f0ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d="M0,250 C150,150 450,150 600,250 C750,350 1050,350 1200,250 L1200 300 L0 300 Z"
            fill="url(#horizonGrad)"
          />
          <ellipse cx="600" cy="230" rx="400" ry="80" fill="url(#glow)" />
        </svg>
      </div>

      {/* Foreground */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <p className="mb-4 text-sm md:text-base text-sky-200/80 tracking-wide">
            SapienSpace - Science as Service. Space as Civilization.
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            Where Human Wisdom Meets the Infinite Cosmos.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200/85">
            An AI-powered observatory and research platform for a civilization
            ready to grow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center">
            <a
              href="/platform"
              className="inline-flex items-center justify-center rounded-full bg-sky-400/95 hover:bg-sky-300/95 px-6 py-3 text-sm md:text-base font-semibold text-[#021022] shadow-md"
            >
              Enter the Platform
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm md:text-base font-medium text-slate-200 hover:bg-slate-700/30 transition-all"
            >
              Learn the Mission
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
