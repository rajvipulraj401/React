import React from "react";
import gif from "../../assets/Images/HomePage.gif";
import Button from "../Button/Button";

function HomeBanner() {
  const background = {
    backgroundImage: `url(${gif})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "",
    backgroundPosition: "center",
    filter: "blur(8px)", // Adjust the blur intensity here
  };

  const textGradient = {
    background:
      "linear-gradient(90deg, rgb(240, 246, 0) 37.65%, rgb(0, 168, 170) 104.96%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };

  return (
    <div className="relative container mx-auto" id="home">
      <div className="absolute inset-0" style={background}></div>
      <div className="relative z-10 text-white h-full">
        <div className="text-center pt-36 sm:gap-4 flex flex-col items-center justify-center">
          <div className="">
            <h1 className="text-[22px] ss:text-[26px] xxs:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-nephilm font-normal leading-[67.2px]">
              Come to us with a <span style={textGradient}>vision</span>
            </h1>
            <div className="relative border-t border-white w-3/4 mt-4 mx-auto">
              <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
              <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
            </div>
          </div>

          <h1 className="relative text-[30px] ss:text-[36px] xxs:text-[42px] sm:text-[56px] md1:text-[64px] md:text-[72px] lg:text-[78px] xl:text-[84px] font-proxima mt-4 font-bold leading-[117.6px]">
            Embrace the Quest
            <span className="font-proxima absolute inset-0 w-full h-full overflow-hidden bg-clip-text text-transparent transition-all duration-500 bg-linear-to-r from-yellow-400 via-yellow-300 to-cyan-400 hover:opacity-100 opacity-0">
              Embrace the Quest
            </span>
          </h1>

          <p className="w-[85%] sm:w-[70%] md:w-[50%] font-proxima text-[15px] md:text-[18px] leading-[24px] font-normal">
            We build digital products, from idea to design, development to
            marketing & PR to post-launch support.
          </p>

          <div className="mt-12">
            <Button name="Get Free Consultation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
