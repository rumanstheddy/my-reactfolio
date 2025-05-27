import React from "react";
import {
	faBriefcase,
	faProjectDiagram,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "./toggle";

import "./styles/navBar.css";

const NavBar = ({ active, handleThemeChange, isLightMode, handleClick }) => {
	console.log("active: ", active);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "profile"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a
									href="#profile-section"
									onClick={() =>
										handleClick && handleClick("profile")
									}
								>
									<div className="nav-item-title">
										Profile
									</div>
									<FontAwesomeIcon
										icon={faUser}
										className={
											active === "profile"
												? "nav-item-icon active"
												: "nav-item-icon"
										}
									/>
								</a>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a
									href="#about-section"
									onClick={() =>
										handleClick && handleClick("about")
									}
								>
									<div className="nav-item-title">
										About
									</div>
									<FontAwesomeIcon
										icon={faBriefcase}
										className={
											active === "about"
												? "nav-item-icon active"
												: "nav-item-icon"
										}
									/>
								</a>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a
									href="#projects-section"
									onClick={() =>
										handleClick && handleClick("projects")
									}
								>
									<div className="nav-item-title">
										Projects
									</div>
									<FontAwesomeIcon
										icon={faProjectDiagram}
										className={
											active === "projects"
												? "nav-item-icon active"
												: "nav-item-icon"
										}
									/>
								</a>
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
					<Toggle
						handleThemeChange={handleThemeChange}
						isLightMode={isLightMode}
					/>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
