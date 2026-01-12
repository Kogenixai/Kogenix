


import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Sparkles, Award, Users, Lightbulb } from "lucide-react";
import { useEffect } from "react";

export const AboutSection = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const fullContent = "Kogenix.ai fuses learning + innovation hubs. We deliver AI training programs, product development, and consulting services that solve complex industry challenges and drive digital transformation at scale.";

  const missions = [
    {
      icon: Target,
      title: "Breakthrough Innovation",
      description: "We pioneer AI solutions that don't just solve problems—they redefine entire industries.",
      gradient: "from-primary/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Intelligent Automation", 
      description: "Smart systems that eliminate manual work, boost output 10x, and run 24/7 without failure.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: TrendingUp,
      title: "Infinite Scalability",
      description: "Architecture that grows from startup to enterprise without technical debt or downtime.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Relentless Innovation",
      description: "We build what's next, not what's comfortable. Every project pushes AI boundaries."
    },
    {
      icon: Users,
      title: "Zero Compromise",
      description: "Your vision, executed flawlessly. We don't ship until it's production-ready."
    },
    {
      icon: Award,
      title: "Results Obsessed",
      description: "Metrics don't lie. We deliver measurable ROI or we don't sleep."
    }
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Hero Typography - Balanced Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}>
            <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              About Kogenix AI
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Next-gen AI automation. <span className="text-foreground font-semibold">Smart solutions</span> across industries. 
            <span className="block mt-4 text-lg sm:text-xl text-muted-foreground/80">Business transformation through cutting-edge AI.</span>
          </p>
        </motion.div>

        {/* Redesigned Content Flow - Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-24 items-center"
        >
          <div className="order-2 lg:order-1">
            <div className="bg-card/70 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Innovation + Learning Hub
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground tracking-wide" style={{ fontSize: '18px' }}>
                {fullContent}
              </p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "50+", label: "AI Programs", icon: Sparkles },
                { num: "20+", label: "Industries", icon: TrendingUp }
              ].map((stat, i) => (
                <div key={stat.label} className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border hover:bg-card/80 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.num}
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Cards - Better Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`glass-surface rounded-2xl p-10 h-full text-center transition-all duration-400 ${mission.gradient} hover:shadow-2xl`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 mx-auto mb-8 bg-foreground rounded-2xl flex items-center justify-center shadow-2xl"
                  >
                    <mission.icon className="w-10 h-10 text-background" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-foreground tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {mission.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed tracking-wide" style={{ fontSize: '17px' }}>
                    {mission.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values - Compact Clean Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Core Values
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-start gap-6 p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 flex-shrink-0 bg-foreground rounded-2xl flex items-center justify-center shadow-xl mt-1 flex-none"
                >
                  <value.icon className="w-8 h-8 text-background" />
                </motion.div>
                
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {value.title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed tracking-wide" style={{ fontSize: '16px', lineHeight: '1.75' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - Cleaner Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed tracking-wide" style={{ fontSize: '18px' }}>
            Partner with us to create AI solutions that scale with your ambition.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-12 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 transition-all duration-300 tracking-wide"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
