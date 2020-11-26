module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "red-color": "#F2055C",
        "grey-color": "#bbbbbb"
      }
    },
    fontFamily: {
      sans: ["Roboto", "-apple-system", "sans-serif"]
    }
  },
  variants: {},
  plugins: []
};
