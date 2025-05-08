import React, { useEffect, useState } from "react";

const StopWatch = () => {
  // All hooks :---
  const [resetClick, setResetClick] = useState(false); // Used to trigger reset via dependency array
  const [isRunning, setIsRunning] = useState(false); // Start/stop toggle
  const [timeInSeconds, setTimeInSeconds] = useState(0); // Total time in seconds

  // useEffect with dependency array runs on mount and on update of resetClick
  useEffect(() => {
    setTimeInSeconds(0); // On reset, set time to 0
  }, [resetClick]);

  // As setInterval is a side effect, we need to use it inside useEffect and also clean it up
  useEffect(() => {
    if (!isRunning) return; // Only run interval when started

    /* LOGIC—
       When user clicks Start, we want timer to update every 1 sec (1000ms)
       So we use setInterval which repeatedly updates the time by 1 sec

       Instead of maintaining minute and second separately,
       we store total seconds and then calculate minute & second from that
    */

    const interval = setInterval(() => {
      setTimeInSeconds((prev) => prev + 1); // Increment total time by 1 second
    }, 1000);

    // Step 4: Cleanup interval when isRunning becomes false or component unmounts
    // 🚨 CLEANUP NOTE:
    // Why is this important?
    // - Prevents multiple intervals from stacking up each time start/stop toggles
    //   (Else the timer will increase at 1x, then 2x, 3x... speeds)
    // - Stops timer on unmount
    // - Avoids memory leaks and performance issues
    return () => clearInterval(interval);
  }, [isRunning]);

  // Convert total time (seconds) into mm:ss format for display
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const formattedMin = `${minutes}`;
  const formattedSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

  // Function to handle start/stop button click
  const handleStartStop = () => {
    setIsRunning(!isRunning);
    // On click, toggle the isRunning state which starts or stops the timer
  };

  // Function to handle reset button click
  const handleReset = () => {
    console.log("i was reset");
    setResetClick(!resetClick); // Trigger reset logic via useEffect
    setIsRunning(false); // Also stop the timer on reset
  };

  return (
    <>
      <h1>Stopwatch</h1>

      <p>
        Time: <span>{`${formattedMin}:${formattedSec}`}</span>
      </p>

      <div className="btn-container">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default StopWatch;
