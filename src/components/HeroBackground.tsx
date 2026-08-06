// src/components/HeroBackground.tsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Animated glass‑morphic background that mimics an Aurora gradient.
 * Includes subtle floating light orbs and a mouse‑parallax effect.
 */
export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Motion values for mouse position (0‑1 normalized)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Transform motion values into translate percentages for parallax layers
  const translateX = useTransform(mouseX, [0, 1], ["-8%", "8%"]);
  const translateY = useTransform(mouseY, [0, 1], ["-8%", "8%"]);

  // Update motion values on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    };

    const node = containerRef.current;
    node?.addEventListener("mousemove", handleMouseMove);
    return () => node?.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Aurora gradient layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#06B6D4] opacity-30"
        style={{
          translateX,
          translateY,
        }}
        animate={{
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating ambient circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: `${Math.random() * 120 + 80}px`,
            height: `${Math.random() * 120 + 80}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.7,
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid of tiny particles (optional) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
      >
        {/* Using CSS background‑image for performance */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22><circle cx=%225%22 cy=%225%22 r=%221%22 fill=%22%23ffffff%22 fill-opacity=%220.08%22/></svg>')] opacity-30" />
      </motion.div>
    </div>
  );
}