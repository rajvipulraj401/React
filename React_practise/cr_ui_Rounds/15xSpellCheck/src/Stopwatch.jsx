import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // cleanup on unmount or when isRunning changes
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>
        Time: {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </h2>

      <div>
        <button onClick={handleStartStop} style={{ marginRight: "10px" }}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
