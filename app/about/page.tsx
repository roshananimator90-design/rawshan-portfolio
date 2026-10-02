import { Button } from '@/components';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-dark-bg min-h-screen">

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-max max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">About Rawshan Kumar</h1>

          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              I'm a Senior Product Designer specializing in AI-native product design, agentic UX, and enterprise SaaS. Over 10+ years, I've designed products for finance, healthcare, and technology companies, helping teams navigate complex technical problems with human-centered design.
            </p>

            <p>
              My core belief: <span className="gradient-text">AI should augment human capability, not replace human judgment.</span> This principle shapes how I approach every product I design.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Expertise</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong>AI Product Design:</strong> From copilots to autonomous agents to human-in-the-loop workflows</li>
              <li><strong>Enterprise SaaS:</strong> Complex workflows, design systems, multi-user coordination</li>
              <li><strong>Healthcare:</strong> Regulated environments, patient safety, provider UX, care coordination</li>
              <li><strong>Design Systems:</strong> Building scalable, intentional design systems for large teams</li>
              <li><strong>Product Strategy:</strong> Research, validation, roadmapping, and go-to-market thinking</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6">
                <h3 className="font-bold mb-2">Human-Centered</h3>
                <p className="text-sm text-white/70">Every design decision starts with understanding real user problems, not technology trends.</p>
              </div>
              <div className="glass-panel p-6">
                <h3 className="font-bold mb-2">Intentional</h3>
                <p className="text-sm text-white/70">No decorative UI. Every interaction, animation, and component serves a purpose.</p>
              </div>
              <div className="glass-panel p-6">
                <h3 className="font-bold mb-2">Accountable</h3>
                <p className="text-sm text-white/70">I back up my decisions with research, evidence, and willingness to iterate based on feedback.</p>
              </div>
              <div className="glass-panel p-6">
                <h3 className="font-bold mb-2">Collaborative</h3>
                <p className="text-sm text-white/70">Design is a team sport. I work closely with engineers, product, and users to ship great products.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Currently</h2>
            <p>
              Building AI-native products and helping teams understand how to design for intelligent systems. Open to speaking engagements, design critiques, and collaborations on cutting-edge AI product work.
            </p>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">Get in touch</Button>
            </Link>
            <Link href="/resume">
              <Button variant="secondary" size="lg">Download Resume</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
