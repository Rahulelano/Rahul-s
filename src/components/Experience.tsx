import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const responsibilities = [
  "Architecting High-Scale Systems",
  "API Design & Integration",
  "Performance Optimization",
  "Cloud Infrastructure Management",
  "Technical Leadership",
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-fire-orange/5 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-mono-code text-xs text-primary tracking-[0.3em] uppercase border-l-2 border-primary pl-3">
            Career History
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight mb-12 break-words"
        >
          PROFESSIONAL <br className="md:hidden" /> <span className="text-fire-red">JOURNEY</span>
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-12 relative overflow-hidden rounded-3xl border border-white/10"
        >
          {/* Position Header */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h3 className="font-heading text-2xl md:text-4xl text-white tracking-wide font-bold">
                  SENIOR WEB DEVELOPER
                </h3>
                <p className="font-mono-code text-base md:text-lg text-primary mt-2">
                  coimbatore.ai
                </p>
              </div>
              <div className="inline-flex self-start md:self-center items-center gap-2 font-mono-code text-xs md:text-sm text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Current Role
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent mb-8" />

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 bg-primary/50 group-hover:bg-primary transition-colors duration-300 rounded-full flex-shrink-0" />
                  <p className="font-sans text-sm md:text-base text-muted-foreground group-hover:text-white transition-colors">
                    {responsibility}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6 border-t border-white/5"
            >
              <p className="font-mono-code text-[10px] text-muted-foreground uppercase tracking-widest mb-4 font-bold">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "Django", "PostgreSQL", "REST API", "Power BI"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 font-mono-code text-[10px] text-white/70 uppercase tracking-wider hover:border-primary/50 hover:text-primary transition-colors rounded-md"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
