import React from "react";
import "./title-component.scss";

const Title = () => {
  return (
    <div className="title-container">
      <h1>THE NEWS TRACKER</h1>
      <div className="title-subscribe">
        <i className="fas fa-envelope"></i> &nbsp; Subscribe to Newsletter
      </div>
    </div>
  );
};
export default Title;
