'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ProjectCardThumbnailProps {
  projectId: string;
  isHovering?: boolean;
}

/**
 * Projects with real UI screenshots/dashboards
 */
const projectsWithRealImages: Record<string, string> = {
  'bizpilot-ai': '/project-screens/bizpilot-ai-dashboard.png',
  'testguard': '/project-screens/testguard-platform.png',
};

/**
 * Real image display component
 */
const RealProjectImage = ({ projectId, isHovering }: { projectId: string; isHovering?: boolean }) => {
  const imagePath = projectsWithRealImages[projectId];

  if (!imagePath) {
    return null;
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-dark-surface">
      <img
        src={imagePath}
        alt={projectId}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark-surface to-transparent" />
    </div>
  );
};

/**
 * Semantic visual representations for project cards (fallback)
 * Based on each project's primary interface/concept
 */
const BizPilotThumbnail = ({ isHovering }: { isHovering?: boolean }) => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    {/* Background */}
    <rect width="400" height="240" fill="#0a0e27" />

    {/* Dashboard grid structure */}
    <rect x="12" y="12" width="376" height="216" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" rx="4" />

    {/* Header area */}
    <rect x="20" y="20" width="360" height="30" fill="#1e3a8a" opacity="0.4" rx="2" />
    <rect x="28" y="26" width="120" height="18" fill="#60a5fa" opacity="0.6" rx="2" />

    {/* Invoice approval cards (main content) */}
    <g className={isHovering ? 'animate-pulse' : ''}>
      <rect x="20" y="60" width="170" height="80" fill="#0c1840" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" rx="3" />
      <rect x="30" y="70" width="150" height="12" fill="#60a5fa" opacity="0.7" />
      <circle cx="190" cy="95" r="8" fill="#10b981" opacity="0.6" />
      <text x="35" y="108" fontSize="8" fill="#9ca3af">Invoice #2024-1089</text>
      <text x="35" y="120" fontSize="7" fill="#6b7280">Confidence: 94%</text>
    </g>

    <rect x="210" y="60" width="170" height="80" fill="#0c1840" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" rx="3" />
    <rect x="220" y="70" width="150" height="12" fill="#60a5fa" opacity="0.7" />
    <circle cx="290" cy="95" r="8" fill="#f97316" opacity="0.6" />
    <text x="225" y="108" fontSize="8" fill="#9ca3af">Invoice #2024-1090</text>
    <text x="225" y="120" fontSize="7" fill="#6b7280">Review Required</text>

    {/* Cash flow indicator */}
    <rect x="20" y="155" width="360" height="65" fill="#0c1840" stroke="#3b82f6" strokeWidth="1" opacity="0.3" rx="3" />
    <text x="30" y="175" fontSize="10" fill="#9ca3af" fontWeight="bold">Cash Flow Forecast</text>

    {/* Sparkline representing cash flow */}
    <polyline points="40,210 70,200 100,195 130,205 160,190 190,210 220,185" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.7" />
    <text x="240" y="210" fontSize="8" fill="#6b7280">7-day forecast</text>
  </svg>
);

const TestGuardThumbnail = ({ isHovering }: { isHovering?: boolean }) => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <rect width="400" height="240" fill="#0a0e27" />

    {/* QA test grid - 3x2 layout */}
    <rect x="12" y="12" width="376" height="216" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.3" rx="4" />

    {/* Test suite cards */}
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const x = 25 + col * 120;
      const y = 25 + row * 90;

      return (
        <g key={i} className={isHovering ? 'opacity-80' : 'opacity-100'}>
          <rect x={x} y={y} width="110" height="80" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" rx="3" />
          <rect x={x + 5} y={y + 5} width="100" height="15" fill="#d946ef" opacity="0.5" rx="2" />
          <circle cx={x + 60} cy={y + 35} r="4" fill={Math.random() > 0.3 ? '#10b981' : '#ef4444'} />
          <text x={x + 8} y={y + 62} fontSize="7" fill="#9ca3af">Tests: {10 + i * 5}</text>
          <text x={x + 8} y={y + 73} fontSize="6" fill="#6b7280">Pass rate: {85 + Math.random() * 15}%</text>
        </g>
      );
    })}
  </svg>
);

const CliniSightThumbnail = ({ isHovering }: { isHovering?: boolean }) => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <rect width="400" height="240" fill="#0a0e27" />

    {/* Healthcare audit panel */}
    <rect x="12" y="12" width="376" height="216" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" rx="4" />

    {/* Main audit display */}
    <rect x="20" y="20" width="360" height="45" fill="#064e3b" opacity="0.3" rx="3" />
    <rect x="28" y="28" width="80" height="12" fill="#10b981" opacity="0.7" />
    <text x="28" y="78" fontSize="9" fill="#9ca3af" fontWeight="bold">Healthcare UI Audit Results</text>

    {/* Accessibility issues list */}
    <g className={isHovering ? 'opacity-80' : 'opacity-100'}>
      <rect x="20" y="90" width="360" height="35" fill="#0c1840" stroke="#10b981" strokeWidth="1" opacity="0.4" rx="2" />
      <circle cx="32" cy="103" r="3" fill="#ef4444" />
      <text x="42" y="108" fontSize="8" fill="#9ca3af">Contrast ratio below WCAG AA</text>
      <text x="42" y="120" fontSize="7" fill="#6b7280">Component: Form Input Label</text>
    </g>

    <rect x="20" y="130" width="360" height="35" fill="#0c1840" stroke="#10b981" strokeWidth="1" opacity="0.4" rx="2" />
    <circle cx="32" cy="143" r="3" fill="#fbbf24" />
    <text x="42" y="148" fontSize="8" fill="#9ca3af">Missing alt text on images</text>
    <text x="42" y="160" fontSize="7" fill="#6b7280">3 instances found in Patient Portal</text>

    {/* Confidence score */}
    <text x="320" y="195" fontSize="10" fill="#10b981" fontWeight="bold">92%</text>
    <text x="300" y="208" fontSize="7" fill="#6b7280">Audit Confidence</text>
  </svg>
);

const RevFlowThumbnail = ({ isHovering }: { isHovering?: boolean }) => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <rect width="400" height="240" fill="#0a0e27" />

    {/* Revenue cycle dashboard */}
    <rect x="12" y="12" width="376" height="216" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3" rx="4" />

    {/* Claim pipeline */}
    <rect x="20" y="25" width="360" height="25" fill="#1e1b4b" stroke="#f97316" strokeWidth="1" opacity="0.4" rx="2" />
    <text x="30" y="42" fontSize="10" fill="#9ca3af" fontWeight="bold">Claim Pipeline Status</text>

    {/* Pipeline stages */}
    <g className={isHovering ? 'opacity-80' : 'opacity-100'}>
      <rect x="25" y="65" width="65" height="50" fill="#7c2d12" opacity="0.5" rx="2" />
      <text x="35" y="82" fontSize="8" fill="#fbbf24">Submitted</text>
      <text x="35" y="105" fontSize="14" fill="#f97316" fontWeight="bold">248</text>

      <rect x="100" y="65" width="65" height="50" fill="#7c2d12" opacity="0.5" rx="2" />
      <text x="110" y="82" fontSize="8" fill="#fbbf24">In Review</text>
      <text x="117" y="105" fontSize="14" fill="#f97316" fontWeight="bold">67</text>

      <rect x="175" y="65" width="65" height="50" fill="#7c2d12" opacity="0.5" rx="2" />
      <text x="185" y="82" fontSize="8" fill="#fbbf24">Approved</text>
      <text x="192" y="105" fontSize="14" fill="#10b981" fontWeight="bold">1,203</text>

      <rect x="250" y="65" width="105" height="50" fill="#7c2d12" opacity="0.5" rx="2" />
      <text x="260" y="82" fontSize="8" fill="#fbbf24">Denied/Appeal</text>
      <text x="280" y="105" fontSize="14" fill="#ef4444" fontWeight="bold">45</text>
    </g>

    {/* Denial rate indicator */}
    <rect x="20" y="130" width="360" height="45" fill="#0c1840" stroke="#f97316" strokeWidth="1" opacity="0.3" rx="2" />
    <text x="30" y="150" fontSize="9" fill="#9ca3af">Denial Rate This Month</text>
    <rect x="30" y="160" width="200" height="8" fill="#1e1b4b" rx="2" />
    <rect x="30" y="160" width="120" height="8" fill="#f97316" rx="2" />
    <text x="240" y="167" fontSize="8" fill="#f97316">8.3%</text>
  </svg>
);

const CareNeuThumbnail = ({ isHovering }: { isHovering?: boolean }) => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <rect width="400" height="240" fill="#0a0e27" />

    {/* Care coordination interface */}
    <rect x="12" y="12" width="376" height="216" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" rx="4" />

    {/* Patient care thread */}
    <text x="30" y="35" fontSize="10" fill="#9ca3af" fontWeight="bold">Active Care Plans</text>

    <g className={isHovering ? 'opacity-80' : 'opacity-100'}>
      {/* Care item 1 */}
      <circle cx="35" cy="60" r="4" fill="#10b981" opacity="0.7" />
      <line x1="39" y1="60" x2="110" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
      <text x="120" y="65" fontSize="8" fill="#9ca3af">Post-op Recovery Plan</text>
      <text x="120" y="78" fontSize="7" fill="#6b7280">Dr. Sarah Chen • 3 days active</text>

      {/* Care item 2 */}
      <circle cx="35" cy="100" r="4" fill="#fbbf24" opacity="0.7" />
      <line x1="39" y1="100" x2="110" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
      <text x="120" y="105" fontSize="8" fill="#9ca3af">Medication Management</text>
      <text x="120" y="118" fontSize="7" fill="#6b7280">Patient follow-up pending</text>

      {/* Care item 3 */}
      <circle cx="35" cy="140" r="4" fill="#3b82f6" opacity="0.7" />
      <line x1="39" y1="140" x2="110" y2="140" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
      <text x="120" y="145" fontSize="8" fill="#9ca3af">Care Team Coordination</text>
      <text x="120" y="158" fontSize="7" fill="#6b7280">4 team members assigned</text>

      {/* Care item 4 */}
      <circle cx="35" cy="180" r="4" fill="#10b981" opacity="0.7" />
      <line x1="39" y1="180" x2="110" y2="180" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
      <text x="120" y="185" fontSize="8" fill="#9ca3af">Lab Results Monitoring</text>
      <text x="120" y="198" fontSize="7" fill="#6b7280">Next check: Oct 6</text>
    </g>
  </svg>
);

const EnterpriseThumbnail = ({ isHovering }: { isHovering?: boolean }) => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <rect width="400" height="240" fill="#0a0e27" />

    {/* Design system / multi-product layout */}
    <rect x="12" y="12" width="376" height="216" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3" rx="4" />

    {/* Component library grid */}
    <text x="30" y="35" fontSize="10" fill="#9ca3af" fontWeight="bold">Design System Components</text>

    <g className={isHovering ? 'opacity-80' : 'opacity-100'}>
      {/* Component card 1 */}
      <rect x="20" y="50" width="80" height="70" fill="#1f2937" stroke="#6b7280" strokeWidth="1" opacity="0.5" rx="2" />
      <rect x="27" y="57" width="66" height="8" fill="#6b7280" opacity="0.6" rx="1" />
      <circle cx="30" cy="75" r="2" fill="#9ca3af" />
      <circle cx="40" cy="75" r="2" fill="#9ca3af" />
      <circle cx="50" cy="75" r="2" fill="#9ca3af" />
      <text x="25" y="100" fontSize="7" fill="#9ca3af">Buttons</text>

      {/* Component card 2 */}
      <rect x="110" y="50" width="80" height="70" fill="#1f2937" stroke="#6b7280" strokeWidth="1" opacity="0.5" rx="2" />
      <rect x="117" y="57" width="66" height="8" fill="#6b7280" opacity="0.6" rx="1" />
      <line x1="117" y1="70" x2="183" y2="70" stroke="#6b7280" strokeWidth="1" opacity="0.4" />
      <line x1="117" y1="78" x2="183" y2="78" stroke="#6b7280" strokeWidth="1" opacity="0.4" />
      <line x1="117" y1="86" x2="170" y2="86" stroke="#6b7280" strokeWidth="1" opacity="0.4" />
      <text x="125" y="100" fontSize="7" fill="#9ca3af">Forms</text>

      {/* Component card 3 */}
      <rect x="200" y="50" width="80" height="70" fill="#1f2937" stroke="#6b7280" strokeWidth="1" opacity="0.5" rx="2" />
      <rect x="207" y="57" width="66" height="8" fill="#6b7280" opacity="0.6" rx="1" />
      <rect x="210" y="70" width="15" height="15" fill="#3b82f6" opacity="0.6" rx="2" />
      <rect x="232" y="70" width="15" height="15" fill="#10b981" opacity="0.6" rx="2" />
      <rect x="254" y="70" width="15" height="15" fill="#f97316" opacity="0.6" rx="2" />
      <text x="215" y="100" fontSize="7" fill="#9ca3af">Colors</text>

      {/* Component card 4 */}
      <rect x="290" y="50" width="80" height="70" fill="#1f2937" stroke="#6b7280" strokeWidth="1" opacity="0.5" rx="2" />
      <rect x="297" y="57" width="66" height="8" fill="#6b7280" opacity="0.6" rx="1" />
      <circle cx="310" cy="80" r="8" fill="#6b7280" opacity="0.4" />
      <circle cx="330" cy="80" r="8" fill="#6b7280" opacity="0.4" />
      <circle cx="350" cy="80" r="8" fill="#6b7280" opacity="0.4" />
      <text x="305" y="100" fontSize="7" fill="#9ca3af">Tokens</text>
    </g>

    {/* Legend */}
    <text x="30" y="160" fontSize="8" fill="#6b7280">200+ components</text>
    <text x="30" y="175" fontSize="8" fill="#6b7280">Figma + production</text>
    <text x="30" y="190" fontSize="8" fill="#6b7280">Responsive, accessible</text>
    <text x="280" y="175" fontSize="9" fill="#9ca3af" fontWeight="bold">Production</text>
    <text x="280" y="190" fontSize="9" fill="#9ca3af" fontWeight="bold">Scale</text>
  </svg>
);

export const ProjectCardThumbnail: React.FC<ProjectCardThumbnailProps> = ({ projectId, isHovering = false }) => {
  const getThumbnail = () => {
    // Check for real project images first
    if (projectsWithRealImages[projectId]) {
      return <RealProjectImage projectId={projectId} isHovering={isHovering} />;
    }

    // Fall back to semantic SVG thumbnails
    switch (projectId) {
      case 'bizpilot-ai':
        return <BizPilotThumbnail isHovering={isHovering} />;
      case 'testguard':
        return <TestGuardThumbnail isHovering={isHovering} />;
      case 'clinisight':
        return <CliniSightThumbnail isHovering={isHovering} />;
      case 'revflow-ai':
        return <RevFlowThumbnail isHovering={isHovering} />;
      case 'care-neu':
        return <CareNeuThumbnail isHovering={isHovering} />;
      case 'enterprise':
        return <EnterpriseThumbnail isHovering={isHovering} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full"
    >
      {getThumbnail()}
    </motion.div>
  );
};
