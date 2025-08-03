// import React, { useState } from "react";
// import hiringImage from "../../assets/Images/hiring.png";
// import hiringImage2 from "../../assets/Images/hiring2.png";
// import DropDownButton from "../../components/Button/DropDownButton";
// // import "../App.css";

// const Hirings = () => {
//   const [selectedJobType, setSelectedJobType] = useState("");

//   const handleJobTypeSelect = (jobType) => {
//     setSelectedJobType(jobType);
//   };

//   const careerStyle = {
//     backgroundImage: "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
//     WebkitBackgroundClip: "text",
//     color: "transparent",
//   };

//   return (
//     <div id="hiring" className="conatiner mx-auto pt-36">
//       <div className="flex flex-col text-white items-center">
//         <div className=" flex flex-col items-center">
//           <p className="font-nephilm font-normal text-[25px] sm:text-[35px] md:text-[40px]">
//             Start your <span style={careerStyle}>Career </span>.
//           </p>

//           <h1
//             className=" text-center text-[26px] dxs:text-[32px] sm1:text-[40px] sm:text-[55px] md:text-[60px] lg:text-[72px] font-bold"
//             id="Adventure"
//           >
//             Adventure Right Here
//           </h1>
//         </div>

//         <div className="">
//           <DropDownButton onJobTypeSelect={handleJobTypeSelect} />
//         </div>

//         <div className="">
//           {selectedJobType === "UI/UX Designer" ? (
//             <img src={hiringImage2} alt="Hiring" />
//           ) : (
//             <img src={hiringImage} alt="Hiring" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hirings;

// -----------new hiring one-----------

// import { useState } from "react";
// import hiringImage from "../../assets/Images/hiring.png";
// import hiringImage2 from "../../assets/Images/hiring2.png";

// import hiringSm1 from "../../assets/Images/hiringSm1.png";
// import hiringSm2 from "../../assets/Images/hiringSm2.png";

// import DropDownButton from "../../components/Button/DropDownButton";

// const Hirings = () => {
//   const [selectedJobType, setSelectedJobType] = useState("");
//   // ek aur state daal de check krne ke liye ki konsa state hai yaha

//   const handleJobTypeSelect = (jobType) => {
//     setSelectedJobType(jobType);
//   };

//   const careerStyle = {
//     backgroundImage: "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
//     WebkitBackgroundClip: "text",
//     color: "transparent",
//   };

//   return (
//     <div id="hiring" className="container mx-auto pt-36">
//       <div className="flex flex-col text-white items-center">
//         <div className="flex flex-col items-center">
//           <p className="font-nephilim font-normal text-[25px] sm:text-[35px] md:text-[40px]">
//             Start your <span style={careerStyle}>Career</span>.
//           </p>
//           <h1
//             className="text-center text-[26px] dxs:text-[32px] sm1:text-[40px] sm:text-[55px] md:text-[60px] lg:text-[72px] font-bold"
//             id="Adventure"
//           >
//             Adventure Right Here
//           </h1>
//         </div>

//         <div className="">
//           <DropDownButton onJobTypeSelect={handleJobTypeSelect} />
//         </div>

//         <div className="">
//           {selectedJobType === "UI/UX Designer" ? (
//             <img src={hiringImage2} alt="Hiring" />
//           ) : (
//             <img src={hiringImage} alt="Hiring" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hirings;

// --------------new one bhagwan ke bharose-------

import { useState, useEffect } from "react";
import hiringImage from "../../assets/Images/hiring.png";
import hiringImage2 from "../../assets/Images/hiring2.png";

import hiringSm1 from "../../assets/Images/hiringSm1.png";
import hiringSm2 from "../../assets/Images/hiringSm2.png";

import DropDownButton from "../../components/Button/DropDownButton";

const Hirings = () => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleJobTypeSelect = (jobType) => {
    setSelectedJobType(jobType);
  };

  const careerStyle = {
    backgroundImage: "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    // <div id="hiring" className="container mx-auto pt-36">
    <div id="hiring" className=" pt-36">
      <div className="flex flex-col text-white items-center">
        <div className="flex flex-col items-center">
          <p className="font-nephilim font-normal text-[25px] sm:text-[35px] md:text-[40px]">
            Start your <span style={careerStyle}>Career</span>.
          </p>

          <div className="relative border-t border-white w-full sm:w-3/4 mt-4 mx-auto mb-2">
            <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
            <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
          </div>
          <h1
            className="text-center text-[26px] dxs:text-[32px] sm1:text-[40px] sm:text-[55px] md:text-[60px] lg:text-[72px] font-bold mb-2"
            id="Adventure"
          >
            Adventure Right Here
          </h1>
        </div>

        <div className="">
          <DropDownButton onJobTypeSelect={handleJobTypeSelect} />
        </div>

        <div className="">
          {isSmallScreen ? (
            selectedJobType === "UI/UX Designer" ? (
              <img src={hiringSm2} alt="Hiring" className="w-[100vw]" />
            ) : (
              <img src={hiringSm1} alt="Hiring" className="w-[100vw] " />
            )
          ) : selectedJobType === "UI/UX Designer" ? (
            <img src={hiringImage2} alt="Hiring" />
          ) : (
            <img src={hiringImage} alt="Hiring" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hirings;
