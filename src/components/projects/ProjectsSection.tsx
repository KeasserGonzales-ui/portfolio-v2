import FeaturedProjectCard from "./FeaturedProjectCard";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#09090B] text-white"
        >
            <div className="mx-auto max-w-7xl px-8 py-24 border-b border-slate-800">

                <p className="mb-3 font-semibold text-blue-400">
                    FEATURED PROJECTS
                </p>

                <h2 className="text-5xl font-bold">
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