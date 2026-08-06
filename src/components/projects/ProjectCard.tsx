interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tech: string[];
    onClick: () => void;
}

export default function ProjectCard({
    title,
    description,
    image,
    tech,
    onClick,
}: ProjectCardProps) {
    return (
        <div
            onClick={onClick}
            className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#111111]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-[0_0_40px_rgba(59,130,246,0.20)]
            "
        >
            <div className="aspect-[16/10] overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

            </div>

            <div className="space-y-6 p-8">

                <h3 className="text-3xl font-bold text-white">
                    {title}
                </h3>

                <p className="text-sm leading-7 text-gray-400">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">

                    {tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                        >
                            {item}
                        </span>
                    ))}

                </div>

                <button
                    className="
                        mt-2
                        rounded-xl
                        border
                        border-blue-500/30
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-blue-400
                        transition
                        hover:bg-blue-600
                        hover:text-white
                    "
                >
                    View Module →
                </button>

            </div>

        </div>
    );
}