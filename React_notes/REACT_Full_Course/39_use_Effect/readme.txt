

# 39 The useEffect Hook 

## What is the problem of fetch ?

When we open any social media app we don't have to fetch anything it automatically loads everything 



what we can do about it ??



```jsx
**putt alll the codes inside it**

```



we can use state but this is not a good way cause we have to keep state for every life cycle  (for seeing every thing ki ye fetch kiye hai ki nahi hua hai ki nahi )

2) second this is that we just keep for single condition what if we wanted for multiple condition not only for the case when the app loads for the first time , like what if we want that some other state changes then the app  should re -render again .

<u> Why can't we do it ?? </u>


## now what should we do ?

we should use  use Effect if we want to do re-render on case of more different different condition then in this case we would use useEffect.

In contrast what we do in useEffect we give it a  function and when to use that function .


use effect has two argument 

1) ek function ek method

2) dusre argument ka hi main khel hai
--> We pass an array .
--> if we pass a blank array it will run at inital render.
---> if we do not pass anything then ---
 it will run at initial render and also run after every re-render.
---> if we pass any state or prop in the arrray  then .... it will run at initial render and also run after every change in that prop and state change (dependencies variable  list  me jo jo denge aur unme se kuch bhi change hoga tab tab chlega useEffect )


for Example - I am getting a url as a dependencies and whenever the url is being changed  useEffect will do re-render.

AND THEN WE DON'T NEED ANY STATE management when we do above thing

// Attach the pic





1. In function-based components, useEffect handles
side effects like data fetching or event listeners.
2. useEffect runs automatically after every render by
default.
3. By providing a dependency array, useEffect will only
run when specified variables change. An empty array
means the effect runs once.
4. Multiple useEffect hooks can be used in a single
component for organizing different side effects
separately






