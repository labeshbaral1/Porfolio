import React from "react";
import "./ProjectTile.css";

function ProjectTile({ thumbnail, title, link, description, skills }) {


	return (

	<a href={link} target="blank">
		<div className="projectTile">
			<img src={thumbnail} className="thumbnail" />

			<div className="project-info">
				<div className="info-left">
					<h3>{title}</h3>
					<a href={link} target="_blank">
						<p>{link}</p>
					</a>
					<p>{description}</p>
				</div>
				<div className="info-right">
                    
					{skills.map((skill) => <div className="skillAttribute">{skill}</div>)}
				</div>
			</div>
		</div>
		</a>
	);
}

export default ProjectTile;
