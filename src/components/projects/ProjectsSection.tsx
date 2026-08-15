import FeaturedProjectCard from "./FeaturedProjectCard";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#09090B] text-white"
        >
            <div className="mx-auto max-w-7xl border-b border-slate-800 px-5 py-20 sm:px-8 sm:py-24">

                <p className="mb-3 font-semibold text-blue-400">
                    FEATURED PROJECTS
                </p>

                <h2 className="text-4xl font-bold sm:text-5xl">
                    Real projects.
                    <br />
                    Real solutions.
                </h2>

                <FeaturedProjectCard />

                {/* ProjectGrid removed.
    Each featured project already has its own gallery. */}

            </div>
        </section>
    );
}