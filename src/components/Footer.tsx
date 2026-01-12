// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';
// import { Github, Linkedin, Twitter } from 'lucide-react';

// export const Footer = () => {
//   return (
//     <footer className="relative mt-24 px-4 pb-6">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="glass-surface rounded-3xl px-6 sm:px-10 py-10 border border-border/60"
//         >
//           {/* Top Section */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//             {/* Brand */}
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center">
//                   <span className="text-background font-bold text-sm">K</span>
//                 </div>
//                 <span className="font-bold text-xl">Kogenix</span>
//               </div>
//               <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
//                 Building intelligent AI-driven solutions that help businesses innovate, scale,
//                 and lead in a digital-first world.
//               </p>
//             </div>

//             {/* Navigation */}
//             <div>
//               <h4 className="text-sm font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <NavLink to="/about" className="text-foreground80 hover:text-foreground">
//                     About
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/case-studies" className="text-foreground80 hover:text-foreground">
//                     Case Studies
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact" className="text-foreground80 hover:text-foreground">
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="text-sm font-semibold mb-4">Services</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <NavLink
//                     to="/services/innovation"
//                     className="text-foreground80 hover:text-foreground"
//                   >
//                     Innovation Hub
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/services/learning"
//                     className="text-foreground80 hover:text-foreground"
//                   >
//                     Learning Hub
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Social */}
//             <div>
//               <h4 className="text-sm font-semibold mb-4">Connect</h4>
//               <div className="flex items-center space-x-4">
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="#"
//                   aria-label="Twitter"
//                   className="p-2 rounded-lg glass-surface"
//                 >
//                   <Twitter className="w-4 h-4" />
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="#"
//                   aria-label="LinkedIn"
//                   className="p-2 rounded-lg glass-surface"
//                 >
//                   <Linkedin className="w-4 h-4" />
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="#"
//                   aria-label="GitHub"
//                   className="p-2 rounded-lg glass-surface"
//                 >
//                   <Github className="w-4 h-4" />
//                 </motion.a>
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="my-8 h-px bg-border/60" />

//           {/* Bottom */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
//             <span>© {new Date().getFullYear()} Kogenix. All rights reserved.</span>
//             <div className="flex space-x-4">
//               <NavLink to="/privacy" className="hover:text-foreground">
//                 Privacy Policy
//               </NavLink>
//               <NavLink to="/terms" className="hover:text-foreground">
//                 Terms of Service
//               </NavLink>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter ,Youtube,Instagram} from 'lucide-react';

const lettersVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: { 
    y: -4,
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const Footer = () => {
  const letters = "KOGENIX".split('');

  return (
    <footer className="relative mt-24 px-4 pb-12 pt-16 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 dark:from-slate-50 dark:via-white dark:to-slate-50" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid layout - NO container wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-10 pb-8 lg:pb-12"
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover="hover"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">K</span>
              </div>
              {/* <span className="font-bold text-xl">Kogenix</span> */}
            </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.6, delay: 0.4 }
                  }
                }}
                className="font-black text-3xl text-white dark:text-black  leading-tight tracking-tight drop-shadow-lg"
              >
                Kogenix
              </motion.div>
            </motion.div>

            <p className="text-base leading-relaxed max-w-sm text-gray-300 dark:text-gray-700 lg:text-lg">
              Building intelligent AI-driven solutions that help businesses innovate, scale, and lead.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 pb-8 lg:pb-12"
          >
            <h4 className="text-xl font-bold text-white/90 dark:text-black/90 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><NavLink to="/about" className="block text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 text-lg font-medium transition-all duration-300 hover:translate-x-2">About</NavLink></li>
              <li><NavLink to="/case-studies" className="block text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 text-lg font-medium transition-all duration-300 hover:translate-x-2">Case Studies</NavLink></li>
              <li><NavLink to="/contact" className="block text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 text-lg font-medium transition-all duration-300 hover:translate-x-2">Contact</NavLink></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 pb-8 lg:pb-12"
          >
            <h4 className="text-xl font-bold text-white/90 dark:text-black/90 tracking-tight">Services</h4>
            <ul className="space-y-4">
              <li><NavLink to="/services/innovation" className="block text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 text-lg font-medium transition-all duration-300 hover:translate-x-2">Innovation Hub</NavLink></li>
              <li><NavLink to="/services/learning" className="block text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 text-lg font-medium transition-all duration-300 hover:translate-x-2">Learning Hub</NavLink></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h4 className="text-xl font-bold text-white/90 dark:text-black/90 tracking-tight">Connect</h4>
            <div className="flex items-center space-x-6">
              {[
                 { icon: Linkedin, href: "#", label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
  { icon: Youtube, href: "#", label: "YouTube", target: "_blank", rel: "noopener noreferrer" }, // Replace Mail with YouTube icon if installed
  { icon: Instagram, href: "https://github.com/Kogenixai", label: "GitHub", target: "_blank", rel: "noopener noreferrer" }
              ].map(({ href, icon: Icon, label }, i) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  href={href}
                  aria-label={label}
                  className="group relative p-5 rounded-3xl bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-black/30 shadow-2xl hover:shadow-3xl hover:bg-white/20 dark:hover:bg-black/20 text-white dark:text-black transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl" />
                  <Icon className="w-6 h-6 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/30 dark:via-black/30 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <span className="text-lg text-gray-300 dark:text-gray-600 font-medium">
            © {new Date().getFullYear()} Kogenix. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8">
            <NavLink to="/privacy" className="text-lg text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 font-semibold transition-all duration-300 hover:underline underline-offset-4">Privacy Policy</NavLink>
            <NavLink to="/terms" className="text-lg text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-black/90 font-semibold transition-all duration-300 hover:underline underline-offset-4">Terms of Service</NavLink>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
     
    </footer>
  );
};

export default Footer;
