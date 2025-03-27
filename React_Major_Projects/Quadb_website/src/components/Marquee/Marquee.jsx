import React from 'react';
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const Marquee = () => {
  const items = [<TbTriangleFilled className="transform rotate-90 text-white" />, <TbTriangleInvertedFilled className="transform rotate-90 text-white" />, "Web Development"];
  
  const textGradient = {
    background: 'linear-gradient(90deg, #FFFFFF 46.28%, rgba(255, 255, 255, 0.2) 104.96%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const marqueeItems = Array.from({ length: 16 }).map((_, index) => (
    <div key={index} className="flex items-center mx-0 p-2">
      {items[0]}
      <span className="font-normal text-lg font-nephilm mx-4 whitespace-nowrap" style={textGradient}>{items[2]}</span>
      {items[1]}
    </div>
  ));

  const gradientStyle = {
    background: 'linear-gradient(to right, white 0%, black 40%, white 80%)',
  };

  const backgradient = {
    background: 'linear-gradient(to right, #3a3a3a 0%, #252525 50%, #060606 100%)',
  };

  return (
    <div className='py-[2px] w-full mt-16 max-w-[1700px] mx-auto' style={gradientStyle}>
        <div className="w-full h-12 box-border m-0 relative overflow-hidden " style={backgradient}>
            <div className="flex absolute animate-marquee whitespace-nowrap">
                {marqueeItems}
                {marqueeItems}
                {marqueeItems}
            </div>
        </div>
    </div>
  );
};

export default Marquee;
