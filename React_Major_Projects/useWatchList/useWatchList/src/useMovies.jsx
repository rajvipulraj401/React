import { useState, useEffect } from "react";

const KEY = "f84fc31d";

// Custom hook for fetching movies based on a query
export function useMovies(query) {
  // States for storing movies, loading state, and error
  const [movies, setMovies] = useState([]); // Movies list
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  useEffect(
    function () {
      // Use effect to fetch movies when query changes

      const controller = new AbortController(); // Abort controller for aborting fetch request if needed

      async function fetchMovies() {
        try {
          setIsLoading(true); // Set loading state to true
          setError(""); // Clear any previous errors

          // Fetch movies from OMDB API based on the query
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal } // Pass abort signal to fetch request
          );

          if (!res.ok)
            throw new Error("Something went wrong while fetching movies"); // Throw error if response is not ok

          const data = await res.json(); // Parse response JSON

          if (data.Response === "False") throw new Error("Movie not found"); // Throw error if no movie found

          setMovies(data.Search); // Set movies state with search results
          setError(""); // Clear any previous errors
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message); // Log error message to console
            setError(err.message); // Set error message state
          }
        } finally {
          setIsLoading(false); // Set loading state to false after fetch completes
        }
      }

      // If query length is less than 3, reset movies and error states
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies(); // Call fetchMovies function

      // Clean-up function to abort fetch request when component unmounts or query changes
      return function () {
        controller.abort();
      };
    },
    [query] // Dependency array with query
  );

  // Return movies, loading state, and error
  return { movies, isLoading, error };
}
