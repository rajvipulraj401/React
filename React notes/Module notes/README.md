# Notes on JavaScript Modules, React Components, and Variable Export/Import


## The Main Idea Behind Modules

- The main idea behind modules is to allow you to import and export different sections of code from different files into other files. This allows you to break up all your code into smaller files, making it easier to understand and reason with later on when you want to change it. Enhancing readability and ease of debugging when making changes later on. (debug).


## Importing and Exporting Modules

- To use modules (import and export) in JavaScript, specify the `type` attribute in the HTML file `<script>` tag.

```html
<script type="module" src="main.js"></script>
```

- Defining `type="module"` defaults the file to use the "defer" attribute for loading.

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


**Export Section:**

```javascript

// Example of export default with a function
export default function subtract(x, y) {
  return x - y;
}

// Example of an attempt to use export default with an object (not allowed)
// export default { subtract };
```
Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const 
---



### Variable Export and Import

- #### Exporting variables and functions:

```javascript
const a = 5;
const b = 6;

function sum() {
  // Function logic
}

export { a, b, sum };
```

- ####  Importing variables:

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

### Changing the Name of Default Import

For example -

```javascript
// Now, when importing in another file:
import User from "/user.js";
const user = new User("bob", 11);
console.log(user);

// Alternatively, you can change the name:
import u /* as UserAlias */ from "/user.js";
const userWithDifferentName = new u("bob", 11);
console.log(userWithDifferentName);
```


### Importing all contents

**Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory**


```javascript


// Importing all contents from math_functions.js into a module named myMathModule
import * as myMathModule from "./math_functions.js";

/* 
The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:*/


// Using the imported functions from myMathModule
myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

// Importing all contents from string_functions.js into an object named stringFunctions
import * as stringFunctions from "./string_functions.js";

// Using the imported functions from stringFunctions
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

---


#### **Import Default Values:**

**The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.**

**for example HERE WE are using sub instead of default name subtract**
```javascript
// Importing the default export from math_functions.js with the name 'add'
import add from "./math_functions.js";

// Using the imported default value 'add'
add(2, 3);

// Importing the default export from math_functions.js with a different name 'sub'
import sub from "./math_functions.js";

// Using the imported default value 'sub'
sub(7, 4);
```


### Importing Functions

- Importing functions alongside a class:

```javascript
import U, { printName as printUserName, printAge } from "/user.js";
```

- Changing names using "as":

```javascript
import { printName as printUserName, printAge as printUserAge } from "/user.js";
```

This syntax uses the "as" keyword to alias the imported names, making it more in line with standard JavaScript syntax.

## NOte - Selective Import without Default Import

Here's an example demonstrating how to selectively import specific items without using the default import:

```javascript
// Example export in utils.js
const a = 5;
const b = 6;

function sum() {
  // Function logic
}

export { a, b, sum };
```

Now, when importing in another file:

```javascript
// Example import in app.js
import { a, sum } from "./utils";

console.log(a);   // Accessing 'a'
console.log(sum());  // Accessing the 'sum' function
```

In this example, we are importing only the `a` variable and the `sum` function from `utils.js`, excluding `b`. This approach allows you to import only the specific items you need from a module.

### Example Code (Full Code)

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

---

## React Components

### React Component Structure

- Organize components into folders for better project management:

```plaintext
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

const MyComponent = () => {
  useEffect(() => {
    fetchData(apiKey);
  }, []);

  return <div>Data Loading...</div>;
};

export default MyComponent;
```
