import Badge from "./Badge";
import TechStack from "./TechStack";
import profileImage from "../../assets/images/profile.png";

const ProfileCard = () => {
    return (
        <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20">
            <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="mb-6">
                    <img
                        src={profileImage}
                        alt="Keasser Gonzales"
                        className="h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-xl"
                    />
                </div>

                {/* Name */}
                <h2 className="text-3xl font-bold leading-tight text-white">
                    Keasser Dune
                    <br />
                    Abellera Gonzales
                </h2>

                {/* Professional Title */}
                <p className="mt-2 text-lg font-medium text-cyan-400">
                    Junior Full Stack Developer
                </p>

                {/* Professional Summary */}
                <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
                    Passionate about building modern and scalable web applications using
                    React, TypeScript, Node.js, Express, and MySQL. Focused on writing
                    clean code and continuously improving as a Full Stack Developer.
                </p>

                {/* Professional Badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Badge>🟢 Open to Work</Badge>
                    <Badge>💻 Junior Full Stack Developer</Badge>
                </div>

                {/* Tech Stack */}
                <TechStack />
            </div>
            {/* Professional Statistics */}
            <div className="mt-10 grid w-full grid-cols-3 gap-4 border-t border-slate-700 pt-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        Year Learning
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        Technologies
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-cyan-400">1</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        Featured Project
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;