import React from "react";
import "./Button.css";

function Button(props) {
  const classes = `component-button ${props.orange ? "orange" : ""} ${props.wide ? "wide" : ""}`;

  function handleClick() {
    props.clickHandle(props.name);
  }

  return (
    <div className={classes}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
}

export default Button;