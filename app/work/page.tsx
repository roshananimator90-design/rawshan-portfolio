'use client';

import { useState, useMemo } from 'react';
import { CategoryFilter, ProjectGrid } from '@/components';
import { projects } from '@/lib/projects';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="bg-dark-bg min-h-screen">

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-max">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">My Work</h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Designing AI-native products, enterprise SaaS, and healthcare platforms.
              From concept to production. Human-centered. AI-powered.
            </p>
          </div>

          {/* Filters */}
          <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />

          {/* Results Info */}
          <div className="mb-8">
            <p className="text-white/60 text-sm">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} />
          ) : (
            <div className="text-center py-20">
              <p className="text-white/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
