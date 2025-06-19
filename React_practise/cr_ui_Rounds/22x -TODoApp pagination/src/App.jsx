import React, { useEffect, useState } from "react";
// import "./App.css";
import "./App.css";
import Button from "./components/Button/Button";

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [si, setSi] = useState(0);
  // Step1 :---= we will fetch the data and we willhave astate for it

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok)
          throw new Error("Failed to fetch to-dos. Please try again later.");

        const res = await response.json();
        setTodoData(res);

        // console.log(res);
      } catch (err) {
        //  catch {
        // console.error("Failed to fetch to-dos. Please try again later.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // create   a new Array with sliced data
  let newArr = todoData.slice(si, si + 5);

  const handlePrev = () => {
    setSi((prev) => prev - 5);
    setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    /**
     * MILESTONE 3:------
     * As soon as i click the next btn my si should increment to+5 but
     * it should not exceed the data.length-1 ( like suppose we have 200 data
     *  and if we go till 200 only ok )
     *
     * 2-- also set the previous page
     */
    setSi((prev) => prev + 5);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="appContainer">
        <h1>TodoDisplay</h1>
        {/* Milestone -- loop krna hai si se si+5 tk (aur usko list ke form me dikha anai) */}

        {newArr.map((curr) => (
          // we will map and show a list of data
          <ul key={curr.id} className="listContainer">
            <li>
              {curr.title}
              <input type="checkbox" checked={curr.completed} readOnly />
            </li>
          </ul>
        ))}

        <div className="btnContainer">
          <Button
            handleClick={handlePrev}
            // disabled={currentPage > 1 ? false : true}
            disabled={currentPage < 2}
          >
            prev
          </Button>
          <Button>{currentPage}</Button>
          <Button
            handleClick={handleNext}
            // disabled={currentPage < Math.ceil(todoData.length) / 5 ? false : true}
            disabled={currentPage >= Math.ceil(todoData.length / 5)}
          >
            next
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
