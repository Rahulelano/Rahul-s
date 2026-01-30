import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      {/* Section Divider */}
      <div className="fire-line w-full mb-20 opacity-30" />

      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-mono-code text-xs text-primary tracking-[0.3em] uppercase border-l-2 border-primary pl-3">
            Get in Touch
          </span>
        </motion.div>

        {/* Section Title */}
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight mb-8 break-words"
        >
          LET'S <br className="sm:hidden" /> <span className="text-fire">COLLABORATE</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-lg text-muted-foreground mb-12 max-w-xl font-light leading-relaxed"
        >
          Ready to elevate your digital presence? I'm currently available for freelance projects and consulting.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-card/50 backdrop-blur-sm border border-white/10 px-6 py-4 font-sans text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all peer rounded-sm"
              placeholder="Name"
              required
            />
            <label
              htmlFor="name"
              className={`absolute left-6 transition-all duration-200 font-mono-code text-xs pointer-events-none ${formData.name || focusedField === "name"
                ? "top-0 -translate-y-1/2 bg-background px-2 text-primary"
                : "top-1/2 -translate-y-1/2 text-muted-foreground"
                }`}
            >
              FULL NAME
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-card/50 backdrop-blur-sm border border-white/10 px-6 py-4 font-sans text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all peer rounded-sm"
              placeholder="Email"
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-6 transition-all duration-200 font-mono-code text-xs pointer-events-none ${formData.email || focusedField === "email"
                ? "top-0 -translate-y-1/2 bg-background px-2 text-primary"
                : "top-1/2 -translate-y-1/2 text-muted-foreground"
                }`}
            >
              EMAIL ADDRESS
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={5}
              className="w-full bg-card/50 backdrop-blur-sm border border-white/10 px-6 py-4 font-sans text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all resize-none peer rounded-sm"
              placeholder="Message"
              required
            />
            <label
              htmlFor="message"
              className={`absolute left-6 transition-all duration-200 font-mono-code text-xs pointer-events-none ${formData.message || focusedField === "message"
                ? "top-0 -translate-y-1/2 bg-background px-2 text-primary"
                : "top-6 -translate-y-1/2 text-muted-foreground"
                }`}
            >
              PROJECT DETAILS
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="btn-power-solid px-8 py-4 text-sm tracking-[0.2em] flex items-center gap-3 group w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SEND INQUIRY
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.form>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono-code text-[10px] text-muted-foreground tracking-widest mb-1 uppercase">
                Location
              </p>
              <p className="font-sans text-foreground">Coimbatore, India</p>
            </div>
            <div>
              <p className="font-mono-code text-[10px] text-muted-foreground tracking-widest mb-1 uppercase">
                Status
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="font-sans text-primary text-sm">Open for new opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
