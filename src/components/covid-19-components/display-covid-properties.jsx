import React from "react";
import "./display-covid-properties.scss";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import StateWiseView from "./state-wise-view-component";
import Button from "../../components/utility-components/button";
import { Link, withRouter } from "react-router-dom";

const DisplayProperties = ({
  countryCovid,
  stateCovid,
  resetCovidState,
  showComponent,
  setShowComponent,
}) => {
  console.log("saje <<<<<<<<<<<", showComponent);

  useEffect(() => {
    return () => {
      console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}}}");
      resetCovidState();
    };
  }, []);

  var rows = [];
  for (const [key, value] of Object.entries(countryCovid)) {
    if (key != "error" && key != "country" && key != "location") {
      rows.push(
        <div className="covid-properties" key={key}>
          <div className="heading">{key.toUpperCase()}</div>
          <div className="result">{value}</div>
        </div>
      );
    }
  }
  return rows.length > 0 ? (
    countryCovid.location != "Global" ? (
      <div>
        <div className="covid-container">{rows}</div>
        {stateCovid.data.length > 1 ? (
          <>
            <Button
              onClick={() => {
                setShowComponent(true);
              }}
            >
              For state wise details
            </Button>
            {showComponent ? (
              <StateWiseView states={stateCovid.data}></StateWiseView>
            ) : null}
          </>
        ) : (
          <> </>
        )}
      </div>
    ) : (
      <div className="no-result-found">
        No Result found for {countryCovid.country}
      </div>
    )
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  countryCovid: state.countryCovid,
  stateCovid: state.stateCovid,
  showComponent: state.stateCovid.showComponent,
});
const mapStateToDispatch = (dispatch) => ({
  resetCovidState: () => dispatch({ type: "RESET_COVID_STATE" }),
  setShowComponent: (boolean) => dispatch({ type: "SHOW_COMPONENT" }),
});
export default withRouter(
  connect(mapStateToProps, mapStateToDispatch)(DisplayProperties)
);
