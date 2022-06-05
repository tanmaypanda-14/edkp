import React from "react";
import PropTypes from 'prop-types';
import logo from "../assets/mitLogo.png"
import userPic from "../assets/user.png"
import '../styles/NavBar.css'

export default function Navbar(props){
    return(
        <nav>
            <div className="blue-box">
                    <div className="white-box">
                        <img className="logo" src={logo} alt="MIT Logo" />
                    </div>
                    <p className="logo-txt"><strong>MIT World Peace University</strong> | Pune</p>
                    <div className="userPic">
                    <img id="userimage" src={userPic} alt="userPic" />
                    <p>{props.username}</p>
                    </div>
                    
            </div>
        </nav>
    )
}
