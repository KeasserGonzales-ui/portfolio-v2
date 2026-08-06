import { Globe, Mail, Send } from "lucide-react";

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/KeasserGonzales-ui",
        icon: Globe,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/KDAbelletaGonzales",
        icon: Globe,
    },
    {
        name: "Telegram",
        href: "https://t.me/Keasser123",
        icon: Send,
    },
    {
        name: "Email",
        href: "mailto:onzaleskeasser@gmail.com",
        icon: Mail,
    },
];

export default function FooterSocial() {
    return (
        <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>

            <div className="mt-4 flex flex-col gap-3">
                {socials.map(({ name, href, icon: Icon }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="flex items-center gap-3 text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                    >
                        <Icon size={18} />
                        <span>{name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}