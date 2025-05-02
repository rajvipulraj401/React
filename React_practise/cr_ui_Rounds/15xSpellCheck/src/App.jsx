import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const App = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const checkSpelling = (input) => {
    const words = input.split(/\s+/);
    for (let word of words) {
      const cleanedWord = word.toLowerCase().replace(/[^a-z]/gi, ""); // remove punctuation
      if (customDictionary[cleanedWord]) {
        return customDictionary[cleanedWord];
      }
    }
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (!value.trim()) {
      setSuggestion("");
      return;
    }

    const corrected = checkSpelling(value);
    setSuggestion(corrected);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        placeholder="Enter text . . ."
        value={text}
        onChange={handleChange}
        rows="6"
        cols="50"
        style={{ resize: "none" }}
      />
      {suggestion && (
        <p>
          Did you mean: <strong>{suggestion}</strong>?
        </p>
      )}
    </div>
  );
};

export default App;
