

# The useMemo Hook


 use effect was changing the function only then when its dependencies change and use callback  was returning a  method and it was changing that method only when its dependencies were changed But sometimes what happens is that neither we want to execute anything  neither do we want  method . we just want to do calculation or some work which we want to do without any re-render.


for example :-

I got a list of 10000 child in props and i as a component first sort that list and then use it . 

1) one way is that i write it in normal method and write it as `prop.sort `.
But what the above will do at each time of re-render that list will get sort again and again eventhough i am repainting for some other reason and that prop wasn't even changed.
  `so if we want to save the calculation or save the data then `

**in order to save method ---use useCallback**
** in order to save  data/calculation or any data structure  and i want that that recalculationif that only happens when the data or depenedencies has been changed then --- use useMemo**



 

2) the another way  



1. Memoization: useMemo caches the result of
expensive calculations to enhance performance.
2. Re-computation: Only re-computes the memoized
value when specific dependencies change.
3. Optimization: Helps prevent unnecessary
recalculations, improving component rendering
efficiency.
4. Dependency Array: Uses an array of
dependencies to determine when to recompute
the cached value.
5. Comparison with useCallback: While useCallback
memoizes functions, useMemo memoizes values
or results of functions.

**memoizes means it saves the value so that it doesn't get calculated regulary**


6. Best Use: Ideal for intensive computations or
operations that shouldn't run on every render.




## In conclusion 

As we can see above in the pic that 

 useCallbakc take a function  which returns a function or method .as soon as dependencies changes.
and useMemo takes a function which returns a value ..as soon as dependencies changes.


for example


```jsx

const arr = [5,2,6,7,4];
const sortedArr = useMemo(()=>arr.sort(),[arr]);

```

if i was getting the arr from the prop so the method whenever it gets repainted   The sort method would have called always . 
 So therefore we can wrap it inside useMemo and we return it as a value from  a method and the second argument is depenedecies array .




SO BOTH **useMemo and useCallback are optimizing techniques**
  



-----------------------------------------------------------------------------------------------------------------
