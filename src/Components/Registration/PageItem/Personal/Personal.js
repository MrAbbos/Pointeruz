import React, { useState } from "react";
import Form from "../../Form/Form";
import "./Styles.scss";
import avatarIcon from "./img/Group 18.svg";
import plus from "./img/plus.svg";

function Personal() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState("");

console.log(image)
  const uploadImage=async(e)=>{
    const files = e.target.files
    const data = new FormData();
    data.append('file',files[0])
    data.append('upload_preset','darwin')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pointeruzbekistan ',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }


  return (
    <div className={"row Personal "}>
      <div className={"col-md-8"}>
        <div className={"row"}>
          <div className={"col-md-6"}>
            <Form
              label={"Name"}
              placeholder={"Enter student’s name"}
              type={"text"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Surname"}
              placeholder={"Enter student’s Surname"}
              type={"text"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Middle name"}
              placeholder={"Enter student’s Middle name  "}
              type={"text"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Date birth"}
              placeholder={"Enter student’s birth"}
              type={"date"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Phone number"}
              placeholder={"Enter student’s name"}
              type={"tel"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Nationality"}
              placeholder={"Choose student’s location"}
              type={"text"}
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
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"E-mail"}
              placeholder={"Enter student’s E-mail"}
              type={"text"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Region"}
              placeholder={"Choose student’s location"}
              type={"select"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Address"}
              placeholder={"Enter student’s address"}
              type={"text"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Mom’s phone number"}
              placeholder={"+998 90 000 00 00"}
              type={"tel"}
            />
          </div>
          <div className={"col-md-6"}>
            <Form
              label={"Dad’s phone number *"}
              placeholder={"+998 90 000 00 00"}
              type={"tel"}
            />
          </div>
        </div>
      </div>
      <div className={"col-md-4"}>
        <div className={"uploadImage"}>
          <img src={image===""?avatarIcon:image} style={{width:"300px"}} alt="" />
          <button
           className={"btn uploadImageButton "}
           type={'file'}
           >
             <input className={'uploadImageInput'} type="file" name={'file'} onChange={uploadImage} />
            <span>
              <img src={plus} alt="" />
            </span>{" "}
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal;
