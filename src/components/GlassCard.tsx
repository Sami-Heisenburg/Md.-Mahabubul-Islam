import React, { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  style?: React.CSSProperties;
  key?: React.Key;
  tiltScale?: number;
}

export const GlassCard = ({ children, className, hoverScale = true, style, tiltScale = 1 }: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transforms for 3D tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10 * tiltScale, -10 * tiltScale]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10 * tiltScale, 10 * tiltScale]);
  
  // Reflection/Lens flare position
  const shineLeft = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const shineTop = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      whileHover={hoverScale ? { 
        z: 50,
        boxShadow: '0 40px 80px rgba(0,0,0,0.3)' 
      } : {}}
      className={cn(
        'relative overflow-hidden group transition-all duration-300 rounded-[2.5rem]',
        'bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl',
        'border border-slate-200/50 dark:border-white/10',
        'shadow-[0_15px_35px_-5px_rgba(31,38,135,0.08)] dark:shadow-none',
        'p-8',
        className
      )}
    >
      {/* Dynamic Reflection / Shine */}
      <motion.div 
        style={{
          left: shineLeft,
          top: shineTop,
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 80%)',
        }}
        className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/30 dark:from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity pointer-events-none" />
      
      {/* Content with its own transform for extra depth */}
      <div className="relative z-10 preserve-3d">
        <div style={{ transform: 'translateZ(30px)' }}>
          {children}
        </div>
      </div>
      
      {/* Animated Gradient Spots */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-cyan/10 dark:bg-brand-cyan/5 blur-[80px] rounded-full group-hover:bg-brand-cyan/25 transition-all duration-700" />
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-purple/5 dark:bg-brand-purple/5 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-all duration-700" />
    </motion.div>
  );
};
