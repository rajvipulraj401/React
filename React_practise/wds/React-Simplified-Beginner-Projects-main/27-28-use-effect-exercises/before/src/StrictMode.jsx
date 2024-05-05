import React, { useEffect } from "react";

function StrictMode() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
      // getting the current value of the count
    }, 1000);
  }, []);
  //   Giving empty dependancy array so that means it will only run on mount .

  return <div>StrictMode</div>;
}

export default StrictMode;

/* Strict mode runs our app twice and the reason it does that it 
wants to make sure that any effect that is not cleaned up
is brought to our attention in a very obvious way .*/

/* In the above code what is happening is that we have a memory leak 
Memory leaks occur when resources (like intervals or listeners) are not released properly.
Over time, these leaks can slow down our app, cause unexpected behavior, or even crash it.
as we are not calling clearInterval and the interval 
attached to the component  keeps running  even after the 
component unmounts .(because in react we have to manually 
    clear the listeners and timers any thing related to side effects
)

we’re setting an interval inside it, that interval will keep going indefinitely.
We need to clean up the interval when the component unmounts.

 So the above code is running twice as we  have strict mode enabled and it is telling
 us that we have not clear the interval and we need to clean it up*/

/* why was in the above code it was printing twice ?
 
 When you run your React app in strict mode, React intentionally double-invokes
  certain functions and methods during development.
  All of the side Effects things are also run twice 
  and if they have been cleaned up properly they would not run
  twice and only once 
 */

/* 
 Why after  giving cleanup it is not running twice in strict mode ?
  
In Strict Mode enabled, components are intentionally rendered twice to identify potential side effects that can cause issues, bugs and memory leaks. 
These side effects can include things like setting timers, manipulating the DOM directly, or interacting with external APIs.

However, cleanup functions, often used with useEffect, are not impacted by Strict Mode's double rendering. Cleanup functions specifically run once after a component 
unmounts to handle any necessary side effect cleanup.
 Strict Mode recognizes the purpose of cleanup functions and avoids double execution, ensuring they only run once as intended.
  */

/* Why react doesn't automatically cleanup timers and listeners ?

React doesn’t automatically clean up side effects for us.
Why? Because it doesn’t assume how we want to handle them.
By requiring manual cleanup, React gives us control over when to start and stop side effects.
 */

/* Why in plain javascript we don't need to manually clean
them ?

In plain JavaScript, we often work with long-lived global objects (like the whole webpage).
 They don’t unmount so we don’t need to do  cleanup.
*/
