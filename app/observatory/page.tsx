export default function Observatory() {
  return (
    <main className="min-h-screen bg-[#020826] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          SapienSpace Observatory
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          An AI-assisted cosmic observatory for Earth, planets, stars, and deep space.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          A New-Generation Observatory
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          The SapienSpace Observatory blends open planetary science, AI-driven analytics,
          and interactive exploration tools. Designed for students, researchers,
          citizen-scientists, and dreamers, it provides real insight into the cosmos
          from Earth observation to deep-space analysis.
          <br /><br />
          Powered by AI models, scientific datasets, and simulation tools, this observatory
          turns raw astronomical data into structured knowledge.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            title="Planetary Data Explorer"
            desc="Browse orbital, geological, atmospheric, and magnetic field data from planets and moons."
          />
          <FeatureCard
            title="Star & Exoplanet Catalogs"
            desc="Explore spectral types, distances, habitability indices, and stellar system models."
          />
          <FeatureCard
            title="Earth Observation Hub"
            desc="View climate layers, vegetation, oceans, land temperature, and satellite composites."
          />
          <FeatureCard
            title="AI Astro-Analytics"
            desc="Run AI queries on datasets: anomaly detection, feature extraction, temporal forecasting."
          />
          <FeatureCard
            title="Interactive Visualizations"
            desc="3D models, orbital paths, heatmaps, topography renders, real-time object positioning."
          />
          <FeatureCard
            title="Cosmic Timeline"
            desc="AI-generated cosmology events, stellar evolution maps, and galactic structure insights."
          />
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">AI-Powered Exploration</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          The observatory is enhanced by domain-specific AI agents trained on astronomy,
          planetary science, astrophysics, heliophysics, and cosmology datasets.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <AIBox
            title="Planetary Insight Model"
            desc="Get summaries of terrain, atmospheric profiles, composition, or potential scientific value of locations on Mars, Moon, Europa, Titan, and more."
          />
          <AIBox
            title="Astro-Query Engine"
            desc="Ask natural-language questions like “What are the closest Earth-like planets?” or “Show stars entering red-giant phase within 100 light years.”"
          />
          <AIBox
            title="Earth Data Interpreter"
            desc="AI analysis of EO datasets: climate trends, land patterns, flood detection, environmental indicators."
          />
          <AIBox
            title="Cosmic Model Explorer"
            desc="AI-curated explanations of stellar evolution, galactic morphology, supernova remnants, and cosmology layers."
          />
        </div>
      </section>

      {/* Data Sources */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Data Sources & Scientific Foundations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-300 text-sm">
          {[
            "NASA PDS (Planetary Data System)",
            "ESA Open Science Hub",
            "JAXA Earth Observation",
            "USGS Astrogeology",
            "GAIA Star Catalog",
            "Kepler / TESS Exoplanet Archives",
            "NOAA Earth Data",
            "Open Cosmology Datasets",
            "Laser altimetry & DEMs"
          ].map((source, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              {source}
            </div>
          ))}
        </div>
      </section>

      {/* Explorer Modules */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Observatory Modules
        </h2>

        <p className="text-slate-300 mb-12 max-w-3xl mx-auto">
          These modules will form the interactive suite of the SapienSpace Observatory,
          accessible directly from the platform.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <Module title="Planet Explorer" desc="Surface data, elevation, mineralogy, atmosphere, simulation layers." />
          <Module title="Star Atlas" desc="Stellar positions, distances, lifecycle stages, radiation models." />
          <Module title="Exoplanet Finder" desc="Habitability scores, orbital parameters, spectral signatures." />
          <Module title="Earth Dashboard" desc="Climate layers, satellite data, vegetation indices, oceans & ice." />
          <Module title="Cosmic Timeline" desc="Universe evolution, CMB layers, epoch maps, structure formation." />
          <Module title="Space Objects Tracker" desc="Near-Earth objects, asteroids, comets, real-time orbital visualization." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-[#030b27]">
        <h2 className="text-3xl font-semibold mb-4">Explore the Cosmos with Us</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          The Observatory is continuously expanding with new datasets, tools, and AI models.
          You can help shape the next chapter of cosmic discovery.
        </p>

        <a
          href="/platform"
          className="inline-block px-8 py-3 rounded-full bg-sky-400/90 text-[#021022] font-semibold hover:bg-sky-300/90 transition-all"
        >
          Enter the Platform
        </a>
      </section>
    </main>
  );
}

// Components
function FeatureCard({ title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AIBox({ title, desc }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Module({ title, desc }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
