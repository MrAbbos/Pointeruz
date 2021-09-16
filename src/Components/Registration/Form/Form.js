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
}) {
  const [phoneNumber, setPhoneNumber] = useState("+998");
  return (
    <div className={"Form"}>
      <label className={"label"}>
        <p>
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
              type="text"
              placeholder={placeholder1}
              type={typeSer}
            />
            <input
              className={"inputNum"}
              type="text"
              placeholder={placeholder2}
              type={typeNum}
            />
          </div>
        ) : type === "select" ? (
          <select className={"Region"} aria-label=".form-select-sm example" id="cars" name="cars">
            <option value="Toshkent">Toshkent</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Jizzax">Jizzax</option>
            <option value="Buxoro">Buxoro</option>
            <option value="Namangan">Namangan</option>
            <option value="Qashqadaryo">Qashqadaryo</option>
            <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
            <option value="Andijon">Andijon</option>
            <option value="Farg'ona">Farg'ona</option>
            <option value="Surxandaryo">Surxandaryo</option>
          </select>
        ) : (
          <input
            className={"input"}
            type="text"
            placeholder={placeholder}
            type={type}
          />
        )}
      </label>
    </div>
  );
}

export default Form;
