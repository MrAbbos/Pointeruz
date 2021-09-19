import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import NavbarHead from "./Components/NavbarHead/NavbarHead";
import Registration from "./Components/Registration/Home/Registration";

function App() {
  return (
    <div className="App">
      <div className={"NavbarHeader"} >
        <NavbarHead />
      </div>
      <Switch className={"body"} >
        <Route component={Registration} path="/Register" />
        <Route component={Login} path="/Login" />
      </Switch>
    </div>
  );
}

export default App;
