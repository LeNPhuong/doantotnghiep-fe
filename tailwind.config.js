/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rgba-custome': 'rgb(0,0,0,0.3)',
        'rgba-custome-1': 'rgba(34, 34, 34, 0.3)',
        'rgba-custome-2': 'rgba(0, 0, 0, 0.3)',
      },
    },
    fontFamily: {
      sans: ['Inter'],
    },
  },
  plugins: [],
};
