import { useState } from "react";
import { Child } from "./Child";
import StrictlyMode2 from "./StrictlyMode2";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;

  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
      {/* <Child></Child> */}
      <br></br>
      <StrictlyMode2></StrictlyMode2>
    </div>
  );
}
