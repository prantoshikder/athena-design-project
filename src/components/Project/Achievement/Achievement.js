import React from 'react';
import './Achievement.css';

const Achievement = () => {
    return (
        <div className="achievement-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-6 col-12">
                        <div className="left-side mt-5">
                            <h2>Our Achievements</h2>
                            <p>It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letter.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-7 col-12">
                        <div className="client-project right-side">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-6 col-12 mt-3">
                                    <div className="client-project-content active d-flex justify-content-center align-items-center">
                                        <div className="icon">
                                            <img src="https://img.techpowerup.org/201119/happy-clients.png" className="happy" height="50px" alt=""/>
                                        </div>
                                        <div className="client-content text-white ml-4">
                                            <h3 className="font-weight-bold">700+</h3>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-12 mt-3">
                                    <div className="client-project-content d-flex justify-content-center align-items-center">
                                        <div className="icon">
                                            <img src="https://img.techpowerup.org/201119/projects-completed.png" className="" height="50px" alt=""/>
                                        </div>
                                        <div className="client-content ml-4">
                                            <h3 className="font-weight-bold">140+</h3>
                                            <p>Projects Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-6 col-12 mt-3">
                                    <div className="client-project-content d-flex justify-content-center align-items-center">
                                        <div className="icon">
                                            <img src="https://img.techpowerup.org/201119/crazy-minds.png" className="" height="50px" alt=""/>
                                        </div>
                                        <div className="client-content ml-4">
                                            <h3 className="font-weight-bold">25+</h3>
                                            <p>Crazy Minds</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-12 mt-3">
                                    <div className="client-project-content d-flex justify-content-center align-items-center">
                                        <div className="icon">
                                            <img src="https://img.techpowerup.org/201119/running-projects.png" className="" height="50px" alt=""/>
                                            
                                        </div>
                                        <div className="client-content ml-4">
                                        <h3 className="font-weight-bold">75+</h3>
                                            <p>Running Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;