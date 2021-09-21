import React, { Component } from "react";
import makeAnimated from "react-select/animated";
import MySelect from "./MySelect.js";
import "./Style.scss";
import { components } from "react-select";
import Throw from "./img/throw.svg";

const Option = (props) => {
  return (
    <div className={"SelectInput"}>
      <components.Option className={"SelectLabel"} {...props}>
        <label>{props.label}</label>
        <div className={"inputAndIcon"} >
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
            className={props.isSelected ? "tabTitleInput" : "coloredInput"}
          />
          <img
            className={"checkIcon"}
            style={{
              width: "14px",
              heigth: "14px",
              display: props.isSelected ? "block" : "none",
            }}
            src={Throw}
            alt=""
          />
        </div>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => (
  <components.MultiValue className={"val"} {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null,
    };
  }
  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    });
  };

  render() {
    return (
      <MySelect
        options={this.props.data}
        placeholder={this.props.placeholder}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option, MultiValue, animatedComponents }}
        onChange={this.handleChange}
        allowSelectAll={true}
        value={this.state.optionSelected}
      />
    );
  }
}
