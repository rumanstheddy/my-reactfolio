import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ProjectsView from "../components/projects/projectsView";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const ProjectsPage = () => {
	useEffect(() => {
		document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	// Light mode - dark mode switch logic
	const [isLightMode, setIsLightMode] = useState(false);

	useEffect(() => {
		if (typeof localStorage.getItem("isLightMode") === "undefined") {
			localStorage.setItem("isLightMode", false);
		}

		setIsLightMode(JSON.parse(localStorage.getItem("isLightMode")));
	}, []);

	const handleThemeChange = () => {
		console.log(isLightMode);
		setIsLightMode(!isLightMode);
		localStorage.setItem("isLightMode", !isLightMode);
	};

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div
				className="page-content"
				data-theme={isLightMode ? "light" : ""}
			>
				<NavBar
					active="projects"
					handleThemeChange={() => handleThemeChange()}
					isLightMode={isLightMode}
				/>
				<div className="content-wrapper">
					{/* <div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div> */}
					<div className="projects-container">
						<div className="title projects-title">
							{INFO.projects.title}
						</div>

						<div className="subtitle projects-subtitle">
							{INFO.projects.description}
						</div>

						<div className="projects-list">
							<ProjectsView />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectsPage;
