import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from "../../images/pp.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from "../../images/resumeOfHasan.pdf";
import "./About.css"

const About = () => {
    return (
        <>
            <section id="about">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about text-center">
                                <h1 class="m-5 heading">About Me</h1>
                                <img src={pic} class="img-fluid img-resize rounded-circle" alt="" />
                                <div class="mt-3 p-2 d-flex justify-content-center">
                                    <div class="me-3">
                                        <a target="_blank" class="btn btn-light" href="https://www.facebook.com/hasan.sami2375"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                    </div>
                                    <div class="me-3">
                                        <a target="_blank" class="btn btn-light" href="https://github.com/hasansami75"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                    </div>
                                    <div class="me-3">
                                        <a target="_blank" class="btn btn-light" href="https://www.linkedin.com/in/mohammad-mehedi-hasan-bhuiyan-0b3753151/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                    </div>
                                </div>
                                <h4>Want to contribute in a well-structured organization where opportunities of self-assessment and take up a challenging job exists and want to enhance organization responsibilities as an assigned person through acquired academic skills, leadership, sincerity & honesty. </h4>
                                <div className="mt-3">
                                    <a href="#contact"><button class="btn btn-danger me-3">Send Message</button></a>
                                    <button class="btn btn-danger"><a href={resume} download>Download Resume</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default About;