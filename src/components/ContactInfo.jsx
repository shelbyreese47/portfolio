import React, {useState} from 'react';


function ContactInfo(props) {
    const initialState={
        name: "",
        email: "",
        message:""
    }
    const templateId = 'template_kto6i66';
    const serviceID = 'default_service';
    const [formstate, setFormstate] = useState(initialState);

    function  handleSubmit (event) {
	sendFeedback(templateId, {message_html: formstate.message, from_name: formstate.name, reply_to: formstate.email})
  }

  function sendFeedback (serviceID, templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }



 function handleChange(event) {
    setFormstate([{...formstate, [event.target.id]: event.target.value}])
  }




    return (
        <div className="contactMe">
                <h2>Contact Me</h2>
            <form className = "contactForm">
                <label className="row1col1">Name</label>
                <input onChange={handleChange} className="row1col2"></input>
                <label className="row2col1">Email Address</label>
                <input onChange={handleChange} className="row2col2"></input>
                <label className="row3col1">Message</label>
                <input onChange={handleChange} className="row3col2"></input>
                <button className="row4col2" onClick={handleSubmit}>Send</button>
            </form>
        </div>
    );
}

export default ContactInfo;