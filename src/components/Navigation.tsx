'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-deep-indigo/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-10 h-10"
            >
              <Image
                src="/visuals/AxiAvatar.png"
                alt="Axi"
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
            <span className="text-xl font-bold text-gradient">
              Axi Community
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative text-sm font-medium transition-colors duration-300
                  ${pathname === link.href 
                    ? 'text-accent-cyan' 
                    : 'text-white/70 hover:text-white'
                  }
                `}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-cyan rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              className="
                px-4 py-2
                text-sm font-semibold
                bg-gradient-to-r from-accent-cyan/20 to-soft-violet/20
                border border-accent-cyan/30
                rounded-lg
                hover:border-accent-cyan/50
                hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                transition-all duration-300
              "
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-indigo/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block py-2 text-lg font-medium
                    ${pathname === link.href 
                      ? 'text-accent-cyan' 
                      : 'text-white/70'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  block w-full text-center py-3
                  bg-gradient-to-r from-accent-cyan/20 to-soft-violet/20
                  border border-accent-cyan/30
                  rounded-lg
                  font-semibold
                "
              >
                Join Waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

