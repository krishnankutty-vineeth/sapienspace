export default function About() {
  return (
    <main className="min-h-screen bg-[#020826] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About SapienSpace
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          <b>A humanistic Science and technology initiative for the next era of civilization.</b>
        </p>
      </section>

      {/* Our Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Vision</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          SapienSpace was born from a simple belief: that scientific progress
          should elevate not just nations, but civilization itself. We see
          science not as a tool of prestige or competition, but as a bridge
          spanning socio-economic divides, geographical boundaries, and cultural
          fragmentation.  
          <br /><br />
          We aim to build an ecosystem where human curiosity becomes a global
          force. A place where interdisciplinary research, open data, and
          AI-driven exploration converge to empower students, researchers,
          innovators, and dreamers everywhere.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Mission & Purpose
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Our mission is to create a modular space-tech ecosystem that democratizes
          access to exploration.  
          <br /><br />
          We want to be a catalyst, a modern counterpart to visionary institutions
          like NASA, CNSA, CSA, ESA, DLR, JAXA, Roscosmos, ISRO and UKSA; not to compete with them, but to continue what
          they began: enabling humanity to grow beyond its limitations.
        </p>
      </section>

      {/* Inspiration (Three Pillars Section) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Inspired by Three Great Minds
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Carl Sagan */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4">Dr. Carl Sagan</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              The cosmos is not just a scientific frontier, but a mirror for
              humanity’s soul.  
              <br /><br />
              “We are a way for the cosmos to know itself.”
            </p>
          </div>

          {/* Sarabhai */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4">Dr. Vikram Sarabhai</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Space technology must uplift society. Innovation is meaningful only
              when it serves people.  
              <br /><br />
              “We must be second to none in applying technology to the real problems
              of man and society.”
            </p>
          </div>

          {/* APJ Abdul Kalam */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4">Dr. A.P.J. Abdul Kalam</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Science is a force of inspiration. Empower the youth, ignite curiosity,
              and build with purpose.  
              <br /><br />
              “Science is a beautiful gift to humanity; we should not distort it.”
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Our Approach
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          SapienSpace is a living laboratory of curiosity. We welcome disciplines
          from astrophysics to agriculture, robotics to philosophy, because the
          future is interdisciplinary.  
          <br /><br />
          Our systems are built around openness: open research, open tools, open
          learning. We want contributions to echo beyond academic journals, and
          directly into the lives of people and the conscience of the universe.
        </p>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <ValueCard title="Humanistic Science" desc="Science is for people. Technology must serve society, not prestige." />
          <ValueCard title="Openness & Curiosity" desc="Knowledge should be accessible, collaborative, and exploratory." />
          <ValueCard title="Interdisciplinary Growth" desc="Ideas grow where disciplines meet — across science, ethics, and art." />
          <ValueCard title="Responsible Innovation" desc="Space exploration must be grounded, ethical, and sustainable." />
          <ValueCard title="Youth Empowerment" desc="We build tools that ignite imagination and enable participation." />
          <ValueCard title="Service to Civilization" desc="Our work contributes not to nations, but to humanity as a whole." />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-[#030b27]">
        <h2 className="text-3xl font-semibold mb-4">Join the Mission</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          SapienSpace is growing and you can be part of it.  
          Whether you're a student, researcher, engineer, artist, or dreamer,
          there’s a place for you among the stars.
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

interface StepProps {
  title: string;
  desc: string;
}
// Value card component
function ValueCard({ title, desc }: StepProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
