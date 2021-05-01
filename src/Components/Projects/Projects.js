import React from 'react';
import chanderHut from '../../images/chander hut.png';
import repairHut from '../../images/repairhut.png';
import "./Projects.css"


const Projects = () => {
    return (
        <>
            <section id="projects">
            <h1 class="text-center m-5">Projects</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img src={chanderHut} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Chander Hut</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary mb-3">Github</a><br/>
                                <a href="#" class="btn btn-primary">Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                            <img src={chanderHut} class="card-img-top img-fluid" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title ">Repair Hut</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary mb-3">Github</a><br/>
                                <a href="#" class="btn btn-primary">Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                            <img src={chanderHut} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">City Ride</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary mb-3">Github</a><br/>
                                <a href="#" class="btn btn-primary">Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Projects;