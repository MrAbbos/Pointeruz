import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import Screens from "./Screens/Screens";

function App() {
  return (
    <div className="App">
      <Switch className={"body"}>
        <Route component={Login} path="/Login" />
        <Route component={Screens} path="/" />
      </Switch>
    </div>
  );
}

export default App;
