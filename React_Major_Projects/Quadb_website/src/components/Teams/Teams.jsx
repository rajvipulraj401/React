// Teams original one-------------------

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LoremIpsum from "./LoremIpsum";
import "../../App.css";
import team1 from "../../assets/Images/team1.png";
import team2 from "../../assets/Images/team2.png";
import team3 from "../../assets/Images/team3.png";
import team4 from "../../assets/Images/team4.png";
import team5 from "../../assets/Images/team5.png";

const TeamsMdUp = ({ isInView, windowWidth }) => {
  const [imageAnimationComplete, setImageAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setImageAnimationComplete(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div className="container mx-auto ContainerDivofTeam flex flex-row w-full pl-10 h-[100vh] text-white">
      <div className="sm:px-0 px-0 relative md:bottom-[-25px] lg:bottom-[100px] xl:bottom-[-30px] w-[50%] lg:w-[60%] xl:w-[60%] flex flex-col justify-start lg:justify-center">
        <h1 className="lg:text-6xl text-5xl font-normal italic mb-10">Team</h1>
        <p className="lg:text-[18px] leading-8 font-normal text-[14px] md:text-[14px]  md2:text-[16px]  w-[100%]">
          Lorem ipsum dolor sit amet consectetur. Luctus eu vel in fringilla sit
          malesuada. Nascetur nec suspendisse tellus condimentum eget dui
          ornare. Porta non lectus nunc vitae egestas gravida condimentum enim.
          Ultricies varius pretium semper egestas molestie.
        </p>
      </div>

      <div className="fULLCONTAINER xl:px-8 lg:px-6 px-3 flex flex-nowrap flex-col w-full h-[100%]">
        <div className="IMAGE-CONTAINER mb-2 gap-1 imagesDiv relative flex flex-nowrap w-full h-[80%] sm:h-auto">
          <div className="flex ManCapWala items-center w-[30%]">
            <img
              src={team1}
              className={`2xl:h-[300px] w-full h-auto relative ${
                isInView ? "animate-left" : ""
              }`}
              alt="Man Cap"
            />
            <div
              className={`absolute w-[135px] bottom-[32%] left-[0%] ${
                imageAnimationComplete ? "animate-left" : "hidden"
              }`}
            >
              <LoremIpsum
                width={
                  windowWidth < 975
                    ? "120px"
                    : windowWidth < 1280
                    ? "130px"
                    : windowWidth < 1439
                    ? "180px"
                    : "200px"
                }
                height={windowWidth < 1280 ? "60px" : "80px"}
              />
            </div>
          </div>

          <div className="imageGallery gap-1 flex flex-col sm:flex-row w-[60%]">
            <div className="relative FounderAndGirl flex flex-col gap-1 items-center w-[50%]">
              <div className="relative girlwala">
                <img
                  src={team2}
                  className={`2xl:h-[320px] w-full ${
                    isInView ? "animate-top" : ""
                  }`}
                  alt="Girl"
                />
                <div
                  className={`absolute w-[135px] bottom-[11%] left-[0%] ${
                    imageAnimationComplete ? "animate-left" : "hidden"
                  }`}
                >
                  <LoremIpsum
                    width={
                      windowWidth < 975
                        ? "120px"
                        : windowWidth < 1280
                        ? "130px"
                        : windowWidth < 1439
                        ? "180px"
                        : "200px"
                    }
                    height={windowWidth < 1280 ? "60px" : "80px"}
                  />
                </div>
              </div>
              <div className="relative Founderwala">
                <img
                  src={team4}
                  className={`2xl:h-[320px] w-full h-auto ${
                    isInView ? "animate-bottom" : ""
                  }`}
                  alt="Founder"
                />
                <div
                  className={`absolute w-[135px] bottom-[11%] left-[0%] ${
                    imageAnimationComplete ? "animate-left" : "hidden"
                  }`}
                >
                  <LoremIpsum
                    width={
                      windowWidth < 975
                        ? "120px"
                        : windowWidth < 1280
                        ? "130px"
                        : windowWidth < 1439
                        ? "180px"
                        : "200px"
                    }
                    height={windowWidth < 1280 ? "60px" : "80px"}
                  />
                </div>
              </div>
            </div>

            <div className="relative ManSuitAndSmiling gap-1 flex flex-col items-center w-[50%]">
              <div className="relative manSuitWala">
                <img
                  src={team3}
                  className={`2xl:h-[320px] w-full h-auto ${
                    isInView ? "animate-bottom" : ""
                  }`}
                  alt="Man Suit"
                />
                <div
                  className={`absolute w-[135px] bottom-[11%] md:right-[-10%] lg:right-[-2%] xl:right-[22%] 2xl:right-[26%] ${
                    imageAnimationComplete ? "animate-right" : "hidden"
                  }`}
                >
                  <LoremIpsum
                    width={
                      windowWidth < 975
                        ? "120px"
                        : windowWidth < 1280
                        ? "130px"
                        : windowWidth < 1439
                        ? "180px"
                        : "200px"
                    }
                    height={windowWidth < 1280 ? "60px" : "80px"}
                  />
                </div>
              </div>

              <div className="relative ManSmilingWala">
                <img
                  src={team5}
                  className={`2xl:h-[320px] w-full h-auto ${
                    isInView ? "animate-bottom" : ""
                  }`}
                  alt="Man Smiling"
                />
                <div
                  className={`absolute w-[135px] bottom-[11%] md:right-[-10%] lg:right-[-2%] xl:right-[22%] 2xl:right-[26%] ${
                    imageAnimationComplete ? "animate-right" : "hidden"
                  }`}
                >
                  <LoremIpsum
                    width={
                      windowWidth < 975
                        ? "120px"
                        : windowWidth < 1280
                        ? "130px"
                        : windowWidth < 1439
                        ? "180px"
                        : "200px"
                    }
                    height={windowWidth < 1280 ? "60px" : "80px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[20%]">
          <hr className="w-[25%] h-[0.1px] bg-white mb-2" />
          <hr className="w-[90%] h-[0.1px] bg-white self-center mb-3" />
        </div>
      </div>
    </div>
  );
};

const TeamsSmDown = ({ windowWidth }) => (
  <div className="container mx-auto flex flex-col w-full mt-[180px] sm:mt-[250px]  h-auto text-white">
    <div className="TextOfTeam relative bottom-[100px] flex flex-col items-center">
      <h1 className="text-5xl mb-2">Team</h1>
      <hr className="w-[80vw] h-[0.1px] bg-white mb-2" />
      <hr className="w-[30vw] h-[0.1px] bg-white self-center mb-3" />
      <p className="leading-7 text-[15px] sm:text-[16px] text-center w-[85%]">
        Lorem ipsum dolor sit amet consectetur. Luctus eu vel in fringilla sit
        malesuada. Nascetur nec suspendisse tellus condimentum eget dui ornare.
        Porta non lectus nunc vitae egestas gravida condimentum enim. Ultricies
        varius pretium semper egestas molestie.
      </p>
    </div>
    {/* Above text */}
    <div className="imagesDiv sm:px-8 flex justify-center items-center gap-[2px] w-full h-auto mt-[-80px]">
      <div className="relative flex flex-col items-center">
        <img
          src={team1}
          className={`w-[150px] h-[auto] sm:w-[auto] `}
          alt="Man Cap"
        />
        <div className="absolute w-[135px] bottom-[7%] left-[2%]">
          <LoremIpsum
            width={
              windowWidth < 335
                ? "94px"
                : windowWidth < 400
                ? "98px"
                : windowWidth < 650
                ? "125px"
                : "140px"
            }
            height={
              windowWidth < 400
                ? "50px"
                : windowWidth < 580
                ? "60px"
                : windowWidth < 750
                ? "70px"
                : "80px"
            }
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-[2px] items-center mt-4">
        <div className="relative">
          <img
            src={team2}
            className={`w-[150px] h-auto sm:w-[auto]  `}
            alt="Girl"
          />
          <div className="absolute w-[135px] bottom-[7%] left-[2%]">
            <LoremIpsum
              width={
                windowWidth < 335
                  ? "94px"
                  : windowWidth < 400
                  ? "98px"
                  : windowWidth < 650
                  ? "125px"
                  : "140px"
              }
              height={
                windowWidth < 400
                  ? "50px"
                  : windowWidth < 580
                  ? "60px"
                  : windowWidth < 750
                  ? "70px"
                  : "80px"
              }
            />
          </div>
        </div>
        <div className="relative ">
          <img
            src={team4}
            className={`w-[150px] h-auto sm:w-[auto]  `}
            alt="Girl"
          />
          <div className="absolute w-[135px] bottom-[9%] left-[2%]">
            <LoremIpsum
              width={
                windowWidth < 335
                  ? "94px"
                  : windowWidth < 400
                  ? "98px"
                  : windowWidth < 650
                  ? "125px"
                  : "140px"
              }
              height={
                windowWidth < 400
                  ? "50px"
                  : windowWidth < 580
                  ? "60px"
                  : windowWidth < 750
                  ? "70px"
                  : "80px"
              }
            />
          </div>
        </div>
      </div>
      <div className="relative  flex flex-col gap-[2px] items-center mt-4">
        <div className="relative">
          <img
            src={team3}
            className={`w-[150px] h-auto  sm:w-[auto] `}
            alt="Man Suit"
          />
          <div className="absolute  ManSuitSmileRes w-[135px] bottom-[7%] right-[-38px] ss:right-[-34px] dxs:right-[-36px] xxs:right-[-10px] sm1:right-[-8px] sm:right-[10px]">
            <LoremIpsum
              width={
                windowWidth < 335
                  ? "94px"
                  : windowWidth < 400
                  ? "98px"
                  : windowWidth < 650
                  ? "125px"
                  : "140px"
              }
              height={
                windowWidth < 400
                  ? "50px"
                  : windowWidth < 580
                  ? "60px"
                  : windowWidth < 750
                  ? "70px"
                  : "80px"
              }
            />
          </div>
        </div>
        <div className="relative">
          <img
            src={team5}
            className={`w-[150px] h-auto  sm:w-[auto] `}
            alt="Man Smiling"
          />
          <div className="absolute w-[135px] ManSuitSmileRes bottom-[9%] right-[-38px] ss:right-[-34px] dxs:right-[-36px] xxs:right-[-10px] sm1:right-[-8px] sm:right-[10px]">
            <LoremIpsum
              width={
                windowWidth < 335
                  ? "94px"
                  : windowWidth < 400
                  ? "98px"
                  : windowWidth < 650
                  ? "125px"
                  : "140px"
              }
              height={
                windowWidth < 400
                  ? "50px"
                  : windowWidth < 580
                  ? "60px"
                  : windowWidth < 750
                  ? "70px"
                  : "80px"
              }
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Teams = () => {
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 800);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setIsInView(true);
      }
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 800);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={ref}>
      {isMdUp ? (
        // <TeamsMdUp isInView={isInView} />
        <TeamsMdUp isInView={isInView} windowWidth={windowWidth} />
      ) : (
        <TeamsSmDown windowWidth={windowWidth} />
      )}
    </div>
  );
};

export default Teams;
