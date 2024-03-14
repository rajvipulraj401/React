# Functionality To Create

1. Create state that stores an array with the initial value of `["A", "B", "C"]`
2. Add the ability to remove the first element from the array
3. Add the ability to remove a specific letter from the array
4. Add the ability to add a new element to the start of the array
5. Add the ability to add a new element to the end of the array
6. Add the ability to clear the array
7. Add the ability to reset the array to the initial value

## Bonus Functionality

These are optional challenges that are more difficult and will really test your skills.

1. Add the ability to update all `A` elements in the array to `H`
2. Add an input that is connected to state and a button that will add the input value to the start of the array
3. Add the ability to add a new element at any index in the array


```jsx

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

```


 ##Notes:----  (for detailed see your code in the folder)


1. **Button Click Event Handling**:
   - Describes event handling when a button is clicked.
   - Explains how React's `useState` hook facilitates state variable declaration and updates.
   - Mentions that `setArray` internally tracks the previous state for computing the new state.

2. **Setter Function Usage in React**:
   - Emphasizes the need for passing a function to update state in React.
   - Discusses how the function passed to `setArray` receives the previous state value.
   - Highlights the incorrect usage of array manipulation methods directly inside `setArray`.

3. **Incorrect Array Return in Function**:
   - Identifies an error in returning an array with multiple values instead of a single value.
   - Suggests encapsulating multiple values within an array to ensure the return of a single value.

4. **Updating State in React**:
   - Explains the process of updating state in React using `useState`.
   - Highlights the importance of providing a new array to the setter function for modifying the existing array stored in state.

5. **Bonus Functionality Explanation**:
   - Describes the input question for implementing bonus functionalities.
   - Specifies the parameters received for adding a new element at a specified index in the array.

These notes provide insights into React state management, correct setter function usage, array modifications, and the requirements for implementing bonus functionalities.