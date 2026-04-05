



import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Users, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { GenAIMasterProgramSection } from "./GenAIMasterProgramSection";
import { FDPAnalyticsSection } from "./FDPAnalyticsSection";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-8 text-center text-red-500">
          <p className="font-bold text-lg mb-2">Something went wrong rendering this section</p>
          <pre className="text-xs text-left bg-muted p-4 rounded overflow-auto max-h-64">
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export const LearningHubPage = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>

 <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-center">
        
          <div className="grid lg:grid-cols-1 gap-16 items-center w-full">
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}>
            <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            GenAI Mastery
            </span>
          </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
  A complete GenAI learning journey designed to  
  <span className="text-foreground font-semibold"> take you from fundamentals to real-world deployment </span>
  with confidence
  
</p>



              <div className="flex flex-wrap justify-center gap-4 mb-12 mt-10">
  <NavLink
    to="/contact"
    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center"
  >
    Start Learning Today
  </NavLink>
</div>
 
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
  <div className="flex items-center gap-2">
    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
    <span className="font-semibold">4.9/5</span>
    <span className="text-muted-foreground">(200+ reviews)</span>
  </div>

  <div className="flex items-center gap-2">
    <Users className="w-5 h-5 text-primary" />
    <span className="text-muted-foreground">Live cohorts weekly</span>
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GenAI Master Program ── */}
      <section className="max-w-7xl mx-auto px-6 pt-0 pb-24">
        <ErrorBoundary>
          <GenAIMasterProgramSection />
        </ErrorBoundary>
      </section>

      {/* ── FDP Session Analytics ── */}
      <section className="py-20 px-4 sm:px-6 bg-muted/30 border-y border-border">
        <ErrorBoundary>
          <FDPAnalyticsSection />
        </ErrorBoundary>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your AI Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our next cohort and learn from industry experts. Limited seats available to ensure personalized attention.
            </p>
            <NavLink 
                to="/contact" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Schedule Free Consultation
                <ChevronRight className="w-5 h-5" />
              </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  )
  }