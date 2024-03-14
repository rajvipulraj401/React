import { useState } from "react"
// Functionality To Create

// 1. Create state that stores an array with the initial value of `["A", "B", "C"]` ✅
// Answer:
import { useState } from "react";

const initialValue = ["A", "B", "C"];

const App = () => {
  const [array, setArray] = useState(initialValue);
  const [value, setValue] = useState("");

  // 2. Add the ability to remove the first element from the array ✅
  // Answer:
  const removeFirstElement = () => {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  };

  // 3. Add the ability to remove a specific letter from the array ✅
  // Answer:
  const removeB = (elm) => {
    setArray((currentArray) => {
      return currentArray.filter((curr) => curr !== elm);
    });
  };

  // 4. Add the ability to add a new element to the start of the array ✅
  // Answer:
  const addStart = (elm) => {
    setArray((prevArray) => [elm, ...prevArray]);
  };

  // 5. Add the ability to add a new element to the end of the array ✅
  // Answer:
  const addEnd = (elm) => {
    setArray((prevArray) => [...prevArray, elm]);
  };

  // 6. Add the ability to clear the array ✅
  // Answer:
  const clear = () => {
    setArray([]);
  };

  // 7. Add the ability to reset the array to the initial value ✅
  // Answer:
  const reset = () => {
    setArray(initialValue);
  };

  // Bonus Functionality

  // 1. Add the ability to update all `A` elements in the array to `H` ✅
  // Answer:
  const updateA2H = () => {
    setArray((prevArr) => {
      return prevArr.map((curr) => (curr === "A" ? "H" : curr));
    });
  };

  // 2. Add an input that is connected to state and a button that will add the input value to the start of the array
  // Answer:
  const addValueToStart = () => {
    setArray((prevArray) => [value, ...prevArray]);
  };

  // 3. Add the ability to add a new element at any index in the array
  // Answer:
  const addAtIndex = (index, newValue) => {
    setArray((prevArray) => [
      ...prevArray.slice(0, index), // Elements before the index
      newValue, // New value at the specified index
      ...prevArray.slice(index) // Elements after the index
    ]);
  };


  return (
    <>
      <button onClick={removeFirstElement}>REMOVE IT</button>
      <br/><br/>
      {array.join(",")}
      <br/><br/>
      <button onClick={() => removeB("B")}>REMOVE B</button>
      <br/><br/>
      <button onClick={() => addEnd("D")}>Add2End</button>
      <br/><br/>
      <button onClick={() => addStart("B")}>Add2Start</button>
      <br/><br/>
      <button onClick={() => reset("B")}>Reset</button>
      <br/><br/>
      <button onClick={() => clear("B")}>Clear </button>
      <br/><br/>
      <button onClick={() => updateA2H()}>update A to H </button>
      <br/><br/>
	// see bonus challenge question 2
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      <br/><br/>
      <button onClick={addValueToStart}>Add Value to Array</button>
      <br/><br/>
      <button onClick={() => addAtIndex(2, "C")}>Add at Index </button>
    </>
  );
};

export default App;
