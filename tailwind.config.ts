import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matte: {
          950: '#040507',
          900: '#08090d',
          850: '#0d0e14',
          800: '#12141c',
          750: '#171924',
          700: '#1c1f2d',
          600: '#282c3f',
        },
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f8',
          500: '#0e8ce9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074b84',
          900: '#0c3f6e',
          950: '#082849',
        },
        dark: {
          950: '#050608',
          900: '#08090c',
          850: '#0c0e14',
          800: '#11141d',
          750: '#161925',
          700: '#1b1f2e',
          600: '#262b3f',
          500: '#333954',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      fontFamily: {
        title: ['var(--font-armadira)', 'var(--font-space-grotesk)', 'sans-serif'],
        armadira: ['var(--font-armadira)', 'sans-serif'],
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        goody: ['var(--font-goody)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-subtle': 'floatSubtle 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'aura': 'auraGlow 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 25px rgba(14, 140, 233, 0.2)' },
          '100%': { boxShadow: '0 0 50px rgba(14, 140, 233, 0.45), 0 0 70px rgba(34, 211, 238, 0.25)' },
        },
        auraGlow: {
          '0%': { opacity: '0.4', transform: 'scale(0.95)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
export default config