import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import {
	faBriefcase,
	faHome,
	faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								// TODO: Make the website responsive for tablet screens
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">
									<div className="nav-item-title">Home</div>
									<div className="nav-item-icon">
										<FontAwesomeIcon
											icon={faHome}
											className="homepage-social-icon"
										/>
									</div>
								</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">
									<div className="nav-item-title">About</div>
									<div className="nav-item-icon">
										<FontAwesomeIcon
											icon={faBriefcase}
											className="homepage-social-icon"
										/>
									</div>
								</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">
									<div className="nav-item-title">
										Projects
									</div>
									<div className="nav-item-icon">
										<FontAwesomeIcon
											icon={faProjectDiagram}
											className="homepage-social-icon"
										/>
									</div>
								</Link>
							</li>
							{/* <li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li> */}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
