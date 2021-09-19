import React from "react";
import Form from "../../Form/Form";
import Example from "../../SelectInput/Select";
import { direction, language, teacher, teacherLanguage } from "./Data";
import "./Styles.scss";

function Education() {
  return (
    <div className={"Educatoion"}>
      <div className={"row"}>
        <div className={"col-md-4"}>
          <Form
            label={"Direction of study"}
            placeholder={"Frontend"}
            data={direction}
            type={"select"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Studying language"}
            placeholder={"Choose Studying language "}
            data={language}
            type={"select"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Teacher"}
            placeholder={"Enter student’s Teacher "}
            data={teacher}
            type={"select"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Graduation"}
            placeholder={"Enter student’s graduation"}
            data={teacher}
            type={"text"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Time of study"}
            placeholder={"Enter student’s study time"}
            data={teacher}
            type={"text"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Result entering exam"}
            placeholder={"Enter student’s result"}
            data={teacher}
            type={"text"}
          />
        </div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"English"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Level language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Intermediate"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Group"}
            placeholder={"Enter student’s group"}
            type={"text"}
          />
        </div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"English"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4"}>
          <label className={"LabelTeach"}>
            Level language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Intermediate"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        {/* <div className={"col-md-4 levelLanguage "} >
                    <label>
                    Level language <span style={{ color: "#EB5757" }}>*</span>
                    <button className >Enter student’s level language</button>
                    </label>
                </div> */}
      </div>
    </div>
  );
}

export default Education;
