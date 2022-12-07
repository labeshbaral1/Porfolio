import React from "react";
import "./SplashScreen.css";
function SplashScreen() {
	const scroll = (target) => {
		target.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="splash" id="splashScreen">
			<div className="splash-container">
				<h1>
					Hi my name is <span>Labesh</span>,
				</h1>
				<h1>I am a software developer</h1>

				<div className="buttons">
					<div
						className="view-button"
						onClick={() => scroll(document.getElementById("about"))}
					>
						View Porfolio
					</div>
					<a
						href={require("../assets/resume.pdf")}
						download="Labesh-Baral Resume"
					>
						<div className="resume-button"> Download Resume</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default SplashScreen;
