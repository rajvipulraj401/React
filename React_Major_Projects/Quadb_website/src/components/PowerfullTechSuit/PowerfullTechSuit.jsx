// -------------------working one-----------

// import { useEffect, useState, useRef } from "react";
// import gif from "../../assets/Images/blackCircle.gif";
// import Card from "./Card";
// import Button from "../Button/Button";

// const PowerfullTechSuitMdUp = () => {
//   const [hoveredArea, setHoveredArea] = useState(null);
//   const [hoveredAreas, setHoveredAreas] = useState([]);
//   const containerRef = useRef(null);

//   const background = {
//     backgroundImage: `url(${gif})`,
//     height: "100vh",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//   };

//   const textGradient = {
//     background: "linear-gradient(90deg, #F0F600 0%, #00A8AA 104%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     textFillColor: "transparent",
//   };

//   const cards = [
//     {
//       name: "Restaurant POS",
//       content:
//         "A Point of Sale for the Restaurant to ease the process of taking orders. Not just a POS, this package contains management of kitchen, inventory as well as an Admin dashboard. Along with this, a personalized mobile application for Dine In orders and Take Away orders is also available.",
//     },
//     {
//       name: "HRM",
//       content:
//         "A Human Resource Management system to handle employee-related tasks efficiently. This package includes payroll management, attendance tracking, and performance evaluation tools. It also offers an employee self-service portal for seamless interaction.",
//     },
//     {
//       name: "CMS",
//       content:
//         "A Content Management System (CMS) that can help you write and schedule blogs for your website. It is easily integratable on any existing website and is SEO friendly, helping you boost your visibility on search engines. Alongside this, you would also be able to manage your creators.",
//     },
//     {
//       name: "CRM",
//       content:
//         "A Customer Relationship Management software that can help your sales team be more efficient and ensure they never miss a follow-up. It has features such as reminder of the events, scheduling of the events as well as metrics to track employee performance with his activity.",
//     },
//   ];

//   const handleMouseMove = (e) => {
//     const container = containerRef.current;
//     if (container) {
//       const rect = container.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const area = getHoveredArea(x, y, rect);
//       if (area && !hoveredAreas.includes(area)) {
//         setHoveredAreas((prev) => [...prev, area]);
//       }
//       setHoveredArea(area);
//     }
//   };

//   const getHoveredArea = (x, y, rect) => {
//     if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
//       return null;
//     } else if (x < rect.width / 2 && y < rect.height / 2) {
//       return "top-left";
//     } else if (x >= rect.width / 2 && y < rect.height / 2) {
//       return "top-right";
//     } else if (x < rect.width / 2 && y >= rect.height / 2) {
//       return "bottom-left";
//     } else if (x >= rect.width / 2 && y >= rect.height / 2) {
//       return "bottom-right";
//     }
//     return null;
//   };

//   const renderCard = (position, index) => {
//     const card = cards[index];
//     const isVisible =
//       hoveredArea === position || hoveredAreas.includes(position);

//     return (
//       <div
//         className={`item ${position} ${isVisible ? "visible" : ""}`}
//         key={index}
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.3s ease-in-out",
//           position: "absolute",
//           top: position.includes("top") ? 0 : "50%",
//           left: position.includes("left") ? 0 : "50%",
//           width: "50%",
//           height: "50%",
//         }}
//       >
//         <Card name={card.name} content={card.content} />
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="text-white pt-16 overflow-hidden mx-[9%]">
//         <div className="flex flex-col justify-center items-center gap-3">
//           <div className="flex flex-col justify-center items-center gap-2 text-center">
//             <h1 className="leading-[50px] md:leading-[67.2px] text-[38px] md2:text-[42px] lg:text-[48px] font-normal font-nephilm">
//               driven by <span className="text-[#F0F600]">data.</span> fueled by{" "}
//               <span style={textGradient}>passion.</span>
//             </h1>
//             <div className="relative w-full md:w-[90%] border-t border-white mt-2 md:mt-4">
//               <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
//               <div className="absolute w-2 h-2 bg-white top-[-5px] right-0 rounded-full" />
//             </div>
//           </div>
//           <h1 className="leading-[50px] md:leading-[67.2px] text-[32px] md:text-[48px] font-bold font-proxima">
//             A Powerful Tech Suite
//           </h1>
//           <p className="text-center text-[16px] md:text-[18px] leading-[24px] font-normal font-proxima">
//             Contact us in case you require any of the below tools
//           </p>
//         </div>

//         <div
//           className="mt-8 relative"
//           style={background}
//           onMouseMove={handleMouseMove}
//           ref={containerRef}
//         >
//           {renderCard("top-left", 0)}
//           {renderCard("top-right", 1)}
//           {renderCard("bottom-left", 2)}
//           {renderCard("bottom-right", 3)}
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <Button name="BOOK A DEMO" />
//       </div>
//     </>
//   );
// };

// new one after adding animation 29 july--------

import { useEffect, useState, useRef } from "react";
import gif from "../../assets/Images/blackCircle.gif";
import Card from "./Card";
import Button from "../Button/Button";
import "../../App.css";

const PowerfullTechSuitMdUp = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [hoveredAreas, setHoveredAreas] = useState([]);
  const containerRef = useRef(null);

  const background = {
    backgroundImage: `url(${gif})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  const textGradient = {
    background: "linear-gradient(90deg, #F0F600 0%, #00A8AA 104%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };

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
      name: "CRM",
      content:
        "A Customer Relationship Management software that can help your sales team be more efficient and ensure they never miss a follow-up. It has features such as reminder of the events, scheduling of the events as well as metrics to track employee performance with his activity.",
    },
  ];

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
        className={`item ${position} ${isVisible ? "visible" : ""}`}
        key={index}
        style={{
          position: "absolute",
          top: position.includes("top") ? 0 : "50%",
          left: position.includes("left") ? 0 : "50%",
          width: "50%",
          height: "50%",
        }}
      >
        <Card name={card.name} content={card.content} />
      </div>
    );
  };

  return (
    <>
      <div className="text-white pt-16 mx-[9%] overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <h1 className="leading-[50px] md:leading-[67.2px] text-[38px] md2:text-[42px] lg:text-[48px] font-normal font-nephilm">
              driven by <span className="text-[#F0F600]">data.</span> fueled by{" "}
              <span style={textGradient}>passion.</span>
            </h1>
            <div className="relative w-full md:w-[90%] border-t border-white mt-2 md:mt-4">
              <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
              <div className="absolute w-2 h-2 bg-white top-[-5px] right-0 rounded-full" />
            </div>
          </div>
          <h1 className="leading-[50px] md:leading-[67.2px] text-[32px] md:text-[48px] font-bold font-proxima">
            A Powerful Tech Suite
          </h1>
          <p className="text-center text-[16px] md:text-[18px] leading-[24px] font-normal font-proxima">
            Contact us in case you require any of the below tools
          </p>
        </div>

        <div
          className="mt-8 relative"
          style={background}
          onMouseMove={handleMouseMove}
          ref={containerRef}
        >
          {renderCard("top-left", 0)}
          {renderCard("top-right", 1)}
          {renderCard("bottom-left", 2)}
          {renderCard("bottom-right", 3)}
        </div>
      </div>

      <div className="flex justify-center">
        <Button name="BOOK A DEMO" />
      </div>
    </>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const PowerfullTechSuitSmDown = () => {
  const [activeCircle, setActiveCircle] = useState(0);

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

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveCircle(swiperRef.current.swiper.realIndex);
    }
  };

  return (
    <div className="text-white mt-12 container mx-auto">
      <div className="flex flex-col items-center h-auto xxs:mb-5 sm1:mb-10 mt-5 sm1:mt-7">
        <h3 className="font-nephilm text-[18px] xxs:text-[20px] sm1:text-[24px] sm:text-[30px] leading-[67.2px] tracking-[0.02em] text-center">
          driven by <span className="text-[#F0F600]"> data </span>fueled by
          <span className="text-green-500"> passion.</span>
        </h3>
        <div className="relative border-t border-white w-10/12 mx-auto mb-0 sm1:mb-4">
          <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
          <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
        </div>
        <h2 className="text-3xl sm1:text-4xl sm:text-5xl font-bold leading-[67.2px] tracking-tight ss:tracking-[0.025em] sm1:tracking-[0.04em] text-center">
          A Powerful Tech Suite
        </h2>
      </div>
      <div
        className="bg-no-repeat bg-center py-12"
        style={{ backgroundImage: `url(${gif})` }}
      >
        <div className="flex justify-center items-center">
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true, el: '.custom-pagination' }}
            autoplay={{ delay: 4000 }}
            modules={[Navigation, Pagination, Autoplay]}
            onSlideChange={handleSlideChange}
            loop={true}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className=" flex justify-center items-center mx-auto">
                  <Card name={card.name} content={card.content} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-2 mt-6 transform -translate-y-1/2 z-10">
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className=""
            >
              <IoIosArrowDropleft size={28} />
            </button>
          </div>
          <div className="absolute mt-6 right-2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className=""
            >
              <IoIosArrowDropright size={28} />
            </button>
          </div>
        </div>
        <div className="row3 relative justify-center items-center flex gap-5 custom-pagination">
          {cards.map((_, index) => (
            <div key={index} className="relative">
              <div
                className={`sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] rounded-[50%] ${
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
                  className={`w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-[50%] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeCircle === index ? "visible" : "invisible"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Button name={"BOOK A DEMO"} />
      </div>
    </div>
  );
};

const PowerfullTechSuit = () => {
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

  return isMdUp ? <PowerfullTechSuitMdUp /> : <PowerfullTechSuitSmDown />;
};

export default PowerfullTechSuit;
