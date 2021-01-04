import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";

function App() {
  const [total, setTotal] = useState("0");

  function handleClick(buttonName) {
    setTotal(buttonName);
  }

  return (
    <div className="component-app">
      <Display value={total} />
      <ButtonPanel clickHandle={handleClick} />
    </div>
  );
}

export default App;