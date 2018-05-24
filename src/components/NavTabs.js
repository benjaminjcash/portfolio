import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/gather4good" className={window.location.pathname === "/gather4good" ? "nav-link active" : "nav-link"}>Gather4Good</Link>
        </li>
        <li className="nav-item">
            <Link to="/proj2" className={window.location.pathname === "/proj2" ? "nav-link active" : "nav-link"}>proj2</Link>
        </li>
    </ul>
);

export default NavTabs;