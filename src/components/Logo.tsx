import { motion } from "framer-motion";

export default function Logo() {
  // Rotating monogram “KD” with a soft glow
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary"
      whileHover={{ rotate: 360, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      aria-label="Keasser Dune Gonzales logo"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
        />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="48"
          fontFamily="Outfit, sans-serif"
          fill="currentColor"
        >
          KD
        </text>
      </svg>
    </motion.div>
  );
}