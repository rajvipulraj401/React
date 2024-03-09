

# custom Hook


## Why we need to create custom hook and when ?


Rules of Hook


1) We can only call hook inside any react component or inside any other hooks without any react component or other hooks we cannot call hook .

2) we cannot use hook in any if conditions or anything. it should be at the top only not inside any branch . always under component.








1. Reusable Logic: Custom hooks allow you to
extract and reuse component logic across multiple
components.
2. Naming Convention: Typically start with "use"
(e.g., useWindowSize, useFetch).
3. Combining Hooks: Custom hooks can combine
multiple built-in hooks like useState, useEffect,
and others.
`4. Sharing State: Enables sharing of stateful logic
without changing component hierarchy.`
5. Isolation: Helps in isolating complex logic, making
components cleaner and easier to maintain.
6. Custom Return Values: Can return any value
(arrays, objects, or any other data type) based on
requirements.
