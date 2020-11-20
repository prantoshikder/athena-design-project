import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-3 text-center card-style">
            <img style={{width: '90px' , height: '90px'}} className = 'img-fluid' src={service.img} alt="" />
            <h3 style = {{color: "#16322E" , fontWeight: 800}} className="mt-3 mb-3 p-2">{service.title}</h3>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;