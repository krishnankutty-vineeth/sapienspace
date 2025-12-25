import HeroSection from "@/app/HeroSection";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#020826] text-white">
      <HeroSection />

      {/* WHAT IS SAPIENSPACE */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">What is SapienSpace?</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Sapienspace is an open, AI-powered exploration platform uniting space
          research, planetary science, robotics, deep-space communications, and
          interdisciplinary innovation — built for students, researchers, and
          the future of civilization.
        </p>
      </section>

      {/* Four Lab Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Focus Areas
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard
            title="Observatory"
            desc="AI-assisted planetary data exploration, orbital insights, and intelligent analytics."
          />
          <FeatureCard
            title="Space Communications"
            desc="Simulating deep-space networks, DTN systems, and AI signal processing."
          />
          <FeatureCard
            title="Robotics Lab"
            desc="Rover autonomy, RL-driven robotics, and simulation environments for space exploration."
          />
          <FeatureCard
            title="Research & Innovation"
            desc="Interdisciplinary science, astroinformatics, climate, Earth observation, and mission design."
          />
        </div>
      </section>

      {/* Open Research Platform */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Open Research Platform
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          A hybrid between Notion and GitHub — enabling structured research,
          version-controlled datasets, collaborative notes, experiment tracking,
          and AI-assisted scientific discovery.
        </p>
        <a
          href="/platform"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-sky-400/90 text-[#021022] font-semibold hover:bg-sky-300/90 transition-all"
        >
          Explore the Platform
        </a>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Join the Mission
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          Collaborate, learn, build, and innovate with a global community shaping
          humanity’s future in the cosmos.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-700/30 transition-all"
        >
          Learn More
        </a>
      </section>
    </main>
  );
}

// FeatureCard component

interface StepProps {
  title: string;
  desc: string;
}

function FeatureCard({ title, desc }: StepProps) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{desc}</p>
    </div>
  );
}
