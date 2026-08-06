import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-[#111111] text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="mx-auto max-w-7xl px-8 py-24 border-b border-slate-800">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT - Professional Profile Card */}
          <ProfileCard />

          {/* RIGHT - Existing About Content */}
          <div>
            <p className="mb-3 font-semibold text-blue-400">
              ABOUT ME
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Turning experience
              <br />
              into software.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              I spent years working in operations, customer support,
              purchasing, and virtual assistance before transitioning
              into Full Stack Development.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Today, I build modern web applications while continuously
              improving my skills through real-world projects.
            </p>
            {/* Professional Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <h3 className="text-lg font-semibold text-cyan-400">
                  🎯 Goal
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Build scalable and production-ready web applications.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <h3 className="text-lg font-semibold text-cyan-400">
                  💼 Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Frontend, Backend, APIs, and Full Stack Development.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <h3 className="text-lg font-semibold text-cyan-400">
                  🚀 Current Project
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Barangay e-Services Portal built with React, Node.js, Express, and MySQL.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <h3 className="text-lg font-semibold text-cyan-400">
                  📚 Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Continuously improving through real-world projects and modern development practices.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}