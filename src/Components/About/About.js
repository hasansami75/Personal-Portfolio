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
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about text-center">
                            <h1 class="m-5">About</h1>
                            <img src={pic} class="img-fluid img-resize rounded-circle" alt="" />
                            <div class="fs-2">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faGithub} />
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                            <h4>A self-taught software developer with a Bachelor's in Electrical & Electronic Engineering. Besides programming all day, he has a passion for writing about himself in third person.</h4>
                            <button class="btn btn-danger me-3">Send Message</button>
                            <button class="btn btn-danger"><a href={resume} download>Download Resume</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;