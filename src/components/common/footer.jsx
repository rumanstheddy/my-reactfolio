import React from "react";
// import { Link } from "react-router-dom";

import "./styles/footer.css";
import "../../pages/styles/about.css";
import INFO from "../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<React.Fragment>
			{/* <div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div> */}

			<div className="about-socials">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="about-social-icon-container">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="about-social-icon"
						/>
					</div>
				</a>
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="about-social-icon-container">
						<FontAwesomeIcon
							icon={faGithub}
							className="about-social-icon"
						/>
					</div>
				</a>
				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
				>
					<div className="about-social-icon-container">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="about-social-icon"
						/>
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Footer;
