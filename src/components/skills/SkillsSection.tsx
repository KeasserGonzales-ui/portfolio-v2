import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="bg-[#09090B] py-24 text-white"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Professional Skills
                </p>

                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                    Technical Expertise
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                    My experience combines full stack development, productivity tools,
                    office administration, multimedia editing, and continuous learning
                    to deliver practical software and business solutions.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {skillCategories.map((category) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            skills={category.skills}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}