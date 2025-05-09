import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./Data.json";

const App = () => {
  // All hooks here :---
  const [data, setData] = useState(Data);

  // useEffect(() => {}, []);

  // All function here :--

  /*
    Logic: 
    - We need to store data in state so that we can modify it (sort) and trigger a re-render in React.
    - Sorting directly on the state won't trigger a re-render, as React compares references, not values.
    - We clone the array (deep copy) before sorting, then update the state.
  */

  const handleSortDate = () => {
    const newArr = structuredClone(data);

    //💪🏼 MILESTONE 3:--- HOW TO sort date string
    /* Convert the date to no before comparing (and you cannot dir)
    and you have to make this 2022-09-01 to  number 
    so make it to the millisecond so that way we can compare

    
    // 1 ) Sort the array based on the date by converting
    //  the date string to a timestamp (milliseconds)
    */

    newArr.sort((a, b) => +new Date(a.date) - +new Date(b.date));

    setData(newArr);
  };
  const handleSortViews = () => {
    /* 
 In order to sort we will clone and create a newArr do deep copy 
 use structuredClone or JSON.parse() , spread for only one level
*/
    // const newArr = [...data];
    // const newArr = JSON.parse(JSON.stringify(data));
    const newArr = structuredClone(data);

    newArr.sort((a, b) => b.views - a.views);
    setData(newArr);
  };

  return (
    <>
      <h1>Date and Views Table</h1>

      <button type="button" onClick={handleSortDate}>
        Sort by Date
      </button>
      <button type="button" onClick={handleSortViews}>
        Sort by Views
      </button>

      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Views</td>
            <td>Article</td>
          </tr>
        </thead>

        <tbody>
          {data.map((curr, i) => (
            <tr key={i}>
              <td>{curr.date}</td>
              <td>{curr.views}</td>
              <td>{curr.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
