// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

//   corePlugins: {
//     preflight: false, // 👈 Yeh line add karo
//   },
//   theme: {
//     container: {
//       center: true,
//     },
//     extend: {
//       fontFamily: {
//         nephilm: ["Nephilm", "italic"],
//         proxima: ["Proxima", "sans-serif"],
//       },
//       screens: {
//         sm: "640px",
//         md: "768px",
//         lg: "976px",
//         xl: "1280px",
//         xxl: "1440px",
//         ss: "345px",
//         xxs: "405px",
//         sm0: "450px",
//         sm1: "480px",
//         mdg: "830px",
//         xg: "1040px",
//         xlg: "1100px",
//         xlg1: "1157px",
//       },
//       keyframes: {
//         marqueeLeft: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//       },
//       animation: {
//         marquee: "marqueeLeft 60s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };

// -------version2 :-------

/** @type {import('tailwindcss').Config} */

const config = {
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
        // ✅ Tailwind default breakpoints (for reference/custom order)
        sm: "640px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        xxl: "1440px",

        // ✅ Custom breakpoints
        ss: "345px", // Very small phones
        xxs: "405px", // Small phones
        sm0: "450px", // Between xxs and sm
        sm1: "480px", // Standard phones
        mdg: "830px", // Between md and lg
        xg: "1040px", // Between lg and xl
        xlg: "1100px", // Larger than xl
        xlg1: "1157px", // Specific layout case
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

export default config;
