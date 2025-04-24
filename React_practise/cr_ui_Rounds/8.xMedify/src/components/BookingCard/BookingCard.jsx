// import React, { useState } from "react";
// import styles from "./BookingCard.module.css";
// import hospitalImg from "../../assets/hospital.png";
// import Button from "../Button/Button";
// import TimingBlock from "../TimingBlock/TimingBlock";
// import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// const BookingCard = ({ Name, City, State, Rating }) => {
//   const [activeTab, setActiveTab] = useState(null); //  Initially no tab is selected

//   const handleDateClick = (index) => {};

//   return (
//     <section className={styles.cardContainer}>
//       <div className={styles.card}>
//         {/* Left: Image */}
//         <div className={styles.leftSection}>
//           <div className={styles.imageWrapper}>
//             <img
//               src={hospitalImg}
//               alt="hospital"
//               className={styles.hospitalImg}
//             />
//             <span className={styles.tick}>✔</span>
//           </div>
//         </div>

//         {/* Center: Hospital Info */}
//         <div className={styles.middleSection}>
//           <h3 className={styles.title}>{Name}</h3>
//           <p className={styles.location}>
//             <strong>
//               {City}, {State}
//             </strong>
//           </p>
//           <p className={styles.description}>
//             Smilessence Center for Advanced Dentistry + 1 more
//           </p>
//           <p className={styles.fee}>
//             <span className={styles.free}>FREE</span>
//             <span className={styles.strike}> ₹500</span> Consultation fee at
//             clinic
//           </p>
//           <div className={styles.rating}>
//             👍 <span>{Rating}</span>
//           </div>
//         </div>

//         {/* Right: Availability + Button */}
//         <div className={styles.rightSection}>
//           <p className={styles.available}>Available Today</p>
//           <Button
//             width="250px"
//             height="45px"
//             background="var(--color-primary)"
//             aria-label="Book Center"
//           >
//             Book FREE Center Visit
//           </Button>
//         </div>
//       </div>

//       {/* ---------Below is booking time selecter------- */}
//       <div style={{ display: "" }} className={styles.tabContainer}>
//         <div className={styles.tabSwitchContainer}>
//           <div className={styles.arrow} onClick="">
//             <FaCircleChevronLeft />
//           </div>
//           {/* individual Timing */}
//           <div className={styles.tabSwitch} onClick={handleDateClick}>
//             <h4>Today</h4>
//             <span>11 Slots Available</span>
//           </div>
//           <div className={styles.tabSwitch} onClick={handleDateClick}>
//             <h4>Tomorrow</h4>
//             <span>17 Slots Available</span>
//           </div>
//           <div className={styles.tabSwitch} onClick={handleDateClick}>
//             <h4>Fri, 5 May</h4>
//             <span>19 Slots Available</span>
//           </div>

//           {/* individual Timing */}
//           <div className={styles.arrow} onClick="">
//             <FaCircleChevronRight />
//           </div>
//         </div>

//         {/*  This is the tracker line which will move*/}
//         <div className={styles.dateTrackerLine}></div>

//         {/* tHIS IS the grid layout of all the times and shifts */}
//         <div className={styles.tabContainerTiming}>
//           {/* <div> Morning</div>
//           <div>Afternooon</div>
//           <div>Evening</div> */}

//           <div className={styles.row1}>
//             <div> Morning</div>
//             <TimingBlock time="11:30AM"></TimingBlock>
//           </div>
//           <div className={styles.row1}>
//             <div>Afternooon</div>
//             <TimingBlock time="12:00PM"></TimingBlock>
//             <TimingBlock time="12:30PM"></TimingBlock>
//             <TimingBlock time="01:30PM"></TimingBlock>
//             <TimingBlock time="02:00PM"></TimingBlock>
//             <TimingBlock time="02:30PM"></TimingBlock>
//           </div>
//           <div className={styles.row1}>
//             <div>Evening</div>
//             <TimingBlock time="06:00PM"></TimingBlock>
//             <TimingBlock time="06:30PM"></TimingBlock>
//             <TimingBlock time="07:00PM"></TimingBlock>
//             <TimingBlock time="07:30PM"></TimingBlock>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingCard;
// -------------------2nd version of doing this (adding carousel and mui tabs) --------------------
// -----------------------------------
// -----------------------------------
// import React, { useState } from "react";
// import styles from "./BookingCard.module.css";
// import hospitalImg from "../../assets/hospital.png";
// import Button from "../Button/Button";
// import TimingBlock from "../TimingBlock/TimingBlock";
// import CarouselMUI from "../CarouselMUI/CarouselMUI";

// const BookingCard = ({
//   Name,
//   City,
//   State,
//   Rating,
//   handleDateClick,
//   handleTime,
// }) => {
//   const [timeVal, setTimeVal] = useState(null);
//   // const [dateVal, setDateVal] = useState(null);
//   const [isSelected, setIsSelected] = useState(false); // state for button color
//   const [btnToggler, setBtnToggler] = useState(false);

//   // const handleDateClick = (currentDate) => {
//   //   // console.log(currentDate);
//   //   setDateVal(currentDate);
//   // };
//   const handleTimeClick = (e) => {
//     // console.log(e.target.innerText);
//     setTimeVal(e.target.innerText);
//     handleTime(e.target.innerText);
//   };

//   const handleBtnClick = () => {
//     setBtnToggler(!btnToggler);
//     // console.log(btnToggler);
//     /* console.log here will give old value for latest
//      value  use the useEffect hook and log inside it
//      */
//   };

//   const afternoon = ["12:00PM", "12:30PM", "01:30PM", "02:00PM", "02:30PM"];
//   const evening = ["06:00PM", "06:30PM", "07:00PM", "07:30PM"];

//   return (
//     <>
//       <section className={styles.cardContainer}>
//         <div className={styles.card}>
//           {/* Left: Image */}
//           <div className={styles.leftSection}>
//             <div className={styles.imageWrapper}>
//               <img
//                 src={hospitalImg}
//                 alt="hospital"
//                 className={styles.hospitalImg}
//               />
//               <span className={styles.tick}>✔</span>
//             </div>
//           </div>

//           {/* Center: Hospital Info */}
//           <div className={styles.middleSection}>
//             <h3 className={styles.title}>{Name}</h3>
//             <p className={styles.location}>
//               <strong>
//                 {City}, {State}
//               </strong>
//             </p>
//             <p className={styles.description}>
//               Smilessence Center for Advanced Dentistry + 1 more
//             </p>
//             <p className={styles.fee}>
//               <span className={styles.free}>FREE</span>
//               <span className={styles.strike}> ₹500</span> Consultation fee at
//               clinic
//             </p>
//             <div className={styles.rating}>
//               👍 <span>{Rating}</span>
//             </div>
//           </div>

//           {/* Right: Availability + Button */}
//           {/* <div className={styles.rightSection} > */}
//           <div
//             className={`${styles.rightSection} ${
//               btnToggler ? styles.rightSectionpad : ""
//             } `}
//           >
//             <p className={styles.available}>Available Today</p>
//             <Button
//               width="250px"
//               height="45px"
//               background="var(--color-primary)"
//               aria-label="Book Center"
//               handleBtnClick={handleBtnClick}
//             >
//               {!btnToggler ? "Book FREE Center Visit" : "Hide Booking Calendar"}
//             </Button>
//           </div>
//         </div>

//         {/* ---------Below is booking Date selecter------- */}
//         <div
//           style={{ display: !btnToggler ? "none" : "" }}
//           className={styles.tabContainer}
//         >
//           <div className={styles.tabSwitchContainer}>
//             {/* <Box sx={{ width: "100%" }}>
//             <Tabs
//               sx={{ width: "100%" }}
//               value={value}
//               onChange={(e, newValue) => setValue(newValue)}
//               variant="fullWidth"
//             >
//               <Tab
//                 label={
//                   <div
//                     onClick={() => handleDateClick(0)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <h4>Today</h4>
//                     <span>10 Slots Available</span>
//                   </div>
//                 }
//               />
//               <Tab
//                 label={
//                   <div
//                     onClick={() => handleDateClick(0)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <h4>Today</h4>
//                     <span>10 Slots Available</span>
//                   </div>
//                 }
//               />
//               <Tab
//                 label={
//                   <div
//                     onClick={() => handleDateClick(0)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <h4>Today</h4>
//                     <span>10 Slots Available</span>
//                   </div>
//                 }
//               />
//             </Tabs>
//           </Box> */}

//             {/* Time carousel and mui tabs */}
//             <CarouselMUI handleClick={handleDateClick}></CarouselMUI>
//             {/* Time carousel and mui tabs */}
//           </div>

//           {/* tHIS IS the grid layout of all the times and shifts */}
//           <div className={styles.tabContainerTiming}>
//             {/* Morning */}
//             <div className={styles.row1}>
//               <div>
//                 <p>Morning</p>
//               </div>
//               <TimingBlock
//                 time="11:30AM"
//                 handleTimeClick={handleTimeClick}
//                 isSelected={timeVal === "11:30AM"} // check kro ki kya ye clicked hai tab hi apply color style
//               ></TimingBlock>
//             </div>
//             {/* Afternoon */}
//             <div className={styles.row1}>
//               <div>
//                 <p>Afternoon</p>
//               </div>
//               {/* <TimingBlock time="12:00PM"></TimingBlock>
//             <TimingBlock time="12:30PM"></TimingBlock>
//             <TimingBlock time="01:30PM"></TimingBlock>
//             <TimingBlock time="02:00PM"></TimingBlock>
//             <TimingBlock time="02:30PM"></TimingBlock> */}

//               {afternoon.map((curr, i) => (
//                 <TimingBlock
//                   key={i}
//                   time={curr}
//                   handleTimeClick={handleTimeClick}
//                   isSelected={timeVal === curr} // check kro ki kya ye clicked hai tab hi apply color style
//                 ></TimingBlock>
//               ))}
//             </div>
//             {/* Evening */}
//             <div className={styles.row1}>
//               <div>
//                 <p>Evening</p>
//               </div>
//               {evening.map((curr, i) => (
//                 <TimingBlock
//                   key={i}
//                   time={curr}
//                   handleTimeClick={handleTimeClick}
//                   isSelected={timeVal === curr} // check kro ki kya ye clicked hai tab hi apply color style
//                 ></TimingBlock>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BookingCard;

// ------version 3 (making it reusable for the booking page)-----------

import React, { useState } from "react";
import styles from "./BookingCard.module.css";
import hospitalImg from "../../assets/hospital.png";
import Button from "../Button/Button";
import TimingBlock from "../TimingBlock/TimingBlock";
import CarouselMUI from "../CarouselMUI/CarouselMUI";

const BookingCard = ({
  index,
  Name,
  City,
  hospitalData,
  State,
  Rating,
  handleDateClick,
  handleTime,
  handleHospitalSelect,
  hideInfo = "show",
}) => {
  const [timeVal, setTimeVal] = useState(null);
  // const [dateVal, setDateVal] = useState(null);
  const [isSelected, setIsSelected] = useState(false); // state for button color
  const [btnToggler, setBtnToggler] = useState(false);

  // const handleDateClick = (currentDate) => {
  //   // console.log(currentDate);
  //   setDateVal(currentDate);
  // };
  const handleTimeClick = (e) => {
    // console.log(e.target.innerText);
    setTimeVal(e.target.innerText);
    handleTime(e.target.innerText);
  };

  const handleBtnClick = () => {
    setBtnToggler(!btnToggler);
    // console.log(btnToggler);
    /* console.log here will give old value for latest
     value  use the useEffect hook and log inside it
     */

    //  WHENT the button gets clicked pass the current hospital index here to parent.

    handleHospitalSelect(index);
  };

  const afternoon = ["12:00PM", "12:30PM", "01:30PM", "02:00PM", "02:30PM"];
  const evening = ["06:00PM", "06:30PM", "07:00PM", "07:30PM"];

  return (
    <>
      <section className={styles.cardContainer}>
        <div className={styles.card}>
          {/* Left: Image */}
          <div className={styles.leftSection}>
            <div className={styles.imageWrapper}>
              <img
                src={hospitalImg}
                alt="hospital"
                className={styles.hospitalImg}
              />
              <span className={styles.tick}>✔</span>
            </div>
          </div>

          {/* Center: Hospital Info */}
          <div className={styles.middleSection}>
            <h3 className={styles.title}>{Name}</h3>
            <p className={styles.location}>
              <strong>
                {City},{State}
              </strong>
            </p>
            <p className={styles.description}>
              Smilessence Center for Advanced Dentistry + 1 more
            </p>
            <p className={styles.fee}>
              <span className={styles.free}>FREE</span>
              <span className={styles.strike}> ₹500</span> Consultation fee at
              clinic
            </p>
            <div className={styles.rating}>
              👍 <span>{Rating}</span>
            </div>
          </div>

          {/* Right: Availability + Button */}
          {/* <div className={styles.rightSection} > */}

          {/* If it is being render from else where then this */}
          {hideInfo == "show" && (
            <div
              className={`${styles.rightSection} ${
                btnToggler ? styles.rightSectionpad : ""
              } `}
            >
              <p className={styles.available}>Available Today</p>
              <Button
                width="250px"
                height="45px"
                background="var(--color-primary)"
                aria-label="Book Center"
                handleBtnClick={handleBtnClick}
              >
                {!btnToggler
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </div>
          )}

          {/* if  we are rendering from Booking page then show some other button */}

          {hideInfo == "none" && (
            <div className={styles.rightSection2}>
              <Button
                width="80px"
                height="45px"
                background="var(--color-secondary"
                aria-label="Book Time"
              >
                {hospitalData[index].timeVal}
              </Button>

              <Button
                width="120px"
                height="45px"
                background="var(--color-primary)"
                aria-label="Book Date"
              >
                {hospitalData[index].dateVal}
              </Button>
            </div>
          )}
        </div>

        {/* ---------Below is booking Date selecter------- */}
        <div
          style={{ display: !btnToggler ? "none" : "" }}
          className={styles.tabContainer}
        >
          <div className={styles.tabSwitchContainer}>
            {/* <Box sx={{ width: "100%" }}>
            <Tabs
              sx={{ width: "100%" }}
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
              variant="fullWidth"
            >
              <Tab
                label={
                  <div
                    onClick={() => handleDateClick(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <h4>Today</h4>
                    <span>10 Slots Available</span>
                  </div>
                }
              />
              <Tab
                label={
                  <div
                    onClick={() => handleDateClick(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <h4>Today</h4>
                    <span>10 Slots Available</span>
                  </div>
                }
              />
              <Tab
                label={
                  <div
                    onClick={() => handleDateClick(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <h4>Today</h4>
                    <span>10 Slots Available</span>
                  </div>
                }
              />
            </Tabs>
          </Box> */}

            {/* Time carousel and mui tabs */}
            <CarouselMUI handleClick={handleDateClick}></CarouselMUI>
            {/* Time carousel and mui tabs */}
          </div>

          {/* tHIS IS the grid layout of all the times and shifts */}
          <div className={styles.tabContainerTiming}>
            {/* Morning */}
            <div className={styles.row1}>
              <div>
                <p>Morning</p>
              </div>
              <TimingBlock
                time="11:30AM"
                handleTimeClick={handleTimeClick}
                isSelected={timeVal === "11:30AM"} // check kro ki kya ye clicked hai tab hi apply color style
              ></TimingBlock>
            </div>
            {/* Afternoon */}
            <div className={styles.row1}>
              <div>
                <p>Afternoon</p>
              </div>
              {/* <TimingBlock time="12:00PM"></TimingBlock>
            <TimingBlock time="12:30PM"></TimingBlock>
            <TimingBlock time="01:30PM"></TimingBlock>
            <TimingBlock time="02:00PM"></TimingBlock>
            <TimingBlock time="02:30PM"></TimingBlock> */}

              {afternoon.map((curr, i) => (
                <TimingBlock
                  key={i}
                  time={curr}
                  handleTimeClick={handleTimeClick}
                  isSelected={timeVal === curr} // check kro ki kya ye clicked hai tab hi apply color style
                ></TimingBlock>
              ))}
            </div>
            {/* Evening */}
            <div className={styles.row1}>
              <div>
                <p>Evening</p>
              </div>
              {evening.map((curr, i) => (
                <TimingBlock
                  key={i}
                  time={curr}
                  handleTimeClick={handleTimeClick}
                  isSelected={timeVal === curr} // check kro ki kya ye clicked hai tab hi apply color style
                ></TimingBlock>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingCard;
