'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  delay = 0,
  hover = true 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={hover ? { 
        y: -8,
        transition: { duration: 0.3 }
      } : undefined}
      className={`
        bg-white/[0.08] 
        backdrop-blur-[16px] 
        border border-white/[0.15] 
        rounded-3xl 
        ${hover ? 'hover:bg-white/[0.12] hover:border-white/[0.25] hover:shadow-2xl' : ''}
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

