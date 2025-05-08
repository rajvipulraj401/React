// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchWeather = async () => {
//     if (!city) return;

//     setLoading(true);
//     setWeatherData(null); // clear old data

//     try {
//       // Optional delay to ensure "Loading data..." appears
//       await new Promise((resolve) => setTimeout(resolve, 300));

//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=3d962750a69347e6a2a130843250105&q=${city}`
//       );

//       if (!response.ok) {
//         throw new Error("Invalid city");
//       }

//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       alert("Failed to fetch weather data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app-container">
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={fetchWeather}>Search</button>

//       {loading && <p>Loading data...</p>}

//       {weatherData && (
//         <div className="weather-cards">
//           <div className="weather-card">
//             <strong>Temperature:</strong> {weatherData.current.temp_c}°C
//           </div>
//           <div className="weather-card">
//             <strong>Humidity:</strong> {weatherData.current.humidity}%
//           </div>
//           <div className="weather-card">
//             <strong>Condition:</strong> {weatherData.current.condition.text}
//           </div>
//           <div className="weather-card">
//             <strong>Wind Speed:</strong> {weatherData.current.wind_kph} km/h
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// ----------v2 ---- (🌞🌞🌞🌞🌞🌞)(JO MAINE KHUD SSE BANAYA FULLY)

// const response = await fetch(
//   `https://api.weatherapi.com/v1/current.json?key=3d962750a69347e6a2a130843250105&q=${city}`
// );

import React from "react";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Step 1: - so whenever we get new SubmittedCity we will call the with that city
  useEffect(() => {
    //Milestone :-- do the api call now

    // step 1:-- First return when the submittedCity is empty (HANDLING the mount cases)
    //  submittedCity == ""
    if (submittedCity == "") return;
    setError(null);
    // clear the error again in new call

    // step 1: - start the loading state
    setLoading(true);

    // step 2:-- use the fetch method only
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=3d962750a69347e6a2a130843250105&q=${submittedCity}`
        );

        if (!response.ok) throw new Error();
        // console.log(response);
        const res = await response.json();
        console.log(res);
        // return res;
        setCityData(res);
        // alert("Data got");
      } catch (err) {
        console.error(`This is error:- ${err}`);
        setError("Failed to fetch weather data"); // Store error message
        alert("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    // if (!cityData)
    fetchWeather();
  }, [submittedCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Q) can i use city state value here when the form is submitted here or it can be old value
    // Ans - yes i can because that will be the latest value before submitting

    /*Logic - Now i have the city name and now i want to call the api with this query parameter and my api key as the query
     */

    setSubmittedCity(city);
  };

  return (
    <>
      <div className="app-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <form onSubmit={()=> handleSubmit(data)}>
      Note - event is given by react to us and other data we have so thats whye 
      we did above way
      */}

          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <button type="submit">Search</button> */}
          <button type="submit" disabled={loading}>
            {/* {loading ? "Loading..." : "Search"} */}
            {/* {loading ? (
              <div className="spinner"></div> // Show spinner while loading
            ) : (
              "Search"
            )} */}

            {loading ? (
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                Loading <div className="spinner"></div>
              </div>
            ) : (
              "Search"
            )}
          </button>
        </form>

        {/* //Step2 :-- show all the city card from the cityCard state */}

        {loading && <p>Loading data...</p>}
        {error && <p className="error-message">{error}</p>}

        {cityData && (
          <div className="weather-cards">
            <div className="weather-card">
              <h4>Temperature</h4>
              <h5>{`${cityData?.current?.temp_c}°C`}</h5>
              {/* use optional chaining to see if the data of object 
            exists or not */}
            </div>
            <div className="weather-card">
              <h4>Humidity</h4>
              <h5>{cityData?.current?.humidity}%</h5>
            </div>
            <div className="weather-card">
              <h4>Condition</h4>
              <h5>{cityData?.current?.condition?.text}</h5>
            </div>
            <div className="weather-card">
              <h4>Wind Speed</h4>
              <h5>{cityData?.current?.wind_kph} km/h</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
