# Notes on JavaScript Modules, React Components, and Variable Export/Import

## Importing and Exporting Modules

- To use modules (import and export) in JavaScript, specify the `type` attribute in the HTML file `<script>` tag.

```html
<script type="module" src="main.js"></script>
```

- Defining `type="module"` defaults the file to use the "defer" attribute for loading.


## The Main Idea Behind Modules

- The main idea behind module is to allows you to import and export different section of codes from different files into other files which allows you to  break up all your code into more smaller range files which makes up your code easier to understand and reason with later on when you want to change it.  enhancing readability and ease of debugging when making changes later on.(debug)
.

### Types of Exports

1. **Default Export**
2. **Standard Export**

Two ways to export:

1. Export at the end of the file:

```javascript
export default User;
export { printName, printAge };
```

2. Export in line:

```javascript
export default class User {}
export function printName(user) {}
```

Note: Only one default export is allowed.


### Variable Export and Import

- Exporting variables and functions:

```javascript
const a = 5;
const b = 6;

function sum() {
  // Function logic
}

export { a, b, sum };
```

- Importing variables:

```javascript
import { a, b, sum } from "./app.js"; // Relative path because it is in the same folder

// Examples for different folder structures:
// If it was two folders back:
// import { a, b, sum } from "../../app.js";
// If it was two folders ahead:
// import { a, b, sum } from "../app.js";

/* 
NOTE - YOU need to add a  (dot and backward slash before writing from whom you are importing).
->>also USE ./ IF you are using RELATIVE paths.
->> USE / if YOU are using ABSOLUTE path.
*/

console.log(sum(a, b));
```

**Note:** The order of exported variables and functions doesn't matter, but the exact names used during import must match the exported names.




###we can also change the name of our default input name and can call it something else and it still works .


for example -

````javascript
// Now, when importing in another file:
import User from "/user.js";
const user = new User("bob", 11);
console.log(user);

// Alternatively, you can change the name:
import u /* as UserAlias */from "/user.js";
const userWithDifferentName = new u("bob", 11);
console.log(userWithDifferentName);
```

###THIS BOTH works in same manner.As this  import allow us to change the name of imported default objects.



### Importing Functions

- Importing functions alongside a class:

```javascript
import U, { printName as printUserName, printAge } from "/user.js";
```
###we need to put it inside the curl y brack as we did when we were about to export them.we can even change their name to something else by using   "as"



- Change names using "as":

```javascript
import { printName as printUserName, printAge as printUserAge } from "/user.js";
```

This syntax uses the "as" keyword to alias the imported names, making it more in line with standard JavaScript syntax.


##NOte - IF WE DON'T WANT TO IMPORT THE DEFAUlt thisng we can just remove the thing before curly bracket and write the things we want to import inside curly bracket .

Here's an example demonstrating how to selectively import specific items without using the default import:

```javascript
Copy code
// Example export in utils.js
const a = 5;
const b = 6;

function sum() {
  // Function logic
}

export { a, b, sum };
```


#### Now ,when importing in another file:

```javascript
// Example import in app.js
import { a, sum } from "./utils";

console.log(a);   // Accessing 'a'
console.log(sum());  // Accessing the 'sum' function
```

In this example, we are importing only the a variable and the sum function from utils.js, excluding b. This approach allows you to import only the specific items you need from a module.



### Example Code(full code)

#### user.js

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log(`User's name is ${user.name}`);
}

function printAge(user) {
  console.log(`User is ${user.age} years old`);
}

export default User;
export { printName, printAge };
```

#### main.js

```javascript
import U, { printName as printUserName, printAge } from "/user.js";

const user = new U("bob", 11);
console.log(user);
printUserName(user);
printAge(user);
```


#### index.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Module</title>
  <script type="module" src="main.js"></script>
</head>
<body></body>
</html>
```


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## React Components

### React Component Structure

- Organize components into folders for better project management:

  ```
  src/
    components/
      MyComponent/
        MyComponent.js
        MyComponent.css
      AnotherComponent/
        AnotherComponent.js
        AnotherComponent.css
  ```

### Exporting React Components

- Export React components as default or named exports.

```jsx
// MyComponent.js
import React from 'react';

const MyComponent = () => {
  // Component logic
};

export default MyComponent;
```

### Importing React Components

- Import React components using the exact file path.

```jsx
// AnotherComponent.js
import React from 'react';
import MyComponent from './MyComponent';

const AnotherComponent = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default AnotherComponent;
```

### Using JSX Syntax

- When writing JSX, ensure the `React` library is imported.

```jsx
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```

### Exporting Constants and Functions

- Export constants, functions, or hooks for use in React components.

```jsx
// utils.js
export const apiKey = 'your-api-key';
export const fetchData = async () => {
  // Fetch data logic
};
```

```jsx
// MyComponent.js
import React, { useEffect } from 'react';
import { apiKey, fetchData } from './utils';

const MyComponent = () => {i
  useEffect(() => {
    fetchData(apiKey);
  }, []);

  return <div>Data Loading...</div>;
};

export default MyComponent;
```

