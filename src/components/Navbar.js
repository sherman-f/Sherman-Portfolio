import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FiMenu } from "react-icons/fi";

function Navbar() {
    const [expandNav, setExpNav] = useState(false);

    const location = useLocation();

    useEffect(() => {setExpNav(false);}, [location]);
    
    return (
        <div className="navbar" id={expandNav ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpNav((prev) => !prev);}}>
                    <FiMenu />
                </button>
            </div>
            <div className="links">
                <Link to="/portfolio"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
            </div>
        </div>


    );
    
}

export default Navbar;