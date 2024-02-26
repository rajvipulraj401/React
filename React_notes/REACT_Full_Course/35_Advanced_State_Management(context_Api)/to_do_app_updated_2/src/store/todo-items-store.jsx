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
