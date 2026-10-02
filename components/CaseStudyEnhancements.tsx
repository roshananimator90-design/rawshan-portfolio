'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ExternalLink, Palette, Play, Award, Zap, CheckCircle } from 'lucide-react';

/**
 * Project Status Badge - Concept, Prototype, Live labels
 */
interface ProjectStatusBadgeProps {
  status: 'concept' | 'prototype' | 'live';
  label?: string;
}

export const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({
  status,
  label = status.charAt(0).toUpperCase() + status.slice(1),
}) => {
  const statusStyles = {
    concept: 'bg-violet-accent/20 text-violet-accent border-violet-accent/50',
    prototype: 'bg-electric-blue/20 text-electric-blue border-electric-blue/50',
    live: 'bg-electric-bright/20 text-electric-bright border-electric-bright/50',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border',
        statusStyles[status]
      )}
    >
      {status === 'live' && <CheckCircle size={14} />}
      {status === 'prototype' && <Play size={14} />}
      {status === 'concept' && <Zap size={14} />}
      {label}
    </span>
  );
};

/**
 * Call-to-Action Section - View Prototype, Live Demo, Figma
 */
interface CTAButtonProps {
  label: string;
  href: string;
  type?: 'prototype' | 'live' | 'figma' | 'video';
  external?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href,
  type = 'prototype',
  external = true,
}) => {
  const typeStyles = {
    prototype:
      'bg-gradient-to-r from-electric-blue/20 to-violet-accent/20 hover:from-electric-blue/30 hover:to-violet-accent/30 border-electric-blue/50 text-electric-blue',
    live: 'bg-gradient-to-r from-electric-bright/20 to-green-500/20 hover:from-electric-bright/30 hover:to-green-500/30 border-electric-bright/50 text-electric-bright',
    figma:
      'bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-purple-500/50 text-purple-400',
    video:
      'bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border-orange-500/50 text-orange-400',
  };

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={clsx(
        'inline-flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300',
        typeStyles[type]
      )}
    >
      {type === 'figma' && <Palette size={16} />}
      {(type === 'prototype' || type === 'live' || type === 'video') && (
        <ExternalLink size={16} />
      )}
      <span className="font-semibold text-sm">{label}</span>
    </motion.a>
  );
};

/**
 * CTA Section - Group multiple CTAs together
 */
interface CTASectionProps {
  children: React.ReactNode;
  title?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-12 p-6 rounded-lg border border-white/10 bg-gradient-to-r from-electric-blue/5 to-violet-accent/5"
    >
      {title && <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>}
      <div className="flex flex-wrap gap-3">{children}</div>
    </motion.div>
  );
};

/**
 * Key Achievement Box - Highlight section for recruiter focus
 */
interface KeyAchievementProps {
  title: string;
  description: string;
  metric?: string;
  icon?: React.ReactNode;
}

export const KeyAchievement: React.FC<KeyAchievementProps> = ({
  title,
  description,
  metric,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-electric-blue/10 to-violet-accent/10 border border-electric-blue/30 rounded-lg p-6 hover:border-electric-blue/50 transition-all duration-300"
    >
      {icon && <div className="text-electric-blue mb-3">{icon}</div>}
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-white/70 text-sm mb-3">{description}</p>
      {metric && (
        <p className="text-electric-blue font-semibold text-sm">{metric}</p>
      )}
    </motion.div>
  );
};

/**
 * Achievements Grid - Multiple key achievements
 */
interface AchievementsGridProps {
  achievements: KeyAchievementProps[];
  title?: string;
}

export const AchievementsGrid: React.FC<AchievementsGridProps> = ({
  achievements,
  title = 'Key Achievements',
}) => {
  return (
    <div className="my-12">
      {title && <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <KeyAchievement key={idx} {...achievement} />
        ))}
      </div>
    </div>
  );
};

/**
 * Project Intro Card - Headline section with status
 */
interface ProjectIntroProps {
  title: string;
  subtitle: string;
  status: 'concept' | 'prototype' | 'live';
  description: string;
  tagline?: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  title,
  subtitle,
  status,
  description,
  tagline,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-12 p-8 rounded-xl border border-electric-blue/30 bg-gradient-to-r from-electric-blue/5 to-violet-accent/5"
    >
      <div className="mb-4 flex items-center gap-3">
        <ProjectStatusBadge status={status} />
        {tagline && <p className="text-electric-blue text-sm font-mono italic">{tagline}</p>}
      </div>
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <p className="text-xl text-white/70 mb-4">{subtitle}</p>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </motion.div>
  );
};

/**
 * Challenge & Solution Box - Problem/solution narrative
 */
interface ChallengeSolutionProps {
  challenge: string;
  solution: string;
  outcome?: string;
}

export const ChallengeSolution: React.FC<ChallengeSolutionProps> = ({
  challenge,
  solution,
  outcome,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Challenge */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
        <h4 className="font-semibold text-red-400 text-sm uppercase mb-3">Challenge</h4>
        <p className="text-white/80 text-sm leading-relaxed">{challenge}</p>
      </div>

      {/* Arrow or Divider */}
      <div className="hidden md:flex items-center justify-center">
        <div className="text-white/40">→</div>
      </div>

      {/* Solution */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
        <h4 className="font-semibold text-green-400 text-sm uppercase mb-3">Solution</h4>
        <p className="text-white/80 text-sm leading-relaxed">{solution}</p>
        {outcome && (
          <>
            <div className="border-t border-green-500/20 my-3" />
            <p className="text-green-400 text-sm font-semibold">{outcome}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Case Study Summary - Final takeaway section
 */
interface CaseStudySummaryProps {
  role: string;
  timeline: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({
  role,
  timeline,
  challenge,
  approach,
  outcome,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-12 bg-gradient-to-r from-electric-blue/10 to-violet-accent/10 border border-white/10 rounded-xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Case Study Summary</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Role</p>
          <p className="text-white font-semibold mb-6">{role}</p>

          <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Timeline</p>
          <p className="text-white font-semibold mb-6">{timeline}</p>
        </div>

        <div />
      </div>

      <div className="space-y-6 border-t border-white/10 pt-6">
        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Challenge</p>
          <p className="text-white/80">{challenge}</p>
        </div>

        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Approach</p>
          <p className="text-white/80">{approach}</p>
        </div>

        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Key Outcome</p>
          <p className="text-electric-blue font-semibold">{outcome}</p>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Skill Highlights - What this project showcases
 */
interface SkillHighlightsProps {
  skills: string[];
}

export const SkillHighlights: React.FC<SkillHighlightsProps> = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Design Skills Demonstrated</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-electric-blue/20 border border-electric-blue/50 text-electric-blue text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
