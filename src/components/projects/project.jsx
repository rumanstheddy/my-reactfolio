import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

// const htmlStringtoElement = (imgSrc) => {
// 	const template =
// };

const Project = (props) => {
	const { tech, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						{/* {tech.map((logo) => (
							<img
								src={logo}
								className="tech-name"
								alt="Technology name"
							/>
						))} */}
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
						{tech.map((logo) => (
							<img
								src={logo}
								className="tech-name"
								alt="Technology name"
							/>
						))}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
