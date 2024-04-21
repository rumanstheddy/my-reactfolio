import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faTwitter,
// 	faGithub,
// 	faStackOverflow,
// 	faInstagram,
// 	faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
// import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
// import Article from "../components/homepage/article";
// import Works from "../components/homepage/works";
// import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
// import myArticles from "../data/articles";
// import { Link } from "react-router-dom";

import "./styles/homepage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "../components/homepage/homeCard";
import {
	faBriefcase,
	faEnvelope,
	faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Toggle from "../components/common/toggle";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

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

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 2,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	const workDescription = "Explore my professional journey over the years.";

	const projectsDescription =
		"Check out the projects I have worked on throughout the years.";

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
					active="home"
					handleThemeChange={() => handleThemeChange()}
					isLightMode={isLightMode}
				/>
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						{/* <div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div> */}
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
								<div className="homepage-socials">
									{/* <a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a> */}
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
									{/* <a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a> */}
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
						</div>
						{/* <Toggle
							handleChange={() => handleThemeChange()}
							isChecked={isLightMode}
						/> */}

						<div className="all-home-cards-container">
							{/* <div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div> */}

							{/* <div className="homepage-works">
								<Works />
							</div> */}
							<HomeCard
								link={"/about"}
								icon={faBriefcase}
								title={"Work Experience"}
								description={workDescription}
							/>
							<HomeCard
								link={"/projects"}
								icon={faProjectDiagram}
								title={"Projects"}
								description={projectsDescription}
							/>
						</div>

						{/* <div className="homepage-projects">
							<AllProjects />
						</div> */}

						{/* <div className="page-footer">
							<Footer />
						</div> */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
