import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const ProjectsView = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.list.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						tech={project.tech}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectsView;
