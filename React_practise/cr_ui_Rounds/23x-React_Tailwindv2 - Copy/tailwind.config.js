/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        nephilm: ["Nephilm", "italic"],
        proxima: ["Proxima", "sans-serif"],
      },
      screens: {
        // ✅ Tailwind defaults (already there, but redefining for clarity/custom order)
        sm: "640px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        xxl: "1440px",

        // ✅ Your useful custom breakpoints (real-world sizes)
        ss: "345px", // very small smartphones
        xxs: "405px", // small phones
        sm0: "450px", // slightly below sm
        sm1: "480px", // standard phones
        mdg: "830px", // between md and lg
        xg: "1040px", // between lg and xl
        xlg: "1100px", // large tablets or small desktops
        xlg1: "1157px", // specific case (keep if you use it)
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marqueeLeft 60s linear infinite",
      },
    },
  },
  plugins: [],
};
