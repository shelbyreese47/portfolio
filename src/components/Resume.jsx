import React from 'react';
import { Link } from 'react-router-dom';
import { Document } from 'react-pdf';


function Resume(props) {
    return (
    <div className="skills">
        <div className="about-skills-flex">
        <div className="about-me-container">
            <h2>About Me:</h2>
            <h4>Hi 👋🏻,
                I'm Shelby.
            </h4>
            <ul>
                <li>I am a Fullstack engineer with a varied and unique background.</li> 
                <li>I love finding creative solutions to challenging problems </li>
                <li>After many different ventures, I finally feel like I have found my niche!</li>
            </ul>
            </div>
            <div className="skills-container">
            <h2>Skills:</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Postgres</li>
                <li>RESTful APIs</li>
                <li>CSS3</li>
                <li>HTML</li>
                <li>AWS</li>
            </ul>
            
            </div>
        </div>
        <div className="resumeGrid">
             <div className="resumeContainer row1col1">
                <img className="resumeImg" src="https://i.imgur.com/BmZA0Iy.png" alt="" />
            <Link className="download row1col2" to="/Shelby Reese Resume 2021.pdf" target="_blank" download><img className= " downloadButton" src={process.env.PUBLIC_URL + "/downloadButton.png"}  alt="" /></Link>
                <h1 className="hoverMessage">Download My Resume</h1>
            </div>
            {/* <div className="resumeContainer row2col1">
                <img className="resumeImg" src="https://i.imgur.com/imZsAlq.png" alt="" />
            </div>
            <Link className="download row2col2" to="/Shelby Reese Resume_Simplistic.pdf" target="_blank" download><img className= " downloadButton button2" src={process.env.PUBLIC_URL + "/downloadButton.png"}  alt="" /> </Link> */}
                  
        </div>
    </div>
    );
}

export default Resume;