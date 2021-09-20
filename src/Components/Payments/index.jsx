import React, {useState} from "react"
import "./style.scss"
import SearchIcon from "./images/IconButton11.svg"

function Payments  ()  {
  

  return (
      <div className={"page-content"}>
        <p className="header_theme">Payment</p>
        <form action="" style={{position:"relative", marginBottom:"20px"}}>
          <input type="text" className="search_input" placeholder="Search" />
          <img src={SearchIcon} className="search_icon" alt="" />
        </form>
          <p>Payment Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam neque architecto minima blanditiis omnis quaerat exercitationem libero explicabo voluptatibus corrupti, excepturi delectus? Incidunt nemo sunt alias veritatis modi sit deserunt repellat est hic totam ut cum natus magnam optio illo commodi ipsam architecto autem numquam debitis vel at, qui excepturi aut? Expedita aliquid illum vitae vero rerum repudiandae. Minima, beatae! Tenetur debitis at praesentium nulla tempore laudantium, reprehenderit itaque hic, exercitationem ab natus voluptatum saepe pariatur fugiat fugit eos dolore adipisci rerum enim quam quae suscipit. Earum perferendis, odit sed veritatis, sapiente esse vel expedita reprehenderit nemo eligendi aliquid!</p>
        </div>
  )
}
export default Payments