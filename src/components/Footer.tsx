import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-2xl tracking-wider text-foreground">
              RAHUL S
            </h3>
            <p className="font-mono text-sm text-muted-foreground mt-1">
              Senior Web Developer
            </p>
          </motion.div>

          {/* Center - Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 font-mono text-sm text-muted-foreground"
          >
            <span className="w-3 h-3 bg-background border border-foreground" />
            <span>Black.</span>
            <span className="w-3 h-3 bg-primary" />
            <span>Red.</span>
            <span className="text-primary">Precision.</span>
          </motion.div>

          {/* Right Side - Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted-foreground"
          >
            © {new Date().getFullYear()} — ALL RIGHTS RESERVED
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
