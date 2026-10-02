'use client';

import { categories } from '@/lib/projects';
import clsx from 'clsx';

interface CategoryFilterProps {
  activeCategory: string;
  onChange: (category: string) => void;
}

export const CategoryFilter = ({ activeCategory, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={clsx(
            'px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm',
            activeCategory === cat
              ? 'bg-gradient-to-r from-electric-blue to-violet-accent text-white shadow-glow-blue'
              : 'glass-panel-sm text-white/70 hover:text-white hover:border-electric-blue/50'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
