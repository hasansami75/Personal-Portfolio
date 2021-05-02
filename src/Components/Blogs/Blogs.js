import React from 'react';
import './Blogs.css';
import blog1 from '../../images/blog1.png';
import javascript from '../../images/javascript.png';
import node from '../../images/node.png';

const Blogs = () => {
    return (
        <>
           <section id="blogs" className="my-5">
           <h1 class="text-center mb-5">Blogs</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img src={blog1} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Learn React with chantastic</h5>
                                <a target="_blank" href="https://medium.com/@learnreact" class="btn btn-info mb-3">Read</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                            <img src={javascript} class="card-img-top img-fluid" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title ">JavaScript Teacher</h5>
                                <a target="_blank" href="https://jstutorial.medium.com/" class="btn btn-info mb-3">Read</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                            <img src={node} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Node.js Mentorship New Mentee Opening</h5>
                                <a target="_blank" href="https://nodejs.medium.com/" class="btn btn-info mb-3">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </>
    );
};

export default Blogs;