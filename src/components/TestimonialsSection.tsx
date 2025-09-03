// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
// import { useState, useEffect } from "react";

// export const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       role: "CTO",
//       company: "TechCorp Solutions",
//       avatar: "SC",
//       rating: 5,
//       content: "Kogenix AI transformed our hiring process completely. The AI interview system reduced our time-to-hire by 75% while maintaining exceptional candidate quality. It's been a game-changer for our HR department.",
//       industry: "Technology"
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "VP of Operations",
//       company: "Healthcare Dynamics",
//       avatar: "MR",
//       rating: 5,
//       content: "The healthcare AI assistant has revolutionized our patient care workflow. The diagnostic accuracy and speed of response have significantly improved our service quality and patient satisfaction scores.",
//       industry: "Healthcare"
//     },
//     {
//       name: "Emily Watson",
//       role: "Chief Data Officer",
//       company: "Financial Insights Inc",
//       avatar: "EW",
//       rating: 5,
//       content: "Kogenix's financial analytics AI has given us unprecedented insights into market trends. Our ROI improved by 40% within the first quarter of implementation. The predictive analytics are incredibly accurate.",
//       industry: "Finance"
//     },
//     {
//       name: "David Park",
//       role: "Head of Customer Success",
//       company: "RetailPro Solutions",
//       avatar: "DP",
//       rating: 5,
//       content: "The AI customer support chatbot handles 80% of our queries automatically, allowing our team to focus on complex issues. Customer satisfaction has increased dramatically since implementation.",
//       industry: "Retail"
//     }
//   ];

//   const partners = [
//     { name: "TechCorp", logo: "TC" },
//     { name: "HealthSync", logo: "HS" },
//     { name: "FinanceAI", logo: "FA" },
//     { name: "RetailPro", logo: "RP" },
//     { name: "DataFlow", logo: "DF" },
//     { name: "CloudTech", logo: "CT" }
//   ];

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(nextTestimonial, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="testimonials" className="py-24 px-6 bg-muted/30">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Discover how Kogenix AI has helped businesses across industries achieve 
//             remarkable results and drive innovation.
//           </p>
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="relative max-w-4xl mx-auto mb-20">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//               className="glass-surface rounded-3xl p-8 md:p-12"
//             >
//               <div className="text-center">
//                 {/* Quote Icon */}
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="w-16 h-16 mx-auto mb-6 bg-foreground/10 rounded-full flex items-center justify-center"
//                 >
//                   <Quote className="w-8 h-8 text-foreground/60" />
//                 </motion.div>

//                 {/* Stars */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   className="flex justify-center mb-6"
//                 >
//                   {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </motion.div>

//                 {/* Content */}
//                 <motion.blockquote
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground/90"
//                 >
//                   "{testimonials[currentIndex].content}"
//                 </motion.blockquote>

//                 {/* Author */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   className="flex items-center justify-center gap-4"
//                 >
//                   <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold">
//                     {testimonials[currentIndex].avatar}
//                   </div>
//                   <div className="text-left">
//                     <div className="font-semibold">{testimonials[currentIndex].name}</div>
//                     <div className="text-muted-foreground text-sm">
//                       {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation */}
//           <div className="flex justify-center items-center mt-8 gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prevTestimonial}
//               className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </motion.button>

//             <div className="flex gap-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentIndex ? 'bg-foreground w-6' : 'bg-foreground/30'
//                   }`}
//                 />
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={nextTestimonial}
//               className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </motion.button>
//           </div>
//         </div>

//         {/* Partners */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h3 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h3>
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
//             {partners.map((partner, index) => (
//               <motion.div
//                 key={partner.name}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.1 }}
//                 className="flex items-center justify-center"
//               >
//                 <div className="w-16 h-16 glass-surface rounded-xl flex items-center justify-center font-bold text-foreground/60 hover:text-foreground transition-colors">
//                   {partner.logo}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };



import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Users, TrendingUp, Clock, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder testimonials with "coming soon" messaging
  const upcomingTestimonials = [
    {
      name: "Your Success Story",
      role: "Could Be Here",
      company: "Your Company",
      avatar: "?",
      rating: 5,
      content: "Join the growing list of businesses transforming their operations with Kogenix AI. Your testimonial could be featured right here!",
      industry: "Any Industry",
      comingSoon: true
    },
    {
      name: "Next Innovation Leader",
      role: "Future Partner", 
      company: "Forward-Thinking Enterprise",
      avatar: "★",
      rating: 5,
      content: "Be among the first to experience the revolutionary power of AI-driven solutions. Early adopters are already seeing incredible results.",
      industry: "Technology",
      comingSoon: true
    },
    {
      name: "Visionary Executive",
      role: "AI Pioneer",
      company: "Industry Disruptor", 
      avatar: "◆",
      rating: 5,
      content: "The future of business intelligence is here. Join innovative leaders who are already leveraging Kogenix AI to stay ahead of the curve.",
      industry: "Innovation",
      comingSoon: true
    }
  ];

  const stats = [
    { number: "100+", label: "Early Interest", icon: Users },
    { number: "75%", label: "Time Reduction", icon: TrendingUp },
    { number: "24/7", label: "AI Support", icon: Clock },
    { number: "∞", label: "Possibilities", icon: Sparkles }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % upcomingTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + upcomingTestimonials.length) % upcomingTestimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-foreground rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the select group of forward-thinking businesses ready to experience 
            the transformative power of Kogenix AI. Your testimonial could be next!
          </p>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-surface rounded-2xl p-6 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-60" />
                <div className="text-3xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Preview Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-surface rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-foreground/5 opacity-50"></div>
              
              <div className="text-center relative z-10">
                {/* Quote Icon with animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-6 bg-foreground/10 rounded-full flex items-center justify-center relative"
                >
                  <Quote className="w-8 h-8 opacity-60" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-foreground/20 rounded-full"
                  ></motion.div>
                </motion.div>

                {/* Stars with stagger animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-current opacity-40" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground/90 italic"
                >
                  "{upcomingTestimonials[currentIndex].content}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center justify-center gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                  >
                    {upcomingTestimonials[currentIndex].avatar}
                  </motion.div>
                  <div className="text-left">
                    <div className="font-semibold">
                      {upcomingTestimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {upcomingTestimonials[currentIndex].role} at {upcomingTestimonials[currentIndex].company}
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-foreground text-background rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Be Our Next Success Story
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:shadow-lg transition-shadow hover:bg-foreground/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {upcomingTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-foreground w-6' 
                      : 'bg-foreground/30 w-2'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:shadow-lg transition-shadow hover:bg-foreground/5"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Partners Section - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Partnership Opportunities</h3>
          <p className="text-muted-foreground mb-8">Building connections with industry leaders</p>
          
          {/* Coming Soon Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="w-16 h-16 glass-surface rounded-xl flex items-center justify-center relative overflow-hidden border-2 border-dashed border-foreground/20">
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-8 h-8 border-2 border-foreground/30 rounded-full flex items-center justify-center relative z-10"
                  >
                    <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap"
                >
                  Coming Soon
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Early Access CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-muted-foreground mb-4">Interested in early partnership opportunities?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
            >
              Get Notified
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};