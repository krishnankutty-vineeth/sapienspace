export default function Communications() {
  return (
    <main className="min-h-screen bg-[#020826] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Space Communications Hub
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          AI-enhanced deep-space networking, signal intelligence, and interplanetary communication systems.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">A Network Across the Cosmos</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Communication is the nervous system of space exploration.  
          The SapienSpace Communications Hub integrates AI, network simulation, signal processing,
          and deep-space communication research into a unified, open platform.
          <br /><br />
          From Delay-Tolerant Networking (DTN) to optical links, from satellite messaging to 
          interplanetary routing algorithms — we aim to make the cosmos more connected.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            title="Deep-Space Network Simulation"
            desc="Run models of LEO, MEO, GEO, and interplanetary communication pathways."
          />
          <FeatureCard
            title="Delay-Tolerant Networking"
            desc="Simulate DTN bundles, routing algorithms, contact windows, and disruptions."
          />
          <FeatureCard
            title="Satellite Signal Processing"
            desc="Process real and synthetic RF/optical signals using AI-assisted decoding."
          />
          <FeatureCard
            title="Optical Communication Models"
            desc="Simulate laser communication links, noise, jitter, and atmospheric attenuation."
          />
          <FeatureCard
            title="Telemetry & Tracking"
            desc="Explore models for spacecraft telemetry, command signaling, and navigation support."
          />
          <FeatureCard
            title="AI-Driven Comms Analysis"
            desc="AI interprets signal patterns, predicts link quality, and optimizes routing."
          />
        </div>
      </section>

      {/* AI Tools */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">AI-Powered Communication Tools</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          Space communication is complex — orbital mechanics, interference, latency, 
          disruptions, geometry, bandwidth limits.  
          Our AI models help translate complexity into clarity.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <AIBox
            title="Link Predictor AI"
            desc="Predicts communication windows, signal strength, and network losses based on orbital data."
          />
          <AIBox
            title="Signal Interpreter"
            desc="AI models decode noisy RF or optical signals, reconstruct shapes, and classify anomalies."
          />
          <AIBox
            title="Routing Optimizer"
            desc="Generates optimal communication routes for multi-node networks with dynamic geometry."
          />
          <AIBox
            title="Space Weather Model"
            desc="Correlates solar activity with communication disruptions and link degradation."
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
            "NASA DSN (Deep Space Network)",
            "ESA ESTRACK",
            "ITU Radiocommunication Sector",
            "NORAD Two-Line Elements (TLE)",
            "Space Weather Prediction Center (SWPC)",
            "CCSDS Communication Standards",
            "MIT LL OpenSat data",
            "Interplanetary Internet protocols"
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

      {/* Modules */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Communication Modules</h2>
        <p className="text-slate-300 mb-12 max-w-3xl mx-auto">
          These are the interactive tools planned for the SapienSpace 
          Communications Hub - designed for experimentation, learning, 
          and simulation.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <Module title="DSN Simulator" desc="Simulate NASA’s Deep Space Network with custom missions and contact windows." />
          <Module title="DTN Lab" desc="Bundle routing, disruption simulation, bandwidth models, and latency visualization." />
          <Module title="Satellite Link Visualizer" desc="RF/optical link paths, attenuation models, object-to-ground geometry." />
          <Module title="Interplanetary Router" desc="Compute routes between Earth, Moon, Mars, and relays with AI-assisted optimization." />
          <Module title="Frequency Explorer" desc="Signal bands, modulation types, spectrum layers, and atmospheric effects." />
          <Module title="Space Weather Dashboard" desc="Solar events, radiation storms, geomagnetic disruptions, risk levels." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-[#030b27]">
        <h2 className="text-3xl font-semibold mb-4">Help Build an Interplanetary Internet</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Communication is how civilization expands into space.  
          You can help us design the next generation of cosmic networks.
        </p>

        <a
          href="/platform"
          className="inline-block px-8 py-3 rounded-full bg-sky-400/90 text-[#021022] font-semibold hover:bg-sky-300/90 transition-all"
        >
          Explore the Platform
        </a>
      </section>
    </main>
  );
}


/* Components */
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
