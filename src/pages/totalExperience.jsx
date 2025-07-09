import React from "react";
import {
	faBriefcase,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../components/common/card";

import "./styles/totalExperience.css";

const TotalExperience = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/NEU.png"}
								alt="Northeastern University logo"
								className="work-image"
							/>
							<div className="work-title">
								Northeastern University
							</div>
						</div>
						<div className="work-details-container">
							<div className="work-subtitle">
								Master of Science - Computer Science
							</div>
							<div className="work-duration">
								September 2019 - May 2021
							</div>
						</div>
						<br />
						<div className="works-body">
							<div className="work">
								<img
									src={process.env.PUBLIC_URL + "/bmu.jpg"}
									alt="BML Munjal University logo"
									className="work-image"
								/>
								<div className="work-title">
									BML Munjal University
								</div>
							</div>
							<div className="work-details-container">
								<div className="work-subtitle">
									Bachelor of Technology - Computer Science
									and Engineering
								</div>
								<div className="work-duration">
									September 2015 - July 2019
								</div>
							</div>
						</div>
					</div>
				}
			/>
			<br />
			<Card
				icon={faBriefcase}
				title="Professional Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/usbank.jpg"}
								alt="U.S. Bank logo"
								className="work-image"
							/>
							<div className="work-title">U.S. Bank</div>
						</div>
						<div className="work-details-container">
							<div className="work-subtitle">
								Front-end Software Engineer
							</div>
							<div className="work-duration">
								July 2021 - March 2025
							</div>
							{/* <div className="work-location">Remote</div> */}
						</div>

						<div className="work-summary">
							<ul>
								<li>
									Piloted front-end development of the
									treasury portal's cash-ordering module
									utilizing React and TypeScript, integrating
									accessible features that enhanced adoption
									by approximately 25% based on A/B testing.
								</li>
								<li>
									Collaborated with designers and backend
									engineers to build pixel-perfect, responsive
									UIs for desktop and mobile using React.js,
									HTML, CSS, and SASS.
								</li>
								<li>
									Optimized front-end performance by ~10% via
									techniques like code splitting, image
									optimization for enhanced UX.
								</li>
								<li>
									Utilized AWS S3 for static asset hosting and
									CloudFront for global content delivery of
									the front-end application, ensuring high
									performance and availability.
								</li>
								<li>
									Designed and implemented scalable React
									components utilizing the company's UI
									framework, which accelerated feature
									deployment cycles by 30% enhancing
									cash-ordering module adoption.
								</li>
								<li>
									Refactored existing state logic from local
									component state to Redux store, improving
									state traceability and debugging efficiency
									across the app.
								</li>
								<li>
									Leveraged Redux middleware (Thunk) for
									managing asynchronous API calls, enhancing
									performance and error handling in user
									interactions.
								</li>
								<li>
									Designed a REST API wrapper with Java Spring
									Boot, improving code maintainability ratings
									from 2/4 to 4/4 among engineers.
								</li>
								<li>
									Advanced application security by composing
									100+ Jest suites, elevating test coverage to
									address critical vulnerabilities and
									securing a personal achievement of running
									tests in under 3 minutes.
								</li>
								<li>
									Mentored two offshore developers, ensuring
									seamless onboarding and faster project
									delivery.
								</li>
								<li>
									Facilitated Agile practices including sprint
									planning, daily stand-ups, and
									retrospectives to ensure timely product
									releases.
								</li>
							</ul>
						</div>
						<br />
						<div className="works-body">
							<div className="work">
								<img
									src={process.env.PUBLIC_URL + "/cyient.jpg"}
									alt="Cyient logo"
									className="work-image"
								/>
								<div className="work-title">Cyient</div>
							</div>
							<div className="work-details-container">
								<div className="work-subtitle">
									Software Engineer Intern
								</div>
								<div className="work-duration">
									January 2019 - July 2019
								</div>
								{/* <div className="work-location">
									Hyderabad, India
								</div> */}
							</div>
							<div className="work-summary">
								<ul>
									<li>
										Built an employee performance dashboard
										using Angular, TypeScript, HTML, and
										CSS; displayed productivity KPIs and
										resolved the top three causes of
										workflow bottlenecks, boosting team
										efficiency by 15%.
									</li>
									<li>
										Integrated real-time data feeds into the
										dashboard using REST APIs, displaying
										user engagement metrics with an average
										latency of under 300ms.
									</li>
									<li>
										Collaborated with two other interns to
										improve the overall functionality and
										user experience of the dashboard.
									</li>
								</ul>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default TotalExperience;
