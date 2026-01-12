

import  AppLayout  from './AppLayout'; 
import {NeuralBackground } from '@/components/NeuralBackground'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsAnalyticsPage } from "@/components/ReviewsAnalyticsPage"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import {LearningHubPage} from "@/components/LearningHubPage"
import ScrollToTop from "@/components/ScrollToTop"
import Footer from "@/components/Footer"

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <NeuralBackground />
      <Navigation />
      <Footer/>
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
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        
    </>
  );
};

const Home = () => (
  <>
    <HeroSection /> {/* Your exact hero stays */}
    <LiveDemoSection />
    <TestimonialsSection />
    <ReviewsAnalyticsPage/>
    
  </>
);

const ServicesLayout = () => (
  <>
    <Outlet />
  </>
);

// KEEP InnovationHubPage (your current):
const InnovationHubPage = () => (
  <>
    <ServicesSection /> {/* file:16 updated */}
    <WhyChooseSection />
  </>
);



const App = () => (
  <BrowserRouter>
  <ScrollToTop />
  
    <ThemeProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          {/* <Route path="services" element={<ServicesSection />} /> */}
          <Route path="/services" element={<ServicesLayout />}>
  <Route index element={<InnovationHubPage />} /> {/* Default = current content */}
  <Route path="innovation" element={<InnovationHubPage />} />
  <Route path="learning" element={<LearningHubPage />} />
</Route>
          <Route path="case-studies" element={<CaseStudiesSection />} />
          <Route path="contact" element={<ContactSection />} />
        </Route>
      </Routes>
     <Footer/>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
