import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Database, Globe } from "lucide-react";

const principles = [
  {
    title: "PERFORMANCE",
    subtitle: "IS PARAMOUNT",
    description: "Speed is a feature. We optimize for milliseconds because every interaction counts.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "SCALABILITY",
    subtitle: "BY DESIGN",
    description: "Architecting systems that grow effortlessly with your business needs.",
    icon: <Database className="w-8 h-8" />
  },
  {
    title: "SECURITY",
    subtitle: "AS STANDARD",
    description: "Building robust foundations that ensure consistent uptime and stability.",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "GLOBAL",
    subtitle: "WITH PURPOSE",
    description: "Leveraging cutting-edge technology to solve real-world problems effectively.",
    icon: <Globe className="w-8 h-8" />
  },
];

const SystemThinking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mindset" className="py-32 px-6 relative bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-fire-red font-mono-code tracking-widest uppercase text-sm font-bold">The Foundation</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase text-white mt-4 break-words">
            ENGINEERING <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DNA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-fire-red/50 transition-all duration-500"
            >
              {/* Large Number Background */}
              <div className="absolute -right-4 -top-4 text-[120px] font-black text-white/5 group-hover:text-fire-red/10 transition-colors font-heading leading-none z-0">
                0{index + 1}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />

              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <div className="mb-4 text-fire-red opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {principle.icon}
                </div>

                <h3 className="text-2xl font-black italic uppercase text-white mb-2 transform bg-clip-text group-hover:text-fire-red transition-colors duration-300">
                  <span className="block text-xs font-mono-code tracking-widest text-muted-foreground mb-1 not-italic font-normal">{principle.subtitle}</span>
                  {principle.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemThinking;
