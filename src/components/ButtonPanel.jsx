import React from "react";
import Button from "./Button";
import "./ButtonPanel.css";

function ButtonPanel(props) {

  function handleClick(buttonName) {
    props.clickHandle(buttonName);
  }

  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandle={handleClick} />
        <Button name="+/-" clickHandle={handleClick} />
        <Button name="%" clickHandle={handleClick} />
        <Button name="÷" clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name="7" clickHandle={handleClick} />
        <Button name="8" clickHandle={handleClick} />
        <Button name="9" clickHandle={handleClick} />
        <Button name="x" clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name="4" clickHandle={handleClick} />
        <Button name="5" clickHandle={handleClick} />
        <Button name="6" clickHandle={handleClick} />
        <Button name="-" clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name="1" clickHandle={handleClick} />
        <Button name="2" clickHandle={handleClick} />
        <Button name="3" clickHandle={handleClick} />
        <Button name="+" clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name="0" clickHandle={handleClick} wide />
        <Button name="." clickHandle={handleClick}/>
        <Button name="=" clickHandle={handleClick} orange />
      </div>
    </div>
  );
}

export default ButtonPanel;