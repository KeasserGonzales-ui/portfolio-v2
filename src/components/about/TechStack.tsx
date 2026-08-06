import Badge from "./Badge";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Docker",
  "REST API",
  "JWT",
];

const TechStack = () => {
  return (
    <div className="mt-10 w-full border-t border-slate-700 pt-8">
      <h3 className="text-lg font-semibold text-white">
        Tech Stack
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Technologies I currently use to build modern, scalable, and
        production-ready web applications.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
};

export default TechStack;