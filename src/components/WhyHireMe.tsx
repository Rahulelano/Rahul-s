import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  "BUILT FOR PRODUCTION.",
  "DESIGNED TO SCALE.",
  "TRUSTED WITH REAL SYSTEMS.",
];

const WhyHireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative bg-secondary/50" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            // WHY CHOOSE ME
          </span>
        </motion.div>

        {/* Statements */}
        <div className="space-y-8">
          {statements.map((statement, index) => (
            <motion.div
              key={statement}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
                {statement}
              </h3>
              {index < statements.length - 1 && (
                <motion.div
                  className="w-16 h-[2px] bg-primary mx-auto mt-8"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Visual Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 border border-primary/30 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary font-display text-4xl">RS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;
