'use client';

import { Navbar, Footer } from '@/components';
import { Project } from '@/lib/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyLayoutProps {
  project: Project;
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const CaseStudyLayout = ({
  project,
  sections,
}: CaseStudyLayoutProps) => {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 px-4 md:px-8">
          <div className="container-max">
            <Link href="/work" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft size={18} />
              <span>Back to work</span>
            </Link>

            <div className="mb-8">
              <span className="text-sm font-semibold text-electric-blue uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
                <p className="text-white">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Industry</h3>
                <p className="text-white">{project.industry.join(', ')}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Year</h3>
                <p className="text-white">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="px-4 md:px-8">
          <div className="container-max">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="py-20 border-t border-white/10 first:border-t-0"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {String(index + 1).padStart(2, '0')} — {section.title}
                </h2>

                {/* Check if content is mostly visual (components) or text */}
                {typeof section.content === 'string' ? (
                  <div className="max-w-3xl text-white/80 leading-relaxed">
                    {section.content}
                  </div>
                ) : (
                  <div className="w-full">
                    {/* Visual sections can span full width */}
                    <div className="text-white/80 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
