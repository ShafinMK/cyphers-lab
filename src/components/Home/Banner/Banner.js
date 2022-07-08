import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='d-flex flex-column flex-lg-row justify-content-around align-items-center h-100 ps-lg-5 '>
                <div className='text-light ps-lg-5'>
                    <h1 className='py-4 courgette-font text-center text-lg-start' style={{ fontSize: '50px' }}>Professional<br />Computer<br /><span className='cyan'>Repair Services</span></h1>
                    <h6 className='text-center text-lg-start'>Welcome to Cypher's Lab, your one-stop place fr all kinds <br /> or computer repairs and diagnostics.</h6>
                    <div className='text-center text-lg-start'>
                        <Link to='/services'>
                            <button className='banner-btn  my-4 rounded-pill px-4 py-2 '>View All Services</button>
                        </Link>

                    </div>
                </div>
                <div className='w-25 d-flex flex-row flex-lg-column  align-items-center'>
                    <div className='rounded-circle bg-light my-3' style={{ height: '10px', width: '10px' }}></div>
                    <div className='rounded-circle bg-light my-3' style={{ height: '10px', width: '10px' }}></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;