import React from "react";
import "./styles.css"
import {Link} from "react-router-dom";
import Button from "../Button";
import Image from "../../assets/logo2.png";
// import API from "../utils/API";

function Navbar(){

    // function logout() {
    //     API.logout()
    //     .then(() => console.log("LOG OUT"))
    //     .catch(err => console.log(err));
    // }

    return (
        <div className="container-fluid navbar">
            {/* <div className="logo-cont">
                <img className="header-image" src={Image}></img>
            </div> */}
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <svg width="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="#81b6ff" fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                    </span>

                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <Button btnName="NEW TRIP"> */}
                        <Link
                            to="/newtrip"
                            className = { window.location.pathname === "/newtrip"
                            ? "nav-link" : "nav-link" 
                            }>
                                <Button btnName="NEW TRIP">
                                        
                                </Button>
                        </Link>
                        {/* </Button> */}
                    </li>
                    <li className="nav-item">
                        
                        <Link 
                            to="/agenda"
                            className = { window.location.pathname === "/agenda"
                            ? "nav-link" : "nav-link" 
                            }>
                                <Button btnName="AGENDA">

                                </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className = { window.location.pathname === "/login"
                            ? "nav-link" : "nav-link" 
                            }>
                                <Button btnName="LOG OUT">
                                    {/* {onclick=logout} */}
                                </Button>
                        </Link>
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;