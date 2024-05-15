import React from "react";
// import "./index.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
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
