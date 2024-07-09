
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'

import '../styles/navigation.css'

const Navigation = () => {

    const navigation = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');
    const username = localStorage.getItem('username');


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        navigation('/')
    };

    const backToHome = () => {
        navigation('/');
    }

    return (
        <>
            <div>
                <Navbar expand="lg" className="custom-navbar">

                    <div className='custom-navbar-inside'>

                        <div style={{ cursor : 'pointer' }} onClick={backToHome} className='custom-navbar-brand' >
                            <img className='brand-logo'  src={Logo} alt="" />
                        </div>

                        <div className='custom-navbar-toggle' >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>

                        <div className='custom-navbar-auth'>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    {isAuthenticated ? (
                                        <>
                                            <Nav.Link>
                                                <button className='btn btn-danger' onClick={handleLogout} > Log Out </button>
                                            </Nav.Link>
                                            <Nav.Link href='/dashboard' >
                                                <h5 className='custom-navbar-username' > {username} </h5>
                                            </Nav.Link>
                                        </>

                                    ) : (
                                        <>
                                            <Nav.Link href="/signup">
                                                <button className='btn btn-primary'> Sign Up </button>
                                            </Nav.Link>
                                            <Nav.Link href="/login">
                                                <button className='btn btn-primary' > Log In </button>
                                            </Nav.Link>
                                        </>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </div>

                    </div>

                </Navbar>
            </div>
        </>
    );
};

export default Navigation;
