import React, { useState } from "react";
import Tabs from "../Tab/Tabs";
import Education from "../PageItem/Education/Education";
import Personal from "../PageItem/Personal/Personal";
import "./Styles.scss";
import plus from "./img/Vector.svg";

let howManyDirection = [0];
function StudentPage() {
  const [nextTab, setNextTab] = useState(1);
  // const [howManyDirection, setHowManyDirection] = useState([0]);
  const [selectedList, setSelectedList] = useState(0);
  const Panel = (props) => {
    return <div>{props.children}</div>;
  };
  const HandleChangePushEducation = () => {
    howManyDirection = howManyDirection.push(0);
  };

  const prevButton = () => {
    setNextTab((p) => p - 1);
    setSelectedList((p) => p - 1);
  };
  const nextButton = () => {
    setNextTab((p) => p + 1);
    setSelectedList((p) => p + 1);
  };
  console.log(howManyDirection);
  return (
    <div className={"Students"}>
      <div className={"TabPage"}>
        <Tabs
          selectedList={selectedList}
          setSelectedList={setSelectedList}
          setNextTab={setNextTab}
          nextTab={nextTab}
          selected={0}
        >
          <Panel title="Personal Details">
            <Personal />
          </Panel>
          <Panel title="Education">
            {howManyDirection
              ? howManyDirection.map((item, index) => (
                  <div>
                    <Education />
                    <div
                      style={{
                        display:
                          howManyDirection.length !== index + 1 && "none",
                      }}
                      className={"bottomPlusEdu"}
                      onClick={HandleChangePushEducation}
                    >
                      <span className={"cirlce-button"}>
                        <img src={plus} alt="" />
                      </span>
                      <div className={"line-button"}></div>
                    </div>
                  </div>
                ))
              : ""}
          </Panel>
          <Panel title="Agreement">
            <h1 className={"Agreement"}>Agreement</h1>
          </Panel>
          <Panel title="Finish">
            <h1 className={"Finish"}>Finish</h1>
          </Panel>
        </Tabs>
      </div>
      <div className={"nextPrevButton"}>
        <button
          style={{ display: nextTab === 1 ? "none" : "block" }}
          onClick={prevButton}
          className={"prev"}
        >
          Prev
        </button>
        <div style={{ display: nextTab === 1 ? "block" : "none" }}></div>
        <button
          style={{ display: nextTab === 4 ? "none" : "block" }}
          onClick={nextButton}
          className={"next"}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StudentPage;
