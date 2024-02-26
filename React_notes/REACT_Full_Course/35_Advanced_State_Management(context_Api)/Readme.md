# 	`_ Context API _`

### Why we need context Api ?
- In complex React projects like a todo app, passing props down through multiple layers of components can lead to prop drilling, where components receive props they don't need.
- Prop drilling makes maintenance difficult and can clutter components with unnecessary props.
- Context API helps solve this issue by providing a shared state that can be accessed by multiple components without passing props through each intermediate component.


(so the state which is shared between multiple components so the parent of those component needs to save /store the state in it .) but sometimes we have to go very deep . ex

### Diagram:

```
Parent
└── Child
    └── Grandchild
        └── Great Grandchild
```


so here the last child only needs the props but we have to unnecessarly send the props to all the previous parent so in order to avoid this repeatition we use contextAPI.


### Props drilling :-

Props drilling is the passing of props through multiple layers of components in a component hierarchy to reach a deeply nested child component.It makes maintainance of component very hard. 

The above is solved using context api -

So Context means `common shared storage` among all the components. means jitne bhi aapke components hai un sab ke saath ek context share hoga.

 context means --  It means we will have a shared storage , where we can edit the value and get the value from there . So this remove dependancies from parent .



```
Parent
└── Child
    └── Grandchild
        └── Great Grandchild
```

There is a general convention that the data we have we keep it in different folder

we make a folder called store (because it is just a naming convention ) , All the store management (so jaha bhi state ho , business logic ho usko hum store me rkhte hai.) .This helps in separation of concern as we separate ui and logic.


![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/35_Advanced_State_Management(context_Api)/contextApi.png)

## Using Context API:

- Import `createContext` from React:

```jsx
import { createContext } from "react";

export const TodoItemsContext = createContext();
```
Just like we import all the other things from react like useState() similarly we can import createContext from react app .

we can also give initial value when we do create context.ex
- Initialize context with an optional initial value:

```jsx
const TodoItemsContext = createContext([]);
```

- Provide the context value to components using `TodoItemsContext.Provider`:

```jsx
<TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
  {/* Children components */}
</TodoItemsContext.Provider>
```

- Access the context value in components using the `useContext` hook:

```jsx
const { todoItems, addNewItem, deleteItem } = useContext(TodoItemsContext);
```

### Now how to use it ??

-- "If we want the shared context to be accessible to all components within a certain container, it should be provided at the appropriate level in the component hierarchy."


 ex

```jsx

 return (
    <TodoItemsContext.Provider>
      <center>
        <AppName />

        <div className="items-container">
          <AddTodo onNewItem={handleNewItem} />
          <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
          {/* we are using conditional rendering to show the message  */}
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
          ></TodoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );

```


 This is a type of component which takes all our children

 so what basically createContext is doing that the object `TodoItemsContext` jo object bana rha hai  uske andar humko sab kuch daal ke de rha hai humko pehle se kon `.provider`

 <TodoItmesContext.Provider></TodoItmesContext.Provider>

 iske andar humlog poora ka poora children le rha hai aur 
 aur ye saare ke saare children me mera jo context hai usko available karane ki kosis krega

  so The object which i created using createContext usme .provider lagake as a
  component use krunga aur uske andar jo bhi hai wo chhahe toh ab is provider ko access kr sakta hai . but how will it use it 
  

  ### NOW HOW will it access it ??

  we will use a hook called  `useContext`and inside  useContext we will pass the context object that we created

  for example  

```jsx
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  /* iske ssath humko ek hook ko import krna hoga jiska naam hai use context .
  aur we will pass context object inside useContext jo humne banaya hai.
  
   we will need to pass value prop inside the context.provider
  */

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          // as we have kept the icon name unique so let's keep it as key
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};


```


 `Instead of giving state (current value), we can provide a value as an object so that we can access methods as well. Earlier, we were declaring state and passing the props, `but now we are providing it to the context provider. So, whoever wants to access the property or method can use it from the context provider`. Remember, as we change the value of the context provider, all the components get re-rendered.

<U> **We can send an object instead of just one value, and then we would be able to access all of the values and even methods by using the context provider.** </U>

Also, methods are also first-class objects.

#### **Title:** First-Class Objects in JavaScript

In JavaScript, all non-primitive values, including arrays, objects, and functions, are considered first-class objects. This means they can be treated as objects, allowing them to be assigned to variables, passed as arguments, and returned from functions just like any other value like string or numbers .

JavaScript treats functions as first-class citizens, meaning they can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.
  


  ### Always Remember _
  
  `If i am making an object for context then do not pass value directly into it 
   Always make object and then pass it usse scope bana rahta hai ki aap jab bhi 
   chahe ek nayi value add kr sakte hai warna
   refactor krna padega`


### Folder Structure Convention:

- Group context files under a `store` folder.

## Advantage of context Api

- **Logic Separation:** Keeps UI and business logic separate.


## Disadvantage of context API
   
   - **Performance:** Changing context value triggers a re-render ,Therefore
   whole app is painted so only put things in context which is very common
   and are used in many levels (which we had to pass unnecesaary at many place as props so )

   Else we will prefer other things to keep them in state . 

### Guidelines:

1. **Prop Drilling:** Context API addresses prop drilling; component composition is an alternative.
2. **Folder Setup:** Use a `store` folder for context files.
3. **Initialization:** Use `React.createContext` with an initial state and export it.
4. **Provider:** Implement with `contextName.Provider` in components.
5. **Access Value:** Use the `useContext` hook to access context values.
6. **Dynamic Data:** Combine context value with state.
7. **Export Functions:** Context can also export functions for actions.
8. **Logic Separation:** Helps keep UI and business logic separate.




---


## Corrected Code Examples:


### `todo-items-store.jsx----------`
```jsx

import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// There is a benefit of giving initial value here
// as we will be able to see the suggestion of the methods when we want
// to use them. It will autocomplete them

```


### `App.jsx------------`


```jsx

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const initialTodoItems = [
  {
    name: "Buy Milk",
    duedate: "20/01/2024",
  },
  {
    name: "Go to College",
    duedate: "20/01/2024",
  },
];
function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);

    //  If we want to set new value based on old value then instead
    // of using spread use a method inside setter function of use state
  };

  // React runs in async way .

  const deleteItem = (todoItemName, todoDate) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // In order to delete item use filter method
  };

  return (
    <TodoItemsContext.Provider
      // value={{
      //   todoItems: todoItems,
      //   addNewItem: addNewItem,
      //   deleteItem: deleteItem,
      // }}
      // The below is shortcut in javascript it is known as es6 objects
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        {/* instead of giving state(current value) we can give value as object so that 
      we can get method as well  */}
        {/* Earlier we were declaring state and passing the props but now we are giving it to context provider
      so whoever wants to access the property or method can use it from context provider*/}
        {/* Remember as we change the value of context provider all the things gets re-render*/}

        {/* we can instead of sending just 1 value we can send an object and then in that way we 
        would be able to access all of the value and even method whoever needs whichever property using context providr
        */}
        <AppName />

        <div className="items-container">
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;


```


### `TodoItems.jsx-------------`


```jsx

import "../App.css";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  /* iske ssath humko ek hook ko import krna hoga jiska naam hai use context .
  aur we will pass context object inside useContext jo humne banaya hai.
  
   we will need to pass value inside the context.provider
  */

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          // as we have kept the icon name unique so let's keep it as key
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;



```




### `TodoItem.jsx-------------`


```jsx


import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

````


`AddTodo.jsx---------------------`


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


`WelcomeMessage.jsx------------------`


```jsx

import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  /* Use object destruct */

  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day </p>
  );
};

export default WelcomeMessage;


```



