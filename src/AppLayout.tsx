// Your Layout component - COMPLETE REPLACEMENT
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Navigation } from '@/components/Navigation';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'; // adjust path
import { cn } from '@/lib/utils'; // adjust path
import SplashCursor from "@/components/ui/SplashCursor"
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const AppLayout = () => {
  const location = useLocation();
  
  return (
    <div >
      {/* Background layers (z-0) */}
      <NeuralBackground />
      <Toaster />
      <Sonner />
      <SplashCursor/>
      {/* Grid overlay (z-10) - moved BEFORE nav */}
      <div className="absolute inset-0 z-[10]">
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
      
      {/* Navigation (z-50) */}
      <Navigation />
      
      {/* ✅ MAIN CONTENT - FIXED OVERLAP */}
      <
      
      >
        <Outlet />
      </>
    </div>
  );
};

export default AppLayout;
