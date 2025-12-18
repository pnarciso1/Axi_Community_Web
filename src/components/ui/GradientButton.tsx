'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function GradientButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = 'md',
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative
        ${sizeClasses[size]}
        font-semibold
        text-white
        bg-gradient-to-r from-accent-cyan/30 via-soft-violet/30 to-accent-cyan/30
        backdrop-blur-[10px]
        border border-accent-cyan/40
        rounded-xl
        transition-all duration-300
        hover:from-accent-cyan/50 hover:via-soft-violet/50 hover:to-accent-cyan/50
        hover:border-accent-cyan/60
        hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        overflow-hidden
        group
        ${className}
      `}
    >
      {/* Animated shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

