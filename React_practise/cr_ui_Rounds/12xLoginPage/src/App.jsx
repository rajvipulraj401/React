import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userVal, setUserVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [clearInputs, setClearInputs] = useState(false); // New state to track clearing inputs

  const handleFormSubmit = function (e) {
    // console.log(e.target[0].value);
    // console.log(e.target[1]);
    e.preventDefault();
    setFormSubmit(true);
    // setUserVal("");
    // setPassVal(""); //
    // donot empty here directly else condition will always be false ❌
    // e.target[0].value = "";
    // e.target[1].value = "";
    if (userVal === "user" && passVal === "password") {
      setClearInputs(true);
      setUserVal("");
      setPassVal("");
      // so if this state is true then it means the values are correct (so reset all)
    } else {
      setUserVal("");
      setPassVal("");
    }
  };
  return (
    <>
      {/* <div>App</div> */}
      <form
        action="submit"
        className="form-conatiner"
        // onChange={setFormSubmit(!formSubmit)}
        /*NOTE - THE ABOVE LINE IS WRONG AS IT IS immediately calling the setter function so infinite loop
          ALSO i meant to do after form submit so onSubmit not on form change
        */
        // onSubmit={() => setFormSubmit(!formSubmit)}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div>
          <label htmlFor="Username">Username</label>
          {/* For having a label to the input put the label */}
          <input
            type="text"
            placeholder="username"
            required
            // so that user cannot submit the form without entering the value
            // (this is HTMl form validation)
            value={userVal}
            onChange={(e) => {
              setUserVal(e.target.value);
              setFormSubmit(false);

              // SO WHENEVER USER CHANGES THE INPUT make the setFormSubmit = false again.
            }}
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          {/* For having a label to the input put the label */}
          <input
            type="password"
            placeholder="password"
            required
            value={passVal}
            onChange={(e) => {
              setPassVal(e.target.value);
              setFormSubmit(false);
              // SO WHENEVER USER CHANGES THE INPUT make the setFormSubmit = false again.
            }}
          />
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      {/* {userVal == "user" && passVal == "password" && <p>Welcome ,user!</p>} */}

      {/* if form has been submitted check for the belo */}

      {/* {formSubmit ? (
        userVal == "user" && passVal == "password" ? (
          <p>Welcome, user</p>
        ) : (
          <p>Invalid username or password</p>
        )
      ) : (
        ""
      )} */}

      {formSubmit ? (
        clearInputs ? (
          <p>Welcome, user</p>
        ) : (
          <p>Invalid username or password</p>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default App;

// ------------------(stopwatch one)-------------------
// import React from "react";
// import Stopwatch from "./Stopwatch";

// const App = () => {
//   return (
//     // <div>App</div>

//     <Stopwatch></Stopwatch>
//   );
// };

// export default App;
