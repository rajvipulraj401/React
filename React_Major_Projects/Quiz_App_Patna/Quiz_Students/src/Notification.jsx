import React, { useEffect, useState } from "react";
// import "./Notification.css";

const Notification = ({ message, onComplete }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 800000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`notification ${show ? "show" : ""}`}>
      <div className="loading-circle">
        <div className="checkmark"></div>
      </div>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
