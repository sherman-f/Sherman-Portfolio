import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <button onClick={() => window.open("https://www.linkedin.com/in/sherman-fakhimi-28400b207/","_blank")}>
                    <FaLinkedin />
                </button>
                <button onClick={() => window.open("https://github.com/sherman-f","_blank")}>
                    <FaGithub />
                </button>
            </div>
            <p> &copy; 2024 shermanf.com</p>
        </div>
    );
}

export default Footer;