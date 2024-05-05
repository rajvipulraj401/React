import React, { useEffect, useState } from "react";

/* Now how we do cleanup in case of fetching api inside of 
useEffect Hook or How do we cancel our fetch when we unmount our component ?

To do that we got to use something called signal property we
get that from An AbortController object
*/

const FetchApiCleanup = function () {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    /* setting error state initally as undefined and loading state
         as true */

    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          /* Throwing the errors if promise failed else 
                returning response.json file*/
          return res.json();
        } else {
          // Handling errors
          return Promise.reject(res.status);
        }
      })
      .then((data) => {
        // json file also returns a promise so handling it
        setUsers(data);
        //setting the users state with json file data
      })
      .catch((err) => {
        // catching errors
        console.log(err);
        if (err?.name === "AbortError") return;
        setError(err);
        /*  We will also get an error cause by default this catch method also contains an abort controller so when we do abort the fetch 
        method the catch method shows it as a so we need to handle this in catch method .*/
      })
      .finally(() => {
        /* This finally method is that method which runs regardless
           of the fact that promise failed or succeed 
           we want to run it because we want setLoading to be set at false
            regardless of failure or success of promise*/
        setLoading(false);
      });

    //   catching the error if we get any error from top

    /*---------Writing our cleanup function to cleanup 
  side Effects and here we are calling abort controller */

    return () => {
      controller.abort();
      /* Now inside cleanup we are aborting the fetch request
      and it is telling our fetch that we have aborted the
      fetch and so don't run anything inside of it 
      
      So when we do  the new fetch we abort the old fetch 
      */
    };
  }, []);

  let jsx;

  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error {error}!</h2>;
    // Show the error if we get error in error state from catch method
  } else {
    jsx = JSON.stringify(users);
  }
  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  );
};

export default FetchApiCleanup;
