import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { NavLink, useNavigate, Link } from "react-router"; // Import NavLink for active link functionality

const Navbar = () => {
  // const navigate = useNavigate(); // Initialize useNavigate

  // const handleBookingsClick = () => {
  //   navigate("/my-bookings"); // Navigate to '/my-bookings' page on button click
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topStrip}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className={styles.navbar}>
        <Logo></Logo>
        <ul className={styles.navLinks}>
          {/* READ THIS 📚📚📚📚📚📕📕📕📕 */}
          {/* NavLink automatically gives us 'isActive' prop */}
          {/* We're using an arrow function to apply class based on isActive */}
          {/* If the route matches, it applies 'active-link', else 'nav-link' */}
          {/* This helps in showing which page is currently active (like underline etc.) */}

          <li>
            <NavLink
              to="/FindDoctor"
              // style={{ textDecoration: "none", all: "unset" }}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              // Dynamically creating a class when the link is active
            >
              Find Doctors
            </NavLink>
          </li>

          {/* Using NavLink for Hospitals route */}
          <li>
            <NavLink
              to="/Hospitals"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              // style={{ textDecoration: "none", all: "unset" }}
            >
              Hospitals
            </NavLink>
          </li>

          {/* Using NavLink for Medicines route */}
          <li>
            <NavLink
              to="/Medicines"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              // style={{ textDecoration: "none", all: "unset" }}
            >
              Medicines
            </NavLink>
          </li>

          {/* Using NavLink for Surgeries route */}
          <li>
            <NavLink
              to="/Surgeries"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              // style={{ textDecoration: "none", all: "unset" }}
            >
              Surgeries
            </NavLink>
          </li>

          {/* Using NavLink for Software for Provider route */}
          <li>
            <NavLink
              to="/SoftwareForProvider"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              // style={{ textDecoration: "none", all: "unset" }}
            >
              Software for Provider
            </NavLink>
          </li>

          {/* Using NavLink for Facilities route */}
          <li>
            <NavLink
              to="/Facilities"
              className={({ isActive }) =>
                isActive //(same both concatenating two styles)
                  ? // ? `${styles.navLink} ${styles.activeLink}`
                    styles.navLink + " " + styles.activeLink
                  : styles.navLink
              }
              // style={{ textDecoration: "none", all: "unset" }}
            >
              Facilities
            </NavLink>
          </li>

          {/* Button component for "My Bookings" */}
          <Button
            width="130px"
            height="50px"
            background="var(--color-primary)"
            aria-label="My Bookings"
          >
            My Bookings
          </Button>

          {/* Button component for "My Bookings" */}
          {/* 
          <Link to="/my-bookings" style={{ all: "unset" }}>
            <Button
              width="130px"
              height="50px"
              background="var(--color-primary)"
              aria-label="My Bookings"
              // handleBtnClick ={handleBookingsClick}
            >
              My Bookings
            </Button>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

// -------------------2nd ------------

// import React from "react";
// import styles from "./Navbar.module.css";
// import Logo from "../Logo/Logo";
// import Button from "../Button/Button";
// import { Link } from "react-router";

// const Navbar = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.topStrip}>
//         The health and well-being of our patients and their health care team
//         will always be our priority, so we follow the best practices for
//         cleanliness.
//       </div>
//       <nav className={styles.navbar}>
//         <Logo></Logo>
//         <ul className={styles.navLinks}>
//           <li>
//             <Link to="/FindDoctor">Find Doctors</Link>
//           </li>
//           <li>
//             <Link to="/Hospitals">Hospitals</Link>
//           </li>
//           <li>
//             <Link to="/Medicines">Medicines</Link>
//           </li>
//           <li>
//             <Link to="/Surgeries">Surgeries</Link>
//           </li>
//           <li>
//             <Link to="/SoftwareForProvider">Software for Provider</Link>
//           </li>
//           <li>
//             <Link to="/Facilities">Facilities</Link>
//           </li>
//         </ul>
//         <Button
//           width="130px"
//           height="50px"
//           background="var(--color-primary)"
//           aria-label="My Bookings"
//         >
//           My Bookings
//         </Button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
