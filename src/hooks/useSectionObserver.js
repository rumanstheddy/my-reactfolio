import { useEffect } from "react";

/**
 * Custom hook to observe visibility of profile, about, and projects sections.
 * Updates the provided setSection callback with the currently visible section.
 * @param {Function} setSection - React state setter for the current section
 */
export function useSectionObserver(setSection) {
	useEffect(() => {
		const profile = document.getElementById("profile-section");
		const about = document.getElementById("about-section");
		const projects = document.getElementById("projects-section");
		if (!profile || !about || !projects) return;

		const isMobile = window.innerWidth <= 768;
		const threshold = isMobile ? 0.2 : 0.5;
        console.log("Using threshold:", threshold);

		const handleIntersect = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id === "profile-section") {
						setSection("profile");
					} else if (entry.target.id === "about-section") {
						setSection("about");
					} else if (entry.target.id === "projects-section") {
						setSection("projects");
					}
				}
			});
		};

		const observer = new window.IntersectionObserver(handleIntersect, {
			root: null,
			rootMargin: "0px",
			threshold: threshold,
		});

		observer.observe(profile);
		observer.observe(about);
		observer.observe(projects);

		return () => {
			observer.disconnect();
		};
	}, [setSection]);
}
