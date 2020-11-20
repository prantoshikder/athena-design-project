import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <section className='m-5'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card text-center mt-3" style={{width: '26rem'}}>
                        <div className="card-body">
                            <div className='card-title'>
                                <h3>$199</h3>
                                <small>For Basic</small>
                            </div>
                            <hr/>
                            <h6 className="card-text text-grey list-item">
                                <li>Homepage</li>
                                <li>No Inner Page</li>
                                <li>Asset file</li>
                                <li>Source file</li>
                                <li>Free Stack Photos</li>
                                <li>10 Days Free Support</li>
                                <li>24/7 Support</li>
                            </h6>
                            <div className='order-btn mt-5 mb-4'>
                                <a href='#'>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card text-center " style={{width: '26rem'}}>
                        <div className="card-body">
                            <div className='card-title'>
                                <h3>$399</h3>
                                <small>For Preferred</small>
                            </div>
                            <hr/>
                            <h6 className="card-text text-grey list-item">
                                <li>Homepage</li>
                                <li>No Inner Page</li>
                                <li>Asset file</li>
                                <li>Sourse file</li>
                                <li>Free Stack Photos</li>
                                <li>20 Days Free Support</li>
                                <li>24/7 Support</li>
                            </h6>
                            <div className='order-btn mt-5 mb-4'>
                                <a href='#'>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className="card text-center" style={{width: '26rem'}}>
                        <div className="card-body">
                            <div className='card-title'>
                                <h3>$599</h3>
                                <small>For Elite</small>
                            </div>
                            <hr/>
                            <h6 className="card-text text-grey list-item">
                                <li>Homepage</li>
                                <li>No Inner Page</li>
                                <li>Asset file</li>
                                <li>Sourse file</li>
                                <li>Free Stack Photos</li>
                                <li>30 Days Free Support</li>
                                <li>24/7 Support</li>
                            </h6>
                            <div className='order-btn mt-5 mb-4'>
                                <a href='#'>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;