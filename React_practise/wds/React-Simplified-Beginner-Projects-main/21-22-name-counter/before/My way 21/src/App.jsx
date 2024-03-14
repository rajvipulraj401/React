import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(10);

  const incrementAge = () => {
    setAge((prev) => {
      // setAge(prev + 1);
      // so here setter function takes a function and that function returns updated value

      // return prev++; // This will not work in the inline cause of post processor
      return prev + 1; // or either return ++prev;
    });
  };

  const decrementAge = () => {
    setAge((prev) => {
      return prev - 1; // or either return ++prev;
    });
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        //e.preventdefault in order to submit the form and e.target.value for getting the value which user entered
      />
      <br></br>
      <button
        onClick={() => {
          incrementAge();
        }}
      >
        +
      </button>
      <p>{age}</p>
      {/* <button onClick={() => {decrementAge}}>+</button> */}
      <button onClick={decrementAge}> - </button>
      {/* button onClick = {()=>{setAge((prev) => prev-1)} */}

      {/* <p> {`My name is ${name} and I am ${age} years old`}</p> */}
      <p>
        My name is {name} and I am {age} years old
      </p>
    </div>
  );
};

export default App;
