import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useKey } from "./useKey";
import { useLocalStorageState } from "./useLocalStorageState";
import { useMovies } from "./useMovies";

//  function to cal average .
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "f84fc31d";
// API key for fetching movie details

// Main App component--------
export default function App() {
  const [query, setQuery] = useState(""); // Query state for searching movies
  const [selectedId, setSelectedId] = useState(null); // Selected movie ID
  const { movies, isLoading, error } = useMovies(query); // Custom hook for fetching movies

  // Local storage mein watched movies ko store karne ke liye ek aur state.
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // Function to handle movie selection
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  // Function to handle closing movie details
  function handleCloseMovie() {
    setSelectedId(null);
  }

  // Function to add a movie to watched list
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  // Function to delete a movie from watched list
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  // Ab sab kuch render karna hai.
  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} /> {/* Search component */}
        <NumResults movies={movies} /> {/* Number of results */}
      </NavBar>

      <Main>
        {/* Box for displaying movie list or loader/error message */}
        <Box>
          {/* Loader agar data load ho raha hai */}
          {isLoading && <Loader />}
          {/* Movie list agar data load ho chuka hai aur koi error nahi hai */}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {/* Error message agar koi error aata hai */}
          {error && <ErrorMessage message={error} />}
        </Box>

        {/* Box for displaying movie details or watched list */}
        <Box>
          {/* Movie details agar koi movie select hoti hai */}
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            /* Watched list agar koi movie select nahi hoti */
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// Loader component jo loading state ko represent karta hai
function Loader() {
  return <p className="loader">Loading...</p>;
}

// Error message component jo error ko display karta hai
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}

// Navbar component jo navigation elements ko contain karta hai
function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo /> {/* Logo */}
      {children}
    </nav>
  );
}

// Logo component jo website ka logo display karta hai
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span> {/* Popcorn emoji */}
      <h1>useWatchList</h1> {/* Website title */}
    </div>
  );
}

// Search component for searching
function Search({ query, setQuery }) {
  const inputEl = useRef(null); // Reference to input element for focus

  // Use custom hook to focus input on pressing Enter
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

// NumResults component for displaying total number of results.
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

// Main component jo main content area ko contain karta hai
function Main({ children }) {
  return <main className="main">{children}</main>;
}

// Box component jo content ko toggle karne ka functionality provide karta hai
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true); // State to manage box toggle

  return (
    <div className="box">
      {/* Button to toggle box */}
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"} {/* Icon to show/hide content */}
      </button>
      {isOpen && children} {/* Display content if box is open */}
    </div>
  );
}

// MovieList component jo list of movies ko display karta hai
function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {/* Mapping over movies to display each movie */}
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

// Movie component jo ek movie ka representation hai
function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span> {/* Calendar emoji */}
          <span>{movie.Year}</span> {/* Movie release year */}
        </p>
      </div>
    </li>
  );
}

// MovieDetails component jo movie ki details ko display karta hai
function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  // States to manage movie details and loading state
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  // Reference to count number of rating decisions
  const countRef = useRef(0);

  // Increment countRef when user sets a rating

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    // Extracting movie details from state
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // Check if movie is top rated--
  const isTop = imdbRating > 8;
  console.log(isTop);

  // const [avgRating, setAvgRating] = useState(0);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();

    // setAvgRating(Number(imdbRating));
    // setAvgRating((avgRating) => (avgRating + userRating) / 2);
  }

  useKey("Escape", onCloseMovie);

  // Fetch movie details when selectedId changes
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  // Set document title to movie title when it changes
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title]
  );

  return (
    <div className="details">
      {/* Loader while fetching data ----------*/}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;{/* Left arrow icon */}
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          {/* Rating section *--------------⭐⭐⭐/}
          {/* <p>{avgRating}</p> */}

          <section>
            <div className="rating">
              {/* If movie is not watched, show star rating */}
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                /* If movie is watched, show user's rating */
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            {/* Plot and cast details */}
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

// Summary of watched movies
function WatchedSummary({ watched }) {
  // Calculate average IMDb rating, user rating, and runtime of watched movies
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  // Display summary
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span> {/* Number emoji */}
          <span>{watched.length} movies</span>{" "}
          {/* Total number of watched movies */}
        </p>
        <p>
          <span>⭐️</span> {/* Star emoji */}
          <span>{avgImdbRating.toFixed(2)}</span> {/* Average IMDb rating */}
        </p>
        <p>
          <span>🌟</span> {/* Star emoji */}
          <span>{avgUserRating.toFixed(2)}</span> {/* Average user rating */}
        </p>
        <p>
          <span>⏳</span> {/* Hourglass emoji */}
          <span>{avgRuntime} min</span> {/* Average runtime */}
        </p>
      </div>
    </div>
  );
}
// List of watched movies
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {/* Mapping over watched movies to display each one */}
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

// Individual watched movie item
function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span> {/* Star emoji */}
          <span>{movie.imdbRating}</span> {/* IMDb rating */}
        </p>
        <p>
          <span>🌟</span> {/* Star emoji */}
          <span>{movie.userRating}</span> {/* User rating */}
        </p>
        <p>
          <span>⏳</span> {/* Hourglass emoji */}
          <span>{movie.runtime} min</span> {/* Runtime */}
        </p>

        {/* Button to delete watched movie */}
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
