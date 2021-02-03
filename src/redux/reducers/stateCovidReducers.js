const initiaState = {
  error: "",
  data: [],
  showComponent: false,
};

const stateCovid = (state = initiaState, action) => {
  switch (action.type) {
    case "FETCH_STATE_COVID_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case "FETCH_STATE_COVID_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "RESET_COVID_STATE":
      return {
        data: [],
        showComponent: false,
      };
    case "SHOW_COMPONENT":
      return {
        ...state,
        showComponent: true,
      };
    default:
      return state;
  }
};

export default stateCovid;
