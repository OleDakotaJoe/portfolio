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

	const animateLabel = (event) => {
		const label = event.target.labels[0];
		const classList = label.classList;
		if (event.target.value !== "") {
			if (!classList.contains("section-contact__contact-form--label-active")) {
				classList.add("section-contact__contact-form--label-active");
			}
		} else {
			classList.remove("section-contact__contact-form--label-active");
		}
	};

	return (
		<form className="section-contact__contact-form" onSubmit={sendEmail}>
			<h4 className="section-contact__contact-form--heading">
				Want to get connected?
			</h4>
			<div className="section-contact__contact-form--upper-container">
				<div className="section-contact__contact-form--upper-container-row section-contact__contact-form--upper-container-row-1">
					<div className="section-contact__contact-form--label-box section-contact__contact-form--label-box--name">
						<label
							htmlFor="name"
							className="section-contact__contact-form--label "
						>
							Name
						</label>
					</div>
					<div className="section-contact__contact-form--label-box">
						<label
							htmlFor="email"
							className="section-contact__contact-form--label"
						>
							Email Address
						</label>
					</div>
				</div>
				<div className="section-contact__contact-form--upper-container-row section-contact__contact-form--upper-container-row-2">
					<input
						name="from_name"
						id="name"
						onChange={animateLabel}
						type="text"
						placeholder="Name"
						required={true}
						className="section-contact__contact-form--input section-contact__contact-form--input--name"
					/>
					<input
						name="reply_to"
						id="email"
						onChange={animateLabel}
						type="email"
						required={true}
						placeholder="Email Address"
						className="section-contact__contact-form--input "
					/>
				</div>
			</div>
			<label htmlFor="message" className="section-contact__contact-form--label">
				Message
			</label>
			<textarea
				name="message"
				id="message"
				onChange={animateLabel}
				placeholder="Message"
				className="section-contact__contact-form--input section-contact__contact-form--message"
			></textarea>
			<CustomButton type="submit">SUBMIT</CustomButton>
		</form>
	);
};

export default ContactForm;
