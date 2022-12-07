import React from "react";
import "./Header.css";

function Header() {
	function select(item) {
		const allItems = document.getElementsByClassName("header-item");
		for (let i of allItems) {
			if (i.getAttribute("id") === item) {
				i.classList.add("selected");
			} else {
				i.classList.remove("selected");
			}
		}
	}

	function smoothScroll(target) {
		target.scrollIntoView({behavior: "smooth"});
	}

	return (
		<nav id="header">
			<ul className="header-container">
				<li className="header-item" id={"home"} onClick={ ()=>{
					select("home");
					smoothScroll(document.getElementById("splashScreen"))
				}
					}>
					Home
				</li>
				<li
					href=""
					className="header-item"
					id={"about"}
					onClick={() => {
						select("about");
						smoothScroll(document.getElementById("about-tab"));
					}}
				>
					About
				</li>
				<li
					href=""
					className="header-item"
					id={"projects"}
					onClick={() => {
						select("projects");
						smoothScroll(document.getElementById("projects-tab"));
					}}
				>
					Projects
				</li>
				<li
					href=""
					className="header-item"
					id={"contact"}
					onClick={() => {
						select("contact");
						smoothScroll(document.getElementById("contact-tab"));
					}}
				>
					Contact
				</li>
			</ul>
		</nav>
	);
}

export default Header;
