import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';
import Project from '../Project/Project/Project';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
    return (
        <div className="background-image">
           <Header></Header>
            <Service></Service>
            <Project></Project>
            <Pricing></Pricing>
            <Footer></Footer>
        </div>
    );
};

export default Home;