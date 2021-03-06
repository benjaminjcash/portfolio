import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./NavTabs.css";
import g4glogo from "../../images/g4g/gather-logo.png";
import lunchlogo from "../../images/fish/lunch-logo.jpg";
import mistylogo from "../../images/misty/misty-logo.jpg";
import g4g_sm_logo from '../../images/g4g/g4g_sm_logo.png';

const NavTabs = () => (
    <ul id="icon-list" className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/misty" className={window.location.pathname === "/misty" ? "nav-link active tab" : "nav-link tab"}><Image id="misty-logo" src={mistylogo} alt="img not found" rounded></Image></Link>
        </li>
        <li className="nav-item">
            <Link to="/gather4good" className={window.location.pathname === "/gather4good" ? "nav-link active tab" : "nav-link tab"}>
              <Image id="gather-logo" src={g4glogo} alt="img not found" rounded></Image>
              <Image id="g4g-sm-logo" src={g4g_sm_logo} alt="image not found"></Image>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/getlunchdenver" className={window.location.pathname === "/getlunchdenver" ? "nav-link active tab" : "nav-link tab"}><Image id="lunch-logo" src={lunchlogo} alt="img not found" rounded></Image></Link>
        </li>
    </ul>
);

export default NavTabs;