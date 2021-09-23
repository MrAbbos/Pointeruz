import React,{useEffect} from "react";
import Form from "../../Form/Form";
import { direction, teacherLanguage, teacher } from "./Data";
import Example from "../../SelectInput/Select";
import "./Styles.scss";

import { connect } from "react-redux";
import { getCourse  } from "../../../../Api/Store/Slice";

function Education({course,getCourse}) {
  useEffect(() => {
    getCourse();
  })
  return (
    <div className={"TeacherEducatoion"}>
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
          <label className={"LabelTeach"}>
            Teaching language <span style={{ color: "#EB5757" }}>*</span>{" "}
          </label>
          <Example
            label={"Teacheng language"}
            data={teacherLanguage}
            placeholder={"English"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Time of class"}
            placeholder={"14:00-16:00"}
            type={"datetime-local"}
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
            label={"Time duration"}
            placeholder={"17.09.2021 - 17.12.2021"}
            type={"datetime-local"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Experience"}
            placeholder={"2 years"}
            data={teacher}
            type={"text"}
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
        <div className={"col-md-4"} >
        <Form
            label={"Agreement duration"}
            placeholder={"2 years"}
            data={teacher}
            type={"text"}
          />
        </div>
      </div>
    </div>
  );
}

export default connect(({ Slice: { course,teacher } }) => ({ course,teacher }), { getCourse })(
  Education
);
