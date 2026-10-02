import { Hero, ProjectGrid } from '@/components';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="bg-dark-bg min-h-screen">

      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <section className="py-20 px-4 md:px-8">
        <div className="container-max">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-white/60 max-w-xl">
                Real products. Real problems. AI-powered solutions.
              </p>
            </div>
            <Link href="/work" className="flex items-center gap-2 text-electric-blue hover:text-electric-bright transition-colors">
              <span className="font-semibold">View all</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      {/* Stats/Expertise Section */}
      <section className="py-20 px-4 md:px-8 border-t border-white/10">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">6+</div>
              <p className="text-white/60">Major Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <p className="text-white/60">Industries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <p className="text-white/60">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <p className="text-white/60">AI-Native Ideas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 border-t border-white/10">
        <div className="container-max">
          <div className="glass-panel p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's talk about AI-native product design
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Have a complex AI product problem? Interested in discussing agentic UX, human-in-the-loop workflows, or building enterprise AI products?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary">Get in touch</button>
              </Link>
              <button className="btn-secondary">Ask my AI</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
