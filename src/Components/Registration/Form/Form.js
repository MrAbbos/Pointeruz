import React, { useState } from "react";
import "./Styles.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import "date-fns";
// import DateFnUtils from "@date-io/date-fns";
// import Grid from "@material-ui/core/Grid";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
//   DatePicker,
// } from "@material-ui/pickers";

function Form({
  label,
  placeholder,
  type,
  placeholder1,
  placeholder2,
  typeSer,
  typeNum,
  data,
  maxLength1,
  maxLength2,
  value,
  setStudentDate,
  studentData,
  setValue
}) {
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-09-11T12:00:00")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={"Form"}>
      <label className={"label"}>
        <p className={"mb-1"}>
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
              maxlength={maxLength1}
            />
            <input
              className={"inputNum"}
              placeholder={placeholder2}
              type={"text"}
              maxLength={maxLength2}
            />
          </div>
        ) : type === "select" ? (
          <select
            className={"Region"}
            aria-label=".form-select-sm example"
            id="cars"
            name="cars"
          >
            {data &&
              data.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
          </select>
        ) : (
          <input 
          // value={value}
          //  onChange={e =>
          //   setStudentDate({
          //     ...studentData,setValue: e.target.value,
          //   })}
           className={"input"} placeholder={placeholder} type={type} />
        )}
      </label>
    </div>
  );
}

export default Form;
