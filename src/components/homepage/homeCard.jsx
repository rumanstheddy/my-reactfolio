import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./styles/homeCard.css";

const HomeCard = ({ link, icon, title, description, linkText }) => {
	return (
		<React.Fragment>
			<div className="home-card">
				<Link to={link}>
					<div className="home-card-container">
						<div className="home-title-icon-container">
							<div className="home-card-title">{title}</div>
							<div className="home-card-icon">
								<FontAwesomeIcon icon={icon} />
							</div>
						</div>
						<div className="home-card-description">
							{description}
						</div>
						{/* <div className="home-card-link">
							<div className="home-card-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="home-card-link-text">
								{linkText}
							</div>
						</div> */}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default HomeCard;
