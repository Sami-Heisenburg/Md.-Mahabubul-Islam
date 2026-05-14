import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Magnetic } from './Magnetic';

const navLinks = [
  { name: 'Core', href: '/' },
  { name: 'Philosophy', href: '/about' },
  { name: 'Modules', href: '/services' },
  { name: 'Deployments', href: '/projects' },
  { name: 'Terminal', href: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6',
        scrolled ? 'bg-white/80 dark:bg-[#050816]/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white p-[1px] shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-all duration-500 overflow-hidden">
            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center font-black text-xl italic tracking-tighter">
              T
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-xl tracking-tighter uppercase">
              Tech Tonic
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] text-brand-cyan uppercase pt-1">Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10 pr-6 border-r border-slate-200 dark:border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-brand-cyan relative py-1 hover:tracking-[0.3em]',
                  location.pathname === link.href ? 'text-brand-cyan' : 'text-slate-600 dark:text-slate-400'
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-cyan shadow-[0_0_8px_#00f2ff]"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <Magnetic strength={0.3}>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-2xl bg-linear-to-r from-brand-cyan to-brand-purple text-white font-black text-xs uppercase tracking-widest hover:shadow-[0_15px_40px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2 group active:scale-90"
            >
              Initialize <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-600 dark:text-white/80 bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-6 right-6 p-6 rounded-2xl bg-white dark:bg-[#0b1026] border border-slate-200 dark:border-white/10 shadow-2xl md:hidden z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-semibold transition-colors',
                    location.pathname === link.href ? 'text-brand-cyan' : 'text-slate-600 dark:text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-xl bg-linear-to-r from-brand-cyan to-brand-purple text-white font-bold text-center"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
