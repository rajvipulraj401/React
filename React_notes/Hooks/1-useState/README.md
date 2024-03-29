
When do we use  useState  in React:--

---

1. **Managing Component State**: When you want your component to remember things, like whether a button is clicked or what text is entered in an input field. This is useful for maintaining state that changes over time.

2. **Reactive Updates**: When you want the screen to change when something happens, such as parts of your webpage appearing or disappearing when a button is clicked. Changes to state should trigger re-renders of the component or its child components.

3. **Local State Management**: When you don't want to share the information with other parts of the webpage, and the information is only needed by one specific part of your webpage. useState allows you to manage component-specific state without involving other parts of your application's state management system.

4. **Functional Components**: If you're building your component using functions (not classes), useState is how you handle memory. It's specifically designed for use in functional components to add state management capabilities.

---
