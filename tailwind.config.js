/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',

      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        'next-example-primary': '#1FA5E9',
      },
    },
  },
  plugins: [import('@tailwindcss/container-queries')],
};
