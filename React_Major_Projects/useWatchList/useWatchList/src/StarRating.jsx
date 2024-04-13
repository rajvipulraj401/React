import { useState } from "react";
import PropTypes from "prop-types";

// Default styles for star container
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

// Default styles for star
const starContainerStyle = {
  display: "flex",
};

// StarRating component for rating movies
StarRating.propTypes = {
  maxRating: PropTypes.number, // Maximum rating
  defaultRating: PropTypes.number, // Default rating
  color: PropTypes.string, // Color of stars
  size: PropTypes.number, // Size of stars
  messages: PropTypes.array, // Messages for each rating
  className: PropTypes.string, // Additional class name
  onSetRating: PropTypes.func, // Function to handle rating selection
};

export default function StarRating({
  maxRating = 5, // Default maximum rating
  color = "#fcc419", // Default star color
  size = 48, // Default star size
  className = "", // Default class name
  messages = [], // Default messages for each rating
  defaultRating = 0, // Default rating
  onSetRating, // Function to handle rating selection
}) {
  // States for current rating and temporary rating
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  // Function to handle rating selection
  function handleRating(rating) {
    setRating(rating); // Set current rating
    onSetRating(rating); // Call onSetRating function with current rating
  }

  // Inline style for text
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  // Return StarRating component with stars and text
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {/* Map over maximum rating to display stars */}
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i} // Unique key for each star
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1} // Full or empty star based on current rating
            onRate={() => handleRating(i + 1)} // Function to handle rating selection
            onHoverIn={() => setTempRating(i + 1)} // Function to handle hover in event
            onHoverOut={() => setTempRating(0)} // Function to handle hover out event
            color={color} // Star color
            size={size} // Star size
          />
        ))}
      </div>
      <p style={textStyle}>
        {/* Display rating message based on current or temporary rating */}
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

// Star component for individual star
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  // Inline style for star
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  // Return individual star with appropriate icon
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate} // Call onRate function on click
      onMouseEnter={onHoverIn} // Call onHoverIn function on mouse enter
      onMouseLeave={onHoverOut} // Call onHoverOut function on mouse leave
    >
      {/* Render full or empty star based on full prop */}
      {full ? (
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
    </span>
  );
}

// PropTypes for Star component
Star.propTypes = {
  onRate: PropTypes.func.isRequired, // Function to handle rating selection
  full: PropTypes.bool.isRequired, // Whether the star is full or empty
  onHoverIn: PropTypes.func.isRequired, // Function to handle hover in event
  onHoverOut: PropTypes.func.isRequired, // Function to handle hover out event
  color: PropTypes.string.isRequired, // Color of star
  size: PropTypes.number.isRequired, // Size of star
};
