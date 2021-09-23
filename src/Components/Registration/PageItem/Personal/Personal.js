import React, { useState, useEffect } from "react";
import Form from "../../Form/Form";
import "./Styles.scss";
import avatarIcon from "./img/Group 18.svg";
import plus from "./img/plus.svg";
import data from "./Data";
import { connect } from "react-redux";

function Personal({ course, getCourse, setStudentDate, studentData }) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fake, setFake] = useState("");
  const [gender, setGender] = useState("");


  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tl2radno");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/pointeruzbekistan/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(gender);
  };

  const handleChangeRadioInput = (e) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={"row Personal "}>
      <div className={"col-md-12"}>
        <div className={"row"}>
          <div className={"col-md-8 mt-0 pt-0"}>
            <div className={"row"}>
              <div className={"col-md-6"}>
                <Form
                  label={"Name"}
                  placeholder={"Enter student’s name"}
                  type={"text"}
                  value={studentData.name}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"Surname"}
                  placeholder={"Enter student’s Surname"}
                  type={"text"}
                  value={studentData.sureName}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"Middle name"}
                  placeholder={"Enter student’s Middle name  "}
                  type={"text"}
                  value={studentData}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"Date birth"}
                  placeholder={"Enter student’s birth"}
                  type={"date"}
                  value={studentData}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"Phone number"}
                  placeholder={"Enter student’s name"}
                  type={"tel"}
                  value={studentData}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"Nationality"}
                  placeholder={"Choose student’s location"}
                  type={"text"}
                  value={studentData}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"Seria Passport"}
                  placeholder1={"AA"}
                  placeholder2={"1234567"}
                  type={"seriaPasport"}
                  typeSer={"string"}
                  typeNum={"number"}
                  maxLength1={"2"}
                  maxLength2={"7"}
                  value={studentData}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
              <div className={"col-md-6"}>
                <Form
                  label={"E-mail"}
                  placeholder={"Enter student’s E-mail"}
                  type={"email"}
                  value={studentData}
                  studentData={studentData}
                  setStudentDate={setStudentDate}
                />
              </div>
            </div>
          </div>
          <div className={"col-md-4"}>
            <div className={"uploadImage"}>
              <img
                src={image === "" ? avatarIcon : image}
                style={{
                  width: "240px",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                alt=""
              />
              <button className={"btn uploadImageButton "}>
                <input
                  className={"uploadImageInput"}
                  type="file"
                  name={"file"}
                  onChange={uploadImage}
                />
                {loading ? (
                  <p style={{ padding: "0", margin: "0" }}>Loading...</p>
                ) : (
                  <p style={{ padding: "0", margin: "0" }}>
                    <span style={{ marginRight: "10px" }}>
                      <img src={plus} alt="" />
                    </span>
                    Upload Image
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={"col-12"}>
        <div className={"row"}>
          <div className={"col-md-4"}>
            <Form
              label={"Region"}
              placeholder={"Choose student’s location"}
              data={data}
              type={"select"}
              value={studentData}
              studentData={studentData}
              setStudentDate={setStudentDate}
            />
          </div>
          <div className={"col-md-5"}>
            <Form
              label={"Address"}
              placeholder={"Enter student’s address"}
              type={"text"}
              value={studentData}
              studentData={studentData}
              setStudentDate={setStudentDate}
            />
          </div>
          <div style={{ color: "#fff" }} className={"col-md-3 radioButton"}>
            <p>
              Gender <span style={{ color: "#EB5757" }}>*</span>
            </p>
            <form onSubmit={handleOnSubmit} className={"radioInput"}>
              <div className={"radioInputDiv"}>
                <label for={"myCheckMale"}>
                  Male
                  <div>
                    <input
                      id={"myCheckMale"}
                      name={"radio"}
                      type="radio"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleChangeRadioInput}
                    />
                    <span></span>
                  </div>
                </label>
              </div>
              <div className={"radioInputDiv"}>
                <label for={"myCheckFemale"}>
                  Female
                  <div>
                    <input
                      id={"myCheckFemale"}
                      name={"radio"}
                      type="radio"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleChangeRadioInput}
                    />
                    <span></span>
                  </div>
                </label>
              </div>
            </form>
          </div>
          <div className={"col-md-4"}>
            <Form
              label={"Mom’s phone number"}
              placeholder={"+998 90 000 00 00"}
              type={"tel"}
              value={studentData}
              studentData={studentData}
              setStudentDate={setStudentDate}
            />
          </div>
          <div className={"col-md-4"}>
            <Form
              label={"Dad’s phone number"}
              placeholder={"+998 90 000 00 00"}
              type={"tel"}
              value={studentData}
              studentData={studentData}
              setStudentDate={setStudentDate}
            />
          </div>
        </div>
      </div>
      <div className={"col-md-1 offset-10"}>
        <button type={"submit"} className={"btn btn-success"}>
          Save
        </button>
      </div>
    </form>
  );
}

export default connect(({ Slice: { course } }) => ({ course }))(Personal);
