



import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Brain, ChevronRight, Download, Clock, Award, BookOpen, Users, Star, CheckCircle, Calendar, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

export const LearningHubPage = () => {
  const allCourses = [
    { id: 1, name: 'Prompt Engineering (Standalone)', duration: '2.5 hours', topics: 'Prompt structure, zero/few-shot, instruction prompting, optimization, evaluation, hands-on labs', fees: '₹1,000', cert: true, level: 'Beginner', students: 150 },
    { id: 7, name: 'GCP for Generative AI & ML Engineering', duration: '8 hours', topics: 'Vertex AI, GenAI Studio, Gemini API, Model Garden, BigQuery ML, Dataflow, Dataproc, Cloud Run', fees: '₹7,500', cert: true, level: 'Intermediate', students: 95 },
    { id: 2, name: 'Chatbot, Embeddings & RAG Applications', duration: '8 hours', topics: 'Embeddings, vector DBs, semantic search, RAG, Agentic RAG, LangChain, PDF/JSON chatbot', fees: '₹7,500', cert: true, level: 'Intermediate', students: 120 },
    { id: 3, name: 'Python for AI & Software Foundations (Beginner)', duration: '8 hours', topics: 'Python basics, data types, control flow, functions, data structures, modules, OOPS, mini projects', fees: '₹7,500', cert: true, level: 'Beginner', students: 200 },
    { id: 4, name: 'DevOps Pipelines in AWS & GCP', duration: '8 hours', topics: 'Git, CI/CD, Docker, Kubernetes overview, AWS CodePipeline, GCP Cloud Build, AI app deployment', fees: '₹7,500', cert: true, level: 'Intermediate', students: 80 },
    { id: 8, name: 'Agents, Multi-Agents & Model Context Protocol (MCP)', duration: '8 hours', topics: 'Agent architecture, multi-agent systems, MCP host/client/server, tools vs resources, hands-on', fees: '₹7,500', cert: true, level: 'Advanced', students: 75 },
    { id: 9, name: 'Generative AI & LLM Foundations', duration: '8 hours', topics: 'GenAI concepts, NLP, LLM vs SLM, prompt basics, RAG intro, LangChain, Agents, MCP overview', fees: '₹10,000', cert: true, level: 'Intermediate', students: 180 },
    { id: 5, name: 'MERN Stack Development', duration: '16 hours', topics: 'MongoDB, Express.js, React, Node.js, REST APIs, authentication basics, MERN mini project', fees: '₹10,000', cert: true, level: 'Intermediate', students: 110 },
    { id: 6, name: 'Math, Deep Learning & LLM Internals', duration: '16 hours', topics: 'Math for ML, DNN, RNN, Transformers, encoder-decoder, attention, finetuning, LLM from scratch', fees: '₹10,000', cert: true, level: 'Advanced', students: 65 },
    { id: 10, name: 'Full-Stack AI Application Development', duration: '16 hours', topics: 'Streamlit, FastAPI/Flask, LangChain integration, AI agents, chatbot apps, cloud deployment basics', fees: '₹10,000', cert: true, level: 'Advanced', students: 90 },
  ];

  const genAISyllabus = [
    { 
      day: 1, 
      title: 'ML, DL & NLP Foundations', 
      duration: '8 hours',
      topics: ['ML/DL basics & data matrices', 'Text/Image/Audio conversion', 'NLTK vs spaCy preprocessing', 'Word2Vec, CBOW, Skip-gram', 'Hands-on implementation'],
      highlights: 'Build your first Word2Vec model'
    },
    { 
      day: 2, 
      title: 'Neural Networks & NLP Modeling', 
      duration: '8 hours',
      topics: ['Neural architecture fundamentals', 'Loss functions & Gradient Descent', 'Sequence models for NLP', 'Text vectorization lab', 'NLP pipeline development'],
      highlights: 'Train neural networks from scratch'
    },
    { 
      day: 3, 
      title: 'Prompt Engineering & RAG', 
      duration: '8 hours',
      topics: ['Zero/few-shot prompting', 'RAG architecture deep-dive', 'Vector stores & embeddings', 'Agentic RAG chatbot build', 'Capstone kickoff'],
      highlights: 'Deploy PDF/JSON RAG chatbot'
    },
    { 
      day: 4, 
      title: 'Transformers & GPT Models', 
      duration: '8 hours',
      topics: ['Attention mechanism (QKV)', 'Multi-head attention', 'Decoder-only GPT architecture', 'Causal attention patterns', 'Transformer visualization'],
      highlights: 'Understand GPT internals visually'
    },
    { 
      day: 5, 
      title: 'Hugging Face, LangChain & Agents', 
      duration: '8 hours',
      topics: ['HF Transformers ecosystem', 'Domain-specific models', 'LangChain chains & memory', 'AI agent architecture', 'Build autonomous agent'],
      highlights: 'Create production-ready agents'
    },
    { 
      day: 6, 
      title: 'MCP & Capstone Project', 
      duration: '8 hours',
      topics: ['Model Context Protocol deep-dive', 'Build custom MCP server', 'Claude+JIRA integration', 'Capstone presentations', 'Certification'],
      highlights: 'Present your AI solution'
    },
  ];

  const [activeDay, setActiveDay] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState('All');

  const downloadSyllabus = () => {
    const syllabusContent = `
GenAI Specialist Professional Certificate
48-Hour Comprehensive Program | ₹40,000

═══════════════════════════════════════════════════════

COURSE OVERVIEW
Duration: 6 Days (8 hours/day)
Format: Live Interactive Sessions with Hands-on Labs
Certification: Professional Certificate upon completion
Next Cohort: Starting Soon | Limited Seats Available

═══════════════════════════════════════════════════════

DETAILED DAY-WISE CURRICULUM

${genAISyllabus.map(day => `
DAY ${day.day}: ${day.title.toUpperCase()}
Duration: ${day.duration}

Key Topics:
${day.topics.map((topic, i) => `  ${i + 1}. ${topic}`).join('\n')}

Highlight: ${day.highlights}
${'─'.repeat(60)}
`).join('\n')}

═══════════════════════════════════════════════════════

WHAT YOU'LL GAIN
✓ 48 hours of intensive, hands-on training
✓ Industry-recognized professional certificate
✓ Capstone project for your portfolio
✓ Lifetime access to course materials
✓ Career support and mentorship
✓ Access to exclusive AI community

PREREQUISITES
• Basic programming knowledge recommended
• Passion for AI and machine learning
• Laptop with 8GB+ RAM

INVESTMENT: ₹40,000
Early bird discounts available | Group rates for teams

═══════════════════════════════════════════════════════

CONTACT & ENROLLMENT
Visit: [Your Website]
Email: [Your Email]
Phone: [Your Phone]

Limited seats per cohort to ensure quality learning experience.
    `.trim();

    const blob = new Blob([syllabusContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GenAI_Specialist_Syllabus_48hrs.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredCourses = selectedLevel === 'All' 
    ? allCourses 
    : allCourses.filter(c => c.level === selectedLevel);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>

 <div className="relative z-10 w-full max-w-6xl mx-auto">
        
          <div className="grid lg:grid-cols-1 gap-16 items-center">
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
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

  <button 
    onClick={downloadSyllabus}
    className="px-8 py-4 bg-background border-2 border-border rounded-lg font-semibold hover:border-primary transition-all flex items-center justify-center gap-2"
  >
    <Download className="w-5 h-5" />
    Download Syllabus
  </button>
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

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative  rounded-3xl p-8 border border-border/50">
             
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">GenAI Specialist</h3>
                      <p className="text-muted-foreground">Professional Certificate</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Duration
                      </span>
                      <span className="font-semibold">48 Hours (6 Days)</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Format
                      </span>
                      <span className="font-semibold">Live + Hands-on</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Certificate
                      </span>
                      <span className="font-semibold">Professional</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investment</p>
                      <div className="flex items-center gap-3">
  <p className="text-lg text-muted-foreground line-through">₹1,00,000</p>
  <p className="text-4xl font-bold text-primary">₹40,000</p>
</div>

                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Next Cohort</p>
                      <p className="font-semibold">Starting Soon</p>
                    </div>
                  </div>
                  <NavLink to="/contact" className="block w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg">
                    Enroll Now
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GenAI Specialist Curriculum */}
      <section className="max-w-7xl mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            48-Hour Comprehensive Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six intensive days covering everything from ML fundamentals to production-ready AI systems with Model Context Protocol
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {genAISyllabus.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveDay(index)}
              className={`cursor-pointer group rounded-2xl border-2 p-6 transition-all hover:shadow-xl hover:-translate-y-1 ${
                activeDay === index 
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                  activeDay === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {day.day}
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {day.duration}
                </span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${activeDay === index ? 'text-primary' : ''}`}>
                {day.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {day.topics[0]}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className={`w-4 h-4 ${activeDay === index ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={activeDay === index ? 'text-primary font-medium' : 'text-muted-foreground'}>
                  {day.highlights}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Day Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl rounded-2xl border border-border/50 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Day {genAISyllabus[activeDay].day} Deep Dive</h3>
                <p className="text-muted-foreground">{genAISyllabus[activeDay].title}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Session Duration</p>
                <p className="text-xl font-semibold text-primary">{genAISyllabus[activeDay].duration}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Topics Covered
                </h4>
                <ul className="space-y-2">
                  {genAISyllabus[activeDay].topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Hands-on Project
                </h4>
                <p className="text-muted-foreground mb-4">
                  {genAISyllabus[activeDay].highlights}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Calendar className="w-4 h-4" />
                  <span>Live coding session included</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <button 
            onClick={downloadSyllabus}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Complete Syllabus
          </button>
        </div>
      </section>

      {/* Individual Courses */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Individual Mastery Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pick specialized courses to target specific skills or build your custom learning path
            </p>
            
            {/* Level Filter */}
            <div className="flex justify-center gap-3 flex-wrap">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedLevel === level
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background border border-border hover:border-primary'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-500/10 text-green-500' :
                      course.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-500' :
                      'bg-purple-500/10 text-purple-500'
                    }`}>
                      {course.level}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {course.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {course.topics}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-green-500" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">{course.fees}</p>
                    </div>
                    <NavLink 
                      to="/contact" 
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all text-sm"
                    >
                      Enroll
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="max-w-4xl mx-auto px-6 py-16">
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      Learning Path
    </h2>
    <p className="text-lg text-muted-foreground max-w-xl mx-auto" style={{ fontSize: '16px' }}>
      Beginner → AI Specialist
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      { num: "01", title: "Foundation", skills: "Python", level: "Beginner" },
      { num: "02", title: "Core AI", skills: "RAG", level: "Intermediate" },
      { num: "03", title: "Advanced", skills: "Agents", level: "Advanced" },
      { num: "04", title: "Mastery", skills: "Production", level: "Professional" }
    ].map((path, i) => (
      <motion.div 
        key={path.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -4 }}
        className="group"
      >
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 h-full hover:shadow-xl transition-all text-center">
          <div className="w-10 h-10 bg-primary/90 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
            <span className="text-sm font-bold text-background">{path.num}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {path.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 font-medium">{path.skills}</p>
          <span className="px-3 py-1 bg-muted/50 text-xs font-bold rounded-full text-muted-foreground tracking-wide">
            {path.level}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Your AI Career Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured progression from fundamentals to advanced AI engineering
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: 'Foundation', courses: ['Python Basics', 'Prompt Engineering'], icon: '📚', color: 'from-blue-500 to-cyan-500', level: 'Beginner' },
              { step: 'Core Skills', courses: ['RAG Applications', 'GCP for AI'], icon: '⚡', color: 'from-purple-500 to-pink-500', level: 'Intermediate' },
              { step: 'Advanced', courses: ['Agents & MCP', 'LLM Internals'], icon: '🧠', color: 'from-pink-500 to-orange-500', level: 'Advanced' },
              { step: 'Mastery', courses: ['Full-Stack AI', 'GenAI Specialist'], icon: '🚀', color: 'from-orange-500 to-red-500', level: 'Professional' },
            ].map((path, i) => (
              <motion.div
                key={path.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}>
                    {path.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{path.step}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{path.level}</p>
                    <ul className="space-y-2">
                      {path.courses.map((course, j) => (
                        <li key={j} className="text-sm text-muted-foreground">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/contact" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Schedule Free Consultation
                <ChevronRight className="w-5 h-5" />
              </NavLink>
              <button 
                onClick={downloadSyllabus}
                className="px-8 py-4 bg-background border-2 border-border rounded-lg font-semibold hover:border-primary transition-all inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get Full Syllabus
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
  }