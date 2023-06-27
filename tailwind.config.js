module.exports = {
    content: [
        './context/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './utils/**/*.{js,ts,jsx,tsx}',
      ],
    purge: [
        './context/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './utils/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
};
  