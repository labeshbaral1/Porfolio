import React from 'react'
import "./About.css"
import Language from './Language'

import Portrait from "../assets/portrait.jpg"

import Python from "../assets/python.png"
import Java from "../assets/java.png"
import HTML from "../assets/html.png"
import Postgres from "../assets/postgres.png"
import Firebase from "../assets/firebase.png"
import Github from "../assets/github.png"
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import React_icon from "../assets/react.png"

function About() {
  return (
<div className="about" id={"about-tab"}>
  <div className="title"><h1>About</h1></div>
  <div className="about-container">
    <div className="about-left">
      <img className="about-portrait" src={Portrait} alt="Avatar" />
      <p>Full Stack Developer with experience building Vanilla and React.js websites. With a background in both UI/UX and high-level programming, I can develop websites from scratch and raise them into modern, responsive, user-friendly, and dependable web experiences. I am motivated by understanding.</p>
    </div>
    <div className="about-right">
      <div className="about-languages">
        <div className="about-language-col">
          <Language icon={HTML}/>
          <Language icon={Firebase}/>
          <Language icon={Java}/>
        </div>
        <div className="about-language-col">
          <Language icon={CSS}/>
          <Language icon={React_icon}/>
          <Language icon={Python}/>
        </div>
        <div className="about-language-col">
          <Language icon={Javascript}/>
          <Language icon={Github}/>
          <Language icon={Postgres}/>
        </div>

      </div>
    </div>
  </div>
</div>    

  )
}

export default About


