import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

const App = () => {
  // let [time, setTime] = useState(0);

  // convert the time to min and second as soon as the state changes

  const [timerStarted, setTimerStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  // This whole timer will have the value as 0  when it starts and it will accumulate all the second that has passed

  useEffect(() => {
    // Milestone :-- run this timer only if the timerStarted state is true
    let timer;
    if (timerStarted) {
      timer = setInterval(() => {
        // 1 sec increase after every 1 sec
        setCurrentTime((prev) => prev + 1);
      }, 1000);
      // console.log(timer);
    }
    // console.log(timer);
    return () => clearInterval(timer); // in the cleanup function we need to return it inside the callback func

    // so basically after every second we are running this timer
    // Time = 0 => maan lete hai 70 hai toh ye kitna time hua 1 min 10 sec hua na yahi logic yaha likho
  }, [timerStarted]);

  //----- All functions below :---

  const handleToggleClick = () => {
    timerStarted ? setTimerStarted(false) : setTimerStarted(true);
  };
  const handleReset = () => {
    setCurrentTime(0);
    setTimerStarted(false);
  };
  return (
    <>
      <main className="appContainer">
        <h1>Stopwatch</h1>
        {/* <p>Time: <span>{hr}:{min}:{sec}</span></p> */}
        <p>
          Time:{" "}
          <span>
            {/* {min}:{sec} */}
            {/* {0}:{0} */}
            {Math.floor(currentTime / 60)}:
            {currentTime % 60 < 9 ? `0${currentTime % 60}` : currentTime % 60}
            {/* NO need to use + operator isse string no ho jayega aur dikkat ye hoga ki 09 9 bn jayega */}
            {/* 0:00 */}
          </span>
        </p>
        <div className="btnContainer">
          <Button handleClick={handleToggleClick}>
            {timerStarted ? "Pause" : "Start"}
          </Button>
          <Button handleClick={handleReset}>Reset</Button>
        </div>
      </main>
    </>
  );
};

export default App;

/***
 * Milesone :--display the timer (run the timer) on click of start it should start and it should pause also
 *
 * Miletone 2 :-- now we have the current passed  time we need
 */
