import React from 'react';
import chanderHut from '../../images/chander hut.png';
import repairHut from '../../images/repair-hut.png';
import "./Projects.css";
import epl from '../../images/epl-giants.png';
import PIS from '../../images/pis.PNG';
import dreamXI from '../../images/dream-xi.png';
import ride from '../../images/city-ride.png';


const Projects = () => {
    return (
        <>
            <section id="projects" className="mb-5">
                <h1 class="text-center mt-5 mb-4 heading">Projects</h1>
                <div className="container">
                    <div className="row my-3 mb-sm-5">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Chander Hut</h5>
                                    <p class="card-text">This is an online e-commerce shop where users can order grocery items as their need. The user can see all the previous bookings of himself. Admin can delete products & add products according to product stock.</p>
                                    <div className="mb-4">
                                        <b className="me-4">Technology:</b> <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">React.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Node.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">Express.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Bootstrap</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Material UI</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">MongoDB</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark">Firebase</span></h5>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <a target="_blank" href="https://github.com/hasansami75/Chander-Hut-client" class="btn btn-primary">Github Client</a>
                                        <a target="_blank" href="https://github.com/hasansami75/Chander-Hut-server" class="btn btn-primary">Github Server</a>
                                        <a target="_blank" href="https://fresh-valley-ff3aa.web.app/" class="btn btn-primary">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={repairHut} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">Repair Hut</h5>
                                    <p class="card-text">This is an electrical item repairing store. Users can order the service which they need, and they also give reviews about the service. Admin can edit service, add service & delete service. Also, the admin can handle booking list & their status.</p>
                                    <div className="mb-4">
                                        <b className="me-4">Technology:</b> <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">React.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Node.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">Express.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Bootstrap</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Material UI</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">MongoDB</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">Firebase</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Stripe Payment</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark">Heroku</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <a target="_blank" href="https://github.com/hasansami75/Repair-Hut-client" class="btn btn-primary">Github Client</a>
                                        <a target="_blank" href="https://github.com/hasansami75/Repair-Hut-server" class="btn btn-primary">Github Server</a>
                                        <a target="_blank" href="https://repair-hut.web.app/" class="btn btn-primary">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={PIS} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Patient Information System</h5>
                                    <p class="card-text">This is an online e-commerce shop where users can order grocery items as their need. The user can see all the previous bookings of himself. Admin can delete products & add products according to product stock.</p>
                                    <div className="mb-4">
                                        <b className="me-4">Technology:</b> <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">HTML5</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">CSS3</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">jQuery</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Bootstrap</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">PHP</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">MySQL</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark">Laravel</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a target="_blank" href="https://github.com/hasansami75/PIS" class="btn btn-primary">Github</a>
                                        <a href="#" class="btn btn-primary">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={ride} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">City Ride</h5>
                                    <p class="card-text">This is a ride sharing web service. User can choose in which ride they want to go? If the user is new in this site, first he will go to firebase login authentication. Then he can choose his desire location where he want to go. </p>
                                    <div className="mb-4">
                                        <b className="me-4">Technology:</b> <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">React.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Firebase Authentication</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">Google Map</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Bootstrap</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">React Router</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a target="_blank" href="https://github.com/hasansami75/City-Ride-using-react-authentication" class="btn btn-primary">Github</a>
                                        <a target="_blank" href="https://urban-riders-72069.web.app/" class="btn btn-primary">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={dreamXI} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">DREAM XI</h5>
                                    <p class="card-text">This website is made with Rest API.This is a Dream Team Maker with user's special players. User can make their dream team. He/she never select one player twice in team. After selecting 11players auto monty salary of those players will show in the UI. </p>
                                    <div className="mb-4">
                                        <b className="me-4">Technology:</b> <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">React.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">HTML5</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">CSS3</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Bootstrap</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Rest API</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a target="_blank" href="https://github.com/hasansami75/dream-xi-using-react" class="btn btn-primary">Github</a>
                                        <a target="_blank" href="https://quirky-colden-2d7269.netlify.app/" class="btn btn-primary">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={epl} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">EPL GIANTS</h5>
                                    <p class="card-text">This is the website based on the information of EPL Teams. If user click the explore button they will see the detail information about the team. One more interesting thing is, if the team gender is male there will show male players otherwise it shows female players picture.</p>
                                    <div className="mb-4">
                                        <b className="me-4">Technology:</b> <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">React.js</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">HTML5</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark mb-2">CSS3</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Bootstrap</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Rest API</span></h5>
                                        <h5 className="d-inline"><span class="badge bg-warning text-dark me-1">Routing</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a target="_blank" href="https://github.com/hasansami75/EPL-Giants-using-react-router" class="btn btn-primary">Github</a>
                                        <a target="_blank" href="https://vigilant-montalcini-b19fdc.netlify.app/" class="btn btn-primary">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;