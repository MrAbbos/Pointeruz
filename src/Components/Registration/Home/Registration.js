import React from "react";
import Logo from "../img/Pointer.svg";
import User from "../img/user.svg";
import Personal from "../PageItem/Personal/Personal";
import Tabs from "../Tab/Tabs";
import "./Styles.scss";

function Registration() {
  const Panel = (props) => {
    return <div  >{props.children}</div>;
  };
  return (
    <div className={"Registration"}>
      <div className={"container"}>
        <div className={"header"}>
          <div className={"logo"}>
            <img src={Logo} alt="" />
          </div>
          <div className={"user"}>
            <div className={"avatar"}>
              <img src={User} alt="" />
            </div>
            <div className={"userFullName"}>
              <p>
                Asadbek <br /> Bektayev
              </p>
            </div>
          </div>
        </div>
        <div className={"body"}>
          <div className={"title"}>
            <p>Registration</p>
          </div>
          <div className={"TabPage"}>
            <Tabs selected={0}>
              <Panel title="Personal Details"><Personal/></Panel>
              <Panel title="Education">This is the second panel</Panel>
              <Panel title="Agreement">This is the third panel</Panel>
              <Panel title="Finish">This is the third panel</Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
