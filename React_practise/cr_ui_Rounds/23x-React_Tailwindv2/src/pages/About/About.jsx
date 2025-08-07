import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <>
      <div>About</div>
      <Link to="/">
        <li>goToHome</li>
      </Link>
      <Outlet /> {/* 👈 yahan Blog render hoga jab /about/blog visit karega */}
    </>
  );
};

export default About;
