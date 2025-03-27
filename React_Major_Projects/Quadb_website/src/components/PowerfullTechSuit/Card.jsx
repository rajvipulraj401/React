import React from "react";

const Card = ({ name, content }) => {
  const boxGradient = {
    background:
      "linear-gradient(240deg, rgba(255, 255, 255, 0.3) 0%, rgba(43, 43, 42, 0.9) 34.15%)",
  };
  return (
    <div
      // className="relative z-20 flex flex-col justify-center px-[15px] sm:py-[140px] md:py-[150px] sm1:px-5    xxs:px-6  sm:pl-6 sm:pr-6 pt-5 pb-5 card h-[240px] w-[250px] dxs:w-[275px] xxs:w-[300px] sm1:w-[380px] sm:w-[400px] sm1:h-[240px] ss:mx-[5px] xxs:mx-2 sm1:mx-3 mb-4 rounded-[32px] text-white"
      className="relative z-20 flex flex-col justify-center px-[15px] sm:py-[140px] md:py-[140px] sm1:px-5   
       xxs:px-6  sm:pl-6 sm:pr-6 pt-5 pb-5 card h-[240px] w-[250px] dxs:w-[275px] xxs:w-[300px] sm1:w-[380px] 
       sm:w-[400px] sm1:h-[240px]  xxl:w-[570px] md:w-[300px] md2:w-[320px] lg:w-[370px] md2:h-[300px] xlg:w-[425px] xllg:w-[460px] xl:w-[500px] ss:mx-[5px] xxs:mx-2 sm1:mx-3 mb-4 rounded-[32px] text-white"
      style={boxGradient}
    >
      <div className="Title pb-2 sm1:pb-5 md:pb-4 ">
        <h5 className="sm:text-xl font-semibold">{name}</h5>
      </div>
      <div className="contents text-[10px] ss:text-[11px] dxs:text-[12px] sm:text-[14px] md:text-[14px] leading-7">
        <p className="text-justify">{content}</p>
      </div>
      <style jsx>{`
        .card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 32px; /* Match the border radius */
          padding: 2px; /* Adjust border thickness */
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(116, 231, 2, 0.2) 50.71%,
            rgba(136, 255, 18, 0) 71.32%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }
      `}</style>
    </div>
  );
};

export default Card;
