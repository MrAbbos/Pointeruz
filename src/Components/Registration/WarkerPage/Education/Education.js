import React from "react";
import Form from "../../Form/Form";
import { direction, teacherLanguage, teacher } from "./Data";
import Example from "../../SelectInput/Select";
import "./Styles.scss";

function Education() {
  return (
    <div className={"Educatoion"}>
      <div className={"row"}>
        <div className={"col-md-4"}>
          <Form
            label={"Direction of work"}
            placeholder={"Frontend"}
            data={direction}
            type={"select"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form label={'Software'} placeholder={"Choose Software "} type={"text"} />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Time attendens"}
            placeholder={"Full Time"}
            type={"select"}
            data={[{option:"Half Time"},{option:"Full Time"}]}
          />
        </div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Teaching language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Language"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4 "}>
          <label className={"LabelTeach"}>
            Teaching language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Level language"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4"} ></div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Teaching language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Language"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Teaching language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Level language"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        {/* <div className={"col-md-4 levelLanguage "}>
          <label>
            Level language <span style={{ color: "#EB5757" }}>*</span>
            <button className>Enter student’s level language</button>
          </label>
        </div> */}
      </div>
    </div>
  );
}

export default Education;
