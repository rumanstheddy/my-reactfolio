import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./usbank.jpg"
								alt="usbank"
								className="work-image"
							/>
							<div className="work-title">U.S. Bank</div>
						</div>
						<div className="work-details-container">
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
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
					</div>
				}
			/>
		</div>
	);
};

export default Works;
