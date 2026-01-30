import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-wider text-foreground hover:text-primary transition-colors">
          RS
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-mono text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              onMouseEnter={() => setIsHovered(item.label)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: isHovered === item.label ? "100%" : 0 }}
                transition={{ duration: 0.2 }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-power-outline px-4 py-2 text-xs tracking-widest hidden sm:block"
        >
          HIRE ME
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
