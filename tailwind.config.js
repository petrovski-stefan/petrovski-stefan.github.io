/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(circle, rgba(245,255,250,1) 0%, rgba(144,238,144,1) 50%)',
      },
    },
  },
  plugins: [],
};
