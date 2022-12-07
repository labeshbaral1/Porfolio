import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Pojects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

function App() {


	
	return (
		<>
			<SplashScreen />
			<Header />
			<div className="content">
				<About />
				<Projects />
				<Contact />
			</div>

			<Footer />
		</>
	);
}

export default App;
