import React, { useState } from "react";
import newbutton from "../../assets/Images/newbutton.gif";

const Button = ({ name, width }) => {
  const [isHovered, setIsHovered] = useState(false);
  const responsiveWidth = width ? `sm:w-[180px]` : "sm:w-[220px]";

  return (
    <button
      className={`
        ${responsiveWidth} sm:h-12 w-[160px]  dxs:w-[170px]  xxs:w-[210px] sm2:w-[240px] h-11 flex items-center justify-center text-white font-semibold
        font-proxima sm:text-[18px] sm2:text-[14px] text-[14px] leading-6
        relative overflow-hidden
        hover:sm:text-[19px] hover:font-[700]
      `}
      style={{
        border: "1px solid transparent",
        borderRadius: "48px",
        backgroundImage:
          "linear-gradient(#2f2f2f, #2f2f2f), linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        boxShadow: `
                0px 0px 0px 1px rgba(255, 255, 255, 0.06) inset,
                1px 1px 0px 0px rgba(255, 255, 255, 0.08) inset,
                0px 8px 40px -20px rgba(255, 255, 255, 0.2)
              `,
        color: "white",
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        // e.currentTarget.style.color = "black";
        e.currentTarget.style.color = "black";

        e.currentTarget.style.backgroundImage =
          "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%), linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), linear-gradient(#2f2f2f, #2f2f2f)";
        e.currentTarget.style.boxShadow = `
          0px 0px 0px 1px rgba(255, 255, 255, 0.06) inset,
          1px 1px 0px 0px rgba(255, 255, 255, 0.08) inset,
          0px 8px 40px -20px rgba(255, 255, 255, 0.2)
        `;
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.color = "white";
        e.currentTarget.style.backgroundImage =
          "linear-gradient(#2f2f2f, #2f2f2f), linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)";
        e.currentTarget.style.boxShadow = `
          0px 0px 0px 1px rgba(255, 255, 255, 0.06) inset,
          1px 1px 0px 0px rgba(255, 255, 255, 0.08) inset,
          0px 8px 40px -20px rgba(255, 255, 255, 0.2)
        `;
      }}
    >
      {name}
      {isHovered && (
        <span
          className="absolute top-0 left-0  w-full h-full"
          style={{
            backgroundImage: `url(${newbutton})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></span>
      )}
    </button>
  );
};

export default Button;
