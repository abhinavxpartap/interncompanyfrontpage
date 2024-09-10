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
      extend: {
        Keyframes: {
          gradient:{
             "0%":{backgroundPosistion: "0% 50%"},
             "100%":{backgroundPosistion: "100% 50%"},
            
          },
        },
        animation: {
          gradient:"gradient 2s linear infinite",
      },
      },
    },
    variants: {},
    plugins: [],
};

