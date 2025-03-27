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
        no: "1px",
        ss1: "305px",
        ss: "345px",
        dxs: "360px",
        xxs: "405px",
        sm0: "450px",
        sm1: "480px",
        sm2: "550px",
        sm: "640px",
        md1: "690px",
        md: "768px",
        mdg: "830px",
        mlg: "900px",
        lg: "976px",

        xg: "1040px",
        xlg: "1100px",
        xlg1: "1157px",
        xllg: "1200px",
        xl0: "1225px",
        xl: "1280px",
        xl2: "1325px",
        xl3: "1380px",
        xxl: "1440px",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollBall: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translateX(100%) translateY(100%)",
          },
        },
        flicker: {
          "0%": {
            opacity: "1",
            filter: "brightness(100%)",
          },
          "25%": {
            opacity: "0.8",
            filter: "brightness(90%)",
          },
          "50%": {
            opacity: "1",
            filter: "brightness(100%)",
          },
          "75%": {
            opacity: "0.9",
            filter: "brightness(95%)",
          },
          "100%": {
            opacity: "1",
            filter: "brightness(100%)",
          },
        },
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scrollDown: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        flicker: {
          "0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100%": {
            opacity: "0.99",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          },
          "20%, 21.9%, 63%, 63.9%, 65%, 69.9%": {
            opacity: "0.4",
          },
        },
      },
      animation: {
        marquee: "marqueeLeft 60s linear infinite",
        flickerAnimation: "flicker 2s linear infinite",
        marquee_content_up: "scrollUp 4s linear infinite",
        marquee_content_down: "scrollDown 4s linear infinite;",
        flicker: "flicker 4s linear infinite",
      },
    },
  },
  plugins: [],
};
