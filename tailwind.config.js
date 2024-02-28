module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1180px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      jost: "'Jost', sans-serif;",
      poppins: "'Poppins', sans-serif;",
    },
    extend: {
      padding: {
        "160px": "160px",
        "250px": "250px",
        "350px": "350px",
      },

      keyframes: {},
      animation: {},
      colors: {
        "hero-bg": "#F8F8F8",
        primary: "",
        secondary: "",
        tertiary: "#FDC706",
        quaternary: "#F8D417",
        "space-red": "#FFDBDB",
        "space-gray": "#393939",
        "dark-gray": "#636363",
        "light-gary": "#747474",
        "only-gray": "#939393",
        "simple-gray": "#CDCDCD",
        "full-gray": "#787878",
        "pure-gray": "#838383",
        "little-gray": "#D6D6D6",
        "border-gray": "#006e5b26",
        "icon-soft-green": "#E2F7F3",
        "icon-soft-yellow": "#FFF7DD",
        "just-black": "#2D2F2D",
        "pearl-white": "#FFFFFF",
      },
      animation: {},
      keyframes: {},
      transitionDuration: {},
      width: {
        // '128': '429px',
      },
      height: {
        // '128': '643.5px',
      },
      inset: {
        // '76px': '76px',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
      display: ["group-focus"],
    },
  },
  plugins: [],
};
