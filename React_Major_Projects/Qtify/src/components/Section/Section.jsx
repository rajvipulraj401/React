// import React, { useEffect, useState } from "react";
// import styles from "./Section.module.css";
// import axios from "axios";
// import Card from "../Card/Card";
// // import Cardwa from "../Search/Search"; // i can give any name and import it like this for default export cases
// // import { Card as Cardwa, SearchBar } from "../Search/Search"; // in case of named export
// // import { Card } from "../Search/Search"; // this is the way to import named export

// const Section = ({ endpoint }) => {
//   // ----All hooks 🦈 -----

//   console.log(endpoint);
//   const [albums, setAlbums] = useState([]);
//   useEffect(() => {
//     const controller = new AbortController(); // ✅ Step 1: Create an AbortController

//     fetchCard(controller.signal); // ✅ Step 2: Pass controller.signal to API request

//     return () => {
//       controller.abort(); // ✅ Step 3: Cancel request on unmount
//     };
//   }, []);

//   //   Above useEffect is the best way to do cleanup function  below is second way for small data

//   //   useEffect(() => {
//   //     let isMounted = true; // ✅ Step 1: Track whether component is mounted

//   //     fetchCard(isMounted); // ✅ Step 2: Pass flag to check if component is still mounted

//   //     return () => {
//   //       isMounted = false; // ✅ Step 3: Prevent state update if component is unmounted
//   //     };
//   //   }, []);

//   //   ----aLL THE FUNCTIONS ----

//   const fetchCard = async () => {
//     // step0:- use async as we are using async await and try catch
//     // Step1 : get the data from the axios using axios get method
//     try {
//       const response = await axios.get(
//         `https://qtify-backend-labs.crio.do/albums/${endpoint}`
//       );
//       // step 2: - Now i get data and in axios we don't need to convert it to json we already get in json.

//       console.log(response.data);

//       //   step 3:-- now we need to store the data in some state so that if new data got added

//       setAlbums(response.data);
//     } catch (err) {
//       if (err.response) {
//         // Server responded with a status other than 2xx
//         console.error("Error Status:", err.response.status);
//         console.error("Error Data:", err.response.data);
//       } else if (err.request) {
//         // Request was made but no response received
//         console.error("No Response from Server:", err.request);
//       } else {
//         // Something else happened
//         console.error("Error Message:", err.message);
//       }
//     }
//   };

//   // Step3 : fetch the cards data here and on the basis of cards show the cards in cardDisplay div

//   return (
//     <div className={styles.section}>
//       {/* Step1 :-- Div for giving title and collapse button (which changes to show all when clicked ) */}
//       <div className={styles.sectionHeader}>
//         <p>{`${
//           endpoint.slice(0, 1).toUpperCase() + endpoint.slice(1)
//         } Albums`}</p>

//         <p className={styles.sectionHeaderBtn}>Show all</p>
//       </div>

//       {/* Step2:--- Div for showing grid of cards  */}
//       <div className={styles.cardDisplay}>
//         {/* Step2.1 :-- Now we will map the state variable and display the cards */}
//         <div className={styles.cardDisplay}>
//           {albums.map((album) => (
//             <Card key={album.id} data={album} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section;

// ----------------After importng carousel one below try Again thison 29th march😀😀😀

import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/albums/${endpoint}`
      );

      console.log(response.data);
      setAlbums(response.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <p>{`${
          endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
        } Albums`}</p>
        <p
          className={styles.sectionHeaderBtn}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse All" : "Show All"}
        </p>
      </div>

      <div className={styles.cardDisplay}>
        {showAll ? (
          <div className={styles.gridView}>
            {albums.map((album) => (
              <Card key={album.id} data={album} />
            ))}
          </div>
        ) : (
          <Carousel albums={albums} />
        )}
      </div>
    </div>
  );
};

export default Section;
