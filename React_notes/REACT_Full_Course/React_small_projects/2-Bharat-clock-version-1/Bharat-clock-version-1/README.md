
# Bharat-clock-version-1



`index.html`-----------------

```html

<!doctype html>
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
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;

```


`ClockHeading.jsx-----------`
```jsxlet ClockHeading = () => {
  return <h1 className="fw-bolder">Bharat Clock</h1>;
};

export default ClockHeading;

```

`ClockSlogan.jsx-----------`
```jsx
let ClockSlogan = () => {
  return (
    <p className="lead">
      This is the clock that shows the time in Bharat at all times.
    </p>
  );
};

export default ClockSlogan;



```


`CurrentTime.jsx`-------------------------
```jsx
let CurrentTime = () => {
  let time = new Date();

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;


```
