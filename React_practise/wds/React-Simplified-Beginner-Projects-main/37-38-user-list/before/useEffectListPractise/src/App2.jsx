// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();
  // keeping a state for storing data from api call and also to show it.

  const [loading, setLoading] = useState(false);
  // keeping a state for storing loading from api call and also to show it.

  const [error, setError] = useState();
  // keeping a state for storing error from api call and also to show it.

  // NOW let's Do side effect of fetching data inside useEffect

  useEffect(() => {
    // useEffect takes a call back fun , cleanup func and a dependancy array

    setLoading(true);
    // setError(undefined); //aS no error so undefined

    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      // Fetching the data and assigning a signal object using abort controller object

      /*  NOW i made the fetch request it is requesting a promise 
      and now i have to handle this promise
    */

      .then((res) => {
        // console.log(res)

        // What if the response returns an error

        if (res.status == 200)
          // if response success then return json file
          return res.json();
        else {
          throw new Error(`Request failed with status ${res.status}`);
          // if error we will throw the error with the status code
        }
      })
      // Now this json file also returns a promise that needs to be handled
      .then((datas) => {
        // now we get the data from the api file now we want it to store in the state
        // console.log(data);
        setData(datas);

        console.log(datas);
      })

      // now we handled the data

      // noW LET'S CATCH the error

      .catch((error) => {
        /*  Now IF THE error is because of the abort controller then we
will ignore this error by returning 
*/

        if (error?.name === "AbortError") return;
        // Checking if there is error object exist or not using optional chaining

        setError(error);
      })
      .finally(() => {
        // CATCH and FINALLy  method takes a callback function in the parameter
        // in tHIS fiNALLY method what we will do is that we will set the loading state to be true

        setLoading(true);
      });
  }, []);
  // I want to run useEffect on Only on Mount so Empty depend array

  return (
    <>
      <h1>User List</h1>

      <ul>{data.map((curr) => curr.name)}</ul>
    </>
  );
};

export default App;
