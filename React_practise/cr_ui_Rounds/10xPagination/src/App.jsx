// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Button from "./components/Button";
// import TableData from "./components/TableData";
// import axios from "axios";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState([]);

// const handlePreviousBtn = () => {
//   // console.log("prev clicked");
//   currentPage > 1 && setCurrentPage((prev) => prev - 1);
// };
// const handleNextBtn = (e, data) => {
//   // console.log("Next clicked");
//   // console.log(e);
//   currentPage < 10 && setCurrentPage((prev) => prev + 1);
// };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
//         );
//         // console.log(response);
//         //NOTE -- axios return the response in form of object and the actual data is in response.data (mtlb data property me)
//         // console.log(response.data);

//         setData(response.data);

//         /* ---------method 2 using fetch and axios ----- */
//         // const response = await fetch(
//         //   "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
//         // );

//         // const res = await response.json();
//         // console.log(res);
//         // console.log(response.data);
//       } catch (error) {
//         console.error("Error:", error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="pagination-container">
//       <div>
//         <h1>Employee Data Table</h1>
//       </div>

//       <div className="table-container">
//         <TableData data={data}></TableData>
//       </div>

//       <div className="buttons-container">
//         <Button name="Previous" handleBtnClick={handlePreviousBtn}></Button>
//         <Button name={currentPage}></Button>

//         {/*  In this we are just referencing the function */}
//         {/* <Button name="Next" handleBtnClick={handleNextBtn}></Button> */}
//         <Button
//           name="Next"
//           //  This is the inline function
//           // handleBtnClick={() => {
//           //   currentPage < 10 && setCurrentPage((prev) => prev + 1);
//           // }}

//           // 3 RD way of passing function -- in this we are passing argument to the function
//           handleBtnClick={(e, data) => {
//             handleNextBtn(e, data);
//           }}
//         ></Button>
//       </div>
//     </div>
//   );
// };

// export default App;

// ----------------2nd way (adding pagination logic)-----------

/*
  Logic which i have use to  do pagination :---

  0a) on mount i got the data from the server.
  
  a) i  have got the data and keep 3 states 
    (i) one for storing current page no
    (ii) one for storing the data
    (iii) one for storing the si of data so that i can show first 10 elements


  b) then using si state i send first 10 element to the tablecomponent i created


*/

import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TableData from "./components/TableData";
import axios from "axios";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [si, setSi] = useState(0);

  const handlePreviousBtn = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setSi((prev) => (prev > 0 ? prev - 10 : prev));
    }
  };

  const handleNextBtn = (e) => {
    if (currentPage < Math.ceil(data.length / 10)) {
      setCurrentPage((prev) => prev + 1);
      // Now when the  prev btn gets clicked change the si
      setSi((prev) => (prev + 10 < data.length ? prev + 10 : prev));

      // setSi((prev) => {
      //   if (prev + 10 < data.length) {
      //     return prev + 10;
      //   } else {
      //     return prev;
      //   }
      // });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        // console.log(response);
        //NOTE -- axios return the response in form of object and the actual data is in response.data (mtlb data property me)
        // console.log(response.data);

        setData(response.data);

        /* ---------method 2 using fetch and axios ----- */

        // const response = await fetch(
        //   "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        // );

        // const res = await response.json();
        // console.log(res); // ✅ yahi actual data hai
        // console.log(response.data); // ❌ galat, fetch me .data nahi hota
      } catch (error) {
        console.error("Error:", error.message);
        alert("failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pagination-container">
      <div>
        <h1>Employee Data Table</h1>
      </div>

      <div className="table-container">
        <TableData data={data.slice(si, si + 10)}></TableData>
        {/* only sending the first 10 data to table to show */}
      </div>

      <div className="buttons-container">
        <Button name="Previous" handleBtnClick={handlePreviousBtn}></Button>
        <Button name={currentPage}></Button>

        {/*  In this we are just referencing the function */}
        {/* <Button name="Next" handleBtnClick={handleNextBtn}></Button> */}
        <Button
          name="Next"
          //  This is the inline function
          // handleBtnClick={() => {
          //   currentPage < 10 && setCurrentPage((prev) => prev + 1);
          // }}

          // 3 RD way of passing function -- in this we are passing argument to the function
          handleBtnClick={(e) => {
            handleNextBtn(e);
          }}
        ></Button>
      </div>
    </div>
  );
};

export default App;
