import React from "react";
import "./Projects.css";
import PorjectTile from "./ProjectTile";
import Amazon from "../assets/amazon-clone.png";
import Grow4F from "../assets/Grow4f.jpg"
import LinkedIn from "../assets/linkedin-clone.png"


function Pojects() {
	return (
		<div className="projects" id="projects-tab">
			<div className="title">
				<h1>Projects</h1>
			</div>

			<div className="projects-container">
				<PorjectTile
					thumbnail={Amazon}
					title="Amazon Clone"
					link="https://clone-28cfc.web.app/"
					description="FULL STACK AMAZON CLONE THAT APPLIES FIREBASE USER AUTHENTICATION, STRIPE PAYMENT AUTHORIZATION,
DATABASE MANAGEMENT, REDUX STATE MANAGEMENT, PAGE ROUTING, SERVERLESS FUNCTIONS AND APP
DEPLOYMENT ALL WITHIN THE REACT FRAMEWORK."
					skills={[
						"React",
						"Firebase",
						"Redux Toolkit",
						"HTML",
						"CSS",
						"JS",
						"Stripe",
					]}
				/>
				<PorjectTile
					thumbnail={Grow4F}
					title="Grow4F"
					link="https://www.keepandshare.com/doc16/28454/grow4f-research-paper-pdf-1-9-meg?da=y"
					description="USED ARTIFICIAL INTELLIGENCE TO CREATE AN AFFORDABLE DEVICE TO PREDICT CROP YIELD FOR DEVELOPING
					NATIONS. THE DEVICE USED SENSORS TO GATHER SOIL, CLIMATE, AND SATELLITE IMAGERY AND A NOVEL RANDOM
					FOREST REGRESSOR MODEL TO CREATE ACCURATE CROP PREDICTION"
					skills={["Python", "Google", "Earth Engine", "SciKit Learn"]}
				/>
				<PorjectTile
					thumbnail={LinkedIn}
					title="LinkedIn"
					link=""
					description="FULL STACK AMAZON CLONE THAT APPLIES FIREBASE USER AUTHENTICATION, STRIPE PAYMENT AUTHORIZATION,
DATABASE MANAGEMENT, REDUX STATE MANAGEMENT, PAGE ROUTING, SERVERLESS FUNCTIONS AND APP
DEPLOYMENT ALL WITHIN THE REACT FRAMEWORK."
					skills={[
						"React",
						"Firebase",
						"Redux Toolkit",
						"HTML",
						"CSS",
						"JS",
						"Stripe",
					]}
				/>
			</div>
		</div>
	);
}

export default Pojects;
