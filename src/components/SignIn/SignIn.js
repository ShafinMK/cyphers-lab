import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='my-5'>
            <div className='container'>
                <h1 className='text-center'>Sign in</h1>
                
                <div className="row justify-content-center">
                
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" className='form-control' name="" id="" />
                        </div>

                        <div className='mb-3'>
                            <label class="form-label">Password</label>
                            <input type="password" className='form-control' name="" id="" />
                        </div>

                        <div className='mb-3 d-flex justify-content-center'>
                            <button className='btn btn-dark rounded-pill px-5 py-3'>Submit</button>
                        </div>

                        <div className='mb-3 d-flex justify-content-center mt-5'>
                            <button className='btn btn-light px-5 py-2 rounded-pill border'><i className="fa-brands fa-google me-2"></i>Sign in with Google</button>
                            <br />
                            
                        </div>
                        <div className='mb-3 d-flex justify-content-center mt-2'>
                           
                            <button className='btn btn-light px-5 py-2 rounded-pill border'><i className="fa-brands fa-twitter me-2"></i>Sign in with Twitter</button>
                        </div>

                        <div className='text-center'>
                        <Link to='/register'>New User? Sign Up Now!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;