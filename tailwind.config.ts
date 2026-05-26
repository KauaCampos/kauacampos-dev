import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070f',
        surface: '#0b1220',
      },
      boxShadow: {
        glow: '0 10px 60px rgba(56, 189, 248, 0.2)',
      },
      backgroundImage: {
        'radial-premium': 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.2), transparent 35%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.2), transparent 30%), radial-gradient(circle at 50% 80%, rgba(16,185,129,0.15), transparent 40%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
