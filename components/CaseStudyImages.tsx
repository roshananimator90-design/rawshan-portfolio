'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Image as ImageIcon, Grid3x3 } from 'lucide-react';

/**
 * Hero Product Screen - Large showcase for main product screen
 */
interface HeroScreenProps {
  title: string;
  description: string;
  placeholder?: string;
  imageSrc?: string;
  variant?: 'desktop' | 'mobile';
}

export const HeroScreen: React.FC<HeroScreenProps> = ({
  title,
  description,
  placeholder = 'BizPilot Dashboard',
  imageSrc,
  variant = 'desktop',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>

      <div
        className={clsx(
          'relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-electric-blue/5 to-violet-accent/5',
          'hover:border-electric-blue/30 transition-all duration-300',
          variant === 'mobile' ? 'max-w-sm mx-auto' : ''
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className={clsx(
            'flex flex-col items-center justify-center',
            'bg-gradient-to-br from-dark-surface to-black/50',
            variant === 'mobile' ? 'aspect-[9/16] min-h-[500px]' : 'aspect-video min-h-[400px]'
          )}>
            <div className="text-center px-6">
              <ImageIcon size={64} className="text-white/20 mx-auto mb-4" />
              <p className="text-sm text-white/40 font-mono mb-1">PLACEHOLDER IMAGE</p>
              <p className="text-white/60 font-medium">{placeholder}</p>
              <p className="text-xs text-white/40 mt-3">
                {variant === 'mobile' ? '(Mobile: 9:16 aspect)' : '(Desktop: 16:9 aspect)'}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/**
 * UI Screens Gallery - Multiple key screens in responsive grid
 */
interface UIScreenItem {
  title: string;
  description: string;
  aspect?: 'desktop' | 'mobile' | 'square';
  imageSrc?: string;
  context?: string;
}

export const UIScreensGallery: React.FC<{ screens: UIScreenItem[]; title: string }> = ({
  screens,
  title,
}) => {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screens.map((screen, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Image Area */}
            <div
              className={clsx(
                'relative rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-electric-blue/5 to-violet-accent/5',
                'hover:border-electric-blue/30 transition-all duration-300',
                screen.aspect === 'mobile' ? 'aspect-[9/16]' : screen.aspect === 'square' ? 'aspect-square' : 'aspect-video'
              )}
            >
              {screen.imageSrc ? (
                <img
                  src={screen.imageSrc}
                  alt={screen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-dark-surface/50">
                  <ImageIcon size={48} className="text-white/20 mb-3" />
                  <p className="text-xs text-white/40 font-mono">PLACEHOLDER</p>
                  <p className="text-white/50 text-xs text-center px-3 mt-2">{screen.title}</p>
                </div>
              )}
            </div>

            {/* Metadata */}
            <div className="mt-3">
              <h4 className="font-semibold text-white text-sm mb-1">{screen.title}</h4>
              <p className="text-white/60 text-xs mb-2">{screen.description}</p>
              {screen.context && (
                <p className="text-white/40 text-xs italic">Context: {screen.context}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * Flow Diagram Placeholder - UX flows, user journeys, process diagrams
 */
interface FlowDiagramProps {
  title: string;
  description: string;
  flowType: 'user-flow' | 'process-flow' | 'wireflow' | 'journey';
  imageSrc?: string;
  placeholder?: string;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({
  title,
  description,
  flowType,
  imageSrc,
  placeholder = 'Flow Diagram',
}) => {
  const flowTypeLabels = {
    'user-flow': 'User Flow Diagram',
    'process-flow': 'Process Flow',
    'wireflow': 'Wireflow (Wireframe + Flow)',
    'journey': 'Journey Map Flow',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-2">{description}</p>
        <p className="text-xs text-electric-blue/70 font-mono">Type: {flowTypeLabels[flowType]}</p>
      </div>

      <div className="rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-dark-surface to-black/30">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain min-h-[400px]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-12 min-h-[400px] bg-dark-surface/50">
            <Grid3x3 size={56} className="text-white/20 mb-4" />
            <p className="text-sm text-white/40 font-mono mb-2">PLACEHOLDER FLOW DIAGRAM</p>
            <p className="text-white/60 text-center mb-2">{placeholder}</p>
            <p className="text-xs text-white/40">Upload as: Figma screenshot, Miro export, or PNG diagram</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Architecture Diagram - System, data flow, agent architecture
 */
interface ArchitectureDiagramProps {
  title: string;
  description: string;
  diagramType: 'data-flow' | 'system-architecture' | 'agent-flow' | 'integration';
  imageSrc?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  title,
  description,
  diagramType,
  imageSrc,
}) => {
  const diagramLabels = {
    'data-flow': 'Data Flow Diagram',
    'system-architecture': 'System Architecture',
    'agent-flow': 'Agent Execution Flow',
    'integration': 'Integration Architecture',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-2">{description}</p>
        <p className="text-xs text-violet-accent/70 font-mono">Type: {diagramLabels[diagramType]}</p>
      </div>

      <div className="rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-dark-surface to-black/30">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain min-h-[350px]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-12 min-h-[350px] bg-dark-surface/50">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded border border-electric-blue/30 flex items-center justify-center text-white/40">
                  →
                </div>
                <div className="w-12 h-12 rounded border border-violet-accent/30 flex items-center justify-center text-white/40">
                  →
                </div>
                <div className="w-12 h-12 rounded border border-electric-bright/30 flex items-center justify-center text-white/40">
                  →
                </div>
              </div>
              <p className="text-sm text-white/40 font-mono mb-2">PLACEHOLDER ARCHITECTURE DIAGRAM</p>
              <p className="text-white/60">Upload system/data flow visualization</p>
              <p className="text-xs text-white/40 mt-3">Supports: Lucidchart, Draw.io, Figma, or PNG</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Before/After Comparison - Side-by-side improvements
 */
interface BeforeAfterProps {
  title: string;
  description: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  explanation?: string;
}

export const BeforeAfterComparison: React.FC<BeforeAfterProps> = ({
  title,
  description,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeImage,
  afterImage,
  explanation,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Before */}
        <div>
          <p className="text-sm font-semibold text-white/80 mb-3">{beforeLabel}</p>
          <div className="rounded-lg overflow-hidden border border-white/10 bg-dark-surface/50">
            {beforeImage ? (
              <img src={beforeImage} alt={beforeLabel} className="w-full h-auto object-cover aspect-video" />
            ) : (
              <div className="flex flex-col items-center justify-center aspect-video">
                <ImageIcon size={40} className="text-white/20 mb-2" />
                <p className="text-xs text-white/40">Before State</p>
              </div>
            )}
          </div>
        </div>

        {/* After */}
        <div>
          <p className="text-sm font-semibold text-electric-blue/90 mb-3">{afterLabel}</p>
          <div className="rounded-lg overflow-hidden border border-electric-blue/30 bg-gradient-to-br from-electric-blue/10 to-violet-accent/5">
            {afterImage ? (
              <img src={afterImage} alt={afterLabel} className="w-full h-auto object-cover aspect-video" />
            ) : (
              <div className="flex flex-col items-center justify-center aspect-video">
                <ImageIcon size={40} className="text-electric-blue/30 mb-2" />
                <p className="text-xs text-electric-blue/60">After State</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {explanation && (
        <div className="bg-gradient-to-r from-electric-blue/5 to-violet-accent/5 border border-white/10 rounded-lg p-4">
          <p className="text-white/80 text-sm">{explanation}</p>
        </div>
      )}
    </motion.div>
  );
};

/**
 * Video/Demo Placeholder - For embedded video or interactive demo
 */
interface VideoDemoProps {
  title: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
  duration?: string;
  demoType?: 'video' | 'interactive-figma' | 'live-demo';
}

export const VideoDemo: React.FC<VideoDemoProps> = ({
  title,
  description,
  videoUrl,
  thumbnail,
  duration,
  demoType = 'video',
}) => {
  const demoLabels = {
    'video': 'Video Demo',
    'interactive-figma': 'Interactive Figma Prototype',
    'live-demo': 'Live Demo Link',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>

      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-dark-surface">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            className="w-full aspect-video"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <div className="flex flex-col items-center justify-center aspect-video bg-gradient-to-br from-dark-surface to-black/50 relative">
            {thumbnail ? (
              <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
            ) : null}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-8 border-l-white/60 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
              </div>
              <p className="text-sm text-white/40 font-mono mb-2">PLACEHOLDER {demoLabels[demoType].toUpperCase()}</p>
              <p className="text-white/60 text-sm">{demoType === 'video' ? 'Video Demo' : demoType === 'interactive-figma' ? 'Interactive Prototype' : 'Live Demo'}</p>
              {duration && <p className="text-xs text-white/40 mt-2">Duration: {duration}</p>}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Caption Box - Explain design decisions, rationale, key insights
 */
interface CaptionBoxProps {
  children: React.ReactNode;
  variant?: 'insight' | 'decision' | 'note' | 'learning';
}

export const CaptionBox: React.FC<CaptionBoxProps> = ({ children, variant = 'insight' }) => {
  const variantStyles = {
    insight: 'bg-gradient-to-r from-electric-blue/10 to-cyan-500/10 border-electric-blue/30',
    decision: 'bg-gradient-to-r from-violet-accent/10 to-purple-500/10 border-violet-accent/30',
    note: 'bg-gradient-to-r from-white/5 to-white/10 border-white/20',
    learning: 'bg-gradient-to-r from-electric-bright/10 to-green-500/10 border-electric-bright/30',
  };

  return (
    <div className={clsx('border rounded-lg p-4 my-6', variantStyles[variant])}>
      <div className="text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
  );
};
