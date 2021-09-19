import React, { useState } from "react";
import Throw from './img/throw.svg'
import './Styles.scss'

const Tabs = (props) => {
  const [selected, setSelected] = useState(props.selected || 0);
  const [nextTab, setNextTab] = useState(1);
  const handleChange = (index) => {
    setSelected(index);
  };
  const handleChangeTitle =(index)=>{
    handleChange(index)
    setNextTab(index+1)
  }
  return (
    <div>
      <ul className="inline">
        {props.children.map((item, index) => {
          let style = (index+1) === nextTab ? "tabTitle" : "whited";
          let styleLi = (index+1) < nextTab ? "whiteText" : "silverText";
          let styleInput = (index) < nextTab ? "tabTitleInput" : "whitedInput";
          return (
            <div
              id={"tabTitleId"}
              style={{ display: "flex" }}
              className={style}
            >
              <input className={styleInput} type="checkbox" />
              <img className={"checkIcon"} style={{
                  width: "14px",
                  heigth: "14px",
                  position: "absolute",
                  left: "9.5px",
                  top: "31px",
                  display:styleInput!=="tabTitleInput"?"none":"block"
                }} src={Throw} alt="" />
              <li className={styleLi} key={index} onClick={()=>handleChangeTitle(index)}>
                {item.props.title}
              </li>
            </div>
          );
        })}
      </ul>
      <div style={{ padding: "0", paddingTop: "20px" }} className="tab">
        {props.children[selected]}
      </div>
    </div>
  );
};

export default Tabs;
