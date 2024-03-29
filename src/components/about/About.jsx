import React from 'react'

import './about.css'

import { FiUsers } from 'react-icons/fi'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

import aboutMe from '../../assets/me-about.jpg'

const About = () => {
    return (
        <div>

            <section id="about">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            {/* //use curly bracket for source eg "src={aboutMe}" */}
                            <img src={aboutMe} alt="About Image" />
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Experience</h5>
                                <small>2+ Years Working</small>
                            </article>
                            <article className="about__card">
                                <FiUsers className="about__icon" />
                                <h5>Clients</h5>
                                <small>30+ Worldwide</small>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>45+ Completed</small>
                            </article>
                        </div>
                        <p>
                            Hey, I'm <strong>React Learner</strong>, a student...!
                            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore ipsam repudiandae nobis in cum dignissimos sit cumque. Repellendus et officia debitis quidem dolorem ullam magnam, possimus repellat, eius commodi recusandae illum perspiciatis aut, architecto quae voluptate neque quia provident?
                        </p>
                        <a href="#contact" className="btn btn-primary">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About