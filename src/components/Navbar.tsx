import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  children?: React.ReactNode;
}

export default function NavBar({ children }: NavbarProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-3 md:px-12"
      style={{
        backgroundColor: "rgba(30,41,59,0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        {children}
      </div>

      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        {["Home", "About", "Projects", "Experience", "Contact"].map(
          (label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="cursor-pointer text-muted hover:text-primary transition-colors"
              >
                {label}
              </a>
            </li>
          )
        )}
      </ul>
    </motion.nav>
  );
}