
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/login.css';
import Lock from '../images/lock.png';
import Message from '../images/message.png';

const UserLogin = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigation = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMsg('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.email || !formData.password) {
                setErrorMsg('Please fill in all the required fields');
            } else {
                const res = await axios.post('http://localhost:5000/users/login', formData);
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('username', res.data.username);
                navigation('/');
            }

        } catch (err) {
            setErrorMsg('Invalid email or password. Please try again.');
        }
    };

    return (
        <>
            <div className='login-heading' >
                <div><h2> Log In </h2></div>
            </div>
            <div>
                <div className="login-container">

                    <div className="login-container-box2">
                        <div className="login-container-box2-sub">

                            <div className="login-container-box2-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group-login">
                                        <label htmlFor="input1" className="form-label-login">
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
                                                id="input1"
                                                onChange={handleChange}
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group-login">
                                        <label htmlFor="input2" className="form-label-login" style={{ marginTop: '10px' }}>
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
                                                id="input2"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h4 style={{ color: 'red', marginBottom: '20px' }} > {errorMsg} </h4>
                                        </div>
                                    </div>

                                    <div className="pre-btn-login">
                                        <button type="submit" className="form-button-login">
                                            Log In
                                        </button>
                                    </div>
                                </form>
                            </div>


                            <div className="no-account">
                                <div>
                                    <p> Don't have an account ? </p>
                                </div>
                                <div className="already-account-login">
                                    <RouterLink to="/signup">
                                        <button> Sign Up </button>
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

export default UserLogin;











