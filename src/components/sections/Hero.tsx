'use client';

import { motion } from 'framer-motion';
import AnimatedBoard from '@/components/ui/AnimatedBoard';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-background text-foreground overflow-hidden pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 w-fit">
              <div className="h-px w-3 bg-accent" />
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                For Curative Investors
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              The CRM that knows what a{' '}
              <span className="text-accent">clouded title</span> is.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Stop bending your CRM to your deals. We built the operating system for
              curative investing — deal scoring, cash tracking, AI underwriting, and a
              team playbook that scales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="https://app.curativeos.com/signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </motion.a>
              <motion.a
                href="mailto:hello@curativeos.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-muted bg-transparent text-foreground font-semibold rounded-lg hover:bg-card transition-colors"
              >
                Watch Demo
              </motion.a>
            </div>

            {/* Trust signal */}
            <p className="text-sm text-muted-foreground pt-4">
              Used by 300+ curative investors across the US.
            </p>
          </motion.div>

          {/* Animated Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-full min-h-96"
          >
            <AnimatedBoard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
