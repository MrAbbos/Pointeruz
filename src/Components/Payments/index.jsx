import React, {useState} from "react"
import "./style.scss"
import SearchIcon from "./images/IconButton11.svg"

function Payments  ()  {
  

  return (
      <div className={"page-content"}>
        <p className="header_theme">Payment</p>
        <div className="d-flex justify-content-between">
          <form action="" style={{position:"relative", marginBottom:"20px"}}>
            <input type="text" className="search_input" placeholder="Search" />
            <img src={SearchIcon} className="search_icon" alt="" />
          </form>
          <button className="add_btn">Add</button>
        </div>
        <div className="scroll-top">
          <div className="scroll_table">
            <table className="w-100">
              <thead>
                <tr className="table_header">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table_body">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr className="table_body">
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
export default Payments