/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: 'rgb(var(--c-void) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-surface2) / <alpha-value>)',
        cyan: {
          DEFAULT: 'rgb(var(--c-cyan) / <alpha-value>)',
          dim: 'rgb(var(--c-cyan-dim) / <alpha-value>)',
        },
        magenta: {
          DEFAULT: 'rgb(var(--c-magenta) / <alpha-value>)',
          dim: 'rgb(var(--c-magenta-dim) / <alpha-value>)',
        },
        verified: 'rgb(var(--c-verified) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgb(var(--c-cyan) / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-cyan) / 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-cell': '40px 40px',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        scanline: 'scanline 3.5s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
