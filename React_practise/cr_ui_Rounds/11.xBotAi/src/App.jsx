import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import History from "./pages/History/History";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import human from "./assets/human.png";
import aiLarge from "./assets/aiLarge.png";
import aiResArr from "./aiData/sampleData.json";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardArray, setCardArray] = useState([]); // an cardArray to store 2 cards at a time .
  const [currentFeedbackIdx, setCurrentFeedbackIdx] = useState(null); // To store the idx of which card feedback was given
  // ---------All functions below here ------
  const handleCloseModal = () => setShowModal(!showModal);

  const handleCardHover = (idx) => {
    // console.log(idx);
    // setIsHovered(!isHovered);

    /* In this now send the isHovered state in the cards array first spread the old value 
        and then change the value of this . 

    */

    // Steps to do this :--

    /*
      1-- use the setter method and then inside use the map method to create
      a new array and except the idx card keep all the card same 

      2-- and on idx card just add the isHovered state
      
      */
    // setCardArray((prev) => {
    //   return prev.map((card, i) => {
    //     return i == idx ? { ...card, isHovered: !isHovered } : card;
    //     // wo ccurr card pe jao sara value spread kro bs isHovered wala ko change kr do
    //   });
    // });

    setCardArray((prev) =>
      prev.map(
        // (card, i) => (i == idx ? { ...card, isHovered: !isHovered } : card)
        (card, i) =>
          i === idx
            ? { ...card, isHovered: true } // spread the array and change the isHovered property to true
            : { ...card, isHovered: false }
        // wo ccurr card pe jao sara value spread kro bs isHovered wala ko change kr do
      )
    );
  };

  const handleRatingChange = (newRating, idx) => {
    // NOW change the card of the cardArray that has been clicked (use its index)

    /* using this handleRatingChange function change the state value of rating.. */

    /*  
  step 1 :--- card which is actually showing the rating 
  
  
  */

    // console.log(`rating:- ${newRating}  idx:-- ${idx}`);

    setCardArray((prev) =>
      prev.map(
        // (card, i) => (i == idx ? { ...card, isHovered: !isHovered } : card)
        (card, i) =>
          i === idx ? { ...card, rating: newRating } : { ...card, rating: 0 }
        // wo ccurr card pe jao sara value spread kro bs rating property ko
        // change kr do
      )
    );
  };

  const handleLikeClick = (idx) => {
    // console.log("click hua re");
    console.log(idx);
    // setShowRating(!showRating);
    // NOW change the card of the cardArray that has been clicked (use its index)

    setCardArray((prev) =>
      prev.map(
        (card, i) =>
          i === idx
            ? { ...card, showRating: true } // spread the array and change the isHovered property to true
            : { ...card, showRating: false }
        // wo ccurr card pe jao sara value spread kro bs isHovered wala ko change kr do
      )
    );
  };

  const handleDislikeClick = (idx) => {
    setShowModal(true);
    // console.log(idx);
    setCurrentFeedbackIdx(idx); // store idx

    // NOW change the card of the cardArray that has been clicked (use its index)
  };

  const handleFeedback = (data) => {
    // console.log(data);

    /*
      Now here i want that the feedback which i got is i just give it to the card

*/

    setCardArray((prev) =>
      prev.map((card, i) =>
        i === currentFeedbackIdx ? { ...card, feedback: data } : card
      )
    );

    setShowModal(!showModal);

    // NOW change the card of the cardArray that has been clicked (use its index)
  };

  // WHEN user ask in input and submit then
  const handleAsk = (data) => {
    // console.log(data);

    // MILESTON 3: -- (GETTING the response of Ai through human data)

    // How to get the data of json here do that...

    // console.log(aiResArr);
    //  Step1 : -- convert the json to normal array by parsing it first as that is a json string

    const resArr = aiResArr;
    // console.log(resArr);

    /*  Step 2: -- now loop the array of response and then find the key 
          of user entered data and if found take the value of that key
          and enter as the msg response of Ai and if no key then 
          return the default msg

    */

    let aiMsg = resArr.find(
      (curr) =>
        // step a : go to current objand find the data key (use find method)
        curr.question == data
    );
    // console.log(aiMsg);
    // so i got the  response of the correct object and if no data match then we get undefined
    const msg = !aiMsg
      ? "Sorry, Did not understand your query!"
      : aiMsg.response;

    // -----------MILESTONE 3 FINSIH HERE---------

    // MILESTONE 1 :---
    // step 1 ::--- Now calucate the time here and push it in object time property

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };

    const formatter = new Intl.DateTimeFormat("en-IN", options);
    const indianTime = formatter.format(new Date()); // 🕐 e.g., "03:40 PM"

    // ......milestone 1 :--- ends here .

    /*  ----MILESTONE 2:--- Create 2 cards and push that into the cardsArray state .*/

    setCardArray((prev) => [
      // step1 : -- get the prev array val

      // step 2: stpread the val of the previous array to merge with the new data of card
      //  and so that old data isnt lost.
      ...prev,
      // step 3: -- card data 1
      {
        avatar: human,
        name: "You",
        time: indianTime, //calulate the time on the fly now

        message: data, // yeh jo user ka message hai
        bgColor: "skyblue",
      },
      // step 4: -- card data 2
      {
        avatar: aiLarge,
        name: "Soul AI",
        time: indianTime,
        // message: "Sorry, Did not understand your query!",
        message: msg,
        bgColor: "",
        rating: 0,
        feedback: "",
        handleLikeClick: handleLikeClick, // function
        handleDislikeClick: handleDislikeClick, // function
        showRating: false,
        onRatingChange: handleRatingChange, // function
        handleCardHover: handleCardHover, // function
        isHovered: false,
      },
    ]);
  };
  const handleSave = () => {
    console.log("clickedSave");

    /* 
    Milestone 5: -- How to persist data in local storage?
    
    Step 1: First, check if the cardArray is not empty. If it contains data, we need to save it.
    - If cardArray has data, we need to convert it to a JSON string before saving it in localStorage.
    
    Step 2: Check if there is already data stored in the 'card' key in localStorage.
    - If data exists, we retrieve it using `localStorage.getItem("card")` and parse it into a JavaScript object using `JSON.parse()`.
    
    Step 3: Merge the existing data (if any) with the new cards in cardArray.
    - Use the spread operator `...` to merge the existing cards with the new `cardArray` to ensure we add new data to the stored cards, without overwriting the old data.
    - After merging, we stringify the merged data using `JSON.stringify()` and store it back in localStorage.
    
    Step 4: If there is no existing data in localStorage (i.e., cardDataVal is null), simply save the `cardArray` as it is by stringifying it and storing it in localStorage.
    
    Step 5: After saving the data to localStorage, we clear the cardArray by resetting it using `setCardArray([])`. This will empty the array for future operations.
  */

    const cardDataVal = JSON.parse(localStorage.getItem("card"));

    // const newCardArr = ...cardDataVal , ...cardArray;

    cardDataVal &&
      localStorage.setItem(
        "card",
        JSON.stringify([...cardDataVal, ...cardArray])
      );

    // Note - JSON.stringify takes one argument only

    cardArray.length > 0 && !cardDataVal
      ? localStorage.setItem("card", JSON.stringify(cardArray))
      : "";

    // step 2: -- Now empty the cardArray using the setter method

    setCardArray([]);
  };

  // -----------All function ends here ---------------
  return (
    <>
      <main className="main-container">
        {/* div main */}
        <aside className="sidebar-div">
          <SideBar></SideBar>
        </aside>
        <section className="section-div-container">
          <nav className="navbar-container">
            <NavBar></NavBar>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleAsk={handleAsk}
                  handleSave={handleSave}
                  cardArray={cardArray}
                />
              }
            />
            <Route path="/history" element={<History />} />
          </Routes>
        </section>
      </main>

      {/* mODAL --- PASS THIS modal handle close  , and handle submit to close modal and submit feedback for submit */}

      {showModal && (
        <div className="modalContainer">
          <Modal onClose={handleCloseModal} onConfirm={handleFeedback}></Modal>
          {/* <Modal></Modal> */}
        </div>
      )}
    </>
  );
};

export default App;

/* <Card
            avatar={human}
            name="You"
            time="2:30pm"
            message="How are you"
            bgColor="skyblue"
            rating={rating}
            feedback={feedback}
            handleLikeClick={handleLikeClick}
            handleDislikeClick={handleDislikeClick}
            handleRating={showRating}
            onRatingChange={handleRatingChange}
          />

          <Card
            avatar={aiLarge}
            name="Soul Ai"
            time="2:30pm"
            message="How are you"
            bgColor=""
            skyblue
            rating="3"
            feedback={feedback}
            handleLikeClick={handleLikeClick}
            handleDislikeClick={handleDislikeClick}
            handleRating={showRating}
          ></Card> */
