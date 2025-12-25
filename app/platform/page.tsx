
export default function Platform() {
  return (
    <main className="min-h-screen bg-[#020826] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          SapienSpace Research Platform
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          An AI-powered platform for research, data, collaboration, and discovery.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Your Lab. Your Notes. Your Data. Interconnected.
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          The SapienSpace Platform is where ideas evolve into knowledge.
          It blends the structure of GitHub, the clarity of Notion, the intelligence of
          domain-specific AI models, and the power of scientific datasets, all inside a unified cosmic workspace.
          <br /><br />
          Build research pages, upload datasets, run experiments, map knowledge graphs,
          and collaborate with others - the entire scientific lifecycle lives here.
        </p>
      </section>

      {/* Main Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Core Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Feature
            number = "101"
            title="Research Pages"
            desc="Create structured research documents with markdown, embeds, formulas, citations, and AI summaries."
          />
          <Feature
            number = "102"
            title="Dataset Manager"
            desc="Upload datasets (CSV, NetCDF, FITS, images), annotate them, and version-control them."
          />
          <Feature
            number = "103"
            title="Experiment Tracker"
            desc="Run experiments, track parameters, log results, and monitor reproducibility."
          />
          <Feature
            number = "104"
            title="Knowledge Graph"
            desc="Visualize concepts, datasets, notes, and findings as a living web of scientific knowledge."
          />
          <Feature
            number = "105"
            title="AI Research Assistant"
            desc="Ask questions, generate summaries, run analysis, and get scientific suggestions."
          />
          <Feature
            number = "106"
            title="Project Workspaces"
            desc="Share workspaces with collaborators, manage access, and track contributions."
          />
        </div>
      </section>

      {/* AI Systems */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">AI Systems Integrated Into the Platform</h2>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          The platform hosts domain-specific AI models trained on astrophysics,
          planetary science, robotics, climate science, biology, and engineering datasets.
          <br /><br />
          These models provide insights, suggest research directions, interpret data,
          and accelerate scientific discovery.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <AI
            number = "201"
            title="Scientific LLM"
            desc="Trained on trusted scientific literature for accurate reasoning and research assistance."
          />
          <AI
            number = "202"
            title="Data Interpreter"
            desc="Automatically analyzes datasets, finds anomalies, builds summaries, and suggests hypotheses."
          />
          <AI
            number = "203"
            title="Code Generator"
            desc="Writes scripts for data processing, simulation, analysis, and visualization."
          />
          <AI
            number = "204"
            title="Ontology Builder"
            desc="Expands your knowledge graph with linked concepts, definitions, and relationships."
          />
        </div>
      </section>

      {/* Tools & Integrations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Tools & Integrations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-300 text-sm">
          {[
            "Markdown Editor with Block Components",
            "LaTeX & Mathematical Expressions",
            "FITS / HDF5 astrophysics file reader",
            "Satellite & telescope dataset loaders",
            "Bokeh / Plotly visualizations",
            "Python notebook integration",
            "Dataset diffing & versioning",
            "Research templates & blueprints",
            "API access for automation",
          ].map((tool, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Example */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">A Typical Workflow</h2>

        <div className="space-y-10">
          <Step
            number = "301"
            title="Create a Research Project"
            desc="Start with a blank template or choose one for astronomy, robotics, climate, or physics."
          />
          <Step
            number = "302"
            title="Add Notes & Datasets"
            desc="Upload files, write markdown notes, and tag concepts that start linking into the knowledge graph."
          />
          <Step
            number = "303"
            title="Run Experiments"
            desc="Execute models or upload results from external tools. Track everything with versioning."
          />
          <Step
            number = "304"
            title="Analyze With AI"
            desc="Get summaries, statistical insights, predictions, or scientific suggestions."
          />
          <Step
            number = "305"
            title="Publish or Share"
            desc="Make your project public, private, or collaborative with controlled permissions."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-[#030b27]">
        <h2 className="text-3xl font-semibold mb-4">
          Build the Future of Scientific Exploration
        </h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Research should be accessible, intelligent, and collaborative.  
          The SapienSpace Platform puts the future of science in your hands.
        </p>

        <a
          href="/signup"
          className="inline-block px-8 py-3 rounded-full bg-sky-400/90 text-[#021022] font-semibold hover:bg-sky-300/90 transition-all"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}

/* Components */
interface StepProps {
  number: string;
  title: string;
  desc: string;
}

function Feature({ number, title, desc }: StepProps) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-sky-400 font-bold text-3xl">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AI({ number, title, desc }: StepProps) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <div className="text-sky-400 font-bold text-3xl">{number}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step ({ number, title, desc }: StepProps) {
  return (
    <div className="flex gap-6">
      <div className="text-sky-400 font-bold text-3xl">{number}</div>
      <div>
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <p className="text-slate-300 text-sm">{desc}</p>
      </div>
    </div>
  );
}
