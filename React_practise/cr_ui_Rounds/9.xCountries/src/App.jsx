import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://countries-search-data-prod-812920491762.asia-south1.run.app/countries`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  /* How to implement the searching functionality ?
  
  --Now we have the data of val which user type we 

  a) we will check if the val is empty user didnt search then show full cards.

  b) if  user enter random then filter method will return empty array so no cards rendered .

  b1) Then the filtered list we will get newArr of objects map and creat new cards from it .

  */

  return (
    <div className="app-container">
      <div className="search-container">
        <Search value={val} handleChange={handleChange}></Search>
      </div>
      <div className="card-container">
        {/* Step a: -- if val is empty then show full */}
        {/* Nos nested curly braces {{}} its wrong ek hi curly braces ke andar sab hoga*/}
        {/* {!val ? */}
        {!val &&
          data.map((curr) => {
            // console.log(curr.common); // ✅ This will log names before rendering
            return (
              <Cards
                key={curr.common}
                item={{ name: curr.common, flag: curr.png }}
              />
            );
          })}
        {/* : ""} */}

        {/* Step b: -- Now use filter to show cards on basis of val */}

        {val &&
          data
            .filter((curr) =>
              // console.log( curr.common.(val));
              curr.common.toLowerCase().includes(val.toLowerCase())
            )
            // now after filtering we only have those objects in the array whcih matches to val

            // now we will map those new array of objects and create cards.

            .map((curr) => {
              return (
                <Cards
                  key={curr.common}
                  item={{ name: curr.common, flag: curr.png }}
                />
              );
            })}

        {/* <Cards data={data}></Cards> */}
      </div>
    </div>
  );
};

export default App;
