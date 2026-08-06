import { Download } from "lucide-react";
const ResumeCTA = () => {
    return (
       <section className="mt-20 mb-12">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-12 text-center shadow-xl backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Ready to Work Together?
                </p>

                <h2 className="mt-4 text-4xl font-bold text-white">
                    Let's Build Something Amazing
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                    I'm actively seeking Junior Full Stack Developer opportunities,
                    freelance projects, and collaborations where I can contribute,
                    continue learning, and create meaningful software solutions.
                </p>

                <div className="mt-10">
                    <a
                        href="/resume/Keasser_Gonzales_Resume ATS.pdf"
                        download
                        className="
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-cyan-500
      px-8
      py-4
      text-lg
      font-semibold
      text-slate-950
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      hover:bg-cyan-400
      hover:shadow-xl
      hover:shadow-cyan-500/40
    "
                    >
                        <Download size={22} />

                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResumeCTA;