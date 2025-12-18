'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from './GradientButton';

interface WaitlistFormProps {
  variant?: 'hero' | 'footer';
}

export default function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("Thanks! You're on the list. Axi is excited to meet you!");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className={`w-full ${variant === 'hero' ? 'max-w-lg' : 'max-w-md'}`}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className={`
          flex 
          ${variant === 'hero' ? 'flex-col sm:flex-row' : 'flex-col'} 
          gap-3
        `}>
          <motion.input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your email"
            disabled={status === 'loading' || status === 'success'}
            className={`
              flex-1
              px-5 py-4
              bg-white/[0.05]
              backdrop-blur-[10px]
              border border-white/[0.15]
              rounded-xl
              text-white
              placeholder:text-white/50
              focus:bg-white/[0.1]
              focus:border-accent-cyan/50
              focus:outline-none
              focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              transition-all duration-300
              disabled:opacity-50
            `}
            whileFocus={{ scale: 1.01 }}
          />
          <GradientButton
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            size="lg"
            className={variant === 'hero' ? 'sm:w-auto w-full' : 'w-full'}
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Joining...
              </>
            ) : status === 'success' ? (
              <>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Joined!
              </>
            ) : (
              'Join Early Access'
            )}
          </GradientButton>
        </div>
      </form>

      <AnimatePresence mode="wait">
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`
              mt-4 text-sm text-center
              ${status === 'success' ? 'text-accent-cyan' : 'text-red-400'}
            `}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      {status === 'idle' && (
        <p className="mt-4 text-sm text-white/50 text-center">
          Join 1,000+ others waiting for early access. No spam, ever.
        </p>
      )}
    </div>
  );
}

