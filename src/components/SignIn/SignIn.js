import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const SignIn = () => {
    const {auth,setUser, setError, setIsLoading, signInWithGoogle, signInWithEmail } = useAuth();

     //redirection user start
     const location = useLocation();
     const navigate = useNavigate();
     let from = location.state?.from?.pathname || "/";
     console.log(location.state?.from?.pathname);
     
     //redirection user end

    //signing in user start
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmail(auth, data.email, data.password)
        .then((result) => {
            // Signed in 
            console.log(result.user);
            //redirecting user after signed in
            navigate(from, {replace:true});
          })
          .catch((error) => {
            
            console.log(error.message);
          })
          .finally(() =>{
            setIsLoading(false);
          });
    };
    //signing in user end

    const handleGoogleSignin = ()=>{
        signInWithGoogle()
        .then(result => {
            setUser(result.user);
            navigate(from, {replace:true});
          })
          .catch(error => {
            setError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          })

    }
   


    return (
        <div className='my-5'>
            <div className='container'>
                <h1 className='text-center'>Sign in</h1>

                <div className="row justify-content-center">

                    <div className="col-12 col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className='form-control' name="" id="" {...register("email")}/>
                            </div>

                            <div className='mb-3'>
                                <label className="form-label">Password</label>
                                <input type="password" className='form-control' name="" id="" {...register("password", { required: true })} />
                                {errors.password && <span className='text-danger'>Password is required</span>}
                            </div>

                            <div className='mb-3 d-flex justify-content-center'>
                                <button type='submit' className='btn btn-dark rounded-pill px-5 py-3'>Submit</button>
                            </div>

                            <div className='mb-3 d-flex justify-content-center mt-5'>
                                <button className='btn btn-light px-5 py-2 rounded-pill border' onClick={handleGoogleSignin}><i className="fa-brands fa-google me-2"></i>Sign in with Google</button>
                                <br />

                            </div>
                            <div className='mb-3 d-flex justify-content-center mt-2'>

                                <button className='btn btn-light px-5 py-2 rounded-pill border'><i className="fa-brands fa-twitter me-2"></i>Sign in with Twitter</button>
                            </div>

                            <div className='text-center'>
                                <Link to='/register'>New User? Sign Up Now!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;