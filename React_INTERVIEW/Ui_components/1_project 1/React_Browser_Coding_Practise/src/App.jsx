import data from "./components/1.accordian/data";

import Accordion from "./components/1.accordian";

const App = () => {
  return (
    <div className="App">
      <Accordion key={data.id}></Accordion>
    </div>
  );
};

export default App;
