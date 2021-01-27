import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CircleButton from "../reusable/circle-button/CircleButton.component";
import "./footer.styles.scss";

const Footer = () => {
	return (
		<footer className="section-footer">
			<div className="section-footer__back-to-top">
				<AnchorLink href="#home">
					<CircleButton
						onClick={null}
						icon="upload.png"
						altText="Back To Top"
						animated
					/>
				</AnchorLink>
			</div>
			<div className="section-footer__social">
				<CircleButton
					onClick={() =>
						(window.location.href = "https://github.com/oledakotajoe")
					}
					icon="github2.png"
					altText="View Github"
					animated
					inverted
				/>
				<CircleButton
					onClick={() =>
						(window.location.href =
							"https://www.linkedin.com/in/steven-sheaves/")
					}
					icon="linkedin.png"
					altText="Visit LinkedIn"
					animated
					inverted
				/>
				<CircleButton
					onClick={() =>
						(window.location.href = "mailto:steve@stevensheaves.me")
					}
					icon="email.png"
					altText="Email Me"
					animated
					inverted
				/>
			</div>
		</footer>
	);
};

export default Footer;
