import React from "react";

const Search = ({ value, handleChange }) => {
  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for countries"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      {/* <input type="text"  placeholder="search country" value={val} onChange={ handleChange}/> */}
    </>
  );
};

export default Search;
