import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <div className="utility-button">
      <button {...props}>{props.children}</button>
    </div>
  );
};
export default Button;
