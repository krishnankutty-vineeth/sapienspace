export default function RoboticsLab() {
  return (
    <main className="min-h-screen bg-[#020826] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Robotics & Autonomous Systems Lab
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          Building intelligent machines for Earth, Moon, Mars, and beyond.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          A Lab for the Next Generation of Space Robotics
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Space robotics is the future of exploration. Autonomous rovers, dexterous 
          manipulators, in-situ resource utilization bots, and swarm systems will enable 
          humanity to build, navigate, and survive on other worlds.
          <br /><br />
          The SapienSpace Robotics Lab combines AI, simulation, control systems, 
          reinforcement learning, and planetary environment modeling to create 
          adaptable robotic systems ready for extraterrestrial challenges.
        </p>
      </section>

      {/* Core Areas */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Core Research Areas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            title="Autonomous Planetary Rovers"
            desc="Navigation, SLAM, hazard detection, and terrain classification on unstructured surfaces."
          />
          <FeatureCard
            title="Robotic Manipulation"
            desc="Arms, grippers, and multi-axis manipulators for construction, sampling, and assembly."
          />
          <FeatureCard
            title="Swarm Robotics"
            desc="Coordinated robots for surface mapping, habitat construction, and distributed sensing."
          />
          <FeatureCard
            title="Reinforcement Learning"
            desc="Policy learning for locomotion, control, path planning, and adaptive behaviors."
          />
          <FeatureCard
            title="Simulation Environments"
            desc="Unity, Gazebo, IsaacSim, and custom-built terrain & physics models."
          />
          <FeatureCard
            title="Human-Robot Interaction"
            desc="Interfaces, teleoperation layers, and safe hybrid autonomy."
          />
        </div>
      </section>

      {/* AI-Powered Tools */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">AI Tools in Robotics</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          AI plays a central role in space robotics — from navigation to 
          adaptive control. These tools are integrated across the lab’s systems 
          for both simulation and physical prototyping.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <AIBox
            title="Terrain Classifier AI"
            desc="Classifies rocks, slopes, obstacles, dust layers, and hazards from visual and depth data."
          />
          <AIBox
            title="Navigation Planner"
            desc="Generates safe, energy-efficient paths across rugged surfaces using RL and graph planners."
          />
          <AIBox
            title="Manipulator Controller"
            desc="AI-driven control for robotic arms handling construction, sampling, or science instruments."
          />
          <AIBox
            title="Fault Recovery System"
            desc="Predicts and resolves mechanical or computational failures autonomously."
          />
        </div>
      </section>

      {/* Simulation Platforms */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Simulation & Testing Platforms
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Module
            title="Planetary Surface Simulator"
            desc="3D environments for Mars, Moon, Europa — with realistic physics and terrain models."
          />
          <Module
            title="Robotics Sandbox"
            desc="Custom environment for rapid prototyping, sensors, and mobility testing."
          />
          <Module
            title="Multi-Robot Arena"
            desc="Test swarm robotics behaviors, communication, and formation control."
          />
          <Module
            title="Manipulator Lab"
            desc="Simulate multi-axis arms, end-effectors, and precision control environments."
          />
          <Module
            title="Navigation Challenge Arena"
            desc="Obstacle courses, slopes, craters, dust hazards, pathfinding benchmarks."
          />
          <Module
            title="RL Training Farm"
            desc="Massively parallel reinforcement learning system for locomotion and planning."
          />
        </div>
      </section>

      {/* Data & Software Foundations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Tools, Frameworks & Foundations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-300 text-sm">
          {[
            "ROS 2 (Robot Operating System)",
            "Gazebo / Ignition Simulator",
            "Unity ML-Agents",
            "NVIDIA IsaacSim",
            "OpenCV / CV libraries",
            "PyTorch & TensorFlow",
            "SLAM frameworks",
            "Reinforcement learning toolkits",
            "Robotics datasets (RoboNet, DeepMind Control Suite)"
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

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-[#030b27]">
        <h2 className="text-3xl font-semibold mb-4">Help Build the Robots of Tomorrow</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Robotics will define humanity’s expansion beyond Earth.  
          Explore, collaborate, and help build the machines that will take us there.
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
