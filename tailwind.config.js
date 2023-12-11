/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px', // @media (min-width: 768px)
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '100px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      colors: {
        vueJs: {
          100: "#49e659",
          932: "#434552"
        }
      },
    },
  },
  plugins: [],
}

