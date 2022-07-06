import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='container'>

            <form onSubmit={handleSubmit(onSubmit)} className='border p-2 p-lg-5 bg-light'>
                <div className='text-center'>
                    <h1>Sign up for a Repair</h1>
                    <p>Enter your contact details to schedule a repair.</p>
                </div>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mb-3">
                    <input type='email' className="form-control rounded-pill p-lg-3" placeholder='Email'  {...register("example")} />
                </div>
                <div className='mb-3'>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input type='password' className='form-control rounded-pill p-lg-3' placeholder='Password' {...register("passwordRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.passwordRequired && <span>This field is required</span>}
                </div>
                <div className='mb-3'>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input type='text' className='form-control rounded-pill p-lg-3' placeholder='Name' {...register("nameRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.nameRequired && <span>This field is required</span>}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">By clicking the button you agree to the <Link to='/privacyterms'>Privacy Policy</Link> and <Link to='/privacyterms'>Terms of Service</Link></label>
                </div>


                <div className='d-flex justify-content-center'>
                    <input className='btn rounded-pill border px-5 py-3 my-3' type="submit" />
                </div>

                <div className='mb-3 d-flex justify-content-center mt-5'>
                    <button className='btn btn-light px-5 py-2 rounded-pill border'><i className="fa-brands fa-google me-2"></i>Sign up with Google</button>
                    <br />

                </div>
                <div className='mb-3 d-flex justify-content-center mt-2'>

                    <button className='btn btn-light px-5 py-2 rounded-pill border'><i className="fa-brands fa-twitter me-2"></i>Sign up with Twitter</button>
                </div>
                <div className='text-center'>
                    <Link to='/signin'>Already Signed UP? Log in Now!</Link>
                </div>


            </form>

        </div>
    );
};

export default Register;