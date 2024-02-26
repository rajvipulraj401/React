# Todo App version 3

## Adding New Todo Item Functionality

### Requirement:
- Allow users to add a new todo item by entering its name and selecting a due date.
- Upon pressing the "Add" button, a new row should be added with the entered name and due date.
- After adding, clear the input fields.
- Make another component called message.jsx and show the messsage that "Enjoy your day".
- Implement delete button functionality 
Make a function in `app component` to handle delete button click and it will receive `todoName` as the parameter (which will also be a key) 
 Then using `filter method` do the deletion in array .

#### Implementation Steps:

1. **State Management**:
   - Initialized state variables `todoName` and `dueDate` using `useState` hook to manage user input.
   - Used state to capture and update the real-time values of todo name and due date.
   - Ensured the input fields are bound to the state variables using the `value` attribute.
   - **Event Target Usage**: Utilized `event.target.value` in `handleNameChange` and `handleDateChange` event handlers to capture changes in input fields.

   ```jsx
   const [todoName, setTodoName] = useState("");
   const [dueDate, setdueDate] = useState("");
   ```

   ```jsx
   const handleNameChange = (ev) => {
     setTodoName(ev.target.value);
   };

   const handleDateChange = (ev) => {
     setdueDate(ev.target.value);
   };
   ```

2. **Handling User Input**:
   - Implemented event handlers (`handleNameChange` and `handleDateChange`) to capture changes in input fields.
   - Updated state variables (`todoName` and `dueDate`) with the entered values using setter functions.
   - **Value Attribute Usage**: Set the `value` attribute of input fields to the current value of `todoName` and `dueDate` to reflect real-time changes and maintain input field state.
   - Utilized the `onChange` event to detect changes in the input fields.

   ```jsx
   <input
     type="text"
     placeholder="Enter Todo Here "
     value={todoName}
     onChange={handleNameChange}
   />
   ```
2.	Value Attribute Usage:
•	The value attribute ensures that input fields display the current user input.
•	Setting value to todoName and dueDate keeps input fields synchronized with user input.
•	Enhances user experience by providing clear feedback on entered values.
NOTE: Using value inside input tags ensures fields always display the latest user input.
If we didn't set the `value` attribute and relied solely on `useState`:
- Input fields wouldn't reflect user input in real-time.
- User-entered values wouldn't display, causing confusion.
- It would lead to a less intuitive and responsive user interface.
   ```jsx
   <input type="date" value={dueDate} onChange={handleDateChange} />
   ```

3. **Adding New Item**:
   - Implemented a function (`handleAddButtonClicked`) to handle adding a new todo item.
   - Invoked the `onNewItem` function with `todoName` and `dueDate` as arguments upon clicking the "Add" button.
   - Cleared the input fields after adding the new todo item by resetting the state variables to empty strings.

   ```jsx
   const handleAddButtonClicked = () => {
     onNewItem(todoName, dueDate);
     setdueDate("");
     setTodoName("");
   };
   ```

   ```jsx
   <button
     type="button"
     className="btn btn-success  kg-button"
     onClick={handleAddButtonClicked}
   >
     Add
   </button>
   ```

#### Additional Notes:
- Used meaningful method names (`handleNameChange`, `handleDateChange`, `handleAddButtonClicked`) to indicate their purpose and functionality.
- Ensured proper binding of event handlers to input fields to capture user interactions effectively.
- Maintained immutability of state by updating state variables using setter functions rather than modifying them directly.
- Utilized conditional rendering to display the "Enjoy Your Day" message when there are no todo items present.

## Deleting Todo Items

### Requirement:
- Allow users to delete todo items by clicking a "Delete" button associated with each item.

#### Implementation Steps:

1. **Handling Deletion**:
   - Implemented a function (`handleDeleteItem`) in the parent component (`App.jsx`) to handle deletion of todo items.
   - Passed the `handleDeleteItem` function as a prop to the `TodoItems` component.
   - Utilized the `filter` method to remove the selected todo item from the `todoItems` array.
   - Updated the state with the new filtered array, effectively removing the selected todo item from the list.
   - **Immutable State Usage**: `Maintained immutability of state by not directly modifying the current value of `todoItems`.`
( we will not change the current value of state (we should treat it as immutable `Good Practise`)
   - Sent the `onDeleteClick` function as a prop to the `TodoItems` component to handle deletion of individual todo items.

   ```jsx
   const handleDeleteItem = (todoItemName) => {
     const newTodoItems = todoItems.filter(
       (item) => item.name !== todoItemName
     );
     setTodoItems(newTodoItems);
   };
   ```

   ```jsx
   <TodoItems
     todoItems={todoItems}
     onDeleteClick={handleDeleteItem}
   ></TodoItems>
   ```


## Displaying "Enjoy Your Day" Message (when no item)

### Requirement:
- When there are no todo items, display a message "Enjoy Your Day".

### Implementation Steps:

1. **Conditional Rendering**:
   - Created a separate component (`WelcomeMessage`) to display the message.
   - Utilized conditional rendering to display the `WelcomeMessage` component when the `todoItems` array is empty.
   - Displayed the message "Enjoy Your Day" when there are no todo items to show.

### Additional Notes:
- Ensured proper use of conditional rendering to display components based on specific conditions.
- Maintained consistency in component structure and naming conventions for clarity and readability.

```jsx
{todoItems.length === 0 &&<WelcomeMessage ><//WelcomeMessage>}
```

## `---------------------EXTRA  --Notes:------------------------`

- Always write css in browser it's easy to then see and copy it back.
- Ensured proper reference and execution of event handler functions to maintain functionality and context.
- Avoided directly mutating state to adhere to best practices of immutability.
- WHEN writing name of method write handle then the suitable name for method ex
handleOnClick
-`onChange` handler:
- Detects changes in input fields.
- Triggers a function when user input changes.
- Allows real-time response to user input.
- we have to add another method (anonymous method) and inside it we can pass the reference of the parent method when using onClick or any other event changer function as it passes the event as parameter by default case .


---
##	**Title: Understanding Event Handling in JavaScript: Passing Function References vs. Direct Invocation**

When attaching an anonymous function to an event handler like a button click, two common approaches are:

1. **Passing a Reference to a Function:**
   - Syntax: `() => { abc }`
   - This approach involves passing a reference to the function `abc` without directly invoking it.
   - When the button is clicked, the anonymous function is triggered, but `abc` is not immediately executed. Instead, it waits for the event to occur.

2. **Directly Calling the Function Inside the Anonymous Function:**
   - Syntax: `() => { abc() }`
   - Here, the function `abc` is called directly inside the anonymous function.
   - When the button is clicked, the anonymous function is triggered, and `abc()` is invoked immediately.

**Result Comparison:**
- In both scenarios, the function `abc` will eventually be executed when the button is clicked.
- The difference lies in how the function is invoked within the anonymous function.
- However, in the context of attaching event handlers like button clicks, both approaches yield the same result.

**Conclusion:**
- Whether you pass a reference to a function or directly call the function inside an anonymous function for event handling, the outcome remains consistent.
- The choice between the two approaches often depends on factors like code readability, context, and specific requirements.

--- 

