import React from "react";
import "./state-wise-view-component.scss";
import displayCovidProperties from "./display-covid-properties";

const StateWiseView = ({ states }) => {
  return (
    <div className="state-wise-view-container">
      <div className="view-container">
        <div className="state heading">STATE</div>
        <div className="confirmed heading">CONFIRMED</div>
        <div className="active heading">ACTIVE</div>
        <div className="recovered heading">RECOVERED</div>
        <div className="deceased heading">DECEASED</div>
      </div>

      {states.map((current) => (
        <div className="view-container" key={current.keyId}>
          <div className="state">{current.province.toUpperCase()}</div>
          <div className="confirmed">{current.confirmed}</div>
          <div className="active">
            {current.confirmed - (current.recovered + current.deaths)}
          </div>
          <div className="recovered">{current.recovered}</div>
          <div className="deceased">{current.deaths}</div>
        </div>
      ))}
    </div>
  );
};

export default StateWiseView;
