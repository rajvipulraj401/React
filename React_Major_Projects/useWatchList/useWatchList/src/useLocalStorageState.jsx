import { useState, useEffect } from "react";

// Custom hook for managing state in local storage
export function useLocalStorageState(initialState, key) {
  // State for storing value and setter function
  const [value, setValue] = useState(function () {
    // Initial value from local storage or initialState if not available
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      // Effect to store value in local storage when it changes
      localStorage.setItem(key, JSON.stringify(value)); // Store value as JSON string
    },
    [value, key] // Dependency array with value and key
  );

  // Return value and setter function
  return [value, setValue];
}
