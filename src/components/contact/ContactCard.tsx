import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  href: string;
}

const ContactCard = ({
  icon: Icon,
  title,
  value,
  description,
  href,
}: ContactCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-cyan-400" />

        <h3 className="text-lg font-semibold text-cyan-400">
          {title}
        </h3>
      </div>

      <p className="mt-4 break-all text-base text-white">
        {value}
      </p>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </a>
  );
};

export default ContactCard;