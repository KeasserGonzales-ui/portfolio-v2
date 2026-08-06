import HeroPreview from "./HeroPreview";
export default function HeroV2() {
    return (
        <section className="min-h-screen bg-[#09090B] text-white">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8">

                {/* LEFT SIDE */}
                <div className="flex-1">
                    <div className="mb-6">
                        <p className="font-medium text-cyan-400">
                            Junior Full Stack Developer
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                                🟢 Open to Work
                            </span>

                            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400">
                                🌍 Available for Remote Work
                            </span>
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold leading-tight">
                        From Operations
                        <br />
                        to Full Stack
                        <br />
                        Development.
                    </h1>

                    <p className="mt-8 max-w-xl text-lg text-gray-400">
                        My journey started in operations and virtual assistance.
                        <br />
                        <br />
                        Today, I'm building production-ready web applications using React,
                        TypeScript, Node.js, Express, and MySQL—turning real-world problems
                        into practical software solutions.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:bg-blue-500"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume/Keasser_Gonzales_Resume ATS.pdf"
                            download
                            className="rounded-lg border border-gray-600 px-6 py-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-1 justify-center">
                    <div className="w-full max-w-[620px]">
                        <HeroPreview />
                    </div>
                </div>

            </div>
        </section>
    );
}