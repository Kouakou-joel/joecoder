import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {

    colors: {
      white: '#FFFFFF',
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#7f82e8",
        DEFAULT: "#5f62e2",
        600: "#5658cb",

      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9e",
        400: "#56c4a7",
        500: "#2ab691",
        DEFAULT: "#26a482",

      },
      gray: {
        200: "#f2f2f2",
        300: "#e5e5e5",
        400: "#b2b2b2",
        500: "#808080",
        DEFAULT: "#333333",
        700: "#1d1d1d",

      },

    },

    fontSize: {
      '8xl': ['120px', {
        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',
      }],
      '7xl': ['72px', {
        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',
      }],
      '6xl': ['55px', {
        lineHeight: '60px',
        letterSpacing: '-2.5px',
        fontWeight: '500',
      }],
      '5xl': ['48px', {
        lineHeight: '54px',
        letterSpacing: '-1.60004px',
        fontWeight: '500',
      }],
      '4xl': ['36px', {
        lineHeight: '44px',
        letterSpacing: '-1.200003px',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      '2xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '4 00',
      }],
      'xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }],
    },
    borderRadius: {

      DEFAULT: '10px',
      full: "9999px"
    },
    extend: {

    },
  },
  plugins: [],
} satisfies Config;
