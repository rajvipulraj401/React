// import React from "react";

// const LoremIpsum = ({ width = "100px", height = "50px" }) => {
//   return (
//     <div
//       className="bg-gray-500 opacity-[0.6] flex items-center justify-center rounded-[4px] font-normal text-center"
//       style={{
//         width: width,
//         height: height,
//         clipPath:
//           "polygon(8% 0%, 100% 0%, 100% 85%, 92% 100%, 0% 100%, 0% 15%)",
//       }}
//     >
//       <div className="text-white text-left">
//         <h2 className="text-[14px] sm:text-[18px] xl:text-[20px] ">
//           Lorem Ipsum
//         </h2>
//         <p className="text-[12px] sm:text-[14px] xl:text-[16px] ">
//           lorem ipsum
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoremIpsum;

// --------------new Lorem component ----

import React from "react";

const LoremIpsum = ({ width = "130px", height = "70px", className = "" }) => {
  return (
    <div
      className={`bg-gray-500 opacity-[0.6] flex items-center justify-center rounded-[4px] font-normal text-center ${className}`}
      style={{
        width: width,
        height: height,
        clipPath:
          "polygon(8% 0%, 100% 0%, 100% 85%, 92% 100%, 0% 100%, 0% 15%)",
      }}
    >
      <div className="text-white text-left">
        <h2 className="text-[14px] sm:text-[18px] xl:text-[20px] ">
          Lorem Ipsum
        </h2>
        <p className="text-[12px] sm:text-[14px] xl:text-[16px] ">
          lorem ipsum
        </p>
      </div>
    </div>
  );
};

export default LoremIpsum;
