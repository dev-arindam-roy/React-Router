import React from 'react'
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
    const navItemActiveStyle = ({isActive}) => {
        return {
            fontWeight: (isActive) ? 'bold' : 'normal',
            textShadow: (isActive) ? '0px 0px 5px #000000' : 'none'
        };
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"><strong>REACT - ROUTER</strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" style={navItemActiveStyle} className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" style={navItemActiveStyle} className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" style={navItemActiveStyle} className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-user-lock"></i> SignUp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-sign-in-alt"></i> SignIn</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            [<span style={{ fontSize: '12px' }}>DEV ARINDAM ROY</span>]
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderNav