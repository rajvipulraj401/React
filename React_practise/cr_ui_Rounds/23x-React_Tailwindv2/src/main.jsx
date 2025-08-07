import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.jsx"; // 👈 config-based routing
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* router attribute me humlog apna route wala jo object banaye hai ek file me wo dena padt ahai  */}
  </StrictMode>
);
