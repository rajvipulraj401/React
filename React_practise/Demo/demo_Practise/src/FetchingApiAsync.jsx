import React, { useEffect, useState } from "react";

const FetchApiAsync = function () {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Set loading state to true and clear any previous error
    setLoading(true);
    setError(undefined);

    // Create an instance of AbortController
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        // Fetch data from the API using the associated signal
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });

        if (res.status === 200) {
          // If successful, parse the JSON data
          const data = await res.json();
          // Set the users state with the fetched data
          setUsers(data);
        } else {
          // Handle errors by throwing an error
          throw new Error(`Request failed with status ${res.status}`);
        }
      } catch (err) {
        // Handle errors, including the "AbortError"
        if (err?.name === "AbortError") return; // Ignore aborted requests
        setError(err.message);
      } finally {
        // Regardless of success or failure, set loading to false
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function: Abort the fetch request when the component unmounts
    return () => {
      controller.abort();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  let jsx;

  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error {error}!</h2>;
    // Show the error if we get an error in the error state from the catch method
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

export default FetchApiAsync;
