import React, { useEffect, useState } from "react";

// const StrictlyMode2 = () => {
const BadStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 0.1);
    }, 100);
  }, []);
  return <div>Bad Stopwatch : {count.toFixed(1)}</div>;
};

const GoodStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  // };

  return <div>Good Stopwatch : {count.toFixed(1)}</div>;
};

export default function StrictlyMode2() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <BadStopwatch />
      <br></br>
      <GoodStopwatch />
    </div>
  );
}

/* In the above code both of them are functional component bad and good stopwatch */
