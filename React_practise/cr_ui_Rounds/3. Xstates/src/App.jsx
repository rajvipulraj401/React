// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   let [country, setCountry] = useState([]); // we will get country's array
//   let [state, setState] = useState([]); // we will get state's array
//   let [city, setCity] = useState([]); // we will get city's array
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     fetchCountry("https://crio-location-selector.onrender.com/countries");
//   }, []);
//   // On mount only i want that we have all the country data with us

//   useEffect(() => {
//     fetchState(
//       `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
//     );
//   }, [selectedCountry]);

//   // Step2:-- When we select the country then only make this api call to
//   // get the data of state.

//   useEffect(() => {
//     fetchCity(
//       `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
//     );
//   }, [selectedState]);

//   const fetchCountry = async (url) => {
//     try {
//       const res = await fetch(url);

//       const response = await res.json();
//       console.log(response);
//       setCountry(response);
//     } catch (err) {
//       console.error("Error fetching countries:", err);
//       return [];
//     }
//   };
//   const fetchState = async (url) => {
//     try {
//       const res = await fetch(url);

//       const response = await res.json();
//       console.log(response);
//       setState(response);
//     } catch (err) {
//       console.error("Error fetching countries:", err);
//       return [];
//     }
//   };
//   const fetchCity = async (url) => {
//     try {
//       const res = await fetch(url);

//       const response = await res.json();
//       console.log(response);
//       setCity(response);
//     } catch (err) {
//       console.error("Error fetching countries:", err);
//       return [];
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Select Location</h1>

//         <div className="select-container">
//           {/*--------------------- Select1 (Country)--------------------------- */}
//           <select
//             name="Countries"
//             className="country-select select"
//             onChange={(event) => {
//               setSelectedCountry(event.target.value);
//             }}
//           >
//             {/* Jab tu koi option choose karega, toh poora
//             <select> element ka value change hoga, aur us change ko
//             track karne ke liye `onChange` event diya gaya hai. */}
//             <option value="" className="placeholder" hidden>
//               Select Country
//             </option>
//             {/* <option value="india">India</option>
//             <option value="usa">USA</option> */}
//             {country.length > 0 &&
//               country.map((option) => {
//                 return (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 );
//               })}
//             {/* Map country data and fill the option values from the API */}
//           </select>

//           {/*---------------------- Select2 (State)------------------------------ */}
//           <select
//             name="state"
//             className="state-select select"
//             disabled={selectedCountry === ""}
//             onChange={(event) => {
//               setSelectedState(event.target.value);
//             }}
//           >
//             <option value="" className="placeholder" hidden>
//               {/* By putting hidden here this option will get once we select any other option*/}
//               Select State
//             </option>
//             {state.length > 0 &&
//               state.map((option) => {
//                 return (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 );
//               })}

//             {/* Map and fill the option values from the API */}
//           </select>

//           {/*------------------ Select3 (City) ------------------------------------*/}
//           <select
//             name="city"
//             className="city-select select"
//             disabled={selectedState === ""}
//             onChange={(event) => {
//               setSelectedCity(event.target.value);
//               // ----value attribute was passed in Option tag inside the select tag so when one option se selected we can chech which event
//               // was targetted using event.target.value-----
//             }}
//           >
//             <option value="" className="placeholder" hidden>
//               Select City
//             </option>
//             {/* <option value="mumbai">Mumbai</option>
//             <option value="newyork">New York</option> */}

//             {city.length > 0 &&
//               city.map((option) => {
//                 return (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 );
//               })}
//             {/* Map and fill the option values from the API of  */}
//           </select>
//         </div>

//         <div hidden={selectedCity == ""}>
//           {/* so i used hidden = true /false so when
//               we have selectedCity then only it will be shown else hidden */}
//           <h3
//             style={{
//               textAlign: "center",
//             }}
//           >
//             {`You selected `}
//             <b style={{ fontSize: "25px" }}>{selectedCity}</b>
//             {`, ${selectedState}, ${selectedCountry}`}
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

/* ---------- 😎😎BELOW ONE IS THE OPTIMIZED FUNCTION (using single fetchData function and
  passing url and setterFunction 😎😎
// ) ---------- */
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState([]); // Country list
  const [state, setState] = useState([]); // State list
  const [city, setCity] = useState([]); // City list
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch countries on mount
  useEffect(() => {
    fetchData(
      "https://crio-location-selector.onrender.com/countries",
      setCountry
    );
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    fetchData(
      `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`,
      setState
    );
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    fetchData(
      `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`,
      setCity
    );
  }, [selectedState]);

  // Generic fetch function to avoid repetition
  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      console.log(data);
      setter(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="container">
      <h1>Select Location</h1>

      <div className="select-container">
        {/* --------------------- Select Country --------------------------- */}
        <select
          name="Countries"
          className="country-select select"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="" className="placeholder" hidden>
            Select Country
          </option>
          {country.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* ---------------------- Select State ------------------------------ */}
        <select
          name="state"
          className="state-select select"
          disabled={!selectedCountry}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="" className="placeholder" hidden>
            Select State
          </option>
          {state.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* ------------------ Select City ------------------------------------ */}
        <select
          name="city"
          className="city-select select"
          disabled={!selectedState}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" className="placeholder" hidden>
            Select City
          </option>
          {city.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Selected City Display */}
      {selectedCity && (
        <h3 style={{ textAlign: "center" }}>
          You selected <b style={{ fontSize: "25px" }}>{selectedCity}</b>,{" "}
          {selectedState}, {selectedCountry}
        </h3>
      )}
    </div>
  );
};

export default App;

// Note -- 👉 Function expression hoist nahi hoti, lekin React ka component execution pattern useEffect ko baad me chalata hai, jisme function already declare ho chuka hota hai.
// 👉 Isliye koi problem nahi hoti, aur useEffect ke andar se function ko call kar sakte hain.
