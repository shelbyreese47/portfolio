import React from 'react';

function ContactInfo(props) {
    return (
        <div>
            <form className = "contactForm">
                <label className="row1col1">Name</label>
                <input className="row1col2"></input>
                <label className="row2col1">Email Address</label>
                <input className="row2col2"></input>
                <label className="row3col1">Message</label>
                <input className="row3col2"></input>
                <button className="row4col2">Send</button>
            </form>
        </div>
    );
}

export default ContactInfo;