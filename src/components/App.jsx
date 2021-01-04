import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

function App() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null
  });

  function handleClick(buttonName) {
    setData(prevValue => {
      return calculate(prevValue, buttonName);
    });
  }

  return (
    <div className="component-app">
      <Display value={data.next || data.total || "0"} />
      <ButtonPanel clickHandle={handleClick} />
    </div>
  );
}

export default App;