'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { CommandPalette } from './CommandPalette';
import clsx from 'clsx';

interface NavbarProps {
  onAskAI?: () => void;
}

export const Navbar = ({ onAskAI }: NavbarProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/ai-lab', label: 'AI Lab' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="glass-panel-sm mx-2 mt-2 md:mx-4">
        <div className="container-max flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-violet-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
              RK
            </div>
            <span className="hidden sm:inline gradient-text">Rawshan</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <CommandPalette />
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:inline-block gap-2"
              onClick={onAskAI}
            >
              <Sparkles size={16} />
              <span>Ask AI</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel-sm mx-2 mt-2">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="primary"
              size="md"
              className="w-full gap-2 mt-4"
              onClick={() => {
                onAskAI?.();
                setIsOpen(false);
              }}
            >
              <Sparkles size={16} />
              <span>Ask AI</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
