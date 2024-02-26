# 	`___useReducer_---`


We use it when our app is more complicated we used context when our state was common in most of the components but we will use `useReducer` when the logic of state updatition or maintainability gets tough or lengthy  .


![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/36_Advance_State_management(useReducer)/useReducer.png)

1. `useReducer` is a hook in React that offers more control over state operations compared to `useState`, especially for complex state logic (Basically advance version of useState smgho)

## How we use ..
2. Components: It involves two main components:
   - **Reducer**: A pure function that takes the current state and an action and returns a new state.
   - **Action**: An object describing what happened, typically having a type property.


## What does useReducer returns. 

- one state and other dispatch function.

`useReducer` needs two things .
1- Reducer (it is a function which will take action object)
This will be written in different files not inside component because ideally it is a pure function (i.e) it doesn't concern with outside things .

It just concern with what paramter it gets and what it needs to return , it doesn't touch outside things .And this type of function is called pure function as it doesn't have any side effects.

2- initialState


example 

```jsx
const todoItemsReducer = (action)=>{
return [];
}
```

```jsx
const [newTodoItems, dispatchTodoItems]= useReducer (todoItemsReducer, []);
```

**NOTE:** Reducer method is something that takes action object and returns state.

`useReducer` takes two things:
1. Reducer method (which should be a pure function that takes an action object and returns the current state).
2. Initial value, and then it gives back `newTodoItems` and `dispatchTodoItems`.
------------------------------------------------------------------------------------------------------------------------------------------
3. **Initialization:** It's invoked as
   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState).
   ```

   It gives a state object and a dispatch method.
--------------------------------------------------------------------------------------------------------------------------------------------------------------


4. **Dispatch:** Actions are dispatched using the dispatch function, which invokes the reducer with the arguments (current state and the given action).

-----------------------------------------------


### Why it is used?

5. **Use Cases:** Particularly useful for managing state in large components or when the next state depends on the previous one.
6. **Predictable State Management:** Due to its strict structure, it leads to more predictable and maintainable state management.






-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


In the case of `setState` method, we saw two things:

1. We can set it to a value.
2. Or we can even pass a method.

But here in the case of `useReducer`, we can also do a third thing in this method that is:

3. Rather than sending a value or a function, we will send what changed.
   This is called action.

Action only has two things:
- What happened.
- What is the new value.

After the action gets dispatched, it goes to the reducer. Now the reducer will see based on this action and old value what will be its new value


![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/36_Advance_State_management(useReducer)/useReducer.png)



(see above pic how action object goes to reducer and reducer understand action object and  update the state and the components gets re-render after state update)
--------------------------------------------------------------------------------------------------------------------------------------







### Full Codes:



Now what we want that the individual component jo hai usko is baat se koi fark nhi  pdna chahiye ki poori state ki value kya honi chahiye  ki kaise add ho rha hai item (spread laga rha hai ya kya laga rha hai)

 It should just know what happened(action )  and it will dispatch that action


```jsx
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      // generally this type of casing is used here but we can use anything
      // as long as it is unique .

      payload: {
        /* It is better that we keep everything inside payload (itemName and itemDueDate)
          as it will be required  later so instead of taking this out from action object later
          just directly write all of this here.
        */
        itemName,
        itemDueDate,

        // This is es6 object . so we can use it like that .
      },
    };
    dispatchTodoItems(newItemAction);
  };

  // React runs in async way .

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",

      payload: {
        itemName: todoItemName,

        // This is es6 object . so we can use it like that .
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

```

```jsx

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];

//`similarly we will do for delete items`

  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
    // In order to delete item use filter method
  }
  return newTodoItems;
  // If no items gets edited then the current item will only be newTodoItems
};

//THIS above will basically create a new state .

```



So , basically what we are doing here is that we don't know what we have added in the state overall . I just know that  "NEW_ITEM" has been added  that is itemName and itemDueDate and you see how to update this item. 
 And it will dispatch this item.
 and after dispatching it will go to  `reducer` .Now reducer will see based on this action and old value  what will be its new Value.
 
->Now Reducer needs current state and action to create new state.




#### 
```jsx



```



 NOW app is saying that the method i have i have to see when it gets dispatch then what will happen (if some item gets deleted or added then i have to only dispatch it's actions.



###  Full codes :--- ( after separating ui logic and business logic(actual data)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


`App.jsx -----------------`


```jsx


import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <div className="items-container">
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;


```



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


`todo-items-store.jsx-----------`


```jsx
import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// There is a benefit of giving initial value here
// as we will be able to see the suggestion of the methods when we want
// to use them. It will autocomplete them

// --------------------------------------------------------------------------------------------------------------------------

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
    // In order to delete item use filter method
  }
  return newTodoItems;
  // If no items gets edited then the current item will only be newTodoItems
};

//THIS above will basically create a new state .

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      // generally this type of casing is used here but we can use anything
      // as long as it is unique .

      payload: {
        /* It is better that we keep everything inside payload (itemName and itemDueDate)
          as it will be required  later so instead of taking this out from action object later
          just directly write all of this here.
        */
        itemName,
        itemDueDate,

        // This is es6 object . so we can use it like that .
      },
    };
    dispatchTodoItems(newItemAction);
  };

  // React runs in async way .

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",

      payload: {
        itemName: todoItemName,

        // This is es6 object . so we can use it like that .
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
      {/* {and inside it we can pass}  */}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;


```

`AddTodo.jsx--------------`



```jsx


import { useContext, useState } from "react";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  // we are changing the state here but we are not using the state
  //  as we will use it when add button is clicked.
  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
    // now i want to set the name value in the input text as the value of todoName
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
    // after the button is clicked we send the name and date
    // to the parent and we will clear the input fields
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here "
            value={todoName}
            onChange={handleNameChange}
          />
          {/* className={styles["appName_style"] */}
          {/* Bhool gye input tag is self closing tag aur jo input me show
                  karana hai wo placeholder me daalnea padta hai*/}

          {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}

          {/* We need to attach onChange handler in the input so  that whenever there is a change i.e when user enter something 
           we call the function and sent the todoName and todoDate to the app component */}
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 kg-col">
          <button
            type="button"
            className="btn btn-success  kg-button"
            onClick={handleAddButtonClicked}
            /* we have to make anonymous function in onclick because by default it passes the event object but 
            we want to pass  different things that's why */

            /* What happens is that when we click on the button the event object gets passes
            but we want to pass name and date of the object which got clicked so we need an anonymous function
            so that we can send arguments */
          > 
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

```







### **Conclusion**

Do not think like that ki mai ab har jagah `useContext` ya `useReducer` hi use krunga aur `useState` ab use nahi krunga.
Do not do like that.

These all are tools we have to see where which tools are being used. If you use the wrong tool at the wrong place, then the app will not work properly.

If we have basic things then use `useState` in most of the places, start with `useState`, and if you feel that you are overusing it in all the places, all components are using it, then move it into context (`useContext`) or if you think that my state object is getting too bulky or complicated and we are updating it on the basis of the previous state and we have to give it small components that after editing it then in this case start using `useReducer`.


