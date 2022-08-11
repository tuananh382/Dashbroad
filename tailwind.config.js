/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily:{
      inter: ["Inter"],
    },
    extend: {
      fontSize:{
        13:"13px",
        14: "14px",
        16: "16px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      boxShadow:{
        'bsd': '0px 3px 3px 0px rgba(0, 0, 0, 0.15)',
      },
      borderWidth:{
        '1': '1px',
      },
    },
  },
  plugins: [],
}