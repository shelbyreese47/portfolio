import React from 'react';
import { Link } from 'react-router-dom';
import { Document } from 'react-pdf';


function Resume(props) {
    return (
        <div className="resumeGrid">
             <div className="resumeContainer row1col1">
                <img className="resumeImg" src="https://i.imgur.com/BmZA0Iy.png" alt="" />
            </div>
            <Link className="download row1col2" to="/Shelby Reese Resume 2021.pdf" target="_blank" download>Download</Link>
            <div className="resumeContainer row2col1">
                <img className="resumeImg" src="https://i.imgur.com/imZsAlq.png" alt="" />
            </div>
            <Link className="download row2col2" to="/Shelby Reese Resume_Simplistic.pdf" target="_blank" download>Download</Link>
                  
        </div>
    );
}

export default Resume;