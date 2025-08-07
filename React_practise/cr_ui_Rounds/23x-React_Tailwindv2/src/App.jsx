// import React from "react";

// const App = () => {
//   return (
//     <>
//       {/* <div className="app-container">App</div> */}

//       <div className=" w-[200px] h-[200px] bg-red-500 rounded-[5px]">App</div>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <button>clickme</button>
      <div className="w-[200px] ss:w-[400px] h-[200px] bg-color4 rounded-[5px]">
        {/* App */}
        <Outlet />
      </div>

      {/* 👇 Yeh zaroori hai child routes dikhane ke liye */}
    </>
  );
};

export default App;
