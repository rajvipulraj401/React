import React, { useEffect, useState } from "react";

// -------------  MAKE 2 VERSION ONE WITH ERROR HANDLING AND other without error handling--------------------------

const App = () => {
  // Let's do it without error handling

  // Make a state

  //   NOW IN ORDER to store the data from the api call we need a state so let's use a state

  const [nameApi, SetNamwApi] = useState([]);
  //   keeping state as empty array because i want to store
  // multiple names

  useEffect(() => {
    // useEffect hooks take two thing in argument 1st is a callback function
    //  second is a dependancy array and also inside the callback function it takes
    // a return keyword which is a cleanup function.

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // lets use map method to loop
        {
          data.map((curr) => {
            // console.log(curr.name);
            SetNamwApi((nameApi) => [...nameApi, curr.name]);
            console.log(nameApi);
          });
        }
        // map method returns a new array , we can even store it
        //  instead of map we could have just used forEach method also as
        // we don't require any manipulation in array
      });

    return () => {};
  }, []);
  return (
    <>
      <h1>User List</h1>
      <ul>
        {nameApi.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
