import React from "react";
import "./styles/toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ handleThemeChange, isLightMode }) => {
	return (
		// <label className="switch">
		// 	<input
		// 		type="checkbox"
		// 		onChange={handleChange}
		// 		checked={isChecked}
		// 	/>
		// 	<span className="slider round"></span>
		// </label>
		<div class="theme-icons" onClick={handleThemeChange}>
			<FontAwesomeIcon
				icon={faMoon}
				className={
					isLightMode
						? "theme-icon icon-hover"
						: "theme-icon icon-default"
				}
				id="moon-icon"
				// onClick={handleThemeChange}
			/>
			<FontAwesomeIcon
				icon={faSun}
				className={
					isLightMode
						? "theme-icon icon-default"
						: "theme-icon icon-hover"
				}
				id="sun-icon"
				// onClick={handleThemeChange}
			/>
		</div>
	);
};

export default Toggle;
