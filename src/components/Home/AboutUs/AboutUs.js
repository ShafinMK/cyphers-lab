import React from 'react';
import Register from '../../Register/Register';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className=' gray-bg'>
            <div className='container py-5'>
            <div className="row align-items-center">
                <div className="col-12 col-lg-7 p-3 p-lg-5">
                    <h1>Who we are <br /> and How we Work</h1>
                    <p>Cypher's Lab is one of the leading computer repair shops in the Comilla providing services for individuals and businesses. No matter what kind of a PC you have, we can fix it.</p>
                    <div className="row mt-5">
                        <div className="col">
                            <h1 style={{fontSize:'60px'}}>98%</h1>
                            <p>Successful Repairs</p>
                        </div>
                        <div className="col">
                            <h1 style={{fontSize:'60px'}}>2k+</h1>
                            <p>Excellent reviews</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 p-3 p-lg-5">
                    <Register></Register>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;