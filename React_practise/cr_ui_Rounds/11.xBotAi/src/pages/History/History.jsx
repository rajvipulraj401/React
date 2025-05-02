import React from "react";
import Card from "../../components/Card/Card";
import styles from "./History.module.css";

const History = () => {
  {
    /* MILESTONE 6: ---HOW TO GET the data from the local storage and show it in the card component
        
        STEP 1:-- use the getitem to get the data from localstorage object
        
        step 2: - convert that stringify data to array data and then loop and create the card data  

        */
    /*
        MILESTONE 7 :---hOW TO SHOW the cards in the page should i use useEffect?
        
        
        Step 1:-- 
        
        
        */
  }

  const cardArray = JSON.parse(localStorage.getItem("card"));
  console.log(cardArray);

  return (
    <div className={styles.historyPage}>
      <h1 className={styles.heading}>Conversation History</h1>

      <div className={styles.filterSection}>
        <label>Filter by rating</label>
        <select className={styles.dropdown}>
          <option>All Ratings</option>
          <option>1 Star</option>
          <option>2 Stars</option>
          <option>3 Stars</option>
          <option>4 Stars</option>
          <option>5 Stars</option>
        </select>
      </div>

      <h2 className={styles.subHeading}>Today's chats</h2>

      <div className={styles.cardList}>
        {cardArray &&
          cardArray.map((card, index) => (
            <Card
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
    </div>
  );
};

export default History;
