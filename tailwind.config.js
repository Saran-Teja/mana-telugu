module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        telugu: ['Noto Sans Telugu', 'sans-serif'],
        english: ['Noto Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}