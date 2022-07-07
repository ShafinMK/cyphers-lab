import React from 'react';
import './Packages.css';

const Packages = () => {
    return (
        <div className='text-center my-5 container'>
            <div className='my-5'>
                <h1 className='playball-font'>Select Your Package</h1>
                <p className='pt-4'>Take a look at our pricing plans and select the computer repair services that meet your needs the most.</p>
            </div>
            <div className='row row-cols-1 row-cols-lg-3 g-4'>
                <div className="col">
                    <div className='card h-100 '>
                        <div className='py-4 yellow-bg'>
                            <h3>Basic</h3>
                            <h6>PERFECT FOR SIMPLE REPAIR</h6>
                        </div>
                        <div className='card-body'>

                            <h1 className='py-5'>3000 TK</h1>
                            <div>
                                <button className='btn btn-success rounded-pill px-5 py-3 mb-5'>Get this Package</button>
                            </div>

                            <div className='py-4'>
                                <h6>PC Tune</h6>
                                <h6>Virus Removal</h6>
                            </div>

                        </div>
                        <div>

                            <div>
                                <img src={require('../../../images/icons/info.png')} width='15' alt="" />
                            </div>
                            <p>
                                Other services can be ordered at an extra rate.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className='card h-100 '>
                        <div className='py-4 yellow-bg'>
                            <h3>Standard</h3>
                            <h6>MOST POPULAR</h6>
                        </div>
                        <div className='card-body'>

                            <h1 className='py-5'>5000 TK</h1>
                            <div>
                                <button className='btn btn-success rounded-pill px-5 py-3 mb-5'>Get this Package</button>
                            </div>

                            <div className='py-4'>
                                <h6>OS install</h6>
                                <h6>Virus Removal</h6>
                                <h6>Cleaning</h6>
                                <h6>Thermal Paste Change</h6>
                            </div>

                        </div>
                        <div>

                            <div>
                                <img src={require('../../../images/icons/info.png')} width='15' alt="" />
                            </div>
                            <p>
                                Other services can be ordered at an extra rate.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className='card h-100 '>
                        <div className='py-4 yellow-bg'>
                            <h3>Premium</h3>
                            <h6>COMPLETE CARE</h6>
                        </div>
                        <div className='card-body'>

                            <h1 className='py-5'>8000 TK</h1>
                            <div>
                                <button className='btn btn-success rounded-pill px-5 py-3 mb-5'>Get this Package</button>
                            </div>

                            <div className='py-4'>
                                <h6>PC Tune</h6>
                                <h6>Virus Removal</h6>
                                <h6>Clean up</h6>
                                <h6>Harddisk Checkup</h6>
                                <h6>OS Installation</h6>
                                <h6>Performance Tuning</h6>
                            </div>

                        </div>
                        <div>

                            <div>
                                <img src={require('../../../images/icons/info.png')} width='15' alt="" />
                            </div>
                            <p>
                                Other services can be ordered at an extra rate.
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Packages;