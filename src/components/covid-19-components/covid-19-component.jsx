import React from "react";
import "./covid-19-components.scss";
import CountryWise from "./country-wise-component";
import DisplayProperties from "./display-covid-properties";
const CovidNews = () => {
  return (
    <div className="covidnews-cotainer">
      <h2>Covid-19 Dashboard</h2>
      <CountryWise />
      <DisplayProperties />
    </div>
  );
};

export default CovidNews;
