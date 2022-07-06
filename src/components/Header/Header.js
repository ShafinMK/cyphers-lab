import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    let activeNavLinkStyle = 'active-link';
    return (
        <div className=' w-100 sticky-top'>
            {/* <div className='position-absolute w-100 bg-dark ' style={{height:'100%'}}></div> */}
            <nav className="navbar navbar-expand-lg  bg-dark">
                <div className="container">
                    <NavLink to='/' style={{ textDecoration: 'none' }} ><h1 className=' px-3 text-white'>Cypher's Lab</h1></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                                <NavLink to='/signin' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : 'text-light'}><span className='header-link px-3'>Log in</span></NavLink>

                            </li>

                        </ul>


                    </div>




                </div>
            </nav>
        </div>
    );
};

export default Header;