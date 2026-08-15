import { useState } from "react";
import ImageGalleryModal from "./ImageGalleryModal";
import { projects } from "./projectsData";

export default function FeaturedProjectCard() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <>
            <div className="mt-16 space-y-20">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="grid gap-10 lg:grid-cols-2"
                    >
                        <div
                            onClick={() => setSelectedProject(index)}
                            className="aspect-video cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl"
                        >
                            <img
                                src={project.featuredImage}
                                alt={project.title}
                                className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex flex-wrap items-center gap-3">
                                <p className="font-semibold text-blue-400">
                                    FEATURED PROJECT
                                </p>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Production In Progress"
                                            ? "bg-amber-500/20 text-amber-400"
                                            : project.status === "Deploying Soon"
                                                ? "bg-sky-500/20 text-sky-400"
                                                : "bg-emerald-500/20 text-emerald-400"
                                        }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                                {project.title}
                            </h3>

                            <p className="mt-6 leading-8 text-gray-400">
                                {project.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-white/10 px-4 py-2"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                {project.id === "barangay" ? (
                                    <a
                                        href="https://barangay-e-services-portal.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                       className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500 sm:w-auto"
                                    >
                                        Live Demo
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="cursor-not-allowed rounded-xl bg-slate-700 px-6 py-3 font-medium text-slate-300"
                                    >
                                        Coming Soon
                                    </button>
                                )}

                                {project.sourceCode ? (
                                    <a
                                        href={project.sourceCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                       className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:border-blue-500 hover:bg-white/5 sm:w-auto"
                                    >
                                        View Source
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="cursor-not-allowed rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-slate-400"
                                    >
                                        GitHub Soon
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject !== null && (
                <ImageGalleryModal
                    isOpen={true}
                    onClose={() => setSelectedProject(null)}
                    images={projects[selectedProject].gallery}
                    initialIndex={0}
                />
            )}
        </>
    );
}