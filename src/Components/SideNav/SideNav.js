import "./SideNav.scss";
import hamburger from "./img/sideNavButton.svg";
import regLogo from "./img/regLogo.svg";
import listOfStudents from "./img/listOfStudents.svg";
import listOfTeachers from "./img/listOfTeachers.svg";
import listOfWorkers from "./img/listOfWorkers.svg";
import payment from "./img/payment.svg";
import group from "./img/group.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, handling }) => {
  const [isActive, setIsActive] = useState("");
  let showOrNot = isOpen ? "" : "hide";
  return (
    <div className="side__nav">
      <div className="side__button">
        <button onClick={() => handling()}>
          <img src={hamburger} />
        </button>
      </div>
      <div
        className={`nav__element nav__reg`}
        onClick={() => setIsActive("nav__reg")}
      >
        <div
          id={isActive === "nav__reg" ? "active" : ""}
          className="nav__el__content"
        >
          <img src={regLogo} />
          <span className={showOrNot}>Registration</span>
        </div>
        <div className="drop-down">
          <ul className={showOrNot}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Register/students"
            >
              <li>Student</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Register/teachers"
            >
              <li>Teacher</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Register/worker"
            >
              <li>Worker</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="nav__element" onClick={() => setIsActive("nav__student")}>
        <div
          id={isActive === "nav__student" ? "active" : ""}
          className="nav__el__content"
        >
          <img src={listOfStudents} />
          <span className={showOrNot}>List of students</span>
        </div>
      </div>
      <div className="nav__element">
        <div className="nav__el__content">
          <img src={listOfTeachers} />
          <span className={showOrNot}>List of teachers</span>
        </div>
      </div>
      <div className="nav__element">
        <div className="nav__el__content">
          <img src={listOfWorkers} />
          <span className={showOrNot}>List of workes</span>
        </div>
      </div>
      <div className="nav__element">
        <div className="nav__el__content">
          <img src={payment} />
          <span className={showOrNot}>Payment</span>
        </div>
      </div>
      <div className="nav__element">
        <div className="nav__el__content">
          <img src={group} />
          <span className={showOrNot}>Group</span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
