import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Mail, Phone, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse position influence for "Cinema" feel
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 perspective-1000"
    >

      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-[#050505] to-black z-0" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

        {/* Floating Particles / Orbs */}
        <motion.div
          style={{ y: y1, x: mousePosition.x * -50 }}
          className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-60 animate-pulse"
        />
        <motion.div
          style={{ y: y2, x: mousePosition.x * 50 }}
          className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-fire-orange/10 rounded-full blur-[120px] mix-blend-screen opacity-50"
        />

        {/* Grid Line Scanner Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">

        {/* Holographic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl mb-12 shadow-[0_0_15px_rgba(255,0,0,0.15)] group hover:border-primary/50 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-white/70 group-hover:text-primary transition-colors shine-effect">
            System Online • Portfolio 2025
          </span>
        </motion.div>

        {/* Cinematic Title Reveal */}
        <div className="relative mb-8 perspective-text flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic uppercase leading-none tracking-tighter text-white drop-shadow-2xl mb-2 md:mb-0"
            style={{
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
              translateY: mousePosition.y * 20,
              translateX: mousePosition.x * 20
            }}
          >
            ARCHITECTING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-fire-red to-orange-600 relative z-10 pb-4"
            style={{
              filter: "drop-shadow(0 0 30px rgba(220, 38, 38, 0.4))",
              translateY: mousePosition.y * -20,
              translateX: mousePosition.x * -20
            }}
          >
            THE FUTURE
          </motion.h1>
        </div>

        {/* Subheading Scramble Effect Placeholder (Simple Fade for now) */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="font-body text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16 font-light"
        >
          Senior Software Engineer & Digital Visionary.
          <span className="block text-white/80 mt-3 text-lg md:text-xl tracking-wide">
            Building high-performance ecosystems where design meets <span className="text-primary font-bold">engineering precision</span>.
          </span>
        </motion.p>

        {/* Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-fire group flex items-center gap-4 px-12 py-6 text-lg relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              EXPLORE WORK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
          </motion.a>

          <div className="flex items-center gap-4">
            {[
              { Icon: Mail, href: "mailto:rahulgohul391@gmail.com" },
              { Icon: Phone, href: "tel:9025207959" }
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(255, 0, 0, 0.3)" }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Cinematic Key Metrics */}
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.5, delay: 1, ease: "anticipate" }}
          className="w-full border-t border-white/10 bg-black/60 backdrop-blur-md overflow-hidden"
        >
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Experience", value: "1+", suffix: "YEARS" },
                { label: "Projects", value: "50+", suffix: "SHIPPED" },
                { label: "Clients", value: "100%", suffix: "SATISFACTION" },
                { label: "Status", value: "OPEN", suffix: "FOR HIRE", color: "text-green-500" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start group cursor-default">
                  <p className="font-mono-code text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 group-hover:text-primary transition-colors">{stat.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl md:text-5xl font-black italic font-heading ${stat.color || "text-white"} group-hover:scale-110 transition-transform duration-300 origin-left`}>
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-white/60 tracking-wider">{stat.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
