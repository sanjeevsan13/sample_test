import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import covidSagas from "./sagas/covidSaga";

import rootReducer from "./rootReducer";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(covidSagas);
