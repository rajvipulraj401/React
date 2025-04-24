// import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import WrapperNav from "../../components/WrapperNav/WrapperNav";
// import SearchContainer from "../../components/SearchContainer/SearchContainer";
// import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
// import styles from "./FindDoctor.module.css";
// const FindDoctor = () => {
//   return (
//     <div className={styles.findDoctorPage}>
//       <Navbar></Navbar>
//       <WrapperNav></WrapperNav>
//       <SearchContainer
//         inputs={[
//           { placeholder: "State", name: "state" },
//           { placeholder: "City", name: "city" },
//         ]}
//       />

//       {/* // onSubmit={(e) => {
//         //   e.preventDefault();
//         //   const data = new FormData(e.target);
//         //   console.log("State:", data.get("state"));
//         //   console.log("City:", data.get("city"));
//         // }}
//       // /> */}

//       <SearchContainer
//         inputs={[{ placeholder: "Search By Hospital", name: "hospital" }]}
//       />

//       {/* <SearchContainer
//         inputs={[{ placeholder: "Search By Hospital", name: "hospital" }]}
//         onSubmit={(e) => {
//           e.preventDefault();
//           const data = new FormData(e.target);
//           console.log("Hospital:", data.get("hospital"));
//         }}
//       /> */}

//       <HospitalInfo></HospitalInfo>
//     </div>
//   );
// };

// export default FindDoctor;

// -----------------2nd version after making FormContainer-----------

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import WrapperNav from "../../components/WrapperNav/WrapperNav";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
import styles from "./FindDoctor.module.css";

const FindDoctor = ({
  onSubmit,
  hospitalData,
  handleDateClick,
  handleTimeClick,
  // this below prop is extra
  handleHospitalSelect,
}) => {
  // // Async data fetching if needed
  // useEffect(() => {
  //   // For example, fetch hospital data after state and city are selected
  //   if (hospitalData.length > 0) {
  //     // console.log("Hospital data fetched: ", hospitalData);
  //   }
  // }, [hospitalData]); // Only trigger when `hospitalData` changes

  return (
    <div className={styles.findDoctorPage}>
      <Navbar />
      <WrapperNav />

      {/* 1. Select State/City (FormContainer will be used internally) */}
      <SearchContainer type="select" onSubmit={onSubmit} />

      {/*  2. Search by hospital name */}
      {/* <SearchContainer type="input" onSubmit={handleHospitalSearch} /> */}

      <HospitalInfo
        hospitalData={hospitalData}
        handleDateClick={handleDateClick}
        handleTimeClick={handleTimeClick}
        handleHospitalSelect={handleHospitalSelect}
      />
    </div>
  );
};

export default FindDoctor;
