import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div>
        Home
        <Link to="/about">
          <li>goToAbout</li>
        </Link>
      </div>
    </>
  );
};

export default Home;
