import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import clsx from 'clsx';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  gradient?: string;
  isAINative?: boolean;
}

const getProjectIcon = (id: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    'bizpilot-ai': (
      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        <path d="M10 12l2 2 4-4" />
      </svg>
    ),
    'testguard': (
      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
    'clinisight': (
      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    'revflow-ai': (
      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
        <path d="M12 7v8l5 3" />
      </svg>
    ),
    'care-neu': (
      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        <path d="M12 9v4M10 11h4" />
      </svg>
    ),
    'enterprise': (
      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
  };
  return icons[id] || null;
};

export const ProjectCard = ({
  id,
  title,
  description,
  category,
  tags,
  image,
  gradient = 'from-electric-blue/20 to-violet-accent/20',
  isAINative = true,
}: ProjectCardProps) => {
  const icon = getProjectIcon(id);

  return (
    <Link href={`/work/${id}`}>
      <div className="group glass-panel overflow-hidden hover:border-electric-blue/50 transition-all duration-300 h-full cursor-pointer">
        {/* Image/Gradient Area */}
        <div className={clsx(
          'h-40 bg-gradient-to-br',
          gradient,
          'relative overflow-hidden flex items-center justify-center'
        )}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark-surface to-transparent" />
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )}
          {!image && icon && (
            <div className="text-white/40 group-hover:text-white/60 transition-colors transform group-hover:scale-110 duration-300">
              {icon}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3 gap-2">
            <span className="text-xs font-semibold text-electric-blue uppercase tracking-wider">
              {category}
            </span>
            {isAINative && (
              <span className="flex items-center gap-1 px-2 py-1 text-xs bg-electric-blue/20 text-electric-blue rounded-full border border-electric-blue/30">
                <Zap size={12} />
                AI-Native
              </span>
            )}
            <ArrowRight size={16} className="text-white/40 group-hover:text-electric-blue group-hover:translate-x-1 transition-all ml-auto" />
          </div>

          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-electric-blue group-hover:to-violet-accent group-hover:bg-clip-text transition-all">
            {title}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded border border-white/10 group-hover:border-electric-blue/50 transition-colors"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 text-xs text-white/50">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
