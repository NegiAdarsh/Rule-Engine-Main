import React, { useState } from "react";
import Page from "./Page";
import "./App.css"; // Import the CSS file
import RuleExamples from "./components/RuleExamples";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="app">
      <div className={isNightMode ? "night-mode" : ""}>
        <button className="floating-button" onClick={toggleNightMode}>
          {isNightMode ? "☀️" : "🌙"}
        </button>
        <Page isNightMode={isNightMode} />
        <RuleExamples/>
      </div>
    </div>
  );
}

export default App;
