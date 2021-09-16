import React, { useState } from "react";
const Tabs = (props) => {
  const [selected, setSelected] = useState(props.selected || 0);
  const handleChange = (index) => {
    setSelected(index);
  };
  return (
    <div>
      <ul className="inline">
        {props.children.map((item, index) => {
          let style = index == selected ? "tabTitle" : "whited";
          let styleInput = index == selected ? "tabTitleInput" : "whitedInput";
          return (
            <div id={"tabTitleId"} style={{display:'flex'}} className={style} >
              <input className={styleInput} type="checkbox"/>
              <p></p>
              <li
                key={index}
                onClick={() => handleChange(index)}
              >
                {item.props.title}
              </li>
            </div>
          );
        })}
      </ul>
      <div style={{padding:'0',paddingTop:'20px'}} className="tab">{props.children[selected]}</div>
    </div>
  );
};

export default Tabs;
