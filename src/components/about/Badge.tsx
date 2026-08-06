import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-slate-700
        bg-slate-800/70
        px-4
        py-2
        text-sm
        font-medium
        text-slate-200
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-cyan-400
        hover:text-cyan-300
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;