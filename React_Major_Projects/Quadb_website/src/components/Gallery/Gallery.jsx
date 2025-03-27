import { useState, useEffect } from "react";
import "../../App.css";
import imgLeft from '../../assets/Images/imageLeftMost.png'
import imgRight from '../../assets/Images/imageRightMost.png'
import imgBottom from '../../assets/Images/imageBottomMost.png'
import img1 from '../../assets/Images/img1.png'
import img2 from '../../assets/Images/img2.png'
import img3 from '../../assets/Images/img3.png'

const leftImages = [imgLeft, img1];
const rightImages = [imgRight, img2];
const bottomImages = [imgBottom, img3];

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <GalleryMobile /> : <GalleryDesktop />;
};

const GalleryDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageLeft, setCurrentImageLeft] = useState(leftImages[0]);
  const [currentImageRight, setCurrentImageRight] = useState(rightImages[0]);
  const [currentImageBottom, setCurrentImageBottom] = useState(bottomImages[0]);
  const [animateRight, setAnimateRight] = useState(false);
  const [animateBottom, setAnimateBottom] = useState(false);
  const [animateLeft, setAnimateLeft] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leftImages.length);

      setAnimateRight(true);
      setTimeout(() => {
        setAnimateBottom(true);
        setAnimateLeft(true);
      }, 300);

      setTimeout(() => {
        setAnimateRight(false);
        setAnimateBottom(false);
        setAnimateLeft(false);

        setTimeout(() => {
          setCurrentImageRight(
            rightImages[(currentIndex + 1) % rightImages.length]
          );
          setCurrentImageBottom(
            bottomImages[(currentIndex + 1) % bottomImages.length]
          );
          setCurrentImageLeft(
            leftImages[(currentIndex + 1) % leftImages.length]
          );
        }, 500);
      }, 5300);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="gallery" className="container mx-auto flex flex-col w-full text-white items-center overflow-hidden">
      <div className="sm:mb-8 md:mb-8 lg:mb-4 ml-[30px] lg:ml-[150px] sm:ml-[50px] md:ml-[100px] xl:ml-[70px] 2xl:ml-0 text-left">
        <h1 className="sm:text-[54px] text-[40px] lg:text-[72px] pb-6 font-bold">
          Gallery
        </h1>
        <p className="text-[18px] sm:text-[20px] w-[80%]">
          Figma ipsum component variant main layer. Project export frame ipsum
          clip. Bullet component undo figma editor ellipse.
        </p>
      </div>

      <div className="MainDivGallery md:w-[85%] lg:w-[70%] sm:w-[95%] w-[97%] h-[643px] flex py-6 relative right-5 sm:right-0">
        <div className="square-overlay overlay1 text-left left-[43%] gap-3 sm:left-[47%] md:left-[49%] lg:left-[49%] xl:left-[45%] top-0 md:w-[210px] px-5 w-[190px] h-[180px] md:h-[200px] flex flex-col items-center justify-center text-white">
          <h2 className="md:text-[20px] lg:text-[24px] italic">
            Lorem ipsum dolor
          </h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold">
            Lorem ipsum dolor
          </p>
        </div>

        <div className="pl-[50px] flex items-center">
          <div className="relative imageL">
            <img
              src={leftImages[currentIndex]}
              alt=""
              width={"575px"}
              className="absolute"
            />
            <div
              className={
                animateLeft
                  ? "slide-in-from-top fade-in"
                  : "slide-out-to-top fade-out"
              }
            >
              <img
                src={currentImageLeft}
                alt=""
                width={"575px"}
                className="imagelefti"
              />
            </div>
          </div>

          <div className="square-overlay gap-3 overlay2 text-left lg:bottom-0 bottom-[80px] left-[37%] sm:left-[41.5%] md:left-[42.55%] lg:left-[43%] xl:left-[39.75%] px-5 w-[180px] md:w-[200px] h-[180px] md:h-[205px] flex flex-col items-center justify-center text-white">
            <h2 className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] italic">
              Lorem ipsum dolor
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold">
              lorem ipsum dolor
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={rightImages[currentIndex]}
            alt=""
            width={"327px"}
            className="absolute"
          />
          <div
            className={
              animateRight
                ? "slide-in-from-top fade-in"
                : "slide-out-to-top fade-out"
            }
          >
            <img src={currentImageRight} alt="" width={"327px"} />
          </div>
          <div className="square-overlay overlay3 right-0 w-[170px] h-[170px] px-[25px] gap-3 sm:top-[25%] md:top-[33.75%] lg:top-[35%] xl:top-[44%] text-left flex flex-col items-center justify-center text-white">
            <h2 className="text-[18px] lg:text-[20px] italic">
              Lorem ipsum dolor
            </h2>
            <p className="text-[15px] font-semibold">lorem ipsum dolor</p>
          </div>

          <div className="relative">
            <img
              src={bottomImages[currentIndex]}
              alt=""
              width={"327px"}
              className="absolute"
            />
            <div
              className={
                animateBottom
                  ? "slide-in-from-right fade-in"
                  : "slide-out-to-right fade-out"
              }
            >
              <img src={currentImageBottom} alt="" width={"327px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageLeft, setCurrentImageLeft] = useState(leftImages[0]);
  const [currentImageRight, setCurrentImageRight] = useState(rightImages[0]);
  const [currentImageBottom, setCurrentImageBottom] = useState(bottomImages[0]);
  const [animateRight, setAnimateRight] = useState(false);
  const [animateBottom, setAnimateBottom] = useState(false);
  const [animateLeft, setAnimateLeft] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leftImages.length);

      setAnimateRight(true);
      setTimeout(() => {
        setAnimateBottom(true);
        setAnimateLeft(true);
      }, 300);

      setTimeout(() => {
        setAnimateRight(false);
        setAnimateBottom(false);
        setAnimateLeft(false);

        setTimeout(() => {
          setCurrentImageRight(
            rightImages[(currentIndex + 1) % rightImages.length]
          );
          setCurrentImageBottom(
            bottomImages[(currentIndex + 1) % bottomImages.length]
          );
          setCurrentImageLeft(
            leftImages[(currentIndex + 1) % leftImages.length]
          );
        }, 500);
      }, 5300);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      id="gallery"
      className="container mx-auto flex flex-col w-full text-white items-center"
    >
      <div className="mb-8 sm:mb-8 md:mb-8 lg:mb-4 ml-[30px] lg:ml-[150px] sm:ml-[50px] md:ml-[100px] xl:ml-[70px] 2xl:ml-0 text-left">
        <h1 className="sm:text-[54px] text-[40px] lg:text-[72px] pb-6 font-bold">
          Gallery
        </h1>
        <p className="text-[16px] sm:text-[20px] w-[80%]">
          Figma ipsum component variant main layer. Project export frame ipsum
          clip. Bullet component undo figma editor ellipse.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative imageL left-[-5px]">
          <img
            src={leftImages[currentIndex]}
            alt=""
            width={"310px"}
            className="absolute"
          />
          <div
            className={
              animateLeft
                ? "slide-in-from-top fade-in"
                : "slide-out-to-top fade-out"
            }
          >
            <img src={currentImageLeft} alt="" width={"310px"} />
          </div>
        </div>
        <div
          className="square-overlay gap-3 w-[180px] h-[180px] px-5 flex flex-col items-start justify-center text-white"
          style={{ position: "relative", top: "-50px", right: "-55px" }}
        >
          <h2 className="italic text-[20px]">Lorem ipsum dolor</h2>
          <p className="  font-semibold text-[15px]">Lorem ipsum dolor</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[-140px]">
        {/* <div className="relative "> */}
        <div className="relative  right-[30px]">
          <img
            src={bottomImages[currentIndex]}
            alt=""
            width={"260px"}
            className="absolute"
          />
          <div
            className={
              animateBottom
                ? "slide-in-from-right fade-in"
                : "slide-out-to-right fade-out"
            }
          >
            <img src={currentImageBottom} alt="" width={"260px"} />
          </div>
        </div>
        <div
          className="square-overlay gap-1 text-left w-[150px] h-[140px] px-5 flex flex-col items-center justify-center text-white"
          style={{ position: "relative", top: "-50px", left: "-100px" }}
        >
          <h2 className="italic text-[18px]">Lorem ipsum dolor</h2>
          <p className="font-semibold text-[14px]">lorem ipsum dolor</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[-100px]">
        <div className="relative">
          <img
            src={rightImages[currentIndex]}
            alt=""
            width={"275px"}
            className="absolute"
          />
          <div
            className={
              animateRight
                ? "slide-in-from-top fade-in"
                : "slide-out-to-top fade-out"
            }
          >
            <img src={currentImageRight} alt="" width={"275px"} />
          </div>
        </div>
        <div
          className="square-overlay gap-3 text-left w-[175px] h-[170px] px-5 flex flex-col items-start justify-center text-white"
          style={{ position: "relative", top: "-80px", left: "-80px" }}
        >
          <h2 className="italic text-[18px]">Lorem ipsum dolor</h2>
          <p className="font-semibold text-[15px]">lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
