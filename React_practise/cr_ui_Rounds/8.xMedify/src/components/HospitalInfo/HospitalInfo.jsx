// import React from "react";
// import styles from "./HospitalInfo.module.css";
// import BookingCard from "../BookingCard/BookingCard";
// import AdCard from "../AdCard/AdCard";
// const HospitalInfo = ({ hospitalData, handleDateClick, handleTimeClick }) => {
//   return (
//     <>
//       <div className={styles.hospitalInfoContainer}>
//         <div className={styles.hospitalInfoContent}>
//           <div className={styles.infoText}>
//             <h1>
//               {hospitalData.length} medical centers available in{" "}
//               {hospitalData[0]?.City.toLowerCase()}
//             </h1>
//             <h5>
//               {" "}
//               <span>✔</span> Book appointments with minimum wait-time & verified
//               doctor details
//             </h5>
//           </div>

//           <div className={styles.gridContainer}>
//             <div className={styles.column1}>
//               {/* display Bookingcard here yaar */}

//               {/* NOw we get the hospital so as many hospital we loop and create that no of
//                */}

//               {/* {hospitalData.map((hospital, index) => (
//                 <BookingCard
//                   key={index}
//                   Name={hospital["Hospital Name"]}
//                   City={hospital.City}
//                   State={hospital.State}
//                   Rating={hospital["Hospital overall rating"]}
//                 ></BookingCard>
//               ))} */}

//               {/* UPAR waala se kuch error aa rha hai islea ul me daale neeche ko */}

//               <ul>
//                 {hospitalData.map((hospital, index) => (
//                   <BookingCard
//                     key={index}
//                     Name={hospital["Hospital Name"]}
//                     City={hospital.City}
//                     State={hospital.State}
//                     Rating={hospital["Hospital overall rating"]}
//                     handleDateClick={handleDateClick}
//                     handleTime={handleTimeClick}
//                   />
//                 ))}
//               </ul>
//             </div>

//             {/* Booking card rendering ends here */}

//             <div className={styles.column2}>
//               {/* display ad card here yaar */}

//               <AdCard></AdCard>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HospitalInfo;

// ------------v2 (fixing reusability using a prop)

import React from "react";
import styles from "./HospitalInfo.module.css";
import BookingCard from "../BookingCard/BookingCard";
import AdCard from "../AdCard/AdCard";
const HospitalInfo = ({
  hideInfo,
  hospitalData,
  handleDateClick,
  handleTimeClick,
  handleHospitalSelect,
}) => {
  return (
    <>
      <div className={styles.hospitalInfoContainer}>
        <div className={styles.hospitalInfoContent}>
          {/* <div className={styles.infoText} >
            <h1>
              {hospitalData.length} medical centers available in{" "}
              {hospitalData[0]?.City.toLowerCase()}
            </h1>
            <h5>
              {" "}
              <span>✔</span> Book appointments with minimum wait-time & verified
              doctor details
            </h5>
          </div> */}

          {hideInfo !== "none" && (
            <div className={styles.infoText}>
              <h1>
                {hospitalData.length} medical centers available in{" "}
                {hospitalData[0]?.City.toLowerCase()}
              </h1>
              <h5>
                <span>✔</span> Book appointments with minimum wait-time &
                verified doctor details
              </h5>
            </div>
          )}

          <div className={styles.gridContainer}>
            <div className={styles.column1}>
              {/* display Bookingcard here yaar */}

              {/* NOw we get the hospital so as many hospital we loop and create that no of
               */}

              {/* {hospitalData.map((hospital, index) => (
                <BookingCard
                  key={index}
                  Name={hospital["Hospital Name"]}
                  City={hospital.City}
                  State={hospital.State}
                  Rating={hospital["Hospital overall rating"]}
                ></BookingCard>
              ))} */}

              {/* UPAR waala se kuch error aa rha hai islea ul me daale neeche ko */}

              <ul>
                {hospitalData.map((hospital, index) => (
                  <BookingCard
                    key={index}
                    hospitalData={hospitalData}
                    index={index}
                    Name={hospital["Hospital Name"]}
                    City={hospital.City}
                    State={hospital.State}
                    Rating={hospital["Hospital overall rating"]}
                    handleDateClick={handleDateClick}
                    handleTime={handleTimeClick}
                    handleHospitalSelect={handleHospitalSelect}
                    hideInfo={hideInfo}
                  />
                ))}
              </ul>
            </div>

            {/* Booking card rendering ends here */}

            <div className={styles.column2}>
              {/* display ad card here yaar */}

              <AdCard></AdCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalInfo;
