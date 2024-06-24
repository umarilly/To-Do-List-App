
import React, { useState } from 'react';
import axios from 'axios';

import { Link as RouterLink } from 'react-router-dom';
import '../styles/signup.css';
import Lock from '../images/lock.png';
import Message from '../images/message.png';
import Profile from '../images/profile.png';

const UserSignup = () => {

    const [errorMsg, setErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            setErrorMsg("Please fill in all the required fields.");
        } else if (formData.password !== formData.confirmPassword) {
            setErrorMsg("Passwords do not match.");
        } else {
            try {
                const res = await axios.post('http://localhost:5000/users/signup', formData);
                console.log(res.data);
                setErrorMsg('Account created, please login now')
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    return (
        <>
            <div className='login-heading' >
                <div><h2> Sign Up </h2></div>
            </div>
            <div>
                <div className="login-container">

                    <div className="login-container-box2">
                        <div className="login-container-box2-sub">

                            <div className="login-container-box2-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group-login">
                                        <label htmlFor="input1" className="form-label-login">
                                            Name
                                        </label>
                                        <div className="outer-input-class">
                                            <div className="img-box-login">
                                                <img src={Profile} alt="" />
                                            </div>
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                className="form-input-login"
                                                id="input1"
                                                onChange={handleChange}
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group-login">
                                        <label htmlFor="input2" className="form-label-login" style={{ marginTop: '10px' }}>
                                            Email
                                        </label>
                                        <div className="outer-input-class">
                                            <div className="img-box-login">
                                                <img src={Message} alt="" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                className="form-input-login"
                                                id="input2"
                                                onChange={handleChange}
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group-login">
                                        <label htmlFor="input3" className="form-label-login" style={{ marginTop: '10px' }}>
                                            Password
                                        </label>
                                        <div className="outer-input-class">
                                            <div className="img-box-login">
                                                <img src={Lock} alt="" />
                                            </div>
                                            <input
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                className="form-input-login"
                                                id="input3"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group-login">
                                        <label htmlFor="input4" className="form-label-login" style={{ marginTop: '10px' }}>
                                            Confirm Password
                                        </label>
                                        <div className="outer-input-class">
                                            <div className="img-box-login">
                                                <img src={Lock} alt="" />
                                            </div>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                className="form-input-login"
                                                id="input4"
                                                placeholder="Password Again"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h6 style={{ color: 'black', marginBottom: '15px' , marginTop: '15px' , textAlign: 'center' }} > {errorMsg} </h6>
                                        </div>
                                    </div>

                                    <div className="pre-btn-login">
                                        <button type="submit" className="form-button-login">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>


                            <div className="no-account">
                                <div>
                                    <p> Already Have an Account ? </p>
                                </div>
                                <div className="already-account-login">
                                    <RouterLink to="/login">
                                        <button> Log In </button>
                                    </RouterLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserSignup;