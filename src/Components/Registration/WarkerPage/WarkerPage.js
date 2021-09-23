import React, { useState } from "react";
import Tabs from "../Tab/Tabs";
import Education from "./Education/Education";
import Personal from "./Personal/Personal";
import "./Styles.scss";
import plus from "./img/Vector.svg";

function WarkerPage() {
  const [nextTab, setNextTab] = useState(1);
  const [selectedList, setSelectedList] = useState(0);
  const [howManyDirection, setHowManyDirection] = useState([0]);

  const Panel = (props) => {
    return <div>{props.children}</div>;
  };
  const HandleChangePushEducation = () => {
    setHowManyDirection([...howManyDirection, 0]);
  };
  const prevButton = () => {
    setNextTab((p) => p - 1);
    setSelectedList((p) => p - 1);
  };
  const nextButton = () => {
    setNextTab((p) => p + 1);
    setSelectedList((p) => p + 1);
  };
  return (
    <div className={"Workers"}>
      <div className={"WarkerPage"}>
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
            <div className={"Education"} >
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
                      >
                        <span
                          onClick={HandleChangePushEducation}
                          className={"cirlce-button"}
                        >
                          <img src={plus} alt="" />
                        </span>
                        <div className={"line-button"}></div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
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

export default WarkerPage;
