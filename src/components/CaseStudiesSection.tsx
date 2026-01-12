import { motion } from "framer-motion";
import { ExternalLink, Users, TrendingUp, Clock, Award } from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI Interview Platform",
      category: "Recruitment Technology",
      description: "Revolutionized hiring process for Fortune 500 companies with AI-powered candidate assessment and bias-free screening.",
      metrics: [
        { label: "Time Saved", value: "75%", icon: Clock },
        { label: "Hiring Accuracy", value: "90%", icon: Award },
        { label: "Candidates Processed", value: "10K+", icon: Users }
      ],
      image: "/placeholder-case1.jpg",
      tags: ["AI", "Machine Learning", "HR Tech"],
      status: "Live"
    },
    {
      title: "Healthcare AI Assistant",
      category: "Medical Technology",
      description: "Developed intelligent diagnostic assistant that helps medical professionals with patient assessment and treatment recommendations.",
      metrics: [
        { label: "Diagnostic Accuracy", value: "95%", icon: Award },
        { label: "Response Time", value: "2s", icon: Clock },
        { label: "Patients Helped", value: "5K+", icon: Users }
      ],
      image: "/placeholder-case2.jpg",
      tags: ["Healthcare", "AI", "Diagnostics"],
      status: "Beta"
    },
    {
      title: "Financial Analytics AI",
      category: "FinTech",
      description: "Built comprehensive financial analysis platform that predicts market trends and automates investment strategies.",
      metrics: [
        { label: "ROI Improvement", value: "40%", icon: TrendingUp },
        { label: "Processing Speed", value: "100x", icon: Clock },
        { label: "Data Points", value: "1M+", icon: Users }
      ],
      image: "/placeholder-case3.jpg",
      tags: ["Finance", "Analytics", "Automation"],
      status: "Development"
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
        
        {/* Section Header */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}>
            <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
             Success Stories
            </span>
    </h1>
    <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
  Real-world success powered by  
  <span className="text-foreground font-semibold"> intelligent AI solutions </span>
  delivering measurable outcomes
  <span className="block mt-4 text-lg sm:text-xl text-muted-foreground/80">
    from operational efficiency and cost savings to innovation-driven growth across industries.
  </span>
</p>

          
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-foreground/10 text-foreground">
                    {study.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    study.status === 'Live' ? 'bg-green-100 text-green-700' :
                    study.status === 'Beta' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {study.status}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {study.metrics.map((metric, idx) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 bg-foreground/10 rounded-xl flex items-center justify-center">
                        <metric.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero-ghost group"
                >
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="glass-surface rounded-2xl p-8 h-80 bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center relative overflow-hidden group">
                  {/* Placeholder for actual image */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-foreground/20 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-foreground/60" />
                    </div>
                    <p className="text-muted-foreground">Project Screenshot</p>
                    <p className="text-sm text-muted-foreground/60 mt-1">{study.title}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


