interface SkillCategoryProps {
    title: string;
    skills: string[];
}

export default function SkillCategory({
    title,
    skills,
}: SkillCategoryProps) {
    return (
        <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10">

            <h3 className="text-2xl font-bold text-white">
                {title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>

        </div>
    );
}
