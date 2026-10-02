import { Button } from '@/components';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="bg-dark-bg min-h-screen">

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-max max-w-4xl">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl md:text-6xl font-bold">Resume</h1>
            <Button variant="primary" size="lg" className="gap-2">
              <Download size={18} />
              Download PDF
            </Button>
          </div>

          {/* Experience */}
          <section className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Senior Product Designer - AI Product Design</h3>
                <p className="text-electric-blue font-semibold">Independent / Consulting</p>
                <p className="text-white/60 mb-3">2024 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>Designing AI-native products, agentic UX, and human-in-the-loop workflows</li>
                  <li>Building portfolio projects demonstrating AI product design expertise</li>
                  <li>Advising teams on AI/UX strategy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Senior Product Designer</h3>
                <p className="text-electric-blue font-semibold">Enterprise SaaS / Healthcare</p>
                <p className="text-white/60 mb-3">2020 - 2024</p>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>Designed end-to-end products for finance and healthcare verticals</li>
                  <li>Built and scaled design systems across 50+ designers</li>
                  <li>Led UX research, validation, and product strategy initiatives</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Product Designer</h3>
                <p className="text-electric-blue font-semibold">Multiple Startups / Growth Stage</p>
                <p className="text-white/60 mb-3">2015 - 2020</p>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>Owned product design across platform and web applications</li>
                  <li>Conducted user research and validated design solutions</li>
                  <li>Collaborated with engineering and product to ship features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16 pb-16 border-b border-white/10">
            <h2 className="text-3xl font-bold mb-8">Core Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-3 text-electric-blue">Design & UX</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Product Design & Strategy</li>
                  <li>AI / Agentic UX Design</li>
                  <li>Design Systems Architecture</li>
                  <li>User Research & Validation</li>
                  <li>Interaction Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-electric-blue">Tools & Technology</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Figma, Figma MCP</li>
                  <li>Prototyping (Framer, Protopie)</li>
                  <li>Frontend (React, Next.js, Tailwind)</li>
                  <li>AI Tools (Claude, etc.)</li>
                  <li>Analytics & Metrics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-electric-blue">Industry Knowledge</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Enterprise SaaS</li>
                  <li>Healthcare & Compliance</li>
                  <li>Finance & FinTech</li>
                  <li>AI & Machine Learning</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-electric-blue">Leadership</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Design Systems Leadership</li>
                  <li>Team Mentorship</li>
                  <li>Cross-functional Collaboration</li>
                  <li>Stakeholder Management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div>
              <h3 className="text-xl font-bold">Bachelor's Degree - Design & Technology</h3>
              <p className="text-electric-blue font-semibold">University</p>
              <p className="text-white/60">Graduated: Year</p>
            </div>
          </section>

          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">Get in touch</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary" size="lg">Back home</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
