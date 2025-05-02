// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [userVal, setUserVal] = useState("");
//   const [passVal, setPassVal] = useState("");
//   return (
//     <>
//       {/* <div>App</div> */}
//       <form action="submit" className="form-conatiner">
//         <div>
//           <label htmlFor="Username">Username</label>
//           <input
//             type="text"
//             placeholder="username"
//             required
//             value={userVal}
//             onChange={(e) => setUserVal(e.target.value)}
//           />
//         </div>

//         <div>
//           <label htmlFor="Password">Password</label>
//           <input
//             type="password"
//             placeholder="password"
//             required
//             value={passVal}
//             onChange={(e) => setPassVal(e.target.value)}
//           />
//         </div>

//         <div>
//           <button type="submit">submit</button>
//         </div>
//       </form>

//       {userVal == "user" && passVal == "password" && <p>Welcome ,user!</p>}
//     </>
//   );
// };

// export default App;

// ------------------v2
import React from "react";
import Stopwatch from "./Stopwatch";

const App = () => {
  return (
    // <div>App</div>

    <Stopwatch></Stopwatch>
  );
};

export default App;
