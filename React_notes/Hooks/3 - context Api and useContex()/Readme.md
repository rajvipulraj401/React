


## **Part 1**

What i understood of context api ---

1) Sometimes when we divide a page in component wise and we have to send some data which we do using passing props to child component it becomes really hard when there are multiple levels of child components and this leads to prop drilling . 
What happens is that all the child components gets the props unnecessarly for example

```
Parent
└── Child
    └── Grandchild
        └── Great Grandchild
```

Now here the great grandchild needs the props but in order to reach there the props has to be passed to all components so in order to avoid this repetition we use 
`context Api` 

So context means common shared storage among all the components . So what happens in this  is this context is shared to all the components .

This also helps in separation of business idea and ui logic .

-> We make a separate folder called store
and inside that we keep our business logic (it's just a naming convention .


In order to use context Api :--

- import createContext from React :

```javascript
import {createContext} from "react";
export const TodoItemsContext = createContext();
```

Just like we import all the other things from react like useState() similarly we can import createContext from react app .

we can also give initial value when we do create context.ex

- Initialize context with an optional initial value:

```javascript
const TodoItemsContext = createContext([]);
```

- Provide the context value to components using TodoItemsContext.Provider:
```jsx
<TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
  {/* Children components */}
</TodoItemsContext.Provider>
```

Access the context value in components using the useContext hook:
```javascript
const { todoItems, addNewItem, deleteItem } = useContext(TodoItemsContext);
```

In order to use "If we want the shared context to be accessible to all components within a certain container, it should be provided at the appropriate level in the component hierarchy."

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

## **Part 2**

Now in order to get out from prop drilling repetitions we use context api .

1) We have to first import createContext method from react .

```javascript
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
```

2) Then we can also initialize initial value to it . While this is optional.

3) In order to provide /access the value of the context object to the components we use .provider component which we get from  createContext() method 

we get three things from createContext() method 

1) context object - with a value object inside it which has initial value or the value provided by the provider.

2) provider component .

3) consumer component.

we provide the context value to components like this :

```jsx
<TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
  {/* Children components */}
</TodoItemsContext.Provider>
```

NOTE :---

- When using the `Provider` component from `TodoItemsContext`, instead of directly passing a single value to the `value` prop, an object containing multiple values and methods (`todoItems`, `addNewItem`, `deleteItem`) is passed. 
- This approach allows for a more organized and flexible way of sharing data and functionality through the Context API in React.
- By encapsulating the values and methods within an object, it creates a scope where new values or methods can be easily added or modified without the need for extensive refactoring.
- This pattern promotes maintainability and scalability of the codebase, as it provides a clear structure for managing context values and methods within the application.

**BASICALLY ISSE JYADA VALUE SHARE KR PAOGE NAHI TOH BAAR BAAR REFACTOR KRNA PDEGA , JITNA SHARE KRNA HAI EK HI ME DAAL DO**

4) Now in order to access the provided value in the component individually we need to use useContext hook.

```jsx
const { todoItems, addNewItem, deleteItem } = useContext(TodoItemsContext);
```

**5) useContext hook -**

We will use a hook called `useContextand` inside useContext we will pass the context object that we created.

For example, we give the name of the object coming from createContext() method name as `TodoItemsContext`.

When

 you use the useContext hook, you receive the context value, which is typically an object. (`IT can be any value string , boolean , function etc`)
So, unlike useState, where you get an array with two values (the current state value and a function to update the state), in useContext, you get directly the current context value.
```





 ### some important questions and there answers :-

1) is createContext() a hook if no what is it ?

createContext() is not a hook. In React, createContext() is a method/function provided by the React library itself that creates a new context object. This context object can then be used to share data across components in a React application.


In React, the context object created by `createContext()`consists of two parts: a- the context object itself and 
b- the Provider and Consumer components, which are provided by React to work with context.

Here's how it looks:

```jsx
context = {
  value: {    // This is where the initial value or provided value will reside
    name: "abc",
    age: 14
  },
  Provider: ..., // React's built-in Provider component
  Consumer: ...  // React's built-in Consumer component
}

```

The value property holds the actual data that is shared via context. This is where your initial value or the value provided by the Provider will reside.

The Provider and Consumer are not properties of the context object itself; they are provided by React and are typically accessed as Context.Provider and Context.Consumer respectively, where Context is the context object returned by createContext(). These components are used to provide and consume the context value within your application.

2) so just like use State we can initialize createContext with an initial value  and that value can be anything ??


Yes, just like useState, you can initialize createContext with an initial value. This initial value can be any JavaScript value, such as an object, array, string, or number.

3) what is .provider is createContext an object if so what properties does it have and what methods ? and .provider is a method or property of it ????

When I mentioned that createContext() creates an object of type Context, I was referring to the context object specifically created by React for managing context. In React, the Context object is a special type of object provided by the React library. It's not about the general types of JavaScript objects. In the context of React, there's only one type of object created by createContext(), which is the Context object. It contains a Provider property, which is an object with a value prop used for providing the context value.



In JavaScript, objects are entities that have properties and methods. There are several types of objects:

Built-in Objects: These are objects provided by JavaScript itself, such as Object, Array, Function, String, Number, Boolean, Date, RegExp, and Math. These objects are predefined with properties and methods for various functionalities.

User-defined Objects: These are objects created by programmers. They can have custom properties and methods tailored to specific needs.

DOM Objects: When working with web development, you encounter objects representing elements in the Document Object Model (DOM). These include objects like document, window, and various HTML elements (div, span, input, etc.). For example, the "document" object represents the HTML document in the DOM, and it's predefined with properties and methods for manipulating the document.

Host Objects: These are objects provided by the environment in which JavaScript runs. For example, in a browser environment, objects like XMLHttpRequest, console, and localStorage are provided by the browser. They offer functionalities specific to the environment they are in

For Example:- `when we Say DOCUMENT OBJECT 
 - When we refer to the "document object," "document" serves as the name of the object.
- This "document" object is special because it's predefined within the browser environment.
- Predefined with specific properties and methods, such as `getElementById()` or `createElement()`.
- Enables manipulation and interaction with the HTML document within the Document Object Model (DOM).
  
- Similarly, in React, when we use the `createContext()` method, the name we assign to it, such as "Context," becomes the object name. This "Context" object is special in React, providing a structured way to share data between components without prop drilling. It includes properties like:
  1) **Provider**: The `Provider` property wraps the components in the React tree that need access to the context. It accepts a `value` prop, passing data to descendant components.
  2) **Consumer**: The `Consumer` property is a component that allows consuming the context value. It utilizes a render prop pattern, enabling components to subscribe to context changes and access the context value within their render methods.
4) Why we need useContext hook in order to use createContext().

We need the useContext hook in order to access the context value within functional components. Without useContext, we wouldn't have a straightforward way to consume the context value. It allows us to access the context value without needing to explicitly pass props down through the component tree.

5) why createContext() is called context api , why not just useContext hook ?? 

 The term "Context API" refers to the entire mechanism provided by React for managing shared state across components, including both the createContext() function for creating context and the useContext hook for consuming context. The reason createContext() is called part of the "Context API" is because it's the method provided by React for creating context objects, which are then used with the useContext hook to access shared data. So, in short, createContext() is part of the Context API because it's the way React provides for creating and managing context.
