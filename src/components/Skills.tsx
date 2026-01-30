import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "FRONTEND ARSENAL",
    icon: "◈",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "BACKEND & SYSTEMS",
    icon: "◆",
    skills: ["Python", "Django", "REST API", "MERN Stack"],
  },
  {
    title: "DATA & ANALYTICS",
    icon: "◇",
    skills: ["Advanced Excel", "Power BI", "Data Analysis"],
  },
  {
    title: "DATABASES",
    icon: "▣",
    skills: ["MySQL", "PostgreSQL"],
  },
];

const fullStackIdentity = [
  "Python Full Stack Developer",
  "Web Developer",
  "System Architect",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            // TECH ARSENAL
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wider mb-16"
        >
          WEAPONS OF <span className="text-fire">CHOICE</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="weapon-card p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary text-2xl">{category.icon}</span>
                <h3 className="font-display text-2xl tracking-wider text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Stack Identity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="fire-line w-full mb-8" />
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-2xl">◉</span>
            <h3 className="font-display text-2xl tracking-wider text-foreground">
              FULL STACK IDENTITY
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {fullStackIdentity.map((identity, index) => (
              <motion.div
                key={identity}
                className="px-6 py-3 border-2 border-primary bg-primary/10 font-mono text-sm text-primary tracking-wider animate-glow-border"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                {identity}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
