import React from "react";
import "./follow-us-component.scss";

const FollowUs = () => {
  return (
    <div className="follow-us-sub-container">
      <div className="dummy">
        <div>Follow us</div>
        <ul>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i className="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FollowUs;
