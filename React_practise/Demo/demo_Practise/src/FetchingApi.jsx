import React, { useEffect, useState } from "react";

const FetchingApi = function () {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    /* setting error state initally as undefined and loading state
         as true */

    fetch("https://jsonplaceholder.typicode.com/usersafs")
      .then((res) => {
        if (res.status === 200) {
          /* Throwing the errors if promise failed else 
             returning response.json file*/
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then((data) => {
        // json file also returns a promise so handling it
        setUsers(data);
        //setting the users state with json file data
      })
      .catch((err) => setError(err))
      .finally(() => {
        /* This finally method is that method which runs regardless
        of the fact that promise failed or succeed 
        we want to run it because we want setLoading to be set at false
         regardless of failure or success of promise*/
        setLoading(false);
      });
    //   catching the error if we get any error from top
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

export default FetchingApi;
