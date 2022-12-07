import React, {useState, useRef} from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';

function Contact() {


	const form = useRef()

  const sendContact = (e)=> {
    e.preventDefault()
	emailjs.sendForm("service_1gj8vsk", "template_blnhsil",e.target, "vugVxJiSVi5MT2HBU")
	.then((result) => {
		console.log(result.text);
	}, (error) => {
		console.log(error.text);
	});


	e.target.reset()
    
    
  }

	return (
		<div className="contact" id="contact-tab">
			<div className="title">
				<h1>Contact</h1>
			</div>
			<div className="contact-container">
				<p>
					Have a question or want to work together? Leave your details and I'll
					get back to you as soon as possible.
				</p>
				<form ref={form} className="contact-form" onSubmit={sendContact}>
						<input name="fullName" type="text" className="name" id={"name"} placeholder="Name" />
						<input  name="email" type="email" className="email" id = {"email" }placeholder="Email" />
						<textarea
						name="message"
							id="message"
							cols="50"
							rows="5"
							className="message"
              placeholder="Message"
						></textarea>
						<button type="submit" className="submit-button">SUBMIT</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
