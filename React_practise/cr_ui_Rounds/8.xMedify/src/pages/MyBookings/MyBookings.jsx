// import React from "react";
// import SearchContainer from "../../components/SearchContainer/SearchContainer";
// import Navbar from "../../components/Navbar/Navbar";
// import WrapperNav from "../../components/WrapperNav/WrapperNav";
// import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
// import styles from "./MyBookings.module.css";

// const MyBookings = ({ onSubmit }) => {
//   return (
//     <div className={styles.myBookingsContainer}>
//       {/* <div>MyBookings</div> */}
//       <Navbar />
//       <WrapperNav text="My Bookings" />
//       <SearchContainer
//         type="input"
//         onSubmit={onSubmit}
//         width="500px"
//         padding="20px"
//       />
//       {/* <HospitalInfo /> */}
//     </div>
//   );
// };

// export default MyBookings;

// v2 --- booking page trying to reuse-------

import React from "react";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import Navbar from "../../components/Navbar/Navbar";
import WrapperNav from "../../components/WrapperNav/WrapperNav";
import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
import styles from "./MyBookings.module.css";

const MyBookings = ({ onSubmit }) => {
  // const hospitalData = localStorage.getItem("bookings");
  const hospitalData = JSON.parse(localStorage.getItem("bookings")) || [];
  // Now parse the whole local storage data which is currently stringofArray to array

  // console.log(hospitalData);
  return (
    <div className={styles.myBookingsContainer}>
      {/* <div>MyBookings</div> */}
      <Navbar />
      <WrapperNav text="My Bookings" />
      <SearchContainer
        type="input"
        onSubmit={onSubmit}
        width="650px"
        padding="20px"
      />

      {/* // get hospitaldate */}

      <HospitalInfo
        hideInfo="none"
        hospitalData={hospitalData}
        // handleDateClick={handleDateClick}
        // handleTimeClick={handleTimeClick}
        // handleHospitalSelect={handleHospitalSelect}
      />
    </div>
  );
};

export default MyBookings;
