import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   console.log("every re -Render");

  //   //1- This use Effect will work whenever the component re-renders

  //   return () => {};
  // });

  useEffect(() => {
    console.log("Hi Mount First time");

    //2-This use Effect will work whenever the component mounts
    return () => {};
  }, []);

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
    //3--This use Effect will work whenever the name or age state changes
    // and every useEffect runs for the first time when the components mounts .
    return () => {};
  }, [name, age]);

  useEffect(() => {
    document.title = name;
    //4-This use Effect will work whenever the name  state changes
    return () => {};
  }, [name]);

  useEffect(() => {
    //Bonus 5-This use Effect will work whenever the name  state changes
    return () => {
      console.log("Bye Component");
    };
  }, []);
  // ,); //Both works it will just print when we unmount

  // useEffect(() => {
  //   /* Bonus 6 -
  //   In this use Effect we will have a set timeout function and it will run
  //   after every 1 second . */
  //   setTimeout(() => {
  //     console.log(`My name is ${name} `);
  //   }, 4000);

  //   /* Logic --

  //   1) what i want is that name should be printed after 4 sec but only what
  //   is currently visible as name at that point not every single change

  //   2) So i am thinking instead of passing set timeout inside useEffect
  //   why don't i pass useEffect inside set time out  and log the name
  //   inside it after every 1 sec seeing what is inside it */

  /* Note - hooks can only be called inside function body not inside
any other thing (so above approach won't work)*/

  //   return () => {};
  // }, [name]);

  // console.log(`My name is ${name} `);
  // ------------------------------------------Bonus2
  useEffect(() => {
    /* can i some how first store the value of name at that instance
    and then pass it in console after each sec

    What i want is the current value of the state at that instance after 2 sec so

    */
    const timeout = setTimeout(() => {
      console.log(`My name is ${name} `);
    }, 2000);

    // note - what works is that we clear the timeout so when the useEffect runs again the previous
    // one gets removed by clanup function so in this way the only Things display
    // Where it gets the delay of 2 sec else it will not display
    // actual value of state at that instance is displayed

    /* Note----- wE HAVE to use setTimeout or setInterval as firstly they are side effects (as they interact with
    browser which is outside the scope of the component)
    and also  any javascript event handlers or timers   won't automatically
    cleanup and in order to clean them up like removing timers and listener we have useEffectin hook in react which has 
    cleanup function as a parameter in it */

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
