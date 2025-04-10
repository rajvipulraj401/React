import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://xcountries-backend.azurewebsites.net/all`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(`Error fetching data:${err}`));
  }, []);

  return (
    <>
      <div className="card-container">
        {data.map((curr) => {
          console.log(curr.name); // ✅ This will log names before rendering
          return (
            <Cards
              key={curr.name}
              item={{ name: curr.name, flag: curr.flag }}
            />
          );
        })}
        {/* <Cards data={data}></Cards> */}
      </div>
    </>
  );
};

export default App;
