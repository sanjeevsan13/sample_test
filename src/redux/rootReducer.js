import { combineReducers } from "redux";
import CountryCovidReducer from "./reducers/countryCovidReducers";
import stateCovid from "./reducers/stateCovidReducers";
export default combineReducers({
  countryCovid: CountryCovidReducer,
  stateCovid: stateCovid,
});
