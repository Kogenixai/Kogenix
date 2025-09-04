// import { motion } from "framer-motion";
// import { ArrowDown, Brain, Zap } from "lucide-react";
// import { NeuralBackground } from "./NeuralBackground";
// import DarkVeil from "@/components/ui/DarkVeil"

// export const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center relative items-center overflow-hidden">
//       {/* Neural Background */}
//       <NeuralBackground />
     

// <div className="absolute inset-0 z-[1]">
//   <DarkVeil />
// </div>
//       {/* Content */}
//       <div className="relative z-10 text-center max-w-4xl px-6">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface mb-8"
//         >
//           <Brain className="w-4 h-4" />
//           <span className="text-sm font-medium tracking-wide">AI Innovation • Neural Evolution</span>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
//         >
//           Think.{" "}
//           <span className="inline-block">
//             Build.
//           </span>{" "}
//           <span className="inline-block">
//             Evolve.
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
//         >
//           Kogenix.ai is pioneering the future of artificial intelligence with 
//           neural-driven solutions that transform industries and elevate human potential.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
//         >
//           <button className="btn-hero-primary group">
//             <span>Get Started</span>
//             <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
//           </button>
//           <button className="btn-hero-ghost">
//             Explore AI Services
//           </button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="flex flex-col items-center text-muted-foreground"
//           >
//             <span className="text-sm mb-2">Discover More</span>
//             <ArrowDown className="w-4 h-4" />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Side Decorations */}
//       <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="w-2 h-2 border border-foreground/20 rounded-full"
//         />
//       </div>
      
//       <div className="absolute right-8 top-1/3 hidden lg:block">
//         <motion.div
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="w-1 h-1 bg-foreground/30 rounded-full"
//         />
//       </div>
//     </section>
//   );
// };



// import SplitText from "@/components/ui/SplitText";
// import { motion } from "framer-motion";
// import { ArrowDown, Brain, Zap } from "lucide-react";
// import { NeuralBackground } from "./NeuralBackground";
// import DarkVeil from "@/components/ui/DarkVeil";
// import { cn } from "@/lib/utils";
// import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

// export const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
//       {/* Neural Background */}
//       {/* <NeuralBackground /> */}
//       <div className="absolute inset-0 z-[1]">
//    <div className="absolute inset-0 z-[1]">
//   <AnimatedGridPattern
//     numSquares={30}
//     maxOpacity={0.1}
//     duration={3}
//     repeatDelay={1}
//     className={cn(
//       "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
//       "inset-0 h-full w-full skew-y-6" // Changed here
//     )}
//   />
// </div>

//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-5xl px-6">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface mb-8"
//         >
//           <Brain className="w-4 h-4" />
//           <span className="text-sm font-medium tracking-wide">
//             AI Innovation • Neural Evolution
//           </span>
//         </motion.div>

//         {/* Brand Name (Outline Text) */}
//     <h1>
//         <SplitText
//   text="Kogenix"
//   className="text-7xl md:text-9xl font-extrabold mb-4 
//                      light:text-black dark:text-white
//                      border-text"
//   delay={100}
//   duration={0.6}
//   ease="power3.out"
//   splitType="chars"
//   from={{ opacity: 0, y: 40 }}
//   to={{ opacity: 1, y: 0 }}
//   threshold={0.1}
//   rootMargin="-100px"
//   textAlign="center"
//   // onLetterAnimationComplete={handleAnimationComplete}
// />
// </h1>
//         {/* <motion.h1
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-7xl md:text-9xl font-extrabold mb-4 
//                      light:text-black dark:text-white
//                      border-text"
//         >
//           Kogenix
//         </motion.h1> */}

//         {/* Tagline */}
//      <motion.h2
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, delay: 0.2 }}
//   className="text-2xl md:text-4xl font-semibold tracking-tight mb-8"
// >
//   <motion.span
//     whileHover={{
//       color: "hsl(var(--foreground))", // Adaptive based on theme
//       scale: 1.05,
//     }}
//     animate={{ opacity: [1, 0.6, 1] }}
//     transition={{ duration: 2, repeat: Infinity }}
//     className="inline-block mx-2 text-black dark:text-white transition-colors duration-300"
//   >
//     Think.
//   </motion.span>

//   <motion.span
//     whileHover={{
//       color: "hsl(var(--foreground))",
//       scale: 1.05,
//     }}
//     animate={{ opacity: [1, 0.6, 1] }}
//     transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
//     className="inline-block mx-2 text-black dark:text-white transition-colors duration-300"
//   >
//     Build.
//   </motion.span>

//   <motion.span
//     whileHover={{
//       color: "hsl(var(--foreground))",
//       scale: 1.05,
//     }}
//     animate={{ opacity: [1, 0.6, 1] }}
//     transition={{ duration: 2, delay: 1, repeat: Infinity }}
//     className="inline-block mx-2 text-black dark:text-white transition-colors duration-300"
//   >
//     Evolve.
//   </motion.span>
// </motion.h2>


    
//        <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
//         >
//           Kogenix.ai is an innovative organization combining a learning hub and an innovation hub. We offer training program to empower individuals and institutions. Our expertise extends to product development and consulting services, leveraging artificial intelligence to solve complex industry problems and drive digital transformation. At Kogenix, we turn challenges into scalable, tech-driven solutions for a wide range of industries.

//         </motion.p>
      
       
  
//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
//         >
//           <button className="btn-hero-primary group">
//             <span>Get Started</span>
//             <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
//           </button>
//           <button className="btn-hero-ghost">Explore AI Services</button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="flex flex-col items-center text-muted-foreground"
//           >
//             <span className="text-sm mb-2 mt-20">Discover More</span>
//             <ArrowDown className="w-4 h-4" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };


import SplitText from "@/components/ui/SplitText";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Brain, Zap, ChevronRight } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";
import DarkVeil from "@/components/ui/DarkVeil";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { useState } from "react";

export const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullContent = "Kogenix.ai is an innovative organization combining a learning hub and an innovation hub. We offer training program to empower individuals and institutions. Our expertise extends to product development and consulting services, leveraging artificial intelligence to solve complex industry problems and drive digital transformation. At Kogenix, we turn challenges into scalable, tech-driven solutions for a wide range of industries.";

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Neural Background */}
      {/* <NeuralBackground /> */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 z-[1]">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "inset-0 h-full w-full skew-y-6"
            )}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface mb-8"
        >
          <Brain className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">
            AI Innovation • Neural Evolution
          </span>
        </motion.div> */}

        {/* Brand Name (Outline Text) */}
        <h1>
          <SplitText
            text="Kogenix AI"
            className="text-7xl md:text-9xl font-extrabold mb-4 
                       light:text-black dark:text-white
                       border-text"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold tracking-tight mb-8"
        >
          <motion.span
            whileHover={{
              color: "hsl(var(--foreground))",
              scale: 1.05,
            }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mx-2 text-black dark:text-white transition-colors duration-300"
          >
            Think.
          </motion.span>

          <motion.span
            whileHover={{
              color: "hsl(var(--foreground))",
              scale: 1.05,
            }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            className="inline-block mx-2 text-black dark:text-white transition-colors duration-300"
          >
            Build.
          </motion.span>

          <motion.span
            whileHover={{
              color: "hsl(var(--foreground))",
              scale: 1.05,
            }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
            className="inline-block mx-2 text-black dark:text-white transition-colors duration-300"
          >
            Evolve.
          </motion.span>
        </motion.h2>

        {/* Content Section - Expandable Approach */}
        <div className="mb-12 space-y-6">
          {/* Brief Version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              AI-powered learning and innovation hub transforming challenges into scalable, tech-driven solutions.
            </p>
            
            {/* <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {isExpanded ? "Show Less" : "Learn More"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button> */}
          </motion.div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {fullContent}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          {/* <button className="btn-hero-primary group">
            <span>Get Started</span>
            <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </button> */}
          <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfHBCrEWbVHJDTA-vjlYCNvtXzn3TzkpeGDIr8zKdUgYaR8XQ/viewform?usp=header" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn-hero-primary group">
    <span>Get Started</span>
    <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
  </button>
</a>

          {/* <button className="btn-hero-ghost">Explore AI Services</button> */}
          <a href="#services">
  <button className="btn-hero-ghost">
    Explore AI Services
  </button>
</a>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2 mt-20">Discover More</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Make sure you have a default export as well
export default HeroSection;