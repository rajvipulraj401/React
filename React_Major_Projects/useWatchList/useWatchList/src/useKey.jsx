import { useEffect } from "react";

// Custom hook for handling keyboard events
export function useKey(key, action) {
  useEffect(
    function () {
      // Effect to add event listener for specified key
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action(); // Call action function when key is pressed
        }
      }

      document.addEventListener("keydown", callback); // Add event listener for keydown event

      // Clean-up function to remove event listener when component unmounts or key changes
      return function () {
        document.removeEventListener("keydown", callback); // Remove event listener for keydown event
      };
    },
    [action, key] // Dependency array with action and key
  );
}
