import React, { useState, useEffect, useRef } from "react";
import Notification from "./Notification";
import "./index.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({ isDarkMode, handleThemeToggle, customClassName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/LoginPage");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("DEFAULT");
  const [showNotification, setShowNotification] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navBar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled", styles.quizNavbar);
      } else {
        navbar.classList.remove("scrolled", styles.quizNavbar);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
    setShowNotification(true);
  };

  const handleNotificationComplete = () => {
    setShowNotification(false);
  };

  return (
    // <nav className="navBar">
    <nav className={`navBar ${customClassName || ""}`}>
      {/* Apply custom class */}
      <div className="logo-Text">QUIZARD</div>
      <div className="Navigation_links">
        <div className="theme-toggle">
          <button onClick={handleThemeToggle}>
            <img
              src={isDarkMode ? "night.png" : "day.png"}
              alt="Theme Icon"
              className="theme-icon"
            />
          </button>
        </div>
        <div className="nav-Text">Live Quiz</div>
        <div className="nav-Text" ref={dropdownRef} onClick={toggleDropdown}>
          {selectedItem}
          <span className="dropdown-arrow"> ▼ </span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {[
                "DEFAULT",
                "Grade 12",
                "Grade 11",
                "Grade 10",
                "Grade 9",
                "Grade 8",
                "Grade 7",
              ].map((item) => (
                <li
                  key={item}
                  className="dropdown-item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="nav-Text" onClick={handleClick}>
          {/* onClick={handleClick} */}
          Login
        </div>
        <div className="nav-Text">Register</div>
        <div className="nav-Text">
          {/* Coin container or any other content */}
        </div>
      </div>
      {showNotification && (
        <Notification
          message="Class updated successfully."
          onComplete={handleNotificationComplete}
        />
      )}
    </nav>
  );
};

export default NavBar;
