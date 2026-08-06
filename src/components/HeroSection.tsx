import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#09090B] text-white">
      <HeroBackground />

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center px-4 text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          custom={0}
          variants={textVariants}
        >
          Building software that solves
          <br />
          <span className="text-primary">real-world problems.</span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg leading-8 text-muted md:text-xl"
          custom={1}
          variants={textVariants}
        >
          Hi, I'm <span className="font-semibold text-white">Keasser Dune Gonzales</span>,
          a Technical Virtual Assistant transitioning into Full Stack Development,
          focused on building modern, scalable, and user-friendly web applications.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 md:flex-row"
          custom={2}
          variants={textVariants}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02]"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-card/30 px-6 py-3 font-medium text-white backdrop-blur-xl transition-transform hover:scale-[1.02]"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}