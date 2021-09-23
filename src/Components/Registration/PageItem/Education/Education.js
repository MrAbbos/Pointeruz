import React,{useEffect} from "react";
import Form from "../../Form/Form";
import Example from "../../SelectInput/Select";
import { direction, language, teacher, teacherLanguage } from "./Data";
import "./Styles.scss";
import { connect } from "react-redux";
import { getCourse  } from "../../../../Api/Store/Slice";

function Education({course,getCourse}) {
  useEffect(() => {
    getCourse();
  })
  return (
    <div className={"Educatoion"}>
      <div className={"row"}>
        <div className={"col-md-4"}>
          <Form
            label={"Direction of study"}
            placeholder={"Frontend"}
            data={course}
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
      </div>
    </div>
  );
}

export default connect(({ Slice: { course,teacher } }) => ({ course,teacher }), { getCourse })(
  Education
);
