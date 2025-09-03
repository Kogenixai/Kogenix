// import { motion } from "framer-motion";
// import { Moon, Sun, Menu, X } from "lucide-react";
// import { useState } from "react";
// import { useTheme } from "./ThemeProvider";

// export const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();

//   const navItems = [
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Products", href: "#products" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="glass-surface rounded-2xl px-6 py-3">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
//                 <span className="text-background font-bold text-sm">K</span>
//               </div>
//               <span className="font-bold text-xl">Kogenix</span>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   whileHover={{ scale: 1.05 }}
//                   className="text-foreground/80 hover:text-foreground transition-colors font-medium"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center space-x-4">
//               {/* Theme Toggle */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//                 className="p-2 rounded-lg glass-surface"
//               >
//                 {theme === "light" ? (
//                   <Moon className="w-4 h-4" />
//                 ) : (
//                   <Sun className="w-4 h-4" />
//                 )}
//               </motion.button>

//               {/* Mobile Menu Toggle */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="md:hidden p-2 rounded-lg glass-surface"
//               >
//                 {isMenuOpen ? (
//                   <X className="w-4 h-4" />
//                 ) : (
//                   <Menu className="w-4 h-4" />
//                 )}
//               </motion.button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden mt-4 pt-4 border-t border-border"
//             >
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };




import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    // { name: "About", href: "#about" },
    // { name: "Services", href: "#services" },
    // { name: "Products", href: "#products" },
    // { name: "Contact", href: "#contact" },
   
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
  { name: "life@Kogenix", href: "#life@Kogenix" }, // email link
  { name: "Careers", href: "#careers" }, // internal section or page


  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/logo.webp"
            alt="Kogenix Logo"
            className="w-10 h-10 rounded-lg object-contain"
          />
          <span className="font-bold text-xl tracking-tight">Kogenix</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors font-medium text-md"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 border-t border-gray-300 dark:border-gray-600 pt-4"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors font-medium text-sm"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
