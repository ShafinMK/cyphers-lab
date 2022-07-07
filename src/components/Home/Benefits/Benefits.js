import React from 'react';
import Register from '../../Register/Register';

const Benefits = () => {
    return (
        <div className='my-5'>
            <div className='container py-5'>
                <div className='row row-cols-1 row-cols-lg-2'>
                    <div className="col p-5 text-center text-lg-start">
                        <div className='d-flex align-items-center h-100'>
                            <div>
                                <h1 className='playball-font'>Take Advantage of<br />the Benefits and <br />Services of our Specialists<br /></h1>
                                <p className='mt-5'>Get the best customer service and efficient repairs from our technicians. Make an inquiry today to get a flawless computer tomorrow.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col p-5">
                        <Register></Register>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Benefits;