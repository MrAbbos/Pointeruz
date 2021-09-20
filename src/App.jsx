import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import NavbarHead from "./Components/NavbarHead/NavbarHead";
import Payments from "./Components/Payments";
import Registration from "./Components/Registration/Home/Registration";
import SideNav from "./Components/SideNav/SideNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handling = () => setIsOpen(!isOpen);

  let isOpenClass = isOpen ? "open" : "close";
  return (
    <div className="App">
      <div className={"NavbarHeader"}>
        <NavbarHead />
      </div>
      <div className="main-body">
        <div className={`side-bar ${isOpenClass}-side-bar`}>
          <SideNav isOpen={isOpen} handling={handling} />
        </div>
        <div className={`right-body ${isOpenClass}-right-body`}>
          <Switch className={"body"}>
            <Route component={Registration} path="/Register" />
            <Route component={Payments} path="/Payments" />
            <Route component={Login} path="/Login" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
