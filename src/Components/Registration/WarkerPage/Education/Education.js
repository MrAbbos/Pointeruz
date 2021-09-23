import React, { useEffect } from "react";
import Form from "../../Form/Form";
import { direction, teacherLanguage, teacher } from "./Data";
import Example from "../../SelectInput/Select";
import "./Styles.scss";

import { connect } from "react-redux";
import { getCourse } from "../../../../Api/Store/Slice";

function Education({ course, getCourse }) {
  useEffect(() => {
    getCourse();
  });

  return (
    <div className={"WorkerEducatoion"}>
      <form className={"row"}>
        <div className={"col-md-4"}>
          <Form
            label={"Direction of work"}
            placeholder={"Frontend"}
            data={course}
            type={"select"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Software"}
            placeholder={"Choose Software "}
            type={"text"}
          />
        </div>
        <div className={"col-md-4"}>
          <Form
            label={"Time attendens"}
            placeholder={"Full Time"}
            type={"select"}
            data={[{ name: "Half Time" }, { name: "Full Time" }]}
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
        <div className={"col-md-4"}></div>
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
      </form>
    </div>
  );
}

export default connect(
  ({ Slice: { course, teacher } }) => ({ course, teacher }),
  { getCourse }
)(Education);
