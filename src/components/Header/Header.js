import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import userIcon from '../../images/icons/userIcon.png'

const Header = () => {
    let activeNavLinkStyle = 'active-link';
    const { user, logOut } = useAuth();
    return (
        <div className=' w-100 sticky-top'>
            {/* <div className='position-absolute w-100 bg-dark ' style={{height:'100%'}}></div> */}
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" >
                <div className="container">
                    <NavLink to='/' style={{ textDecoration: 'none' }} >

                        <div className='d-flex h-100 p-0 align-items-center'>
                        <img src={require('../../images/icons/homeicon.png')} alt="" width="40" height="40" className="d-inline-block align-text-top" />
                            <h6 className='  text-white shrikhand m-0 '>
                                
                                <span className='cyan p-0'>Cypher's</span> <span className='red'>Lab</span>
                            </h6>
                        </div>
                    </NavLink>

                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                        <ul className="navbar-nav align-items-center ">
                            <li className="nav-item">
                                <NavLink to='/home' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : 'text-light'} ><span className='header-link px-3'>Home</span></NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to='/services' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : 'text-light'} ><span className='header-link px-3'>Services</span></NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : 'text-light'}><span className='header-link px-3'>About</span></NavLink>

                            </li>
                            <li className="nav-item">
                                {
                                    user.uid ? <div><img src={user.photoURL ? user.photoURL : userIcon} className='rounded-circle mx-2' style={{ height: '30px', widhth: '30px' }} referrerPolicy="no-referrer" alt="" /><button className='btn btn-danger' onClick={logOut}>Log out</button></div>
                                        : <NavLink to='/signin' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : 'text-light'}><span className='header-link px-3'>Log in</span></NavLink>
                                }


                            </li>

                        </ul>




                    </div>




                </div>
            </nav>
        </div>
    );
};

export default Header;