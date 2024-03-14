import { useState } from "react";

const initialValue = ["A", "B", "D"];

const App = () => {
  const [array, setArray] = useState(initialValue);
  const [value, setValue] = useState("");

  const removeFirstElement = () => {
    /* so what happens is that when the button gets clicked 
        in default an event is passed if we do not specify any of our own method 
        and React's useState hook allows you to declare state variables and provides a function to update them. 
        When you call setArray, React internally tracks the previous state of the array. When you pass a function to setArray, 
        React invokes that function and passes the previous state as an argument. This way, you have access to the previous state inside your function, 
        and you can use it to compute the new state based on the previous state.
        Setter फ़ंक्शन के अंदर current value ऑटोमैटिक रूप से उपलब्ध होता है, 
        इसलिए आपको पिछले value को अलग से पास करने की ज़रूरत नहीं होती।
     */
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  };

  const removeB = (elm) => {
    setArray((currentArray) => {
      // return currentArray.filter((curr) => {
      //   return curr !== elm;
      // });
      return currentArray.filter((curr) => curr !== elm);
    });

    // setArray((prevArray) => prevArray.filter((curr) => curr !== elm));

    /* we could also do like this but this is not readable it is same here as we are getting the previous value and doing the operation 
     inside it only
     */
    // setArray((currentArray.filter((curr) => curr !== elm)));👎🏼❌
    /* React mein state ko update karne ke liye humein ek function pass karna hota hai 
    jo ki ek naya state value return karta hai. Aur wo function, jo hum setArray ke andar pass karte hain, 
    ko React khud call karta hai aur usse pichhle state ka value provide karta hai.
    setArray ke andar seedha currentArray.filter() likha, toh yeh galat tha kyonki currentArray us point par define nahi
     tha aur  useState me setter function ya toh ek value leta hai ya ki ek function aur maine jo 
kiya tha wo taarika nahi hai function define krne directly



   */
  };

  // const add = (elm) => {
  //   setArray((prevArray) => {
  //     return [...prevArray], elm;
  //     // This is wrong because you are returning mutliple value so put elm inside the array so that you are returning single value
  //   });
  // };

  /* To remove an element from the array stored in the state using the useState hook,
we need to provide a new array to the setter function. in order
  to do any change in the initial array passed  to the useState hook we need to pass another  ,Since the setter function
expects an array, we cannot directly modify the existing array using loops. Instead,
we need to use built-in array methods such as filter(), splice(), or slice() to create
a new array with the desired changes.

*/

  const addEnd = (elm) => {
    setArray((prevArray) => [...prevArray, elm]);
  };

  const addStart = (elm) => {
    setArray((prevArray) => [elm, ...prevArray]);
  };

  const reset = () => {
    setArray(initialValue);
  };

  const clear = () => {
    setArray([]);
  };
  const updateA2H = () => {
    setArray((prevArr) => {
      // now based on the value from the previous array what we will do is that we will update each A value of
      // the elements to H FOR THIS we will use map method .
      return prevArr.map((curr) => (curr === "A" ? "H" : curr));
      // return prevArr.map((curr) => curr === "A" && "H"); THIS WILL Not work as i will get false at other places
    });
  };

  //---------------------------------------------------------
  // about input question last 2 of bonus functionality

  const addAtIndex2 = (letter, ind) => {
    // we are getting an index and letter
    setArray((prevArr) => {
      return [...prevArr.slice(0, ind), letter, ...prevArr.slice(ind)];
      //This is Wrong❌❌❌ return [prevArr.slice(0, ind), letter, prevArr.slice(ind)];
    });
  };
  return (
    <>
      {/*
  We need to add a button so that we can send the previous value 
  using event object and then update the array based on that else it will not be possible */}
      <button onClick={removeFirstElement}>REMOVE IT</button>
      <br></br> <br></br>
      {/*  The reason we are calling the setter function when the button gets  clicked is if we directly call it within the component
      or inside return statement it will cause a re-render and that re-render will cause another re-render hence it will lead
      to an infinite loop  */}
      {array.join(",")}
      <br></br>
      <br></br> <br></br>
      <button onClick={() => removeB("B")}>REMOVE B</button>
      <br></br> <br></br>
      <button onClick={() => addEnd("D")}>Add2End</button>
      <br></br> <br></br>
      <button onClick={() => addStart("B")}>Add2Start</button>
      <br></br> <br></br>
      <button onClick={() => reset("B")}>Reset</button>
      <br></br> <br></br>
      <button onClick={() => clear("B")}>Clear </button>
      <br></br> <br></br>
      <button onClick={() => updateA2H()}>update A to H </button>
      <br></br> <br></br>
      {/* ----------------------------------------------------------TOUGH portion from here i have to give more attention  */}
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      <br></br> <br></br>
      <button onClick={() => addStart(value)}>Add Value to Array</button>
      <br></br> <br></br>
      <button onClick={() => addAtIndex2("C", 2)}>Add at Index </button>
    </>
  );
};

export default App;
