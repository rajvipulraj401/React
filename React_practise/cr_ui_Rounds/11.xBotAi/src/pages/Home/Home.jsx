// import React from "react";
// import InitialScreen from "../../components/InitialScreen/InitialScreen";
// import styles from "./Home.module.css";
// import FormContainer from "../../components/FormContainer/FormContainer";
// import Card from "../../components/Card/Card";

// const Home = ({ handleAsk, handleSave, cardArray }) => {
//   const homeContainer = {
//     width: "100%",
//     height: "87%",
//   };
//   return (
//     <>

//       <div className={styles.homeContainer} style={homeContainer}>
//         <InitialScreen></InitialScreen>
//       </div>

//       {/* <div className={styles.homeContainer}>
//         <Card
//           name="You"
//           time="2:30pm"
//           message="How are you"
//           bgColor="skyblue"
//           rating={3}
//         />
//       </div> */}
//       {/* <FormContainer></FormContainer> */}
//       <FormContainer
//         handleAsk={handleAsk}
//         handleSave={handleSave}
//       ></FormContainer>
//     </>
//   );
// };

// export default Home;

// ----------------------v2 0----------------------

import React from "react";
import InitialScreen from "../../components/InitialScreen/InitialScreen";
import styles from "./Home.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import Card from "../../components/Card/Card";

const Home = ({ handleAsk, handleSave, cardArray }) => {
  const homeContainer = {
    width: "100%",
    height: "87%",
  };
  return (
    <>
      {/* If cardArray is empty, show initial screen */}
      {cardArray.length < 1 && (
        <div className={styles.homeContainer} style={homeContainer}>
          <InitialScreen></InitialScreen>
        </div>
      )}

      {/* If cardArray has content, render the cards */}
      {cardArray.length > 0 && (
        <div className={styles.homeContainer}>
          {/* Render both Human and AI cards */}
          {cardArray.map((card, index) => (
            <Card
              idx={index}
              key={index} // Give each card a unique key
              avatar={card.avatar}
              name={card.name}
              time={card.time}
              message={card.message}
              bgColor={card.bgColor}
              rating={card.rating}
              feedback={card.feedback}
              handleLikeClick={card.handleLikeClick}
              handleDislikeClick={card.handleDislikeClick}
              handleRating={card.showRating}
              onRatingChange={card.onRatingChange}
              onCardHover={card.handleCardHover}
              isHovered={card.isHovered}
            />
          ))}
        </div>
      )}

      {/* <FormContainer></FormContainer> */}
      <FormContainer
        handleAsk={handleAsk}
        handleSave={handleSave}
      ></FormContainer>
    </>
  );
};

export default Home;
