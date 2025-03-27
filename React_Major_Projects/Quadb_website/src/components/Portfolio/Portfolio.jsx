import React, { useState, useEffect } from "react";
import "../../App.css";

const PortfolioMdUp = () => {
  return (
    <div id="portfolio" className="container mx-auto flex justify-start items-center text-white mt-16">
      <div className="text-white pl-3 ">
        <p className="text-3xl font-nephilm  text-left leading-7">
          see what's cooking at our
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-3xl font-normal"
          >
            {` labs`}
          </span>
        </p>
        <span className="text-5xl font-proxima font-bold text-left"> Portfolio</span>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden flex flex-col">
            <div className=" animate-marquee_content_up">
              <div className="flex-grow-0 flex-shrink-0 basis-1/3 my-[1vh] mx-[1vw]">
                <img
                  src="Portfolioimage1.jpg"
                  alt="Image 1"
                  className="w-full block h-60 rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-grow-0 flex-shrink-0 basis-1/3 my-[1vh] mx-[1vw]">
                <img
                  src="Portfolioimage2.jpg"
                  alt="Image 2"
                  className="w-full block h-60 rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-grow-0 flex-shrink-0 basis-1/3 my-[1vh] mx-[1vw]">
                <img
                  src="Portfolioimage3.jpg"
                  alt="Image 3"
                  className="w-full block h-60 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col">
            <div className="animate-marquee_content_down">
              <div className="flex-grow-0 flex-shrink-0 basis-1/3 my-[1vh] mx-[1vw]">
                <img
                  src="Portfolioimage2.jpg"
                  alt="Image 4"
                  className="w-full block h-60 rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-grow-0 flex-shrink-0 basis-1/3 my-[1vh] mx-[1vw]">
                <img
                  src="Portfolioimage5.jpg"
                  alt="Image 5"
                  className="w-full block h-60 rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-grow-0 flex-shrink-0 basis-1/3 my-[1vh] mx-[1vw]">
                <img
                  src="Portfolioimage6.jpg"
                  alt="Image 6"
                  className="w-full block h-60 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioSmDown = () => {
  return (
    <div id="portfolio" className="container mx-auto flex flex-col justify-start items-center gap-4 text-white">
      <div className="text-white mb-10 pl-3 ">
        <p className="text-2xl sm:text-3xl font-nephilm text-left mb-3 leading-7">
          see what's cooking at our
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-3xl font-normal"
          >
            {` labs`}
          </span>
        </p>
        <span className="text-4xl sm:text-5xl font-proxima font-bold text-left">
          {" "}
          Portfolio
        </span>
      </div>

      {/* Animation wala circle immages yaha se hai......... */}
      <div className="flex justify-center mb-11 px-[5px]     text-white text-center">
        <div className="relative  border-white px-[8px] sm:px-[10px] w-[33%] flex flex-col items-center">
          <div className="absolute top-[0%] bottom-[40%] left-0 w-full  border-l-2 border-white"></div>
          <div className="relative">
            <img src="bonton.png" width="auto" alt="Bonton" />
          </div>
          {/* spicy wala */}
          <div className="text-center w-[100%]">
            <h3 className="font-bold mt-5 text-[16px] sm:text-[18px]">
              Mining Devs
            </h3>

            <p className="font-normal text-[14px] sm:text-[16px]">Website</p>
          </div>
        </div>

        {/* HEREBEEE */}
        <div className="relative  border-white  sm:px-2 w-[35%] flex flex-col  items-center">
          <div className="absolute top-[0%] bottom-[40%] left-0 w-full border-l-2 border-r-2 border-white"></div>

          <div className="relative  ">
            <img src="herebe.png" width="auto" alt="Herebee" />
          </div>
          {/* herebee wala */}
          <div className="text-center w-[100%] sm:w-[85%]">
            <h3 className="font-bold mt-5 text-[16px] sm:text-[18px]">
              HEREBEE
            </h3>
            <p className="font-normal text-[14px] sm:text-[16px]  sm:w-[full]">
              POS system and Mobile App
            </p>
          </div>
        </div>

        {/* HEREBEEE ENDS HERE */}

        <div className="relative  border-white px-[8px] sm:px-[10px] w-[33%] flex flex-col items-center">
          <div className="absolute top-[0%] bottom-[40%] left-0 w-full  border-r-2 border-white"></div>

          <div className="relative">
            <img src="spicy.png" width="auto" alt="Spicy" />
          </div>
          {/* spicy wala */}
          <div className="text-center w-[100%] ">
            <h3 className="font-bold mt-5 text-[16px] sm:text-[18px]">
              Spicy Punks
            </h3>

            <p className="font-normal text-[14px] sm:text-[16px]">Website</p>
          </div>
        </div>
      </div>

      {/* ----------------------All images animation wala circle images ends here */}
    </div>
  );
};

const Portfolio = () => {
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMdUp ? <PortfolioMdUp /> : <PortfolioSmDown />;
};

export default Portfolio;