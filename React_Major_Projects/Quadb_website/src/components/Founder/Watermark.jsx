import React from "react";

const Watermark = () => {
  return (
    <div
      className="bg-gray-500 opacity-[0.6] flex items-center justify-center rounded-[4px] font-bold text-center dxs:w-28 md:w-60 md:h-20"
      style={{
        clipPath:
          "polygon(8% 0%, 100% 0%, 100% 85%, 92% 100%, 0% 100%, 0% 15%)",
      }}
    >
      <div className="text-white text-left">
        <h2 className="text-[16px] sm:text-[18px] md:text-[20px]">
          Lorem Ipsum
        </h2>
        <p className="text-[10px] sm:text-[12px] md:text-[14px]">lorem ipsum</p>
      </div>
    </div>
  );
};

export default Watermark;