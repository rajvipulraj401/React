// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3} // Max number of snackbars visible at once
      autoHideDuration={3000} // Each snackbar disappears after 3 seconds
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position: Top center
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);
