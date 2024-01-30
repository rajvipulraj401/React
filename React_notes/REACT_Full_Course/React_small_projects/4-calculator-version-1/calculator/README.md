# calculator  version 1 (using props and module.css)



![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/17-Bootstrap/calc.png)

`index.html`-----------------

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

`main.jsx---------------`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`App.jsx------------`

```jsx

// import React from "react";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {
  return (
    <div className={styles.calculator}>
      {/* <div className={styles["display"]}></div> */}
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;


```

`App.module.css`--------------

```css

.calculator {
  border: 1px solid rgba(0, 0, 0, 0.575);
  border-radius: 10px;
  /* height: 600px; */
  max-width: 200px;
  /*display: flex;
  flex-direction: column;
  align-items: center; */
}



```

`ButtonsContainer.jsx`--------

```jsx

import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttonsContainer"]}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={styles.button}>
          {buttonName}
        </button>
      ))}

      {/* {buttonNames.map((buttonName) => {
        return <button className={styles.button}>{buttonName}</button>;
      })} */}

      {/* <button className={styles.button}>c </button> */}
    </div>
  );
};

export default ButtonsContainer;


```
`ButtonsContainer.module.css..--------`


```css

.buttonsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-content: flex-start; */
  /* margin-left: 60px;
    width: 74%;
    height: 70%;
    padding: 10px 0; */
}
.button {
  height: 45px;
  width: 45px;
  margin: 3px;
  /* border: 1px solid black;
        border-radius: 5px;
        color: black;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem; */
  /* margin: 2px 10px; */
}


```

`Display.jsx`-------------------------

```jsx
// import styles from "../App.module.css";
import styles from "./Display.module.css";

const Display = () => {
  return <input className={styles.display} type="text" />;
};
export default Display;


```


Display.module.css---------------`

```css

.display {
  /* border: 1px solid black; */
  margin: 10px;
  width: 172px;
  font-size: 25px;
  /* align-self: flex-start; */
  /* margin-left: 25px; */
  /* border-radius: 5px; */
}


```
