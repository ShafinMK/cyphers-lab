import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className='my-5'>
            <div className='container'>
                <div className='text-center my-5'>
                    <h1 className='playball-font'>Why Choose Us</h1>
                    <p>There are dozens of reasons why our clients choose Fixoria as their computer service provider of choice.</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 g-4 ">
                    <div className="col  ">
                        <div className=' attribute-bg py-5 rounded-5'>
                            <div className='d-flex justify-content-center my-4'>
                                <img src={require('../../../images/icons/icon1.png')} className='img-fluid' width='80' alt="" />
                            </div>
                            <div className='text-center '>
                                <h3>Reliable Service</h3>
                                <p className='my-4 p-3'>Every service our computer technicians provide is guaranteed to be prompt & reliable.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col  ">
                        <div className=' attribute-bg py-5 rounded-5'>
                            <div className='d-flex justify-content-center my-4'>
                                <img src={require('../../../images/icons/icon2.png')} className='img-fluid' width='80' alt="" />
                            </div>
                            <div className='text-center '>
                                <h3>Skilled Personal</h3>
                                <p className='my-4 p-3'>All the experts at Fixoria have the skills & experience to get the job done right.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col  ">
                        <div className=' attribute-bg py-5 rounded-5'>
                            <div className='d-flex justify-content-center my-4'>
                                <img src={require('../../../images/icons/icon3.png')} className='img-fluid' width='80' alt="" />
                            </div>
                            <div className='text-center '>
                                <h3>Licensed & Certified</h3>
                                <p className='my-4 p-3'>For your safety and peace of mind, we're fully licensed, certified, and insured!</p>
                            </div>
                        </div>

                    </div>
                    
                    

                </div>
                <div>

                    <h6 className='text-center my-4 py-3'><Link to='/register'>Sign up for our service</Link></h6>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;