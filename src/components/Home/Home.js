import React from 'react';
import 'animate.css';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import SampleServices from './SampleServices/SampleServices';
import Gallery from './Gallery/Gallery';
import ChooseUs from './ChooseUs/ChooseUs';
import Packages from './Packages/Packages';
import Team from './Team/Team';
import Benefits from './Benefits/Benefits';
const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <SampleServices></SampleServices>
           <Gallery></Gallery>
           <ChooseUs></ChooseUs>
           <Packages></Packages>
           <Team></Team>
           <Benefits></Benefits>

          
            
        </div>
    );
};

export default Home;