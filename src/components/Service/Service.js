import React from 'react';
import Experience from '../../images/experience.png';
import Interface from '../../images/interface.png';
import Prototyping from '../../images/prototyping.png';
import Illustration from '../../images/illustration.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        id: 1,
        img: Experience,
        title: 'Experience Design',
        description: 'The point of using Lorem Ipsum is that it has a more-or-less normal'
    },
    {
        id: 2,
        img: Interface,
        title: 'Interface Design',
        description: 'The point of using Lorem Ipsum is that it has a more-or-less normal'
    },
    {
        id: 3,
        img: Prototyping,
        title: 'Prototyping',
        description: 'The point of using Lorem Ipsum is that it has a more-or-less normal'
    },
    {
        id: 4,
        img: Illustration,
        title: 'Illustration',
        description: 'The point of using Lorem Ipsum is that it has a more-or-less normal'
    },
]

const Service = () => {
    return (
        <section style = {{marginTop: '100px'}} className="services-container">
            <div className="text-center">
                <h1 style = {{fontWeight: 900 , color: "#16322E" , fontFamily: 'Merriweather serif'}}>What we do</h1>
                <p className = 'text-secondary'>Our main focus is to make User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;