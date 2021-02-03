import { getCovidResults } from "./getCovidResults";
const initialState = {};

const CountryCovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRY_COVID_SUCCESS":
      return getCovidResults(state, action.payload);

    case "FETCH_COUNTRY_COVID_FAILURE":
      return {
        ...state,
        error: "",
      };
    case "RESET_COVID_STATE":
      return {};

    default:
      return state;
  }
};

export default CountryCovidReducer;
