// single selection
// multi selection

import { useState } from "react";
import "./styles.css";
import data from "./data"; //   you can even name it .jsx and still use it it's your wish

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  // we are setting it as null for right now  and when the user will click the button we wil set it data's id.
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // let's make a function to handle button click

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
    // first check if it is already selected as the sameId if yes then make it null ELSE  set it to currentId
  };
  //  This function will geet in parameter the user's id then only we can set it to the setSelected method

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexofCurrentId);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrentId, 1);
    setMultiple(cpyMultiple);
    // Avoid mutating the state directly 📖📖📖 read copy NOTES  */

    // So in this function what we are doing is that ( when the Enable multiSelection is clicked after that )
    /* 1)  Whenever we click any particular button we will get its id and we will store that 
    in the multiple set above using setMultiple method 
       2) If that item is clicked again then that item id is already stored then we will 
       remove it from the multiple set.
       3) Then */
  };

  console.log((selected, multiple));
  // ------- // now let's make the ui-------🏢🏦🏦🏦🏦🏛🏭-------------------

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {/*  on click of the button when the button gets clicked we are just toggling it 
       if false then true if true then false */}
        Enable Multi Selection
      </button>
      {/*  creating a button for multi selection .
      We have to USE annother state for multi selection and we have to take two
      state , one will be storing if the button is clicked or not so we will keep it as false 
       2) and then other state which will only work if the previous set is true , It is for 
       multiselection whatever button will be clicked it will have array of it currentId so we will set default value of 
        multiple set as empty array as it will have multiple currentId 
      */}

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            // data array ka naam hai and dataItem current element ka naam
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                // note- if the Multiselection is enabled then we will call the handlMultiSelection function . Else just single single selection will be called

                // map method me dataItem naam se liye hai
                className="title"
              >
                {/* whenever we click onthe title we want to see which one is getting clicked
                
                */}
                <h3>{dataItem.question}</h3>
                {/* again curly bracket because i entered html mode and then again i am entering javascript mode */}

                <span>+</span>
              </div>

              {/* {
                // if selected item has id  equal to dataItem.id then we will show that item only
                selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null */}

              {
                // Q) why it is doing here i did not understand
                // 1. because when the button gets clicked we call the function and passit the id
                //  and then we check if selected has some value stored cause if the item has
                // been clicked then only the handleSingleSelection has been called and then the state gets the value
                // 2.  .And when map method renders all the item it then matches the selected with the current dataItem's id and
                //  if null nothing happens and
                // if it matches with item's id Then it shows the answer.
                // ----------------------------------------------------------------------------------------
                // we have to use State here to take input from the user and do rendering on basis of that cause
                //  without state react don't know whihc button was clicked .
              }
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : // agr enableMultiSelection true hai aur
                  // multiple me wo element present hai toh uska answer show kro
                  selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}

              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div> No Data found! </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

// logic ---
/* Mujhe user se input lena hai aur us basis pe component me change show krna hai toh we will have to use useState .


*/
