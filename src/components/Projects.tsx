import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

// Best Projects (Featured)
const featuredProjects = [
  {
    id: "01",
    name: "Coimbatore Rental",
    description: "Premium bike rental platform with advanced booking metrics and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://coimbatorerental.com/",
    status: "Live",
    color: "from-fire-red to-orange-600"
  },
  {
    id: "02",
    name: "Coimbatore Discount",
    description: "A high-traffic discount aggregator platform connecting local businesses with customers.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    link: "https://coimbatore.discount/",
    status: "Live",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "03",
    name: "Redolic",
    description: "E-commerce experience with seamless payment integration and dynamic product showcasing.",
    tech: ["Shopify", "Liquid", "JS"],
    link: "http://redolic.in/",
    status: "Live",
    color: "from-purple-600 to-pink-500"
  }
];

// Normal Projects (List)
const otherWorks = [
  "righttrackcalltaxivirudhunagar.in",
  "mobilephoneservicecenter.com",
  "mmtoursandtravel.in",
  "studiosbysathish.site",
  "kysilks.in",
  "bengalurutravel.in",
  "bilboponysalon.com",
  "coimbatoreexpress.com",
  "nasifoods.com",
  "nivicraft.in",
  "suryatravels.in",
  "tvastainteriors.com",
  "coimbatore.academy",
  "msholidays.net",
  "rminteriors.site"
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative bg-background border-t border-white/5" ref={ref}>
      <div className="container-custom">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="font-mono-code text-xs text-primary tracking-[0.3em] uppercase border-l-2 border-primary pl-3">
            Selected Works
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase text-white tracking-tighter mb-20"
        >
          FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-orange-500">PROJECTS</span>
        </motion.h2>

        {/* FEATURED Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {featuredProjects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 h-[500px] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-auto">
                  <span className="font-mono-code text-xs text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">{project.status}</span>
                  <ExternalLink className="w-6 h-6 text-white/30 group-hover:text-white transition-colors" />
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl font-black italic uppercase text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {project.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent mb-6 group-hover:w-full transition-all duration-500" />
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-[10px] font-mono-code text-white/40 uppercase bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* OTHER WORKS (Marquee / List Style) */}
        <div className="border-t border-white/10 pt-20">
          <h3 className="text-2xl font-black italic uppercase text-white mb-12 text-center">
            COMMERCIAL DEPLOYMENTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherWorks.map((work, i) => (
              <motion.a
                key={i}
                href={`https://${work}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all group"
              >
                <span className="text-sm text-gray-400 font-mono-code truncate group-hover:text-white transition-colors">
                  {work}
                </span>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
