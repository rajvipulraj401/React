import { useEffect, useState } from "react";

const Children = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);
    // document.addEventListener("click", ()=>{
    //   console.log(name);
    // })
    console.log("inside effect");

    return () => {
      // This return is cleanup function in useEffect

      document.removeEventListener("click", handler);
      console.log("cleanup");
    };
  }, [name]);

  // so everytime our name changes we run use effect and we
  // add an event listener and again and again.
  /* So this is obviously going to slow our page 
  
  SO in order to fix this we need to remove these event listeneres
  */
  // ---------------after adding cleanup function----------------
  /*Now after adding cleanup function what happens is that every
  time we attach an event listener then the cleanup function runs after it in this way the only latest
  value has event listener attached to it 
  
  
  
  2) Also after unmounting the component the cleanup function is run for all the useEffect we have*/
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
      {/* {width} */}
    </div>
  );
};

export default Children;
