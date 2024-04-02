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
								Software Engineer | Contract
							</div>
							<div className="work-duration">
								July 2021 - Present
							</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
						<div className="work-summary">
							<ul>
								<li>
									Spearheaded the modernization of
									SinglePoint, U.S. Bank's central treasury
									portal, by developing the portal’s
									cash-ordering module UI in modern JavaScript
									and React, delivering a streamlined and
									intuitive user experience with a 25% surge
									in engagement.
								</li>
								<li>
									Built key React.js components using HTML,
									CSS, SASS and Shield, U.S. Bank's internal
									design framework, expanding functionality
									and scalability.
								</li>
								<li>
									Implemented Context API and provider classes
									to establish a centralized state management
									system improving code reusability, reducing
									redundancy, and ensuring streamlined data
									flow across components.
								</li>
								<li>
									Utilized Axios within provider classes to
									implement efficient and streamlined
									asynchronous data fetching for cash order
									and user information while also including
									error handling mechanisms for API
									interactions, ensuring graceful fallbacks
									and clear user error messages.
								</li>
								<li>
									Leveraged state management and component
									lifecycle methods to build dynamic and
									responsive cash denomination forms with
									accessible modals and responsive tables,
									optimizing user experience and streamlining
									workflows across various screen sizes.
								</li>
								<li>
									Enhanced UI consistency and accessibility
									across the application through A11y
									compliance and internal design principles.
								</li>
								<li>
									Reduced bug resolution time by 10% with
									comprehensive Jest testing suites,
									guaranteeing robust code quality.
								</li>
								<li>
									Streamlined build automation through
									Jenkins, expediting project timelines with
									swift compilation and deployments.
								</li>
								<li>
									Instituted Postman to implement rigorous API
									validation methodologies, ensuring seamless
									data integration.
								</li>
								<li>
									Demonstrated expertise in Git and Gitlab,
									orchestrating advanced branching strategies
									to streamline code collaboration.
								</li>
								<li>
									Fostered collaboration with UX experts and
									developers, translating Figma wireframes
									into intuitive web pages. Ensured
									industry-standard compliance and optimal
									software solutions through effective
									cross-functional teamwork.
								</li>
								<li>
									Championed Agile methodology, facilitating
									daily stand-up meetings, sprint planning,
									consistent progress and on-time project
									delivery.
								</li>
							</ul>
						</div>
						<br />
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
									Graduate Teaching Assistant in Web
									Development | Part-time
								</div>
								<div className="work-duration">
									January 2021 - May 2021
								</div>
							</div>

							<div className="work-summary">
								<ul>
									<li>
										Wrote code in JavaScript, HTML, CSS &
										MERN stack to assist students with
										weekly assignments.
									</li>
									<li>
										Collaborated with 7 teaching assistants,
										as well as the professor, to ensure
										students progress forward with abundant
										resources and extended support.
									</li>
									<li>
										Discussed program standards and problems
										solved for pain points to improve the
										course overall.
									</li>
								</ul>
							</div>
						</div>
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
									Graduate Teaching Assistant in Android
									Application Development | Part-time
								</div>
								<div className="work-duration">
									May 2021 - December 2021
								</div>
							</div>

							<div className="work-summary">
								<ul>
									<li>
										Wrote Java code in Android Studio
										involving concepts like Threads,
										Broadcast Receivers, SQLite to assist
										students with weekly assignments.
									</li>
									<li>
										Collaborated with 2 teaching assistants,
										as well as the professor, to ensure
										students progress forward with abundant
										resources and extended support.
									</li>
									<li>
										Provided feedback for the curriculum to
										improve the course and increase
										participation.
									</li>
								</ul>
							</div>
						</div>
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
									Software Engineer Intern | Internship
								</div>
								<div className="work-duration">
									January 2019 - July 2019
								</div>
							</div>
							<div className="work-summary">
								<ul>
									<li>
										Developed an Employee Efficiency
										Dashboard using JavaScript, HTML, CSS,
										and jQuery, showcasing Key Performance
										Indicators (KPIs) like productivity
										rates and user engagement analytics.
									</li>
									<li>
										Implemented Highcharts for dynamic data
										visualization, enhancing usability by
										15%, improving overall dashboard
										effectiveness.
									</li>
									<li>
										Reduced code verbosity by 20% through
										optimized Ajax data fetching strategies,
										enhancing code simplicity and
										maintainability.
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
