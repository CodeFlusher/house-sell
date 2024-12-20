/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Funnel Sans", "sans-serif"],
    },
    extend: {
      text:{
        '6xl': '3.375rem',
        '8xl': '4.5rem'
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")]
}

