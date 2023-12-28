import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TotalExperience from "./totalExperience";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import HomeCard from "../components/homepage/homeCard";

const About = () => {
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

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
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
					active="about"
					handleThemeChange={() => handleThemeChange()}
					isLightMode={isLightMode}
				/>
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-header">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle-dLink-container">
									<div className="subtitle about-subtitle">
										{INFO.about.description}
									</div>
									<React.Fragment>
										<a
											href={INFO.about.download.link}
											target="_blank"
											rel="noreferrer"
										>
											<div className="about-download-icon-container">
												<FontAwesomeIcon
													icon={faDownload}
													className="about-download-icon"
												/>
											</div>
										</a>

										<div id="downloadCard">
											<HomeCard
												link={INFO.about.download.link}
												icon={faDownload}
												title={
													INFO.about.download.title
												}
											/>
										</div>
									</React.Fragment>
								</div>
							</div>

							{/* <div className="about-right-side"></div> */}
						</div>

						<div className="aboutpage-works">
							<TotalExperience />
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
