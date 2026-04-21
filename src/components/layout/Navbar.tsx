import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    dropdown: [
      { name: 'Driving Services', path: '/driving-services', desc: 'Lessons & test prep' },
      { name: 'Vehicle Services', path: '/vehicle-services', desc: 'Licensing & admin' },
    ],
  },
  { name: 'Packages', path: '/packages' },
  {
    name: 'Success Stories',
    dropdown: [
      { name: 'Hall of Fame', path: '/hall-of-fame', desc: 'Our successful graduates' },
      { name: 'Reviews', path: '/reviews', desc: 'Student testimonials' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActiveGroup = (dropdown: any[]) => {
    return dropdown.some((item) => location.pathname === item.path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 pointer-events-none flex justify-center">
      <div className={`pointer-events-auto transition-all duration-500 w-full max-w-5xl rounded-full border ${scrolled ? 'bg-gray-900/90 backdrop-blur-xl border-gray-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.4)] py-2 px-3' : 'bg-gray-900/50 backdrop-blur-md border-transparent shadow-none py-3 px-4'}`}>
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group pl-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-green-600 text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-lg shadow-orange-500/20">
              N
            </div>
            <div>
              <span className="block font-bold text-base leading-none tracking-tight gradient-text">
                Nomshu
              </span>
              <span className="block text-[8px] uppercase font-bold text-gray-500 tracking-widest leading-none mt-0.5">
                Driving School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 justify-center bg-transparent">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative group/dropdown">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-[14px] font-medium transition-all ${
                      isActiveGroup(item.dropdown)
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={14} className="opacity-50 transition-transform duration-200 group-hover/dropdown:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-gray-800 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-gray-700 p-2 w-[240px] flex flex-col relative overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className={({ isActive }) =>
                            `p-3 rounded-2xl transition-all block ${
                              isActive ? 'bg-gray-700' : 'hover:bg-gray-700/50'
                            }`
                          }
                        >
                          <div className="text-[14px] font-semibold text-white mb-1">
                            {sub.name}
                          </div>
                          <div className="text-xs text-gray-400 font-medium">{sub.desc}</div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/bookings"
              className="px-5 py-2.5 rounded-full text-[14px] font-semibold flex items-center gap-2 transition-all bg-gradient-to-r from-orange-600 to-green-500 text-white shadow-lg shadow-orange-500/20 hover:scale-105 hover:from-orange-700 hover:to-green-600"
            >
              Book Now <MoveRight size={16} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden fixed top-[84px] left-4 right-4 bg-gray-900/95 backdrop-blur-2xl border border-gray-700/60 rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <div className="px-4 py-3 text-[12px] font-bold uppercase tracking-widest text-gray-400 mt-2">
                        {item.name}
                      </div>
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className={({ isActive }) =>
                            `px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors ml-2 ${
                              isActive
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:bg-white/5'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors mt-1 ${
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:bg-white/5'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="h-px w-full bg-gray-700/50 my-4"></div>
              <Link
                to="/bookings"
                className="mx-2 mb-2 px-4 py-4 bg-gradient-to-r from-orange-600 to-green-500 text-white rounded-2xl text-center font-semibold text-[15px] flex items-center justify-center gap-2"
              >
                Book Your Lessons <MoveRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
