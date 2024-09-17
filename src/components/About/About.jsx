import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return(
        <div id='about' className = 'about'>
            <div className = "about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className = "about-right">
                    <div className="about-para">
                        <p>I am a 3rd year Computer Science student at the University of Manitoba with a strong interest in Data Analysis and Software Development. Through various projects and volunteer experiences, I have honed my communication and problem-solving skills, and I thrive under pressure. Effective team player and capable of building strong team.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML5 and CSS3</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"95%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"65%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"95%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"85%"}}/></div>
                        <div className="about-skill"><p>C and C++</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>AI</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>OOP</p><hr style={{width:"95%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS IN COMP SCI</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            </div>
        </div>
    )
}

export default About