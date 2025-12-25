export default function ResearchLab() {
  return (
    <main className="min-h-screen bg-[#020826] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Research & Innovation Lab
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          An interdisciplinary research ecosystem exploring the cosmos, Earth, life, and intelligence.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          A Lab for Civilization-Scale Questions
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          The SapienSpace Research & Innovation Lab is where diverse scientific disciplines converge:
          astrophysics meets agriculture, AI meets ethics, robotics meets ecology.
          <br /><br />
          Our work is guided by a simple belief that the pursuit of knowledge should uplift humanity.
          We develop open tools, open research, and open infrastructure that empower the next generation
          of planetary thinkers, explorers, and innovators.
        </p>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Research Pillars
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <PillarCard
            title="Astrobiology & Life Sciences"
            desc="Study of life’s origins, habitability, microbial ecosystems, and planetary bio-signatures."
          />
          <PillarCard
            title="Earth Systems & Climate"
            desc="Satellite climate data, Earth dynamics, atmospheric models, oceans, and sustainability analytics."
          />
          <PillarCard
            title="Planetary Science"
            desc="Surface processes, geology, cryospheres, magnetospheres, and planetary formation systems."
          />
          <PillarCard
            title="Astrophysics & Cosmology"
            desc="Stellar evolution, galactic morphology, cosmic structure, and universe modeling."
          />
          <PillarCard
            title="AI for Science"
            desc="Domain-specific LLMs, scientific reasoning, experiment assistants, and data analysis models."
          />
          <PillarCard
            title="Robotics & Autonomous Systems"
            desc="Adaptive systems for planetary exploration, mapping, construction, and in-situ resource use."
          />
        </div>
      </section>

      {/* Open Research System */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">Open Research, Open Knowledge</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          The Research Lab integrates with the SapienSpace Open Research Platform, a hybrid of
          modern scientific workflow tools.  
          Every research project is version-controlled, transparent, and assisted by AI.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <AIBox
            title="AI Research Partner"
            desc="A scientific LLM trained on astronomy, physics, ecology, and engineering literature."
          />
          <AIBox
            title="Experiment Tracker"
            desc="Dataset lineage, experiment variations, parameter sweeps, and reproducibility logs."
          />
          <AIBox
            title="Knowledge Graph Engine"
            desc="Connects concepts, papers, datasets, models, and insights into a living scientific map."
          />
          <AIBox
            title="Dataset Explorer"
            desc="Upload, annotate, and analyze scientific datasets with AI-assisted summaries."
          />
        </div>
      </section>

      {/* Example Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Active & Proposed Research Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard
            title="Mars Subsurface Ice Mapping"
            desc="Using orbital radar data + ML-based inference to analyze potential ice reserves."
          />
          <ProjectCard
            title="Exoplanet Habitability Modeling"
            desc="AI models combining spectral signatures, orbital parameters, and stellar flux."
          />
          <ProjectCard
            title="Earth Climate Anomaly Detection"
            desc="AI-driven detection of long-term climate anomalies using EO and atmospheric datasets."
          />
          <ProjectCard
            title="Autonomous Rover Navigation Benchmark"
            desc="RL benchmark for unstructured terrain navigation in Mars-like environments."
          />
          <ProjectCard
            title="Cosmic Structure Simulation"
            desc="AI-accelerated simulations of galaxy formation and dark matter distribution."
          />
          <ProjectCard
            title="Biosignature Classification"
            desc="Identifying potential biological markers in spectral and geological datasets."
          />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Principles of Scientific Innovation
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <ValueCard title="Interdisciplinary Thinking" desc="Break silos - connect physics to biology, robotics to philosophy." />
          <ValueCard title="Open Access" desc="Research belongs to humanity. Tools and datasets must be available to all." />
          <ValueCard title="Ethical Science" desc="Innovation must be responsible, grounded, and human-centered." />
          <ValueCard title="Curiosity Over Competition" desc="Discovery is not a race, it’s a shared human journey." />
          <ValueCard title="Youth Empowerment" desc="Students and young thinkers are essential contributors, not passive learners." />
          <ValueCard title="Service to Civilization" desc="We build for the planet, the species, and the generations to come." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-[#030b27]">
        <h2 className="text-3xl font-semibold mb-4">Contribute to the Future of Science</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Join the mission to advance civilization-scale research - from climate systems 
          to cosmic origins. The future needs explorers like you.
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
function PillarCard({ title, desc }) {
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

function ProjectCard({ title, desc }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ValueCard({ title, desc }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
