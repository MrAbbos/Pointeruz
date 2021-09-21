import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import NavbarHead from "./Components/NavbarHead/NavbarHead";
import Registration from "./Components/Registration/Home/Registration";
import SideNav from "./Components/SideNav/SideNav";
import Screens from "./Screens/Screens";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handling = () => setIsOpen(!isOpen);

  let isOpenClass = isOpen ? "open" : "close";
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
