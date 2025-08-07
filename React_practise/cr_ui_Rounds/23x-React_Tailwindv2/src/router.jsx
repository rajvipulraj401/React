// import React from "react";
// import { createBrowserRouter } from "react-router";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";

// const router = createBrowserRouter([
//   //Routes hai ye array of object

//   {
//     path: "/",
//     element: <Home />,
//   },
//   // hr ek individual obj hai ek Route
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

// export default router;

// /***
//  *
//  * * `path` → URL path
//  * `element` → Kaunsa component render hoga
//  */

// ---- version 2 with using nesed routes ✅✅✅ ----------

import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      { index: true, element: <Home /> },

      {
        path: "about",
        element: <About />, // yahan Outlet hona chahiye
        children: [
          { index: true, element: <Blog /> }, // 👈 Yeh default child route ban gaya
          { path: "blog", element: <Blog /> }, // nested inside /about/blog
          { path: "*", element: <NotFound /> }, // 👈 handles /about/anything
        ],
      },

      {
        path: "*", // 👈 Catch-all
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
