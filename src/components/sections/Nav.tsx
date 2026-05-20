'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card border-b border-border backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-accent font-bold text-xl hover:text-accent/80 transition-colors">
          Curative OS
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <Link
            href="/sops"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            SOPs
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Right side — Log In + CTA */}
        <div className="flex items-center space-x-4">
          <a href="https://app.curativeos.com" className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors text-sm">
            Log In
          </a>
          <motion.a
            href="https://app.curativeos.com/signup?plan=starter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Start 7-Day Trial
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
