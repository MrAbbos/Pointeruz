import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Styles.css'

function Navbar() {
    return (
        <div>
            <nav style={{justifyContent:"space-between",paddingLeft:'20px'}} class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between w-100">
                <Link className={"LinkRout"} to={'/'} >
                <a class="navbar-brand">Navbar</a>
                </Link>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <Link className={"LinkRout"} to={"/news"} >
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
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
