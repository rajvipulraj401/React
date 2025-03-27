// import React, { useState, useEffect } from "react";
// import logo from "../../assets/Images/logo.png";
// import footerImg from '../../assets/Images/crisCross.png';
// import "../../App.css";
// import { Link, useLocation } from "react-router-dom";

// const FooterMdUp = () => {
//   const { hash } = useLocation;
//   useEffect(() => {
//       if (hash) {
//         const element = document.getElementById(hash.substring(1));
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//   }, [hash]);
//   return (
//     <div className="relative mt-24 overflow-hidden max-w-[1700px] mx-auto">
//       <div
//         className="absolute inset-0 border-t border-transparent gradient-border"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           paddingTop: "1px",
//           background: "linear-gradient(90deg, #F0F6001A, #74E70266, #88FF121A)",
//           WebkitMask:
//             "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//           pointerEvents: "none",
//         }}
//       />
//       <div className="flex flex-col items-center w-full pt-10 bg-gradient-to-r from-neutral-950 from-10% via-neutral-900 via-35% to-neutral-950 to-80%">
//         <div className="mdUp-ImgandHeading flex pb-7 w-full justify-center flex-col sm:flex-row items-center">
//           <a href="#" className="mr-4 mt-[-10px]">
//             <img src={logo} width="220px" height="10px" alt="QB_Logo" />
//           </a>
//           <p className="text-white w-[90%] sm:w-[65%] font-nephilm font-normal text-[16px] sm:text-[20px] text-center sm:text-left mt-4 sm:mt-0">
//             From
//             <span className="text-yellow-400"> empowering challenger</span>{" "}
//             brands to think out of the
//             <span
//               style={{
//                 backgroundImage:
//                   "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               {` usual to helping global brands`}
//             </span>
//             feel closer to home, we leverage technology in a way that brings
//             people closer to products, content, and experiences they love.
//           </p>
//         </div>

//         <div className="mdUp-leftTextRightIMg flex  lg:flex-row lg:justify-between  xl:justify-center 2xl:w-full lg:w-full lg:pb-10">
//           <div className="mdUp-leftText text-white h-[200px] 2xl:w-[100%] xl:w-[75%] lg:w-[100%]">
//             <div className="font-proxima mdUp-LeftAboveText list-none flex sm:gap-5 gap-10 flex-wrap items-center justify-center h-auto sm:h-[100px] w-full lg:relative lg:right-[24px] xl:static  lg:gap-[30px] xl:gap-[45px] xl:ml-[-30px] 2xl:ml-0 text-[18px] xl:text-[20px] 2xl:text-[24px] py-4">
//               <Link to={'/#aboutus'}><li>About Us</li></Link>
//               <div className="h-1/2 bg-white w-[1.5px]" />
//               <Link to={'/#portfolio'}><li>Portfolio</li></Link>
//               <div className="h-1/2 bg-white w-[1.5px]" />
//               <Link to={'/contactus'}><li>Contact Us</li></Link>
//               <div className="h-1/2 bg-white w-[1.5px]" />
//               <Link to={'/hiring'}><li>Hirings</li></Link>
//             </div>

//             <div className="my-2 h-[1px] bg-white flex justify-between align-middle mx-auto lg:w-[75%] xl:w-[75%]">
//               <div className="h-1 w-1 rounded-lg bg-white translate-y-[-50%]" />
//               <div className="h-1 w-1 rounded-lg bg-white translate-y-[-50%]" />
//             </div>

//             <div className="mdUp-LeftBelowText list-none flex flex-wrap gap-2 items-center justify-center h-auto sm:h-[70px] w-full py-8 text-[20px] 2xl:text-[24px] sm:py-2 2xl:ml-[210px] xl:ml-[130px] lg:ml-[145px]">
//               <li className="2xl:text-[30px] xl:text-[25px] text-[20px] 2xl:pr-[15px] xl:pr-[5px] lg:pr-[5px] font-nephilm font-normal">
//                 Let's Meet
//               </li>
//               <div className="h-1/2 bg-white w-[1.5px]" />

//               <li
//                 className="font-nephilm text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:px-[5px] xl:px-[10px] 2xl:px-[15px]"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 <a
//                   href="tel:+917206246045"
//                   style={{ color: "inherit", textDecoration: "none" }}
//                 >
//                   +91-7206246045
//                 </a>
//               </li>

//               <div className="h-1/2 bg-white w-[1.5px]" />

//               <li
//                 className="font-nephilm text-[16px]  xl:text-[18px] 2xl:text-[20px] lg:px-[3px] xl:px-[10px] 2xl:px-[15px]"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 <a
//                   href="mailto:sales@quadbtech.com"
//                   style={{ color: "inherit", textDecoration: "none" }}
//                 >
//                   sales@quadbtech.com
//                 </a>
//               </li>

//               <div className="h-1/2 bg-white w-[1.5px]" />
//               <li>
//                 <p className="font-nephilm 2xl:w-[40%] xl:w-[40%] lg:w-[35%] w-[70%] text-[16px] 2xl:text-[20px] lg:pl-[5px] xl:pl-[10px] 2xl:pl-[15px] sm:pt-0 pt-5 italic font-thin">
//                   2nd floor Plot no. 57, Industrial Area Phase I, Chandigarh,
//                   160001
//                 </p>
//               </li>
//             </div>
//           </div>
//           <div className="mdUp-RightImg lg:h-[auto] xl:h-auto lg:w-[25.2%] xl:w-[25%] 2xl:w-[30%] lg:mt-0 lg:relative lg:right-[60px] xl:right-[50px] 2xl:right-[120px] xl:top-[16px] lg:top-[30px] flex justify-center lg:justify-end xl:justify-end">
//             <img
//               src={footerImg}
//               className="w-full"
//               alt="Background"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FooterSmDown = () => {
//   return (
//     <div className="relative py-[0px]">
//       <div
//         className="absolute inset-0 border-t border-transparent gradient-border"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           paddingTop: "1px",
//           background: "linear-gradient(90deg, #F0F6001A, #74E70266, #88FF121A)",
//           WebkitMask:
//             "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//           pointerEvents: "none",
//         }}
//       />
//       <div className="py-4 px-7 flex flex-col items-center w-full bg-gradient-to-r from-neutral-950 from-10% via-neutral-900 via-35% to-neutral-950 to-80%">
//         <div className="ImgandHeading flex pb-7 w-full justify-center flex-col items-center py-7">
//           <a href="#" className="mr-4 mt-[-10px]">
//             <img
//               src={logo}
//               className="w-[130px] sm:w-[160px]"
//               height="10px"
//               alt="QB_Logo"
//             />
//           </a>
//           <p className="font-nephilm text-white font-normal text-[10px] sm:text-[14px] text-center mt-4">
//             From
//             <span className="text-yellow-400 font-light text-[14px]"> empowering challenger </span>{" "}
//             brands to think out of the
//             <span
//               style={{
//                 backgroundImage:
//                   "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               {` usual to helping global brands `}
//             </span>
//             feel closer to home, we leverage technology in a way that brings
//             people closer to products, content, and experiences they love.
//           </p>
//         </div>

//         <div className="list-none flex flex-wrap gap-2 items-center justify-center h-auto w-full">
//           <div className="flex flex-col justify-center items-center py-4 gap-8 w-full text-white">
//             <div className="font-proxima grid grid-cols-2 gap-8 gap-x-12 text-[14px] sm:text-[16px] leading-[22.99px] font-bold items-center text-center">
//               <Link to='/#aboutus'><p>About Us</p></Link>

//               <Link to={'/#portfolio'}><p>Portfolio</p></Link>

//               <div className="ml-[-17px] relative border-t border-white w-[140%]">
//                 <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
//                 <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
//               </div>

//               <div className="ml-[-17px] relative border-t border-white w-[140%]">
//                 <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
//                 <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
//               </div>

//               <Link to={'/contactus'}><p>Contact Us</p></Link>

//               <Link to={'/hiring'}><p>Hirings</p></Link>

//               <div className=" ml-[-17px] relative border-t border-white w-[140%]">
//                 <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
//                 <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
//               </div>

//               <div className="ml-[-17px] relative border-t border-white w-[140%]">
//                 <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
//                 <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
//               </div>
//             </div>

//             <div className="flex flex-col items-center w-full text-center text-[14px] sm:text-[16px] gap-2">
//               <li
//                 className="font-nephilm mt-2"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 <a
//                   href="tel:+917206246045"
//                   style={{ color: "inherit", textDecoration: "none" }}
//                 >
//                   +91-7206246045
//                 </a>
//               </li>
//               <li
//                 className="font-nephilm mt-2"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 <a
//                   href="mailto:sales@quadbtech.com"
//                   style={{ color: "inherit", textDecoration: "none" }}
//                 >
//                   sales@quadbtech.com
//                 </a>
//               </li>
//               <li>
//                 <p className="font-nephilm font-thin mt-2">
//                   2nd floor Plot no. 57, Industrial Area Phase I, Chandigarh,
//                   160001
//                 </p>
//               </li>
//             </div>
//           </div>
//           <img
//             src={footerImg}
//             className="w-full"
//             alt="Background"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Footer = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {screenWidth >= 768 ? <FooterMdUp /> : <FooterSmDown />}
//     </>
//   );
// };

// export default Footer;

// ---------------👀👀new footer match from above and see how muc time it took -----

import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/logo.png";
import footerImg from "../../assets/Images/crisCross.png";
import "../../App.css";
import { Link, useLocation } from "react-router-dom";

const FooterMdUp = () => {
  const { hash } = useLocation;
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative mt-24 overflow-hidden">
      <div
        className="absolute inset-0 border-t border-transparent gradient-border"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          paddingTop: "1px",
          background: "linear-gradient(90deg, #F0F6001A, #74E70266, #88FF121A)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
      <div className="flex flex-col items-center w-full pt-10 bg-gradient-to-r from-neutral-950 from-10% via-neutral-900 via-35% to-neutral-950 to-80%">
        <div className="mdUp-ImgandHeading flex pb-7 w-full justify-center flex-col sm:flex-row items-center">
          <a href="#" className="mr-4 mt-[-10px]">
            <img src={logo} width="220px" height="10px" alt="QB_Logo" />
          </a>
          <p className="text-white w-[90%] sm:w-[65%] font-nephilm font-normal text-[16px] lg:text-[18px]  xl:text-[20px] text-center sm:text-left mt-4 sm:mt-0">
            From
            <span className="text-yellow-400"> empowering challenger</span>{" "}
            brands to think out of the
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {` usual to helping global brands`}
            </span>
            feel closer to home, we leverage technology in a way that brings
            people closer to products, content, and experiences they love.
          </p>
        </div>

        <div className="mdUp-leftTextRightIMg flex  lg:flex-row lg:justify-between  xl:justify-center 2xl:w-full lg:w-full lg:pb-10">
          {/* <div className="mdUp-leftText text-white h-[200px] 2xl:w-[100%] xl:w-[55%] lg:w-[100% ]"> */}
          <div className="mdUp-leftText text-white h-[180px] lg:h-[200px]  relative lg:right-0 mlg:right-[50px] mdg:right-[0px] right-[-20px]">
            {/* <div className="font-proxima mdUp-LeftAboveText list-none flex sm:gap-5 gap-10 flex-wrap items-center justify-center h-auto sm:h-[100px] w-full lg:relative lg:right-[24px] xl:static  lg:gap-[30px] xl:gap-[50px] xl:ml-[-30px] 2xl:ml-0 text-[18px] xl:text-[20px]  py-4"> */}
            <div className="font-proxima mdUp-LeftAboveText list-none flex   flex-wrap items-center justify-center h-auto sm:h-[80px] w-full  xl:static md:gap-[30px]  xlg:gap-[40px]  lg:gap-[30px] xl2:gap-[60px] xl:gap-[45px]  text-[18px] xlg1:text-[20px]  font-bold py-4">
              <Link to={"/#aboutus"}>
                <li>About Us</li>
              </Link>
              <div className="h-1/2 bg-white w-[1.5px]" />
              <Link to={"/#portfolio"}>
                <li>Portfolio</li>
              </Link>
              <div className="h-1/2 bg-white w-[1.5px]" />
              <Link to={"/contactus"}>
                <li>Contact Us</li>
              </Link>
              <div className="h-1/2 bg-white w-[1.5px]" />
              <Link to={"/hiring"}>
                <li>Hirings</li>
              </Link>
            </div>

            {/* <div className="my-2 h-[1px] bg-white flex justify-between align-middle mx-auto lg:w-[62%] xlg:w-[64%] xl:w-[67%]  xl2:w-[69%] xxl:w-[70%]  2xl:w-[68%] "> */}
            <div className="my-2 h-[1px] bg-white flex justify-between align-middle mx-auto lg:w-[73.5%] ">
              <div className="h-1 w-1 rounded-lg bg-white translate-y-[-40%]" />
              <div className="h-1 w-1 rounded-lg bg-white translate-y-[-40%]" />
            </div>

            {/* neeche wala text footer me  */}
            {/* <div className="mdUp-LeftBelowText list-none flex flex-wrap  xl2:gap-2 xlg:gap-[6px] items-center justify-start xlg1:justify-center h-auto sm:h-[70px] xxl:w-full   xl2:w-[80vw]  text-[20px] 2xl:text-[24px] sm:py-2   "> */}
            <div className="mdUp-LeftBelowText list-none flex flex-wrap lg:gap-[10px]  xl2:gap-[22px] md:gap-[6px] xlg:gap-[18px] items-center justify-center h-[70px]  text-[20px] 2xl:text-[24px] sm:py-2  relative left-[10px] lg:left-[20px] xlg:left-[25px] xl:left-[15px] xl2:left-[20px]  ">
              {/* <li className="2xl:text-[26px] xl2:text-[24px] xlg1:text-[23px] text-[22px] 2xl:pr-[15px] xl:pr-[5px] lg:pr-[5px] font-proxima font-normal"> */}
              <li className="2xl:text-[26px] xl2:text-[24px]  text-[22px]  font-proxima font-normal w-fit">
                Let's Meet
              </li>
              <div className="h-1/2 bg-white w-[1.5px]" />

              <li
                // className="font-nephilm text-[16px] lg:text-[16px] xl:text-[18px]  lg:px-[5px] xl:px-[10px] 2xl:px-[15px]"
                className="font-nephilm text-[14px] xlg1:text-[16px] xl2:text-[18px]  w-fit "
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <a
                  href="tel:+917206246045"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +91-7206246045
                </a>
              </li>

              <div className="h-1/2 bg-white w-[1.5px]" />

              <li
                // className="font-nephilm text-[16px]  xl:text-[18px]  lg:px-[3px] xl:px-[10px] 2xl:px-[15px]"
                // className="font-nephilm text-[14px] xlg1:text-[16px] xl2:text-[18px]   lg:px-[3px] xl:px-[10px] 2xl:px-[15px]"
                className="font-nephilm text-[14px] xlg1:text-[16px] xl2:text-[18px]  w-fit"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <a
                  href="mailto:sales@quadbtech.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  sales@quadbtech.com
                </a>
              </li>

              <div className="h-1/2 bg-white w-[1.5px]" />
              <li className="lg:max-w-fit  md:w-[27.25%] lg:w-[20%]">
                {/* <p className="font-nephilm 2xl:w-[40%] xl:w-[40%] lg:w-[35%] w-[70%] text-[14px] xlg1:text-[16px]  lg:pl-[5px] xl:pl-[10px] 2xl:pl-[15px] sm:pt-0 pt-5 italic font-thin"> */}
                {/* <p className="font-nephilm 2xl:w-[40%] xl:w-[40%] lg:w-[35%]   text-[14px] xlg1:text-[16px] xl2:text-[18px]  lg:pl-[5px] xl:pl-[10px] 2xl:pl-[15px] sm:pt-0 pt-5 italic font-thin"> */}

                {/* <p className="font-nephilm  w-fit  text-[14px] xlg1:text-[16px] xl2:text-[18px]  lg:pl-[5px] xl:pl-[10px] 2xl:pl-[15px] sm:pt-0 pt-5 italic font-thin"> */}
                <p className="font-nephilm  w-fit  text-[14px] xlg1:text-[16px] xl2:text-[18px]   italic font-thin">
                  2nd floor Plot no. 57, Industrial Area Phase I, Chandigarh,
                  160001
                </p>
              </li>
            </div>
          </div>

          <div
            // className="mdUp-RightImg lg:h-[auto] md:w-[50%] xlg1:w-[25%] xllg:w-[28%] xl:w-[24%] 2xl:w-[30%] lg:mt-0 lg:relative lg:right-[60px] xl:right-[50px] 2xl:right-[120px] xl:top-[16px] xlg:top-[10px] lg:top-[30px] flex justify-center lg:justify-end xl:justify-end"
            // className="mdUp-RightImg lg:h-[auto] md:w-[50%]  lg:w-[30%] xl:w-[28%] lg:mt-0 lg:relative lg:right-[60px] xl:right-[50px] 2xl:right-[120px] xl:top-[16px] xlg:top-[10px] lg:top-[30px] flex justify-center lg:justify-end xl:justify-end"
            // className="mdUp-RightImg mdg:h-[auto] md:w-[38%] h-[160px] mdg:w-[45%] mt-[20px]   mlg:w-[45%] lg:w-[30%] xl:w-[25%]  mr-[-20px] mdg:mr-[-40px] mlg:mr-[-80px] lg:mr-[0px]  "
            className="mdUp-RightImg xl:h-[220px] md:w-[38%] xg:h-[180px] mdg:w-[45%]    mlg:w-[45%] lg:w-[30%] xl:w-[25%]  mr-[-20px] mdg:mr-[-40px] mlg:mr-[-80px] lg:mr-[0px]  relative lg:right-[20px] xlg:right-[60px]  xl:right-[80px] xl:mt-0 mt-5 "
            // className="mdUp-RightImg mdg:h-[220px] md:w-[38%] h-[160px] mdg:w-[45%]   mlg:w-[45%] lg:w-[30%] xl:w-[25%]   "
            // className="w-[20%] "
            style={{
              backgroundImage: `url(${footerImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* <img src={footerImg} className="w-[20%]" alt="Background" /> */}
        </div>
      </div>
    </div>
  );
};

const FooterSmDown = () => {
  return (
    <div className="relative py-[0px]">
      <div
        className="absolute inset-0 border-t border-transparent gradient-border"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          paddingTop: "1px",
          background: "linear-gradient(90deg, #F0F6001A, #74E70266, #88FF121A)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
      <div className="py-4 px-7 flex flex-col items-center w-full bg-gradient-to-r from-neutral-950 from-10% via-neutral-900 via-35% to-neutral-950 to-80%">
        <div className="ImgandHeading flex pb-7 w-full justify-center flex-col items-center py-7">
          <a href="#" className="mr-4 mt-[-10px]">
            <img
              src={logo}
              className="w-[130px] sm:w-[160px]"
              height="10px"
              alt="QB_Logo"
            />
          </a>
          {/* Logo Img ends here */}
          <p className="font-nephilm w-[100%] sm:w-[98%]  md1:w-[95%] text-white font-normal text-[14px] sm:text-[14px] text-center mt-4">
            From
            <span className="text-yellow-400 font-light text-[14px]">
              {" "}
              empowering challenger{" "}
            </span>{" "}
            brands to think out of the
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {` usual to helping global brands `}
            </span>
            feel closer to home, we leverage technology in a way that brings
            people closer to products, content, and experiences they love.
          </p>
        </div>

        {/* Text aur QuadB logo wala ends here */}

        {/* About us wala se leke last tk starts here */}
        <div className="list-none flex flex-wrap  items-center justify-center h-auto w-full">
          <div className="flex flex-col justify-center items-center py-4 gap-8 w-full text-white">
            {/* All the Links of About us and portfolio here  starts here  */}

            <div
              className="MainDivof4 font-proxima     text-[14px] sm1:text-[14px] xlg1:text-[16px] sm:text-[18px]  
    leading-[22.99px] font-bold   flex flex-col"
            >
              {/* First names */}
              <div className="First2NameContainer flex justify-around">
                <Link to="/#aboutus">
                  <p>About Us</p>
                </Link>

                <Link to={"/contactus"}>
                  <p>Contact Us</p>
                </Link>
              </div>
              {/* line 1 */}
              <div className="LineContainer1 flex w-[90vw] my-3 justify-center gap-6">
                <div className="  relative border-t border-white w-[45%] ">
                  <div className="absolute w-2 h-2 top-[-5PX] left-0 bg-white rounded-full" />
                  <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
                </div>

                <div className="relative border-t border-white w-[45%] ">
                  <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
                  <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
                </div>
              </div>

              {/* Second Names */}
              <div className="Second2NameConatiner flex justify-around">
                <Link to={"/#portfolio"}>
                  <p>Portfolio</p>
                </Link>
                <Link to={"/hiring"}>
                  <p>Hirings</p>
                </Link>
              </div>

              {/* line 2 */}
              <div className="LineContainer2 flex w-[90vw] my-3 justify-center gap-6">
                <div className="  relative border-t border-white w-[45%] ">
                  <div className="absolute w-2 h-2 top-[-5PX] left-0 bg-white rounded-full" />
                  <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
                </div>

                <div className="relative border-t border-white w-[45%] ">
                  <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
                  <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* All the Links of About us and portfolio ENDS here  */}

            <div className="flex   sm1:ml-3  md1:ml-24 sm:pr-5 md1:pr-16 sm:ml-10 dxs:w-full w-[88vw]">
              <div className="text-white flex    flex-col sm:items-center items-start list-none w-full">
                <div className="w-full flex flex-col   flex-wrap ">
                  <li className=" font-proxima font-bold  text-[20px] sm0:text-[21px] sm1:text-[24px]  pb-3">
                    Let's Meet
                  </li>

                  <li
                    className="font-nephilm mt-2"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <a
                      href="tel:+917206246045"
                      style={{ color: "inherit", textDecoration: "none" }}
                      className="text-[14px] sm0:text-[16px]"
                    >
                      +91-7206246045
                    </a>
                  </li>

                  <li>
                    <p className="font-nephilm font-thin  mt-7 text-[14px] sm0:text-[16px] w-[100%] sm0:w-[90%] sm2:w-[68%] sm:w-[60%] ">
                      2nd floor Plot no. 57, Industrial Area Phase I,
                      Chandigarh, 160001
                    </p>
                  </li>
                </div>
              </div>
              <div className="w-full flex justify-end mt-3">
                <img
                  src={footerImg}
                  // className="w-auto h-auto sm:w-[80%] md:h-[80%]"
                  className=" h-auto  w-auto"
                  alt="Background"
                />
              </div>
            </div>
            {/* Ye wo mail wale se pehle ka portion sab hai . */}

            <div className="mt-2 text-center">
              <li
                className="font-nephilm "
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F0F600 -7.65%, #00A8AA 104.96%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <a
                  href="mailto:sales@quadbtech.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  sales@quadbtech.com
                </a>
              </li>
            </div>
          </div>
        </div>

        {/* About us wala se leke last tk ends  here */}
      </div>
    </div>
  );
};

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{screenWidth >= 830 ? <FooterMdUp /> : <FooterSmDown />}</>;
};

export default Footer;
