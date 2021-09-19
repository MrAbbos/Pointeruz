import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

/* <Link className={"LinkRout"} to={"/news"} >
<li class="nav-item active">
    <a class="nav-link">Home</a>
</li>
</Link>
<Link className={"LinkRout"} to={'/ProgLanguage'} >
<li class="nav-item active">
    <a class="nav-link">Programming Language</a>
</li>
</Link>
<Link className={"LinkRout"} to={'/Register'} >
    <li class="nav-item active">
        <a class="nav-link">Registration</a>
    </li>
</Link>
<Link className={"LinkRout"} to={'/Login'} >
    <li class="nav-item active">
        <a class="nav-link">Login</a>
    </li>
</Link> */
