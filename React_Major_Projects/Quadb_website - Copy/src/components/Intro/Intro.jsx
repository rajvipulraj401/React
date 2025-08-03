import { useState, useEffect, useRef } from "react";
// import AOS from "aos";

import blackCircle from "../../assets/Images/blackCircle.gif";
// import "aos/dist/aos.css";
import Card from "./Card";
// import Carousel from "./Carousel";
import Button from "../Button/Button";

const IntroMdUp = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [hoveredAreas, setHoveredAreas] = useState([]);
  const containerRef = useRef(null);

  const cards = [
    {
      name: "Restaurant POS",
      content:
        "A Point of Sale for the Restaurant to ease the process of taking orders. Not just a POS, this package contains management of kitchen, inventory as well as an Admin dashboard. Along with this, a personalized mobile application for Dine In orders and Take Away orders is also available.",
    },
    {
      name: "HRM",
      content:
        "A Human Resource Management system to handle employee-related tasks efficiently. This package includes payroll management, attendance tracking, and performance evaluation tools. It also offers an employee self-service portal for seamless interaction.",
    },
    {
      name: "CMS",
      content:
        "A Content Management System (CMS) that can help you write and schedule blogs for your website. It is easily integratable on any existing website and is SEO friendly, helping you boost your visibility on search engines. Alongside this, you would also be able to manage your creators.",
    },
    {
      name: "E-commerce",
      content:
        "An E-commerce platform that helps you manage your online store, track inventory, process orders, and more. This platform is designed to be user-friendly and scalable, suitable for businesses of all sizes.",
    },
  ];

  const animations = {
    "top-left": "fade-left",
    "bottom-left": "fade-left",
    "top-right": "fade-right",
    "bottom-right": "fade-right",
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    AOS.refresh();
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const area = getHoveredArea(x, y, rect);
      if (area && !hoveredAreas.includes(area)) {
        setHoveredAreas((prev) => [...prev, area]);
      }
      setHoveredArea(area);
    }
  };

  const getHoveredArea = (x, y, rect) => {
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      return null;
    } else if (x < rect.width / 2 && y < rect.height / 2) {
      return "top-left";
    } else if (x >= rect.width / 2 && y < rect.height / 2) {
      return "top-right";
    } else if (x < rect.width / 2 && y >= rect.height / 2) {
      return "bottom-left";
    } else if (x >= rect.width / 2 && y >= rect.height / 2) {
      return "bottom-right";
    }
    return null;
  };

  const renderCard = (position, index) => {
    const card = cards[index];
    const isVisible =
      hoveredArea === position || hoveredAreas.includes(position);

    return (
      <div
        className={`item ${position} ${isVisible ? "visible" : ""} ${
          position.includes("right") ? "shift-right" : ""
        }`}
        key={index}
        data-aos={isVisible ? animations[position] : ""}
        style={{
          width: "80%",
          marginBottom: "20px",
        }}
      >
        <h3>{card.name}</h3>
        <p>{card.content}</p>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 20px;
          }

          .left-container,
          .right-container {
            width: 100%;
          }

          .item {
            width: 20%;
          }
        }

        * {
          box-sizing: border-box;
          font-family: Proxima Nova R;
          font-size: 20px;
          font-weight: 700;
          line-height: 24px;
          text-align: justified;
        }

        .container {
          position: relative;
          width: 100%;
          border-radius: 29px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: url(${blackCircle}) no-repeat center center;
          background-size: contain;
          padding: 40px;
          overflow: hidden;
        }
        .left-container {
          display: flex;
          flex-direction: column;
          border-radius: 99px;
          align-items: center;
          width: 50%;
          height: 100%;
        }
        .right-container {
          display: flex;
          flex-direction: column;
          border-radius: 99px;
          align-items: center;
          width: 50%;
          margin-top: 0;
          height: 180%;
        }

        .item {
          margin: 20px;
          padding: 20px;
          border-radius: 99px;
          background-color: rgba(0, 0, 0, 0.7);
          text-align: left;
          color: #fff;
          border-radius: 20px;
          border: 2px solid white;
          opacity: 0;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
            border-image-source 0.3s ease-in-out;
          flex: 1;
          position: relative;
          width: 80%;
        }

        .item.visible {
          opacity: 1;
          transform: scale(1.05);
          border-image-source: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(116, 231, 2, 0.2) 50.71%,
            rgba(136, 255, 18, 0) 71.32%
          );
          border-image-slice: 1;
          border-radius: 99px;
        }

        .item h3 {
          font-family: Proxima Nova;
          font-size: 24px;
          font-weight: 700;
          border-radius: 99px;
          margin-bottom: 10px;
        }

        .item p {
          font-family: Proxima Nova;
          font-size: 16px;
          font-weight: 400;
          border-radius: 99px;
          line-height: 24px;
          text-align: justified;
        }

        .button-container {
          display: flex;
          justify-content: center;
          border-radius: 99px;
          margin-top: 20px;
        }

        .card-indicator {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          border-radius: 99px;
        }

        .card-indicator div {
          width: 10px;
          height: 10px;
          background-color: #ccc;
          border-radius: 100%;
          margin: 0 5px;
          transition: background-color 0.3s ease;
        }

        .card-indicator .active {
          background-color: #0f0;
          border-radius: 29px;
        }
      `}</style>

      <div
        id="pos"
        className="container"
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <div className="left-container">
          {renderCard("top-left", 0)}
          {renderCard("bottom-left", 2)}
        </div>
        <div className="right-container">
          {renderCard("top-right", 1)}
          {renderCard("bottom-right", 3)}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button name="Book a demo" width={200} />
      </div>
    </>
  );
};

// belwo 800px
const IntroSmDown = () => {
  const [activeCircle, setActiveCircle] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      name: "Restaurant POS",
      content:
        "A Point of Sale for the Restaurant to ease the process of taking orders. Not just a POS, this package contains management of kitchen, inventory as well as an Admin dashboard. Along with this, a personalized mobile application for Dine In orders and Take Away orders is also available.",
    },
    {
      name: "HRM",
      content:
        "A Human Resource Management system to handle employee-related tasks efficiently. This package includes payroll management, attendance tracking, and performance evaluation tools. It also offers an employee self-service portal for seamless interaction.",
    },
    {
      name: "CMS",
      content:
        "A Content Management System (CMS) that can help you write and schedule blogs for your website. It is easily integratable on any existing website and is SEO friendly, helping you boost your visibility on search engines. Alongside this, you would also be able to manage your creators.",
    },
    {
      name: "E-commerce",
      content:
        "An E-commerce platform that helps you manage your online store, track inventory, process orders, and more. This platform is designed to be user-friendly and scalable, suitable for businesses of all sizes.",
    },
  ];
  // card inbuild content

  const handleRightArrowClick = () => {
    setActiveCircle((prev) => (prev + 1) % cards.length);
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handleLeftArrowClick = () => {
    setActiveCircle((prev) => (prev - 1 + cards.length) % cards.length);
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const ArrowStyle = {
    border: "1px solid rgba(188, 188, 188, 1)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "120px",

    cursor: "pointer",
  };

  return (
    <>
      <div className="mt-20 ss:mt-15  dxs:mt-0 w-full min-h-screen  flex flex-col items-center justify-center bg-black text-white gap-10">
        {/* <div className="flex flex-col items-center h-[179px]"> */}
        <div className="flex flex-col items-center h-auto mb-10">
          <h3 className=" font-nephilm  text-[20px] sm1:text-[24px] sm:text-[30px] leading-[67.2px] tracking-[0.02em] text-center">
            driven by <span className="text-yellow-500"> data </span>fueled by
            <span className="text-green-500"> passion.</span>
          </h3>

          <div className="relative border-t border-white w-10/12  mx-auto mb-0 sm1:mb-4">
            <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
            <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
          </div>
          <h2 className=" text-3xl sm1:text-4xl sm:text-5xl font-bold leading-[67.2px] tracking-tight ss:tracking-[0.025em] sm1:tracking-[0.04em] text-center">
            A Powerful Tech Suite
          </h2>
        </div>

        {/* /bck image below hai */}

        <div
          className="w-full mt-[-28px] h-[400px] sm:h-[400px] md:h-[400px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] flex justify-center
                     items-center  bg-[url('blackCircle')] bg-no-repeat bg-center m:bg-contain bg-cover"
          style={{ backgroundImage: `url(${blackCircle})` }}
        >
          {/* // Carousel component starts here ...... */}
          <div className="carouselContainer flex flex-col items-center md:mb-0 mt-[380px] sm:mt-[80px] md:mt-0 sm:mb-[80px] mb-[350px]">
            <div className="cardContainer  flex justify-center  px-1 xl:px-0 sm:px-6">
              {/* left arrow */}
              <div
                className="leftArrow w-[26px] h-[26px] ss:w-[28px] ss:h-[30px] dxs:w-[35px] dxs:h-[35px]  md:w-[40px] md:h-[40px]   lg:w-[55px] lg:h-[55px] "
                style={ArrowStyle}
                onClick={handleLeftArrowClick}
              >
                <img
                  src="BackArrow.png"
                  alt=""
                  className="sm:w-[22px] ss:w-[20px] w-[16px] mr-1 cursor-pointer"
                />
              </div>
              {/* left arrow */}

              <Card
                name={cards[currentCard].name}
                content={cards[currentCard].content}
              />
              {/* <div
                className="carousel-inner flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentCard * 10}%)` }}
              >
                {cards.map((card, index) => (
                  <Card key={index} name={card.name} content={card.content} />
                ))}
              </div> */}

              {/* Right arrow */}
              <div
                className="rightArrow w-[26px] h-[26px] ss:w-[28px] ss:h-[30px] dxs:w-[35px] dxs:h-[35px]  md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] "
                style={ArrowStyle}
                onClick={handleRightArrowClick}
              >
                <img
                  src="rightArrow.png"
                  alt=""
                  className="ssm:w-[22px] ss:w-[20px] w-[16px] sm:ml-1 cursor-pointer"
                />
              </div>
              {/* right arrow */}
            </div>

            {/* Circular ball with different colors */}
            <div className="row3 flex gap-5 ">
              {cards.map((_, index) => (
                <div key={index} className="relative">
                  <div
                    className={` sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] rounded-[50%] ${
                      // activeCircle === index
                      //   ? "bg-white":
                      index === 0
                        ? "bg-yellow-400"
                        : index === 1
                        ? "bg-yellow-400"
                        : index === 2
                        ? "bg-gradient-to-b from-[#00A8AA] to-[#F0F600]"
                        : index === 3
                        ? "bg-[#00A8AA]"
                        : ""
                    }`}
                  >
                    <div
                      className={` w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-[50%] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        activeCircle === index ? "visible" : "invisible"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Circular ball with different colors ends here */}
          </div>
        </div>

        <div className="  mb-[20px]">
          <Button name="BOOK A DEMO" />
        </div>
      </div>
    </>
  );
};

const Intro = () => {
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // remove the previous handler using return function
    };
  }, []);

  return isMdUp ? <IntroMdUp /> : <IntroSmDown />;
};

export default Intro;
