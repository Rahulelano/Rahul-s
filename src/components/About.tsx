import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      {/* Section Divider */}
      <div className="fire-line w-full mb-24 opacity-30" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono-code text-xs text-primary tracking-[0.3em] uppercase border-l-2 border-primary pl-3">
            About Me
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Main Declaration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-wide">
              HELLO, I'M <br />
              <span className="text-fire">RAHUL</span>
            </h2>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Senior Web Developer based in Coimbatore.
              <br />
              <span className="text-foreground/80">Transforming complex problems into elegant, scalable solutions.</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-muted-foreground leading-loose"
          >
            <p className="mb-6">
              With over 1+ years of experience in high-stakes environments, I specialize in building digital products that stand the test of time. My approach combines technical precision with creative foresight.
            </p>
            <p className="border-l-2 border-primary/50 pl-6 italic text-foreground">
              "I don't just write code; I engineer experiences that drive growth and define brands."
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support & Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="weapon-card p-8 text-center group hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <p className="font-display text-5xl md:text-6xl text-foreground group-hover:text-primary transition-colors">
                {stat.value}
              </p>
              <p className="font-mono-code text-xs text-muted-foreground mt-2 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
