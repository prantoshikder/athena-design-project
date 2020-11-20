import React from 'react';
import './RunningProject.css';

const RunningProject = () => {
    return (
        <div className="running-project-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="running-project-img">
                            <img src="https://img.techpowerup.org/201119/running-project-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="running-project-content">
                            <h2 className="mb-4">Stay Running & Project</h2>
                            <p className="mb-5">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letter.</p>
                            <div className="running-project-btn">
                                <a href="#">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RunningProject;