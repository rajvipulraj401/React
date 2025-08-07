import React from "react";

const ImageContainer = ({ img }) => {
    return (
      <div
        className="  w-[51px] h-[60px]   sm:w-[110px] sm:h-[60px] md:w-[130px] md:h-[70px] lg:w-[180px]  lg:h-[100px]  xl:w-[220px] xl:h-[100px] bg-contain bg-center bg-no-repeat flex justify-center items-center
        mx-2.5 "
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    );
  };
  
  export default ImageContainer;
  