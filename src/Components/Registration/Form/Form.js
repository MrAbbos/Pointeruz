import React, { useState } from "react";
import "./Styles.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Form({
  label,
  placeholder,
  type,
  placeholder1,
  placeholder2,
  typeSer,
  typeNum,
  data,
}) {
  const [phoneNumber, setPhoneNumber] = useState("+998");
  return (
    <div className={"Form"}>
      <label className={"label"}>
        <p className={'mb-1'} >
          {label} <span style={{ color: "#EB5757" }}>*</span>
        </p>
        {type === "tel" ? (
          <PhoneInput
            country={"uz"}
            disableDropdown={true}
            placeholder={"+998 90 900 00 00"}
            searchStyle={{ paddingLeft: "20px" }}
            showCountrySelect={false}
            value={phoneNumber}
            onChange={(p) => setPhoneNumber(p)}
          />
        ) : type === "seriaPasport" ? (
          <div className={"seriaPasport"}>
            <input
              className={"inputSer"}
              placeholder={placeholder1}
              type={typeSer}
            />
            <input
              className={"inputNum"}
              placeholder={placeholder2}
              type={typeNum}
            />
          </div>
        ) : type === "select" ? (
          <select
            className={"Region"}
            aria-label=".form-select-sm example"
            id="cars"
            name="cars"
          >
            {data.map((item) => (
              <option value={item.option}>{item.option}</option>
            ))}
          </select>
        ) : (
          <input
            className={"input"}
            placeholder={placeholder}
            type={type}
          />
        )}
      </label>
    </div>
  );
}

export default Form;
