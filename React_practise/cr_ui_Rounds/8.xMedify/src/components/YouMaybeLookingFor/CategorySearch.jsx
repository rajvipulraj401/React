// import React, { useState, useEffect } from "react";
// import styles from "./CategorySearch.module.css";
// import Button from "../Button/Button";
// import {
//   FaSearch,
//   FaTooth,
//   FaAmbulance,
//   FaHospital,
//   FaCapsules,
//   FaVials,
// } from "react-icons/fa";
// import SpecialisationCard from "../SpecialisationCard/SpecialisationCard";

// const CategorySearch = ({ onSearchClick }) => {
//   const [state, setState] = useState([]); // State list
//   const [city, setCity] = useState([]); // City list
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   // Fetch state on mount
//   useEffect(() => {
//     fetchData("https://meddata-backend.onrender.com/states", setState);
//   }, []);

//   // Fetch cities when a state is selected
//   useEffect(() => {
//     fetchData(
//       // `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`,
//       `https://meddata-backend.onrender.com/cities/${selectedState}`,
//       setCity
//     );

//     // console.log(city);
//   }, [selectedState]);

//   // Generic fetch function to avoid repetition
//   const fetchData = async (endpoint, setter) => {
//     try {
//       const res = await fetch(endpoint);
//       const data = await res.json();
//       console.log(data);
//       setter(data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   return (
//     <div className={styles.searchContainer}>
//       {/* -----yaha se reusable hai  */}
//       <form className={styles.searchForm}>
//         {/* ---------------------- Select State ------------------------------ */}
//         <select
//           name="state"
//           className="state-select select"
//           // disabled={!selectedState}
//           onChange={(e) => setSelectedState(e.target.value)}
//         >
//           <option value="" className="placeholder" hidden>
//             Select State
//           </option>
//           {state.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         {/* <input type="text" placeholder="City" required /> */}
//         {/* ------------------ Select City ------------------------------------ */}
//         <select
//           name="city"
//           className="city-select select"
//           disabled={!selectedState}
//           // When state is selected then only show the city select
//           onChange={(e) => setSelectedCity(e.target.value)}
//         >
//           <option value="" className="placeholder" hidden>
//             Select City
//           </option>
//           {city.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         <Button width="120px" height="50px" background="var(--color-primary)">
//           <div className={styles.iconDownload}>
//             <FaSearch />
//           </div>
//           <div>Search</div>
//         </Button>
//       </form>

//       {/* ------BS YAHA TK HAI FORM KA REUSABLE CHEEZEIN-- */}
//       <p className={styles.subHeading}>You may be looking for</p>

//       <div className={styles.cardWrapper}>
//         <SpecialisationCard icon={<FaTooth />} label="Doctors" />
//         <SpecialisationCard icon={<FaVials />} label="Labs" />
//         <SpecialisationCard
//           icon={<FaHospital />}
//           background="#eef8ff"
//           border="1px solid var(--color-primary)"
//           label="Hospitals"
//         />
//         <SpecialisationCard icon={<FaCapsules />} label="Medical Store" />
//         <SpecialisationCard icon={<FaAmbulance />} label="Ambulance" />
//       </div>
//     </div>
//   );
// };

// export default CategorySearch;

// //2️⃣2️⃣2️⃣2️⃣ ---------------version 2 by making another component  inside --------------
import React from "react";
import styles from "./CategorySearch.module.css";
import {
  FaTooth,
  FaAmbulance,
  FaHospital,
  FaCapsules,
  FaVials,
} from "react-icons/fa";
import SpecialisationCard from "../SpecialisationCard/SpecialisationCard";
import FormContainer from "../FormContainer/FormContainer";

const CategorySearch = ({ onSubmit }) => {
  // const handleSearch = ({ selectedState, selectedCity }) => {
  //   console.log("State:", selectedState);
  //   console.log("City:", selectedCity);
  //   // Perform search logic here
  // };

  return (
    <div className={styles.searchContainer}>
      {/* Below is form  --👇🏼👇🏼👇🏼👇🏼👇🏼 */}
      <FormContainer onSubmit={onSubmit} type="select" />

      {/* Above is form below is not important --👆🏼👆🏼👆🏼👆🏼👆🏼 */}

      <p className={styles.subHeading}>You may be looking for</p>
      <div className={styles.cardWrapper}>
        <SpecialisationCard icon={<FaTooth />} label="Doctors" />
        <SpecialisationCard icon={<FaVials />} label="Labs" />
        <SpecialisationCard
          icon={<FaHospital />}
          background="#eef8ff"
          border="1px solid var(--color-primary)"
          label="Hospitals"
        />
        <SpecialisationCard icon={<FaCapsules />} label="Medical Store" />
        <SpecialisationCard icon={<FaAmbulance />} label="Ambulance" />
      </div>
    </div>
  );
};

export default CategorySearch;
