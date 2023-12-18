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
								src="./NEU.png"
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
									src="./bmu.jpg"
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
								src="./usbank.jpg"
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
									I played a pivotal role in advancing the
									technological landscape through my
									contributions to the development and
									enhancement of a cash-ordering module for
									the central treasury portal, 'SinglePoint.'
									Leveraging React.js and U.S. Bank’s React
									component library, 'Shield,' I orchestrated
									a 25% surge in pilot customer engagement by
									crafting an intuitive and streamlined user
									interface. This optimization not only
									enhanced convenience but also increased
									accessibility in cash transactions.
								</li>
								<li>
									My commitment extended to the maintenance
									and contribution to the 'Shield' component
									library, where I harmonized development
									workflows. My active involvement ensured
									coherence across various projects by
									employing a robust tech stack, including
									HTML, JavaScript, CSS, and SASS. This
									meticulous engagement guaranteed consistency
									and scalability in design across multiple
									projects.
								</li>
								<li>
									Participating in code reviews became a
									cornerstone of my approach, fostering a
									collaborative and learning-oriented
									environment. I implemented rigorous testing
									methodologies with Postman, ensuring
									seamless validation of APIs and guaranteeing
									robust functionality and integration.
								</li>
								<li>
									Demonstrating proficiency in version
									control, I utilized Git and Gitlab for
									effective code collaboration. Employing
									advanced branching and merging strategies, I
									streamlined the development process and
									ensured code integrity.
								</li>
								<li>
									Leveraging SonarQube, I enforced coding
									standards, enhancing overall code quality
									and identifying potential issues early in
									the development cycle. This proactive
									approach fostered a more efficient and
									reliable software development process.
								</li>
								<li>
									In the realm of automation, I utilized
									Jenkins to orchestrate the build process,
									ensuring swift and efficient compilation and
									deployments. My collaboration with UX and
									cross-functional teams showcased my
									commitment to designing, implementing, and
									maintaining software solutions in compliance
									with industry standards.
								</li>
								<li>
									Active participation in Agile methodologies
									marked my commitment to efficient project
									deliveries. From sprint planning to
									stand-ups and retrospectives, I ensured a
									cohesive and timely execution of projects.
								</li>
							</ul>
						</div>
						<br />
						<div className="works-body">
							<div className="work">
								<img
									src="./NEU.png"
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
									src="./NEU.png"
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
									src="./cyient.jpg"
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
										Coded a support application using
										Python3 and PyQt5 and collaborated with
										5 other interns to improve the
										development team's productivity.
									</li>
									<li>
										Resolved technical issues by testing
										support application's GUI for usability.
									</li>
									<li>
										Raised PRs and pushed front-end fixes to
										GitHub.
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
