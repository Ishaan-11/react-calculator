import React from "react";
import "./Button.css";

function Button(props) {
  const classes = `component-button ${props.orange ? "orange" : ""} ${props.wide ? "wide" : ""}`;

  return (
    <div className={classes}>
      <button>{props.name}</button>
    </div>
  );
}

export default Button;