import React from "react";
import { Link } from "react-router-dom";
import {
	faBriefcase,
	faHome,
	faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "./toggle";

import "./styles/navBar.css";

const NavBar = ({active, handleThemeChange, isLightMode }) => {
	// const { active } = props;
	// console.log("active: ", active);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<Toggle
						handleThemeChange={handleThemeChange}
						isLightMode={isLightMode}
					/>
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">
									<div className="nav-item-title">Home</div>
									<FontAwesomeIcon
										icon={faHome}
										className={
											active === "about"
												? "nav-item-icon active"
												: "nav-item-icon"
										}
									/>
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
									<FontAwesomeIcon
										icon={faBriefcase}
										className={
											active === "about"
												? "nav-item-icon active"
												: "nav-item-icon"
										}
									/>
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
									<FontAwesomeIcon
										icon={faProjectDiagram}
										className={
											active === "about"
												? "nav-item-icon active"
												: "nav-item-icon"
										}
									/>
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
