import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/Home.css"

function Home() {
    return <div className="home">
        <div className="about">
            <h2>Welcome</h2>
            <div className="prompt">
                <p>I am Sherman Fakhimi, and this is my website.</p>
                <button onClick={() => window.open("https://www.linkedin.com/in/sherman-fakhimi-28400b207/","_blank")}>
                    <FaLinkedin />
                </button>
                <button onClick={() => window.open("https://github.com/sherman-f","_blank")}>
                    <FaGithub />
                </button>
            </div> 
        </div>
        <div className="skills">
            <h2>Skills</h2> 
                    <h3>Languages and Frameworks</h3>
                    <div className="listskill">
                        <p>ReactJS, Angular, C++, Java, JavaScript, Python, BootStrap, HTML, CSS, Power Automate, Microsoft Azure, MySQL, NodeJS, TypeScript, NPM</p>
                    </div>
        </div>
        <div className="description">
            <h2>About Me</h2>
            <div className="abt">
                <p>I was born and raised in Fayetteville, Arkansas, and attended the University of Arkansas where I achieved a Bachelor's of Science in Computer Science. My passion for 
                    software engineering started young, as I always thought game development was super interesting. I then learned to code in high school, and throughout college I expanded
                    on my skills. This website is my home for all my projects throughout my college career and beyond, mostly involving web development, as well as functioning as a 
                    sort of diary for a closer insight on my career.
                </p>
            </div> 
        </div>
    </div>;
    
}

export default Home;