# 40 Handling Loading State


Inroducing third state that is a loading state .




# 41 The useEffect Hook Cleanup


As we can see in the above pic we are passing a method in useEffect hook and also we are  seeing that inside of useeffect at the end it is also returning one more method so what is that ???
-->> Actually the method in useEffect do not return anything by default but if we return anything from there so it will by default be returned when it will be killing the useEffect .
 That means when our component will be dying then it will call that cleanup method. 


For Example :--

In The below code when we go to different tab of createPost and switch from the home so as the useEffect was in Home only so it dies and only then our return statement inside of useEffect runs



wHAT USUALLY happen is that the actual tree inside of Home is deleted 
so useEffect which is running inside it is deleted.
 And also the data that we are getting from server don't matter so we do cleanup.


 See below code where we are cancelling the api call which has already been made .



# 42 Advanced useEffect



<piccccc>>

So Ideally what we should do is when we are doing fetch inside useEffect then there is a thing called `AbortController()` and if we use `AbortController()` then we can in return do like this

```jsx

return()=>{

controller.abort();
};

```

and then  the fetch call will be abandoned when the component is dying.



-------------Full code-----------------









