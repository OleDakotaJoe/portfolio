import React from "react";
import emailjs, { init } from "emailjs-com";

import "./contact-form.styles.scss";

import CustomButton from "../../reusable/custom-button/CustomButton.component";

const ContactForm = () => {
	init("user_pLzck2tyyOey3XKoOv5HF");
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm("contact_service", "contact_form", e.target).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<form className="section-contact__contact-form" onSubmit={sendEmail}>
			<h4 className="section-contact__contact-form--heading">
				Want to get connected?
			</h4>
			<input
				name="from_name"
				id="name"
				type="text"
				placeholder="Name"
				required="true"
				className="section-contact__contact-form--input "
			/>
			<input
				name="reply_to"
				id="email"
				type="email"
				required="true"
				placeholder="Email Address"
				className="section-contact__contact-form--input "
			/>
			<textarea
				name="message"
				placeholder="Message"
				required="true"
				id="message"
				className="section-contact__contact-form--input section-contact__contact-form--message"
			></textarea>
			<CustomButton type="submit">SUBMIT</CustomButton>
		</form>
	);
};

export default ContactForm;
