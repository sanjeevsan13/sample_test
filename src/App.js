import React from "react";

import "./App.scss";
import Header from "./components/header-components/header-component";
import { Route, Switch } from "react-router-dom";
import HomePageNews from "./components/home-page-components/home-page-component";
import CovidNews from "./components/covid-19-components/covid-19-component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageNews}></Route>
        <Route exact path="/covid-19" component={CovidNews}></Route>
      </Switch>
    </div>
  );
}

export default App;
