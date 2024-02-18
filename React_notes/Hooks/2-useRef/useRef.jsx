#  useRef from web dev simplified ----


  What you want to do if you want to show how many times a component renders on the screen ?

solution - The solution is to use something called ref's .  A ref is very similar to state and in that it persists between renders of  your component but the important thing to know about 
  <u><b> Ref vs State  </b> </u> is that .

`State cause your component to reupdate but ref doesn't .`


 so For example if we do this


```jsx

import React , {useState ,useEffect} from "react"

export default function App() {
const [name , setName ] =  useState (" ")
const [ renderCount , setRenderCount ] = useState(0)

useEffect ( ()=> {
setRenderCount(prevRenderCount => prevRenderCount +1)
})
return (
<>
<input value = {name } onChange = {e => setName (e.target.value ) }/>
<div> My Name is {name }</div>
<div> I rendered {renderCount} times </div>
</>
   )
}


```


### The above code will give infinite loop 


`So in order to correctly do the solution of above question do like this .`
Instead of using state there let's use something called useRef(0) and it returns a single value unlike state . 
`The important thing about is that unlike state useRef returns an object`  **IT HAS just a single property called `current` {current :0}** .The default is set as 0 as we pass it .

```jsx

import React , {useState ,useEffect, useRef} from "react"

export default function App() {
const [name , setName ] =  useState (" ")
const renderCount  = useRef(0)

useEffect ( ()=> {
renderCount.current = renderCount.current +1
})
return (
<>
<input value = {name } onChange = {e => setName (e.target.value ) }/>
<div> My Name is {name }</div>
<div> I rendered {renderCount.current} times </div>
</>
   )
}


```


**note** - Changing the   renderCount.current and it will never cause our component to re-render because it is separate from the component render cycle.

----------------------------------------------------------------------------


 ## Biggest use case of useRef (To reference elements  inside your html)


#### `This is so popular that each element inside document/html has a ref attribute`

```jsx
import React , {useState ,useEffect} from "react"

export default function App() {
const [name , setName ] =  useState (" ")
const inputRef = useRef(0)
// we get an object with one property current


function focus(){
inputRef.current.focus()
}

return (
<>
<input ref={inputRef} value = {name } onChange = {e => setName (e.target.value ) }/>

{/* NOW WHENEVER OUR inputRef is GOING TO rendered on the screen  it's going to set this inputRef variable equal to this document varaible (input element ke equal)*/}
   

<div> My Name is {name }</div>
<button onClick = {focus}>Focus</button>
</>
   )
}


```


------------------------------------------------------------------------------------

Another use case of ref is to --

 ### Store previous value of the state :----


```jsx

import React , {useState ,useEffect} from "react"

export default function App() {
const [name , setName ] =  useState (" ")
const prevName = useRef("")

useEffect ( ()=> {
prevName.current = name
},[name])
return (
<>
<input value = {name } onChange = {e => setName (e.target.value ) }/>
<div> My Name is {name }and it used to be {prevName.current}</div>

</>
   )
}


```



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	# useRef (from hitesh video)



 ## History ;-----


There are so many elements on the webpage and we use to take reference of that particular element and store it using `document.getElmentById or class or using querySelector` .

  Now , these variables were later used to add styles and do all kinds of manipulation .


 #### Problem :---

The only issue with the above approach is that whenever you do   any manipulation or something it just `re-renders the entire dom element and it led to so many issues which we used to handle`

 #### Solution :--

when React came a lot of things changed and that is why `this useRef was designed` **Because so far there was no easier way of giving reference of that element and holding that in a variable so that you can manipulate it or pass on  to another component .
  So , The core ingredient of this useRef hook() is to `store the reference of an element NOT THE value  because for the value we have **UseState hook already**` 



NOTE - **useState hook is responsible for  re-rendering that particular dom element ** `But 
in case of useRef hook in any of the dom element do not get re-render no matter how many changes you do in useRef   `.


Note 2 - In **case of useState you can give any initial  value (null ,0 ,string , array , object )** but `in case of  useRef    `

```jsx
cons refContainer = useRef(initialValue);
```
`useRef` retuns a mutable ref object  and this object  has one property in it `.current` .which you can use it to  initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.




IN Summary --- Whenever useRef comesup we need to remember two things.


1- That it is an object and that has one property in it and that is `.current` value that we can access .

2- useRef never ever re-renders no matter how many times you do change in it /manipulate it .


3- we can also use it to store value in it but **this is not the useCase of it for this use useState hook** you will only use to store reference .
--------------------------------------------------------------------------------------------------




so basically we can get any element reference  by adding ref attribute to anyelement and then in the current property of the useRef object we will get the reference of that element.



 THIS BASICALLY GIVES me the reference of the entire input element just like if we were using documents.getElementById or query selector which used to give me the reference of the element this does the same.




 In Conclusion :---

useRef is actually designed to store the reference of the element . pass them in the component as a child and most important thingit doens't re-render.

you can also use it to store values(past value and past state ) but that  is not what it was made for .

`This was designed to pass on a reference do manipulation based on  the reference add child , append child .

