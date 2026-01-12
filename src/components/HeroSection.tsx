

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, TrendingUp, Users, Sparkles, ChevronDown } from "lucide-react";
import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    // Load premium fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Refined Background */}
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center py-20">
        
       

        {/* Main Heading - Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              Kogenix AI
            </span>
          </h1>
        </motion.div>

        {/* Tagline - Stylish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="inline-block  text-primary mr-3">
              Think.
            </span>
            <span className="inline-block  text-primary mr-3">
              Build.
            </span>
            <span className="inline-block  text-primary">
              Evolve.
            </span>
          </h2>
        </motion.div>

        {/* Description - Elegant */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-14 leading-relaxed font-light tracking-wide"
        >
          AI-powered learning and innovation hub transforming challenges into{" "}
          <span className="text-foreground font-semibold">scalable</span>, tech-driven solutions that drive{" "}
          <span className="text-primary font-semibold">digital transformation</span>.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-24"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHBCrEWbVHJDTA-vjlYCNvtXzn3TzkpeGDIr8zKdUgYaR8XQ/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Get Started
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
          </a>

         < NavLink  to="/services/innovation" >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5  border-2 border-border hover:border-primary/50 text-foreground  font-bold text-md rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </NavLink>
        </motion.div>

        {/* Feature Cards - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute " />
            <div className="relative  border border-border hover:border-primary/40 rounded-3xl p-10 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                AI Learning Hub
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Comprehensive training programs designed to empower individuals and institutions with cutting-edge AI skills.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute " />
            <div className="relative  border border-border hover:border-primary/40 rounded-3xl p-10 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Innovation Lab
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Cutting-edge product development and consulting services driving digital transformation across industries.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute " />
            <div className="relative  border border-border hover:border-primary/40 rounded-3xl p-10 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Enterprise Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Scalable, tech-driven solutions tailored to solve complex challenges for diverse industry verticals.
              </p>
            </div>
          </motion.div>
        </motion.div>

        
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 group-hover:border-primary/50 rounded-full flex items-start justify-center p-2 transition-colors">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;