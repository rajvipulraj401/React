// single selection
// multi selection
import "./styles.css";
import data from "./data";
import { useState } from "react";
//   you can even name it .jsx and still use it it's your wish

const [singleState, setSingleState] = useState(null);

const Accordion = () => {
  //   return <div>{data && data.length > 0 ? "true" : "false"}</div>;

  const handleSingleSelection = () => {};

  return (
    <div className="acc-wrapper">
      {data && data.length > 0 ? (
        // If the data is present as well as the data.length is greater than 0
        // then do this.
        data.map((curr) => (
          <div key={curr.id} className="item" onClick={handleSingleSelection}>
            <h3>{curr.question}</h3>
            <span>+</span>
          </div>
        ))
      ) : (
        <div className="error">"Nothing to show empty" </div>
      )}
    </div>
  );
};

export default Accordion;
