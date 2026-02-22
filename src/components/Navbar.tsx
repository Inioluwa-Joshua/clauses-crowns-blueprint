import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Area Practice", path: "/practice" },
  { label: "Team", path: "/team" },
  {
    label: "Insight",
    path: "#",
    children: [
      { label: "Articles", path: "/articles" },
      { label: "Global Hub", path: "/global-hub" },
    ],
  },
  { label: "CSR", path: "/csr" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setInsightOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-wide text-primary-foreground">
              Clauses <span className="text-accent">&</span> Crowns
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setInsightOpen(true)}
                  onMouseLeave={() => setInsightOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-sans font-medium tracking-widest uppercase text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {insightOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-primary border border-accent/20 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-5 py-3 text-sm font-sans text-primary-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-sans font-medium tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-primary-foreground/80 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-accent/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setInsightOpen(!insightOpen)}
                      className="flex items-center justify-between w-full py-3 text-sm font-sans font-medium tracking-widest uppercase text-primary-foreground/80"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          insightOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {insightOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block py-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 text-sm font-sans font-medium tracking-widest uppercase transition-colors ${
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-primary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
