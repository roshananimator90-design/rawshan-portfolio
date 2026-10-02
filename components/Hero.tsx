'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Button } from './Button';
import Link from 'next/link';

export const Hero = () => {
  const workflows = [
    { label: 'Human', color: 'from-electric-blue' },
    { label: 'AI Copilot', color: 'from-electric-bright' },
    { label: 'AI Agents', color: 'from-violet-accent' },
    { label: 'Review', color: 'from-electric-blue' },
    { label: 'Human Approval', color: 'from-electric-bright' },
    { label: 'Execute', color: 'from-violet-accent' },
    { label: 'Audit & Learn', color: 'from-electric-blue' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 glass-panel-sm px-4 py-2 mb-8">
            <Sparkles size={16} className="text-electric-blue" />
            <span className="text-sm text-white/80">AI Product Design Expert</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Designing{' '}
          <span className="gradient-text">AI-native products</span>
          {' '}where humans stay in control.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
        >
          Product design for AI agents, enterprise software and healthcare platforms.
          From concept to human-in-the-loop workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Link href="/work">
            <Button variant="primary" size="lg">
              Explore my work
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            Ask my AI
          </Button>
        </motion.div>

        {/* Workflow Visualization */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="relative">
            {/* Workflow Items */}
            <div className="space-y-4">
              {workflows.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-center gap-4"
                >
                  {/* Node */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} to-transparent shadow-glow-blue flex items-center justify-center flex-shrink-0`}
                  >
                    <div className="w-8 h-8 bg-dark-bg rounded-full" />
                  </motion.div>

                  {/* Label */}
                  <span className="text-sm font-semibold text-white min-w-fit">
                    {item.label}
                  </span>

                  {/* Connector Line */}
                  {index < workflows.length - 1 && (
                    <motion.div
                      className="hidden md:flex-1 h-px bg-gradient-to-r from-electric-blue/30 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    />
                  )}

                  {/* Arrow Down on Mobile */}
                  {index < workflows.length - 1 && (
                    <ArrowDown size={16} className="md:hidden text-electric-blue/50 rotate-180" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-24 flex justify-center"
        >
          <div className="text-white/40 text-sm">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  );
};
