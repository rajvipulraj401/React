// import React from "react";
// import { useState } from "react";
// const App = () => {
//   let [value, setValue] = useState(0);
//   return (
//     <>
//       <div>
//         <h1> Counter App</h1>
//         <h2>Count: {value}</h2>

//         <div>
//           <button onClick={() => setValue((prevValue) => (prevValue += 1))}>
//             Increment
//           </button>
//           <button onClick={() => setValue((prevValue) => (prevValue -= 1))}>
//             Decrement
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// ------------By using one function only to handle Submit-----

import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const handleClick = (event) => {
    // Get the event which triggered it get its text Content
    const action = event.target.textContent; // Button ke andar ka text nikalna
    setValue(
      (prevValue) => (action === "Increment" ? prevValue + 1 : --prevValue)

      // NOTE - 👿👿👿👿👿👿🙅🏼‍♂️🙅🏼‍♀️🙅🏼‍♀️🙅🏼‍♀️👿Postfix decrement (prevValue--) ka effect next line pe hoga,
      // lekin yahan return hone ke baad woh update hoga, is wajah se correct value return nahi hogi.
      // Isliye prefix decrement (--prevValue) use kiya hai jo pehle value ko update karega aur wahi return hoga.
    );
  };

  return (
    <>
      <div>
        <h1> Counter App</h1>
        <h2>Count: {value}</h2>

        <div>
          <button onClick={handleClick}>Increment</button>
          <button onClick={handleClick}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default App;
