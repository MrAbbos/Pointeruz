import React, { useState } from "react";
import "./Styles.scss";
import PointerLogo from "./img/PointerLogo.svg";
import eyeSlash from "./img/Group (1).svg";
import eyeShow from "./img/Group.svg";

function Login() {
  const [eye, setEye] = useState(false);
  return (
    <div className={"LoginScreen"}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className={"LoginCard"} >
        <div className={"pointerLogo"}>
          <img src={PointerLogo} alt="" />{" "}
        </div>
        <div className={"loginForm"}>
          <div className={"text"}>
            <p>Login</p>
          </div>
          <div className={"Form"}>
            <label className={"label-1"}>
              <p>Name</p>
              <input type="text" placeholder={"Enter name"} />
            </label>
            <label className={"label-2"}>
              <p>Password</p>
              <input
                type={eye ? "text" : "password"}
                placeholder={"Enter passrowd"}
              />
              <div onClick={() => setEye((p) => !p)} className={"showPassword"}>
                {eye ? (
                  <img className={"eyeSlashIcon"} src={eyeSlash} alt="" />
                ) : (
                  <img className={"eyeSlashIcon"} src={eyeShow} alt="" />
                )}
              </div>
            </label>
            <button className={"EnterButton"} >Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
