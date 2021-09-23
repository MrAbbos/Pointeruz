import React from "react";
import Logo from "./img/PointerLogo.svg";
import User from "./img/user.svg";
import "./Styles.scss";
import searchButton from "./img/SearchB.svg";
import smsButton from "./img/SmsB.svg";
import notificationButton from "./img/notification.svg";
import { Badge } from "@material-ui/core";
import { NotificationsNoneOutlined } from "@material-ui/icons";

function NavbarHead() {
  return (
    <div className={"NavbarHead"}>
      <div className={"logo"}>
        <img src={Logo} alt="" />
      </div>
      <div className={"user"}>
        <div className={"searchButton"}>
          <img src={searchButton} alt="" />
        </div>
        <div className={"smsButtom"}>
          <img src={smsButton} alt="" />
        </div>
        <Badge
          badgeContent={"8"}
          color="secondary"
          style={{ marginTop: "10px" }}
          className={"notification"}
        >
          <NotificationsNoneOutlined
            style={{ fill: "#fff", fontSize: "30px" }}
          />
        </Badge>
        <div className={"d-flex"} >
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
    </div>
  );
}

export default NavbarHead;
