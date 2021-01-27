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
		</footer>
	);
};

export default Footer;
