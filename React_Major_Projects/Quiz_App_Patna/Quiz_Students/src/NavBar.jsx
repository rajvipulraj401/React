import React, { useEffect } from "react";
// import "./index.css";

const NavBar = () => {
  /* In order to do something when page scroll we need to use

use useEffect hook cause this is a side effect that's why
*/

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navBar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Adding a cleanup function
    };
  }, []);

  return (
    <>
      <nav className="navBar ">
        {/* I have to inside this nav div
        add 
        a)  1 logo 
        a1) A theme changer icon 
        b) 4 navigation link 
        c) a coin icon which displays a coin
         image and the value of the coin set to 0 */}
        <div className="logo-Text nav-Text">QUIZARD</div>

        <div className="Navigation_links">
          <div>{/* Theme icon here */}</div>
          <div className="nav-Text">Live Quiz</div>
          <div className="nav-Text">Profile</div>
          <div className="nav-Text">
            Default
            {/* Here i have to add a drop down menu  */}
          </div>
          <div className="nav-Text">Logout</div>
          <div className="nav-Text">
            {/* Here i have to make it a circular div and 
          inside that i have to add a coin icon and  0 text  */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
