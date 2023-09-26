/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CerberusBlack: {
          default: "#1f1f20",
        },
        CerberusDarkBlue: {
          default: "#280f7e",
        },
        CerberusLightBlue: {
          default: "#111827",
        },
        CerberusDarkGray: {
          default: "#606d80",
        },
        CerberusLightGray: {
          default: "#dce0e6",
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
