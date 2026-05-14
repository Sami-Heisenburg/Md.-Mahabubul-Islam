import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const CustomSelect = ({ options, value, onChange, placeholder = "Select an option", label }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      {label && (
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">
          {label}
        </label>
      )}
      
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none text-left flex items-center justify-between transition-all duration-300",
            isOpen ? "border-brand-cyan ring-4 ring-brand-cyan/5" : "hover:border-brand-cyan/50"
          )}
        >
          <span className={cn(
            "text-lg font-medium",
            !selectedOption ? "text-slate-400" : "text-slate-900 dark:text-white"
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown 
            size={20} 
            className={cn(
              "text-slate-400 transition-transform duration-300",
              isOpen && "rotate-180 text-brand-cyan"
            )} 
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-50 top-full left-0 right-0 mt-3 p-2 rounded-[2rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                {options.map((option) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    whileHover={{ x: 5, backgroundColor: 'rgba(0, 242, 255, 0.05)' }}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full px-5 py-4 rounded-xl flex items-center justify-between text-left transition-colors",
                      value === option.value ? "bg-brand-cyan/10 text-brand-cyan" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {option.icon && <span className="text-brand-cyan">{option.icon}</span>}
                      <span className="font-bold text-lg">{option.label}</span>
                    </div>
                    {value === option.value && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check size={18} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
