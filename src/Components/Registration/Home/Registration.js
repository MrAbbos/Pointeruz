import React from "react";
import { Switch,Route } from "react-router-dom";
import NavbarHead from "../../NavbarHead/NavbarHead";
import StudentPage from "../PageItem/StudentPage";
import TeacherPage from "../TeacherPage/TeacherPage";
import WarkerPage from "../WarkerPage/WarkerPage";


import "./Styles.scss";

function Registration() {
  
  return (
    <div className={"Registration"}>
      <div className={"container"}>
        <div className={"body"}>
          <div className={"title"}>
            <p>Registration</p>
          </div>
          <div>
            <Switch>
            <Route component={StudentPage} path="/Register/students" />
            <Route component={TeacherPage} path="/Register/teachers" />
            <Route component={WarkerPage} path="/Register/warker" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
