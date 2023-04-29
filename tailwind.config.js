/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: 'rgb(255 255 255)',
      'primary-red': 'hsl(0, 100%, 74%)',
      'primary-green': 'hsl(154, 59%, 51%)',
      'accent-blue': 'hsl(248, 32%, 49%)',
      'neutral-dark-blue': 'hsl(249, 10%, 26%)',
      'neutral-gray-blue': 'hsl(246, 25%, 77%)',
    }
  },
  plugins: [],
}
