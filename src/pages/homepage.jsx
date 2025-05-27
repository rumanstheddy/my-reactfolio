import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import TotalExperience from "./totalExperience";
import ProjectsView from "../components/projects/projectsView";

import INFO from "../data/user";
import SEO from "../data/seo";


// TODO: remove unwanted imports
import "./styles/homepage.css";
import "./styles/about.css";
import "./styles/totalExperience.css";
import "./styles/projects.css";
import HomeCard from "../components/homepage/homeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSectionObserver } from "../hooks/useSectionObserver";

const Homepage = () => {
	const [section, setSection] = useState("");
	const [isLightMode, setIsLightMode] = useState(false);

	useSectionObserver(setSection);

	useEffect(() => {
		document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		if (typeof localStorage.getItem("isLightMode") === "undefined") {
			localStorage.setItem("isLightMode", false);
		}
		setIsLightMode(JSON.parse(localStorage.getItem("isLightMode")));
	}, []);

	const handleThemeChange = () => {
		setIsLightMode(!isLightMode);
		localStorage.setItem("isLightMode", !isLightMode);
	};

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
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
					active={section}
					handleClick={(s) => setSection(s)}
					handleThemeChange={() => handleThemeChange()}
					isLightMode={isLightMode}
				/>
				<div className="content-wrapper">
					<div className="homepage-logo-container"></div>

					<div className="homepage-container">
						<section
							id="profile-section"
							className="homepage-first-area"
						>
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
								<div className="homepage-socials">
									<a
										href={INFO.socials.linkedin}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={`mailto:${INFO.main.email}`}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faEnvelope}
											className="homepage-social-icon"
										/>
									</a>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={
												process.env.PUBLIC_URL +
												"/me3.jpg"
											}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</section>

						{/* About Section */}
						{/* <div style={{ height: "48px" }} /> */}
						<section id="about-section" className="about-section">
							<div className="about-header">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<div className="about-subtitle-download-row">
									<div
										className="subtitle about-subtitle"
										style={{ margin: 0 }}
									>
										{INFO.about.description}
									</div>
									<a
										href={INFO.about.download.link}
										target="_blank"
										rel="noreferrer"
										className="about-download-link"
									>
										<div className="about-download-icon-container">
											<FontAwesomeIcon
												icon={faDownload}
												className="about-download-icon"
											/>
											<span className="about-download-text">
												Download
											</span>
										</div>
									</a>
								</div>
								<div id="downloadCard">
									<HomeCard
										link={INFO.about.download.link}
										icon={faDownload}
										title={INFO.about.download.title}
									/>
								</div>
							</div>
							<div className="aboutpage-works">
								<TotalExperience />
							</div>
						</section>

						{/* Projects Section */}
						<section
							id="projects-section"
							className="projects-section"
						>
							<div className="title projects-title">
								{INFO.projects.title}
							</div>
							<div className="subtitle projects-subtitle">
								{INFO.projects.description}
							</div>
							<div className="projects-list">
								<ProjectsView />
							</div>
						</section>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
