

# The useCallback Hook


This is almost similar ot use Effect . 
**React has a very revolutionary thing that if parent get re-render child still do not necessarily gets re-rendered** Cause it sees that if any props of child has been changed or any state of the child has been changed .


 Problem ??

for example 

const deletePost = (postId)=>{
dispatchPostList({
type :"DELETE_POST",
payload: {
postId,
},
});
};


what happens is that when we pass the above method in any component .
 That above method is changed each time when our parent gets re-rendered as each time new object is created and the value is assigned so the child component always gets re-rendered when the parent gets re-rendered .This is unnecessary and we can avoid this by using useCallback  .

 THIS always happens when we pass a method as a dependencies to a child component . 



  What useCallback do .



use callback avoid this . For example there is  a function /method of which you want the reference to be the same useCallback  can you help in   that  so that it's reference doesn't change . so what we can do is we can write it inside the useCallback.


for Example

```jsx
useCallback(callback,[...dependencies]);

```
  And this will return you the name of function  .


For example the above code can be written like this .


```jsx

const deletePost = useCallback((postId) =>{

dispatchPostList({
type :"DELETE_POST",
payload: {
postId,
},
});
},[dispatchPostList]);


// so we can say in dependencies dispatchPostList  
```

1. Memoization: Preserves function across
renders to prevent unnecessary re-renders.
2. Optimization: Enhances performance in
components with frequent updates.
3. Dependency Array: Recreates the function
only when specific dependencies change.
4. Event Handlers: Used to keep consistent
function references for child components.
5. With useEffect: Prevents infinite loops by
maintaining function references.




### so basically in order to save repain/re-render cycle we use useCallback and it helps in optimizing our code and enhances the speed of our application .