// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Import Axios

// const FetchApiCleanup = function () {
//   const [users, setUsers] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();

//   useEffect(() => {
//     // Set loading state to true and clear any previous error
//     setLoading(true);
//     setError(undefined);

//     // Create an instance of AbortController
//     const controller = new AbortController();

//     // Fetch data from the API using the associated signal
//     axios
//       .get("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((response) => {
//         /* IN AXIos we don't need additonal then method to  handle response.json file
//             as it parses the respnse data as Json*/
//         // If successful, set the users state with the fetched data
//         setUsers(response.data);
//       })
//       .catch((err) => {
//         // Handle errors, including the "AbortError"
//         if (err?.name === "AbortError") return; // Ignore aborted requests
//         setError(err.message);
//       })
//       .finally(() => {
//         // Regardless of success or failure, set loading to false
//         setLoading(false);
//       });

//     // Cleanup function: Abort the fetch request when the component unmounts
//     return () => {
//       controller.abort();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   let jsx;

//   if (loading) {
//     jsx = <h2>Loading...</h2>;
//   } else if (error != null) {
//     jsx = <h2>Error {error}!</h2>;
//     // Show the error if we get an error in the error state from the catch method
//   } else {
//     jsx = JSON.stringify(users);
//   }

//   return (
//     <div>
//       <h1>Users</h1>
//       {jsx}
//     </div>
//   );
// };

// export default FetchApiCleanup;

// USING aWAIT IN AXIOS api ............................

import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const FetchApiCleanup = function () {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);

      const controller = new AbortController();

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );

        // Set users state with the fetched data
        setUsers(response.data);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  let jsx;

  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error {error}!</h2>;
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
