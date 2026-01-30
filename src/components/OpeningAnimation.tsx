import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation = ({ onComplete }: OpeningAnimationProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),    // Fire line starts
      setTimeout(() => setPhase(2), 2000),   // Sparks appear
      setTimeout(() => setPhase(3), 2500),   // Name appears
      setTimeout(() => setPhase(4), 3500),   // Role appears
      setTimeout(() => setPhase(5), 4500),   // Tagline appears
      setTimeout(() => onComplete(), 6500),  // Animation complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const sparks = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fire Line */}
        <motion.div
          className="absolute left-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: "0%", x: "0%" }}
          animate={phase >= 1 ? { width: "100%", x: "0%" } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            boxShadow: "0 0 30px hsl(1, 98%, 44%), 0 0 60px hsl(1, 98%, 44%, 0.5)",
          }}
        />

        {/* Sparks */}
        {phase >= 2 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-center">
            {sparks.map((spark) => (
              <motion.div
                key={spark.id}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{ left: `${spark.x}%` }}
                initial={{ y: 0, opacity: 1, scale: 1 }}
                animate={{
                  y: [0, -40, -80],
                  opacity: [1, 0.8, 0],
                  scale: [1, 0.8, 0.3],
                }}
                transition={{
                  duration: 0.8,
                  delay: spark.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Text Container */}
        <div className="relative z-10 text-center">
          {/* Name */}
          <motion.h1
            className="font-display text-7xl md:text-9xl tracking-wider text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textShadow: phase >= 3 ? "0 0 40px hsl(1, 98%, 44%, 0.3)" : "none",
            }}
          >
            RAHUL S
          </motion.h1>

          {/* Role */}
          <motion.p
            className="font-mono text-lg md:text-xl text-muted-foreground mt-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={phase >= 4 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Senior Web Developer{" "}
            <span className="text-primary">·</span> Full Stack Engineer
          </motion.p>

          {/* Tagline */}
          <motion.div
            className="mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={phase >= 5 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="font-mono text-sm md:text-base text-primary tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I engineer systems. Not websites.
            </motion.p>
          </motion.div>
        </div>

        {/* Corner Accents */}
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary opacity-30"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 0.3 } : {}}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary opacity-30"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 0.3 } : {}}
          transition={{ duration: 0.5 }}
        />

        {/* Skip Button */}
        <motion.button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
        >
          SKIP INTRO
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
