'use client';

import { Button } from '@/components';
import { Mail, Code, Send, Zap } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-dark-bg min-h-screen">
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-max max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h1>
          <p className="text-lg text-white/60 mb-16">
            Have a question about AI product design, want to discuss a project, or just want to connect? I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-electric-blue uppercase mb-3">Email</h3>
                <a href="mailto:contact@rawshankumar.design" className="flex items-center gap-3 text-white hover:text-electric-blue transition-colors group">
                  <Mail size={20} className="text-electric-blue" />
                  <span>contact@rawshankumar.design</span>
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-electric-blue uppercase mb-3">Social</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-electric-blue transition-colors">
                    <Send size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-electric-blue transition-colors">
                    <Code size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-electric-blue transition-colors">
                    <Zap size={20} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-electric-blue uppercase mb-3">Based In</h3>
                <p className="text-white/70">Available for remote work and collaborations globally.</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                  placeholder="Tell me more..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
