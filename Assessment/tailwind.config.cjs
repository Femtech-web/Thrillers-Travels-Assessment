/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        formBg: '#f3f6fd',
        mainBg: ' #e9f0f8',
        submitBtn: '#6682e3',
        activeTab: '#74c684',
        color: '#636e8c',
        stopBtn: '#484862 '
      },
    },
  },
  plugins: [],
}