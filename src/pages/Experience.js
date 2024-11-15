import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";


function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#004347">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2020 - 2024"
                iconStyle={{background: "#9D2235", color: "#fff"}}
                icon={<MdSchool />}>
                    <h3 className="vertical-timeline-element-title"> 
                        University of Arkansas, Fayetteville, Arkansas
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree in Computer Science with Minors in Mathematics & Data Analytics
                    </h4>
                    <p>I maintained a consistent 3.3 GPA whilst in college, with a 3.3 major GPA as well. 
                        However, my last three semesters with my toughest Computer Science electives were the semesters I had my highest GPAs, averaging a 3.5.
                        College is where most of my experience and projects come from, with personal projects being made after graduation.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work" 
                date="2021 - Present"
                iconStyle={{background: "#0071ce", color: "#fff"}}
                icon={<MdShoppingCart />}>
                    <h3 className="vertical-timeline-element-title"> 
                        Personal Shopper, Walmart
                    </h3>
                    <p>My first job at the Neighborhood Market closest to my house growing up. I still work here today as a means to keep myself occupied and to 
                        get by during my job search. I quickly learned the ins and outs of the store and maintain an above average pick rate of 150%.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work" 
                date="2022 - 2024"
                iconStyle={{background: "#9D2235", color: "#fff"}}
                icon={<BiSolidPencil />}>
                    <h3 className="vertical-timeline-element-title"> 
                        Peer Mentor, University of Arkansas
                    </h3>
                    <p>In retrospect at times I think this job was crucial for shaping me as a person. Being a mentor and role model for incoming freshman engineers 
                        greatly improved my personal confidence along with my leadership qualities. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work" 
                date="2023 - 2024"
                iconStyle={{background: "#9D2235", color: "#fff"}}
                icon={<BiSolidPencil />}>
                    <h3 className="vertical-timeline-element-title"> 
                        Course Assistant, University of Arkansas
                    </h3>
                    <p>Building off my role as a Peer Mentor, being a Course Assistant for the Intro to Engineering course at the University solidified my abilities 
                        as a leader. Not only here was I in control, but I was also yet again someone many freshman engineers came to for advice.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;