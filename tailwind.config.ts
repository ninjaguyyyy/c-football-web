import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        red: '#D70015',
        'dust-red': '#FF4D4F',
        'dust-red-1': '#ffccc7',
        'dust-red-2': '#fff2f0',
        'dust-red-5': '#ff4d4f',

        purple: '#615dfa',
        gray: '#adafca',
        lightblue: '#23d2e2',

        dark: '#3e3f5e',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
