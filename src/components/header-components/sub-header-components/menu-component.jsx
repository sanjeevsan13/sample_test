import React from "react";
import "./menu-component.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Menu = (props) => {
  console.log("Sajeev", props);
  return (
    <div className="menu-main-conatiner">
      <div className="menu-container">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to={`${props.match.path}covid-19`}>COVID-19</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Menu);
