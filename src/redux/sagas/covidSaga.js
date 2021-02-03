import { takeLatest, all, put, call } from "redux-saga/effects";

function* fetchApiStartAsync({ payload }) {
  try {
    yield console.log("xxxxxxxxx <<<<", payload);
    const result = yield fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${payload}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "3b8fc9963dmshb9acc410c7cf7edp1440ddjsnee5e07213957",
        },
      }
    );
    const finalResult = yield result.json();
    yield put({
      type: "FETCH_COUNTRY_COVID_SUCCESS",
      payload: { data: finalResult.data, country: payload },
    });
  } catch (error) {
    put({ type: "FETCH_COUNTRY_COVID_FAILURE" });
    console.log(error.message);
  }
  //yield console.log("API STARTED", finalResult);
}

function* fetchStateApiStartAsync({ payload }) {
  try {
    const result = yield fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${payload}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "3b8fc9963dmshb9acc410c7cf7edp1440ddjsnee5e07213957",
        },
      }
    );
    const finalResult = yield result.json();
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", finalResult);
    yield put({
      type: "FETCH_STATE_COVID_SUCCESS",
      payload: finalResult.data.covid19Stats,
    });
  } catch (error) {
    put({ type: "FETCH_STATE_COVID_FAILURE" });
    console.log(error.message);
  }
  //yield console.log("API STARTED", finalResult);
}

function* fetchApiStart() {
  yield takeLatest("FETCH_COUNTRY_COVID_API_START", fetchApiStartAsync);
}

function* fetchStateApiStart() {
  yield takeLatest("FETCH_STATE_COVID_API_START", fetchStateApiStartAsync);
}

function* covidSagas() {
  yield all([call(fetchApiStart), call(fetchStateApiStart)]);
}
export default covidSagas;
