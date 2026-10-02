'use client';

import Link from 'next/link';
import { Mail, Code, Send, Zap } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark-bg">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">Rawshan Kumar</h3>
            <p className="text-white/60 text-sm">
              Designing AI-native products where humans stay in control.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/work" className="text-white/60 hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/ai-lab" className="text-white/60 hover:text-white transition-colors">AI Lab</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resume" className="text-white/60 hover:text-white transition-colors">Resume</Link></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Design System</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Code size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Zap size={20} />
              </a>
              <a href="mailto:contact@rawshankumar.design" className="text-white/60 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/50 text-sm">
              © {year} Rawshan Kumar. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Designed & built with <span className="text-electric-blue">care</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
