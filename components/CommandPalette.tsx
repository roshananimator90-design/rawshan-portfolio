'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { search, SearchResult } from '@/lib/search';
import clsx from 'clsx';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Listen for Cmd/Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
        if (!isOpen) {
          setQuery('');
          setSelectedIndex(0);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Search as user types
  useEffect(() => {
    if (query.trim()) {
      const searchResults = search(query);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    },
    [results, selectedIndex]
  );

  const handleSelect = (result: SearchResult) => {
    router.push(result.url);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* Command Palette Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
        title="Press Cmd+K to search"
      >
        <Search size={16} className="text-white/50" />
        <span className="text-sm text-white/50">Search</span>
        <span className="ml-2 text-xs text-white/30 font-mono">⌘K</span>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Palette */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50"
          >
            <div className="bg-dark-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
                <Search size={20} className="text-electric-blue flex-shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search projects, topics, skills..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-lg"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X size={18} className="text-white/60" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <ul className="py-2">
                    {results.map((result, index) => (
                      <motion.li
                        key={result.id}
                        onClick={() => handleSelect(result)}
                        className={clsx(
                          'px-4 py-3 cursor-pointer transition-colors',
                          index === selectedIndex
                            ? 'bg-electric-blue/20 border-l-2 border-electric-blue'
                            : 'hover:bg-white/5'
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-white font-semibold truncate">
                                {result.title}
                              </h3>
                              <span
                                className={clsx(
                                  'text-xs px-2 py-1 rounded flex-shrink-0',
                                  result.type === 'project'
                                    ? 'bg-electric-blue/20 text-electric-blue'
                                    : result.type === 'case-study'
                                    ? 'bg-violet-accent/20 text-violet-accent'
                                    : result.type === 'topic'
                                    ? 'bg-electric-bright/20 text-electric-bright'
                                    : 'bg-white/10 text-white/70'
                                )}
                              >
                                {result.type}
                              </span>
                            </div>
                            <p className="text-white/60 text-sm mt-1 truncate">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                ) : query ? (
                  <div className="px-4 py-8 text-center text-white/50">
                    No results found for "{query}"
                  </div>
                ) : (
                  <div className="px-4 py-12 text-center">
                    <div className="flex justify-center mb-4">
                      <Zap className="text-electric-blue/50" size={32} />
                    </div>
                    <p className="text-white/60 mb-2">Quick search</p>
                    <p className="text-white/40 text-sm">
                      Search projects, case studies, topics, and skills
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {results.length > 0 && (
                <div className="px-4 py-3 border-t border-white/5 bg-black/50 text-xs text-white/40 flex items-center justify-between">
                  <span>
                    {selectedIndex + 1} of {results.length}
                  </span>
                  <div className="flex gap-4 text-white/50">
                    <span>↑↓ Navigate</span>
                    <span>Enter Select</span>
                    <span>Esc Close</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
