import React, { useEffect, useState } from "react";
import baldman from "../../assets/Images/BaldMan.png";
import LoremIpsum from "../Teams/LoremIpsum";
import "../../App.css";

const FounderMdUp = ({ windowWidth }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto flex w-full mt-28">
      <div className="w-[50%] flex flex-col lg:items-end items-end lg:justify-center justify-center mt-[120px] mr-[40px] text-white">
        <h1
          className={`font-nephilm lg:text-7xl text-6xl mb-8 ${
            isHovered ? "animate-rightSide" : "animate-rightMost"
          }`}
        >
          Founder
        </h1>
        <p
          className={`font-proxima text-justify leading-7 text-[18px] w-[90%] lg:w-[75%] xlg:w-[70%] xllg:w-[55%] ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ab
          illo hic vero laboriosam exercitationem expedita odio quibusdam
          accusamus inventore dicta amet possimus reiciendis maxime sequi
          molestiae illum, iusto eum.
        </p>
      </div>

      <div
        className="image-container relative w-[50%] mt-4 mb-[125px] z-10 ml-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={baldman}
          alt="Bald Man"
          // className="ml-auto relative top-[25px] md2:top-0 right-[40px] lg:right-[110px] xllg:right-[160px] xl:right-[200px]  md:w-[94%] md2:w-[90%] lg:w-[78%] xllg:w-[70%] xl:w-[69%]"
          className="ml-auto relative top-[25px] md2:top-0 right-[40px] lg:right-[110px] xllg:right-[160px] xxl:right-[280px]  md:w-[94%] md2:w-[90%] lg:w-[78%] xllg:w-[70%] xxl:w-[60%]"
          style={{
            clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)",
          }}
        />
        <div
          className={`absolute bottom-[4%] left-[5%] ${
            isHovered ? "animate-rightSide" : "animate-leftMost"
          }`}
        >
          <LoremIpsum
            width={
              windowWidth < 940
                ? "160px"
                : windowWidth < 1280
                ? "240px"
                : "260px"
            }
            height={
              windowWidth < 940 ? "70px" : windowWidth < 1400 ? "95px" : "105px"
            }
          />
        </div>

        <div className="">
          <div
            className="line  line1 absolute h-[1px] w-[100%] top-[31%] left-[-400px] lg:top-[19%]  lg:left-[-440px] xllg:top-[18%] xllg:left-[-500px]"
            style={{
              backgroundImage:
                "linear-gradient(to left, #00aa008d 0%, #f2f60090 50%, #ffffff86 100%)",
              // Other styles for your div
            }}
          ></div>
          <div
            className="line line2 absolute h-[1px] w-[100%] lg:w-[88%] top-[33%] left-[-340px] lg:top-[26%] lg:left-[-380px]  xllg:top-[23%] xllg:left-[-420px] bottom-[90%] z-10"
            style={{
              backgroundImage:
                "linear-gradient(to left, #00aa008d 0%, #f2f60090 50%, #ffffff86 100%)",
              // Other styles for your div
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const FounderSmDown = ({ windowWidth }) => {
  return (
    <div className="container mx-auto flex flex-col  px-3  sm0:px-4 ">
      <div className=" px-2 sm0:px-4 sm:px-8  text-left text-white ">
        <h1 className="font-nephilm   text-5xl  sm:text-6xl  mb-5 ">Founder</h1>
        <p className="    text-justify leading-7  text-[14px] sm:text-[16px] md:text-[18px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ab
          illo hic vero laboriosam exercitationem expedita odio quibusdam
          accusamus inventore dicta amet possimus reiciendis maxime sequi
          molestiae illum, iusto eum.
        </p>
      </div>

      <div className="image-container relative w-[100%] mt-4  ">
        <img
          src={baldman}
          alt="Bald Man"
          className=" ml-auto  sm0:mr-2 sm1:mr-4 sm:mr-8 w-[54%] ss:w-[56%] dxs:w-[60%] md1:w-[59%]"
        />

        <div className="absolute  bottom-[30%] ss:bottom-[40%] dxs:bottom-[45%] sm:bottom-[45%] left-[3%] ss:left-[2.75%] sm0:left-[5%] sm2:left-[3.5%] sm:left-[6%] ">
          {/* <LoremIpsum /> */}

          <LoremIpsum
            width={
              windowWidth < 340
                ? "125px"
                : windowWidth < 406
                ? "132px"
                : windowWidth < 552
                ? "150px"
                : windowWidth < 680
                ? "180px"
                : windowWidth < 720
                ? "200px"
                : windowWidth < 768
                ? "205px"
                : windowWidth < 794
                ? "230px"
                : "236px"
            }
            height={
              windowWidth < 552 ? "70px" : windowWidth < 710 ? "82px" : "90px"
            }
          />
        </div>
      </div>
    </div>
  );
};

const Founder = () => {
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 800);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 800);

      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMdUp ? (
    <FounderMdUp windowWidth={windowWidth} />
  ) : (
    <FounderSmDown windowWidth={windowWidth} />
  );
};

export default Founder;