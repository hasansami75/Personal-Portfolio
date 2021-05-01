import React from 'react';

const Contact = () => {
    return (
        <>
            <section class="">
            <div className="container bg-dark text-white rounded-3 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 class="text-center my-5">Contact</h1>
                        <form class="w-50 m-auto">
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">User Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Contact;