import React,{useState} from "react";
import Tabs from "../Tab/Tabs";
import Education from "./Education/Education";
import Personal from "./Personal/Personal";
import "./Styles.scss";
import plus from './img/Vector.svg'

// const howManyDirection = [0]

function WarkerPage() {
  const [howManyDirection,setHowManyDirection] = useState([0])
  const Panel = (props) => {
    return <div>{props.children}</div>;
  };
  const HandleChangePushEducation =()=>{
    setHowManyDirection(howManyDirection.push(0))
  }
  return (
    <div>
      <div className={"TabPage"}>
        <Tabs selected={0}>
          <Panel title="Personal Details">
            <Personal />
          </Panel>
          <Panel title="Education">
            {
              howManyDirection ? howManyDirection.map((item,index)=><div>
              <Education />
              <div style={{display:howManyDirection.length!==(index+1)&&"none"}} className={"bottomPlusEdu"} >
                <span onClick={HandleChangePushEducation} className={"cirlce-button"} ><img src={plus} alt="" /></span>
                <div  className={"line-button"} ></div>
              </div>
            </div>):""
            }
          </Panel>
          <Panel title="Agreement"><h1 className={"Agreement"}>Agreement</h1></Panel>
          <Panel title="Finish"><h1 className={"Finish"}>Finish</h1></Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default WarkerPage;
