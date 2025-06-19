import React, { useEffect, useState } from "react";
// import "./App.css";
import "./App.css";
import TableContainer from "./components/TableContainer/TableContainer";
import Data from "./Data";
const App = () => {
  // Hooks :--

  const [data, setData] = useState([]);
  //   const [data, setData] = useState([]);

  // use the useEffect hook (as soon as the component is loaded get all the data from the server)

  useEffect(() => {
    setData(Data);
  }, []);
  // we will pass empty dep array so only when it is mounted we get the data

  //  Functions :----

  const handleSortDate = () => {
    // sort by date
    const newData = [...data];
    newData.sort((dateA, dateB) => {
      // convert the date to millisecond to compare those dates

      let modDateA = new Date(dateA.date);
      let modDateB = new Date(dateB.date);

      return modDateA - modDateB;
    });

    // console.log(newData);

    setData(newData);
  };
  const handleSortValue = () => {
    // sort by Value and if same value then consider date

    // sort by views
    const newValue = [...data];
    newValue.sort((viewsA, viewsB) => {
      // convert the views to millisecond to compare those viewss

      let modValueA = viewsA.views;
      let modValueB = viewsB.views;

      return modValueA - modValueB;
    });

    console.log(newValue);

    setData(newValue);
  };

  return (
    <>
      <div>
        {/* Step 1: -- First we will give a title  */}
        <h1>Date and Views table </h1>

        <button onClick={handleSortDate}>Sort by Date</button>
        <button onClick={handleSortValue}>Sort by Views</button>
        <TableContainer data={data}></TableContainer>
      </div>
    </>
  );
};

export default App;
