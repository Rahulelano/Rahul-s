import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation = ({ onComplete }: OpeningAnimationProps) => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("SYSTEM_BOOT");

  useEffect(() => {
    // Counter Simulation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 50);

    // Status Updates
    const statusTimer1 = setTimeout(() => setStatus("CALIBRATING_OPTICS"), 1000);
    const statusTimer2 = setTimeout(() => setStatus("SYNCHRONIZING_CORE"), 2000);
    const statusTimer3 = setTimeout(() => setStatus("ACCESS_GRANTED"), 3500);

    // Completion
    const completeTimer = setTimeout(onComplete, 4200);

    return () => {
      clearInterval(interval);
      clearTimeout(statusTimer1);
      clearTimeout(statusTimer2);
      clearTimeout(statusTimer3);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden cursor-none"
        exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
        transition={{ duration: 0.8 }}
      >
        {/* SCANLINES */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />

        {/* CENTER HUD */}
        <div className="relative z-20 flex flex-col items-center">
          {/* Rotating Outer Ring */}
          <motion.div
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          />
          {/* Counter Rotating Inner Ring */}
          <motion.div
            className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] border border-fire-red/20 rounded-full"
            style={{ borderTopColor: "transparent", borderBottomColor: "transparent" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          />

          {/* Main Processor Grid */}
          <div className="relative w-64 h-64 border-2 border-white/5 border-t-white/20 border-b-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-fire-red" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-fire-red" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-fire-red" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-fire-red" />

            {/* Identity Text */}
            <div className="text-center space-y-2">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: Math.random() * 2 }}
              >
                <h1 className="text-4xl font-black italic tracking-tighter text-white">
                  RAHUL S
                </h1>
              </motion.div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-fire-red to-transparent" />
              <p className="font-mono text-xs text-fire-red tracking-[0.2em]">
                {status}
              </p>
            </div>
          </div>

          {/* Loading Percentage - Large */}
          <h2 className="absolute -bottom-32 text-8xl md:text-9xl font-black text-white/5 font-mono select-none">
            {count}%
          </h2>
        </div>

        {/* TOP LEFT DATA BLOCK */}
        <div className="absolute top-8 left-8 hidden md:block">
          <div className="space-y-1 font-mono text-[10px] text-white/40">
            <p>CPU_TEMP: 42°C</p>
            <p>MEM_ALLOC: 8192MB</p>
            <p>LATENCY: 12ms</p>
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1 bg-fire-red/50 mt-2"
            />
          </div>
        </div>

        {/* BOTTOM RIGHT BLOCK */}
        <div className="absolute bottom-8 right-8 hidden md:block text-right">
          <div className="space-y-1 font-mono text-[10px] text-white/40">
            <p>ENCRYPTION: AES-256</p>
            <p>SECURE_LINK: TRUE</p>
            <p>PORT: 443 [OPEN]</p>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
