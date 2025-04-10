// import React from "react";
// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// // ---YE NEECHE wala nahi le rha hai tha isle neeche wala technical support bataya---
// import searchIcon from "../../assets/search-icon.svg";
// import { useAutocomplete } from "@mui/base/useAutocomplete";
// import { styled } from "@mui/system";
// import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// import { Tooltip } from "@mui/material";

// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     console.log(value);
//     navigate(`/album/${value.slug}`);
//     //Process form data, call API, set state etc.
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           {/* <button className={styles.searchButton} type="submit">
//             <SearchIcon />
//           </button> */}

//           <button className={styles.searchButton} type="submit">
//             <img src={searchIcon} alt="Search" />
//           </button>

//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             // console.log(option);
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>

//                   {/* <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p> */}
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;

// -----------Make by your own this search component from your own use Material ui aur just your own way bhai-----

// import React from "react";

// const Search = () => {
//   return <div>Search</div>;
// };

// export default Search;

// ---------------Do above again -----------------------------

import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg"; // Import the search icon

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.search}
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="Search" width={20} />
      </button>
    </div>
  );
};

export default Search;
