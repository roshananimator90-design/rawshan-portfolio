'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Image, Grid3x3, GitBranch, Users, Zap } from 'lucide-react';

/**
 * Screenshot Gallery - Display mockups/screenshots with labels
 */
interface ScreenshotItem {
  label: string;
  description?: string;
  aspect?: 'desktop' | 'mobile' | 'square';
}

export const ScreenshotGallery: React.FC<{ items: ScreenshotItem[] }> = ({ items }) => {
  return (
    <div className="my-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div
              className={clsx(
                'bg-gradient-to-br from-electric-blue/10 to-violet-accent/10 border border-white/10 rounded-lg overflow-hidden hover:border-electric-blue/30 transition-all duration-300',
                item.aspect === 'mobile' ? 'aspect-[9/16]' : item.aspect === 'square' ? 'aspect-square' : 'aspect-video'
              )}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-white/40 mb-4">
                  <Image size={48} className="mx-auto" />
                </div>
                <p className="text-sm text-white/60">Screenshot: {item.label}</p>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="font-semibold text-white text-sm">{item.label}</h4>
              {item.description && (
                <p className="text-white/60 text-sm mt-1">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * UX Flow - Display user flows, wireframes, or process flows
 */
interface FlowStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const UXFlow: React.FC<{ steps: FlowStep[]; title: string }> = ({ steps, title }) => {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-6"
          >
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-electric-blue/20 border border-electric-blue/50 flex items-center justify-center">
                <span className="text-electric-blue font-semibold text-sm">{idx + 1}</span>
              </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 pb-6 border-l border-white/10 md:border-l-0 md:pb-0">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-[19px] top-12 h-12 border-l border-white/10" />
              )}
              <div>
                <h4 className="font-semibold text-white">{step.title}</h4>
                <p className="text-white/70 text-sm mt-2">{step.description}</p>
              </div>
            </div>

            {/* Icon on larger screens */}
            {step.icon && (
              <div className="hidden md:flex items-center text-white/40">
                {step.icon}
              </div>
            )}

            {/* Arrow between steps */}
            {idx < steps.length - 1 && (
              <div className="hidden md:flex items-center text-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M12 19l-7-7M12 19l7-7" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * AI Architecture - System and data flow visualization
 */
interface ArchitectureComponent {
  name: string;
  description: string;
  type: 'input' | 'process' | 'output' | 'decision';
}

export const AIArchitecture: React.FC<{ components: ArchitectureComponent[] }> = ({ components }) => {
  const componentColors = {
    input: 'from-electric-blue/20 to-cyan-500/20 border-electric-blue/50',
    process: 'from-violet-accent/20 to-purple-500/20 border-violet-accent/50',
    output: 'from-electric-bright/20 to-green-500/20 border-electric-bright/50',
    decision: 'from-orange-500/20 to-red-500/20 border-orange-500/50',
  };

  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-8">AI Architecture & Data Flow</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {components.map((comp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className={clsx(
              'bg-gradient-to-br p-4 border rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300',
              componentColors[comp.type]
            )}
          >
            <div className="flex items-center gap-2 mb-3">
              {comp.type === 'input' && <GitBranch size={16} className="text-electric-blue" />}
              {comp.type === 'process' && <Zap size={16} className="text-violet-accent" />}
              {comp.type === 'output' && <Image size={16} className="text-electric-bright" />}
              {comp.type === 'decision' && <Grid3x3 size={16} className="text-orange-500" />}
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                {comp.type}
              </span>
            </div>
            <h4 className="font-semibold text-white mb-2">{comp.name}</h4>
            <p className="text-white/60 text-sm">{comp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * User Journey Map - Timeline of user experience
 */
interface JourneyPhase {
  phase: string;
  goals: string[];
  painPoints: string[];
  emotions: 'frustrated' | 'hopeful' | 'confident' | 'satisfied';
}

export const UserJourneyMap: React.FC<{ phases: JourneyPhase[] }> = ({ phases }) => {
  const emotionColors = {
    frustrated: 'text-red-400',
    hopeful: 'text-yellow-400',
    confident: 'text-blue-400',
    satisfied: 'text-green-400',
  };

  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-8">User Journey Map</h3>
      <div className="space-y-8">
        {phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="border-l-2 border-electric-blue/30 pl-6 pb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-electric-blue absolute -left-[7px]" />
              <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
              <span className={clsx('text-sm font-semibold uppercase', emotionColors[phase.emotions])}>
                {phase.emotions}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-white/70 mb-3">Goals</p>
                <ul className="space-y-2">
                  {phase.goals.map((goal, i) => (
                    <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-electric-blue/50 mt-1">→</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/70 mb-3">Pain Points</p>
                <ul className="space-y-2">
                  {phase.painPoints.map((pain, i) => (
                    <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-red-400/50 mt-1">✗</span>
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * UI Showcase - Display key UI components and design patterns
 */
interface UIComponent {
  title: string;
  description: string;
  type: 'button' | 'input' | 'modal' | 'card' | 'flow' | 'state';
}

export const UIShowcase: React.FC<{ components: UIComponent[] }> = ({ components }) => {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-8">Key UI Components & Patterns</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {components.map((comp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-electric-blue/10 to-violet-accent/10 border border-white/10 rounded-lg p-6 hover:border-electric-blue/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-white">{comp.title}</h4>
              <span className="text-xs font-semibold px-2 py-1 bg-electric-blue/20 text-electric-blue rounded border border-electric-blue/30">
                {comp.type}
              </span>
            </div>
            <p className="text-white/70 text-sm">{comp.description}</p>

            {/* Visual Placeholder */}
            <div className="mt-6 bg-black/40 border border-white/5 rounded p-4 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Grid3x3 size={32} className="text-white/20 mx-auto mb-2" />
                <p className="text-xs text-white/30">UI Component: {comp.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * Key Decisions Section - Design decision matrix
 */
interface Decision {
  problem: string;
  considered: string[];
  chosen: string;
  reasoning: string;
}

export const KeyDecisions: React.FC<{ decisions: Decision[] }> = ({ decisions }) => {
  return (
    <div className="my-12 space-y-6">
      {decisions.map((decision, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-electric-blue/5 to-violet-accent/5 border border-white/10 rounded-lg p-6 hover:border-electric-blue/20 transition-all"
        >
          <div className="mb-4">
            <h4 className="font-semibold text-white mb-3">{decision.problem}</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {decision.considered.map((option, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/10 text-white/70 rounded border border-white/10"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-electric-blue/50 pl-4">
            <p className="text-sm font-semibold text-electric-blue mb-2">✓ Chosen: {decision.chosen}</p>
            <p className="text-white/70 text-sm">{decision.reasoning}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
