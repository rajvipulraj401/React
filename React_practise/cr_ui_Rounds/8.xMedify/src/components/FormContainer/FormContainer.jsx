// import React, { useState, useEffect } from "react";
// import styles from "./FormContainer.module.css";
// import Button from "../Button/Button";
// import { FaSearch } from "react-icons/fa";

// const FormContainer = ({ onSubmit, type = "input" }) => {
//   // Accept type prop
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [Hospital, setHospital] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [bookingId, setBookingId] = useState("");

//   // fetch states on mount
//   useEffect(() => {
//     fetchData("https://meddata-backend.onrender.com/states", setStates);
//   }, []);

//   // fetch cities when state changes
//   useEffect(() => {
//     if (selectedState) {
//       fetchData(
//         `https://meddata-backend.onrender.com/cities/${selectedState}`,
//         setCities
//       );
//     }
//   }, [selectedState]);

//   // fetch cities when state changes
//   useEffect(() => {
//     if (selectedCity) {
//       fetchData(
//         // `https://meddata-backend.onrender.com/cities/${selectedState}`,
//         `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
//         setHospital

//         // IN THIS we are getting array of objects
//       );
//     }
//   }, [selectedCity]);

//   const fetchData = async (endpoint, setter) => {
//     try {
//       const res = await fetch(endpoint);
//       const data = await res.json();
//       setter(data);
//       // console.log(data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (type === "input") {
//       onSubmit({ bookingId });
//     } else {
//       onSubmit({
//         selectedState,
//         selectedCity,
//         hospitals: Hospital, // 👈 yahi data parent tak bhejna hai
//       });
//     }
//   };
//   /* Logic What i did ?

// -- i on submit of form  bundled all the data and send it to parent methdo
// of onSubmit so that parent can send that data across

// */

//   return (
//     <form className={styles.searchForm} onSubmit={handleSearch}>
//       {type === "input" ? ( // Conditionally render input field
//         <input
//           type="text"
//           name="hospital"
//           className={styles.select}
//           placeholder="Search By Hospital"
//           value={bookingId}
//           onChange={(e) => setBookingId(e.target.value)}
//           required
//         />
//       ) : (
//         // selecting state and city to fetch hospitals
//         <>
//           <div id="state">
//             {" "}
//             {/* Add div with id="state" */}
//             <select
//               className={styles.select}
//               onChange={(e) => setSelectedState(e.target.value)}
//               required
//             >
//               <option value="" hidden>
//                 Select State
//               </option>
//               {states.map((state) => (
//                 <option key={state} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div id="city">
//             {" "}
//             {/* Add div with id="city" */}
//             <select
//               className={styles.select}
//               onChange={(e) => setSelectedCity(e.target.value)}
//               disabled={!selectedState}
//               required
//             >
//               <option value="" hidden>
//                 Select City
//               </option>
//               {cities.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </>
//       )}

//       <Button width="120px" height="50px" background="var(--color-primary)">
//         <div className={styles.iconDownload}>
//           <FaSearch />
//         </div>
//         <div>Search</div>
//       </Button>
//     </form>
//   );
// };

// export default FormContainer;

// // // --------------------------- (2nd time code*)---------------
// import React, { useState, useEffect } from "react";
// import {
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Button,
// } from "@mui/material";
// import { FaSearch } from "react-icons/fa";
// import styles from "./FormContainer.module.css";

// const FormContainer = ({ onSubmit, type = "input" }) => {
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [hospitals, setHospitals] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [bookingId, setBookingId] = useState("");

//   useEffect(() => {
//     fetchData("https://meddata-backend.onrender.com/states", setStates);
//   }, []);

//   useEffect(() => {
//     if (selectedState) {
//       fetchData(
//         `https://meddata-backend.onrender.com/cities/${selectedState}`,
//         setCities
//       );
//     }
//   }, [selectedState]);

//   useEffect(() => {
//     if (selectedCity) {
//       fetchData(
//         `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
//         setHospitals
//       );
//     }
//   }, [selectedCity]);

//   const fetchData = async (endpoint, setter) => {
//     try {
//       const res = await fetch(endpoint);
//       const data = await res.json();
//       setter(data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (type === "input") {
//       onSubmit({ bookingId });
//     } else {
//       onSubmit({
//         selectedState,
//         selectedCity,
//         hospitals: hospitals,
//       });
//     }
//   };

//   return (
//     <form className={styles.searchForm} onSubmit={handleSearch}>
//       {type === "input" ? (
//         <div
//           style={{
//             display: "flex",
//             gap: "1rem",
//             alignItems: "center",
//             width: "100%",
//           }}
//         >
//           <input
//             type="text"
//             name="hospital"
//             className={styles.select}
//             placeholder="Search By Hospital"
//             value={bookingId}
//             onChange={(e) => setBookingId(e.target.value)}
//             required
//             style={{
//               flex: 1, // input will take most of the width
//               minWidth: "0", // helps in flex shrinking properly
//             }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             startIcon={<FaSearch />}
//             sx={{
//               height: "50px",
//               whiteSpace: "nowrap",
//               backgroundColor: "var(--color-primary)",
//               minWidth: "120px", // button will stay fixed width
//             }}
//           >
//             Search
//           </Button>
//         </div>
//       ) : (
//         <>
//           <FormControl sx={{ mb: 1, flex: 1 }} id="state">
//             <InputLabel>Select State</InputLabel>
//             <Select
//               value={selectedState}
//               onChange={(e) => setSelectedState(e.target.value)}
//               required
//               label="Select State"
//             >
//               {states.map((state) => (
//                 <MenuItem key={state} value={state}>
//                   {state}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl sx={{ mb: 1, flex: 1 }} id="city">
//             <InputLabel>Select City</InputLabel>
//             <Select
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//               required
//               label="Select City"
//               disabled={!selectedState}
//             >
//               {cities.map((city) => (
//                 <MenuItem key={city} value={city}>
//                   {city}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <Button
//             type="submit"
//             variant="contained"
//             startIcon={<FaSearch />}
//             sx={{
//               height: "50px",
//               width: "120px",
//               backgroundColor: "var(--color-primary)",
//             }}
//           >
//             Search
//           </Button>
//         </>
//       )}
//     </form>
//   );
// };

// export default FormContainer;

// ---------------------3rd time fixing myself ---------------
import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import styles from "./FormContainer.module.css";

const FormContainer = ({ onSubmit, type = "input" }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    fetchData("https://meddata-backend.onrender.com/states", setStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchData(
        `https://meddata-backend.onrender.com/cities/${selectedState}`,
        setCities
      );
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      fetchData(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
        setHospitals
      );
    }
  }, [selectedCity]);

  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setter(data);
      // Set the data as well as return the data
      return data;
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (type === "input") {
  //     onSubmit({ bookingId });
  //   } else {
  //     onSubmit({
  //       selectedState,
  //       selectedCity,
  //       hospitals: hospitals,
  //     });
  //   }
  // };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (type === "input") {
      onSubmit({ bookingId });
    } else {
      const data = await fetchData(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
        setHospitals
      );

      // The fetchData function returns the latest hospitals data after it's fetched
      // We are awaiting the fetchData call to ensure data is available before submitting
      // However, React's state update (setHospitals) happens asynchronously and won't reflect immediately
      // Therefore, we directly use the `data` returned by fetchData instead of relying on state

      onSubmit({
        selectedState,
        selectedCity,
        hospitals: data,
      });
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      {type === "input" ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="hospital"
            className={styles.select}
            placeholder="Search By Hospital"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            required
            style={{
              flex: 1, // input will take most of the width
              minWidth: "0", // helps in flex shrinking properly
            }}
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={<FaSearch />}
            sx={{
              height: "50px",
              whiteSpace: "nowrap",
              backgroundColor: "var(--color-primary)",
              minWidth: "120px", // button will stay fixed width
            }}
          >
            Search
          </Button>
        </div>
      ) : (
        <>
          <FormControl sx={{ mb: 1, flex: 1 }} id="state">
            <InputLabel>Select State</InputLabel>
            <Select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              required
              label="Select State"
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ mb: 1, flex: 1 }} id="city">
            <InputLabel>Select City</InputLabel>
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              required
              label="Select City"
              disabled={!selectedState}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            id="searchBtn"
            variant="contained"
            startIcon={<FaSearch />}
            sx={{
              height: "50px",
              width: "120px",
              backgroundColor: "var(--color-primary)",
            }}
          >
            Search
          </Button>
        </>
      )}
    </form>
  );
};

export default FormContainer;
