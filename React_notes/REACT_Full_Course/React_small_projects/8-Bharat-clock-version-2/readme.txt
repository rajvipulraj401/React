

 What we want that the time that we have on here Gets update everytime  i mean with each passing second not only with refresh which it was doing earlier.



-> So currently what we are doing is we are priniting  time directly with toLocaleDateString() and  also the date with toLocaleTimeString()


 What we can do is we can keep it in a state and after each passing second we can update the state .and whenever the state gets updated the above time and date should get painted/re-rendered again .


and after that we will use useEffect and inside that we will use timer .




```jsx

import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      // in order to clear the running interval we use clearInterval method
      // console.log("Cancelled the interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;


```






-------------------------------------------------------------------------------



We can take this idea and can make a project which gives the current rate of stocks (do teen stocks ka YA DOLLAR ka rate hr ek second me ya 5 sec me(we can make the project by using that api)




MAKE IT FOR PRACTISE

 bs useEffect ke andar api call krna hai aur phir api ko cancel kar denge taaki server pe bhut jyada load na lagaye .




-----------------------------------------------------------------------


## now one problem why our app is reloading two times ??


we will not face this problem when our app will go in production and its main culprit is <React.StrictMode>

And if we want to check if everything is working fine we can use console.log and debug it to see if everything is working  fine or not and at last always remember to remove console.log as they slow our application.