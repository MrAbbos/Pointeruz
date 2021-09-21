import React, {useState} from "react"
import "./style.scss"
import SearchIcon from "./images/IconButton11.svg"
import { FaSortAmountDownAlt,FaSortAmountDown } from 'react-icons/fa';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { NavLink } from "react-router-dom";

function Payments  ()  {
  

  return (
      <div className={"page-content"}>
        <p className="header_theme">Payment</p>
        <div className="d-flex justify-content-between">
          <form action="" style={{position:"relative", marginBottom:"20px"}}>
            <input type="text" className="search_input" placeholder="Search" />
            <img src={SearchIcon} className="search_icon" alt="" />
          </form>
          <NavLink to="/Payments/add">
            <button className="add_btn m_btn_r">Add</button>
          </NavLink>
        </div>
        <div className="scroll-top">
          <div className="scroll_table">
            <table className="w-100 me-5">
              <thead>
                <tr className="table_header">
                  <th style={{paddingLeft:"24px", width:"3%"}}>№</th>
                  <th style={{width:'10%'}}>ID <FaSortAmountDownAlt className="table-header-icon"/></th>
                  <th>Full name <FaSortAmountDown className="table-header-icon"/> </th>
                  <th>
                    <span style={{height:'40px'}}>Agreement <br/>Number</span>
                    <RiArrowUpDownFill tyle={{height:'30px'}} className="table-header-icon"/>
                  </th>
                  <th> Agreement <br/>Amount </th>
                  <th>Paid <br/>Amount</th>
                  <th>Unpaid <br/>Amount</th>
                  <th style={{paddingRight:"30px"}}>Group</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>

                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>

                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
                <tr className="table_body">
                  <td style={{paddingLeft:"24px"}}>1</td>
                  <td>AA1234567</td>
                  <td>Asadbek  Bektayev <br/>Abduhamid o’g’li</td>
                  <td> № 10/2214/555.10.41 <br/>№ 10/2214/555.10.42</td>
                  <td>3 000 000 sum <br/>5 000 000 sum</td>
                  <td style={{color:"#02F0B1"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{color:"#FFE159"}}>1 000 000 sum <br/>2 500 000 sum</td>
                  <td style={{paddingRight:"30px"}}>G-20 <br/>G-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
export default Payments