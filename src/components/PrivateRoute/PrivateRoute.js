import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return (
            <div className='container my-5 d-flex justify-content-center'>
                <div className="spinner-border text-info " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const { children } = props;
    // console.log(location);
    return user.uid ? children : <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;