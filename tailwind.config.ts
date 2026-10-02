import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark theme
        'dark-bg': '#0F0F1F',
        'dark-surface': '#1A1A2E',
        'dark-elevated': '#252541',
        // Electric blue
        'electric-blue': '#0066FF',
        'electric-bright': '#00D9FF',
        // Violet accent
        'violet-accent': '#A855F7',
        'violet-dark': '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 217, 255, 0.2)',
        'glow-violet': '0 0 30px rgba(168, 85, 247, 0.2)',
        'depth-1': '0 1px 3px rgba(0, 0, 0, 0.5)',
        'depth-2': '0 4px 12px rgba(0, 0, 0, 0.6)',
        'depth-3': '0 12px 24px rgba(0, 0, 0, 0.7)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%': { textShadow: '0 0 10px rgba(0, 102, 255, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(0, 102, 255, 0.6)' },
          '100%': { textShadow: '0 0 10px rgba(0, 102, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container-max': {
          '@apply max-w-7xl mx-auto px-4 md:px-8': {},
        },
        '.glass-panel': {
          '@apply backdrop-blur-md bg-white/10 border border-white/20 rounded-xl': {},
        },
        '.glass-panel-sm': {
          '@apply backdrop-blur-md bg-white/5 border border-white/10 rounded-lg': {},
        },
        '.gradient-text': {
          '@apply bg-gradient-to-r from-electric-blue to-violet-accent bg-clip-text text-transparent': {},
        },
        '.glow-text': {
          '@apply text-white drop-shadow-[0_0_10px_rgba(0,102,255,0.3)]': {},
        },
        '.btn-primary': {
          '@apply px-6 py-3 bg-gradient-to-r from-electric-blue to-violet-accent text-white font-semibold rounded-lg hover:shadow-glow-blue transition-all duration-300 active:scale-95': {},
        },
        '.btn-secondary': {
          '@apply px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 active:scale-95': {},
        },
        '.btn-ghost': {
          '@apply px-4 py-2 text-white/80 hover:text-white transition-colors duration-300': {},
        },
        '.card-hover': {
          '@apply transition-all duration-300 hover:scale-105 hover:shadow-depth-3': {},
        },
      });
    }),
  ],
};

export default config;
