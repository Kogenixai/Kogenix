



// Navigation.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  {
    name: 'Services',
    children: [
      { name: 'Innovation Hub', to: '/services/innovation' },
      { name: 'Learning Hub', to: '/services/learning' },
    ],
  },
  { name: 'Case Studies', to: '/case-studies' },
  { name: 'Contact', to: '/contact' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-4 py-3"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-surface rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-xl">Kogenix</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  {!item.children ? (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `text-foreground80 hover:text-foreground transition-colors font-medium py-2 ${
                          isActive ? 'text-foreground font-bold underline underline-offset-4' : ''
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="flex items-center text-foreground80 hover:text-foreground font-medium py-2 transition-colors"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            className="relative left-0 mt-2 w-56 
           bg-background 
           text-foreground 
           rounded-2xl shadow-2xl 
           border border-border/60 
           overflow-hidden"

                          >
                            {item.children.map((child) => (
                              <NavLink
                                key={child.name}
                                to={child.to}
                                onClick={() => setOpenDropdown(null)}
                                className={({ isActive }) =>
                                  `block px-4 py-3 text-sm text-foreground80 hover:text-foreground hover:bg-foreground/10 dark:text-black transition-all ${
                                    isActive ? 'text-foreground bg-foreground/15 font-semibold' : ''
                                  }`
                                }
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-lg glass-surface"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 rounded-lg glass-surface"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-3 glass-surface rounded-2xl px-4 py-3 border border-border/60"
              >
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {!item.children ? (
                        <NavLink
                          to={item.to}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className={({ isActive }) =>
                            `block py-2 text-sm font-medium ${
                              isActive ? 'text-foreground font-semibold' : 'text-foreground80'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdown((prev) => (prev === item.name ? null : item.name))
                            }
                            className="w-full flex items-center justify-between py-2 text-sm font-medium text-foreground80 hover:text-foreground"
                          >
                            {item.name}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                openDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 pb-2 space-y-1"
                              >
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.name}
                                    to={child.to}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                    className="block py-1 text-xs text-foreground80 hover:text-foreground"
                                  >
                                    • {child.name}
                                  </NavLink>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
};
