import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='d-flex flex-column flex-lg-row justify-content-around align-items-center h-100 ps-lg-5 '>
                <div className='text-white ps-lg-5'>
                    <h1 className='py-4' style={{fontSize:'50px'}}>Professional<br />Computer<br />Repair Services</h1>
                    <h6 className=''>Welcome to Cypher's Lab, your one-stop place fr all kinds <br /> or computer repairs and diagnostics.</h6>
                    <button className=' btn my-4 rounded-pill px-4 py-2 text-light bg-transparent border border-3 '>View All Services</button>
                </div>
                <div className='w-25 d-flex flex-row flex-lg-column  align-items-center'>
                    <div className='rounded-circle bg-light my-3' style={{height:'10px', width:'10px'}}></div>
                    <div className='rounded-circle bg-light my-3' style={{height:'10px', width:'10px'}}></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;