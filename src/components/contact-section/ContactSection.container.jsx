import React from "react";
import "./contact-section.styles.scss";
import ContactForm from "./contact-form/ContactForm.component";
import Background from "./background/Background.component";
import SectionHeading from "../reusable/section-heading/SectionHeading.component";

const ContactSection = () => {
	return (
		<section id="contact" className="section-contact">
			<Background />
			<SectionHeading>Contact</SectionHeading>
			<ContactForm />
		</section>
	);
};

export default ContactSection;
