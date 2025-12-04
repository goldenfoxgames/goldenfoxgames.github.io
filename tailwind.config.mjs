/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm dark backgrounds (derived from logo #161616)
        fox: {
          950: '#0D0D0D',
          900: '#161616',
          850: '#1E1D1B',
          800: '#252422',
          700: '#2D2B28',
        },
        // Golden accent (derived from logo #FBB040)
        gold: {
          300: '#FFD88A',
          400: '#FCC45D',
          500: '#FBB040',
          600: '#E09A2E',
          700: '#C4811E',
        },
        // Warm-tinted grays for text
        warm: {
          50: '#F5F3F0',
          100: '#E8E5E0',
          200: '#D4D0C9',
          300: '#C9C5BE',
          400: '#9A958C',
          500: '#6B665D',
          600: '#4A463F',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Overpass', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
