import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// There is a benefit of giving initial value here
// as we will be able to see the suggestion of the methods when we want
// to use them. It will autocomplete them
