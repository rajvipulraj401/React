// ---------------crio above code -----DOfrom yourself👇🏼👇🏼👇🏼👇🏼

// import React from "react";
// import styles from "./Navbar.module.css";
// import Logo from "../Logo/Logo";
// import Search from "../Search/Search";

// function Navbar({ searchData }) {
//   return (
//     <nav className={styles.navbar}>
//       aagya mai
//       <Logo></Logo>
//       <Search></Search>
//       <Button>Give Feedback</Button>
//     </nav>
//   );
// }

// export default Navbar;

// --------------Doing in simple way below TRY ABOVE again ----- in codesandbox---

// import React from "react";
// import styles from "./Navbar.module.css";
// import Logo from "../Logo/Logo";
// import Search from "../Search/Search";
// import Button from "../Button/Button"; // Import Button properly

// function Navbar({ searchData }) {
//   return (
//     <nav className={styles.navbar}>
//       <Logo />
//       <Search />
//       <Button>Give Feedback</Button>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
