import React, { useState } from "react";
import axios from "axios"; //library that used for making HTTP requests from the browser
import image from "../../images/SignupPage/SignupPage.jpg"
import logo from '../../images/V De Silva Logo PNG.png';

const SignupForm = () => {
    const [formData, setFormData] = useState({//"Use State" is a react hook used to manage state in functional components, Set form data is funtion provided by "UseState" to upfate the "formData" state
        name: '',
        email: '',
        address: '',
        contact: '',
        password: '',
    });

    const handleChange = (e) => { //is a event handler function triggered when input fields change
        const{name, value} = e.target;
        setFormData({
            ...formData, //copy the existing form data
            [name]: value, //update the form data with the new value
        });
    };
    const handleSubmit = async (e) => {//event handler function triggered when the form is submitted
        e.preventDefault();//prevent the default form submission behavior
        //send the form data to the server
        try {
            const response = await axios.post('/api/users/signup', formData);
            console.log(response);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
};

return(
<div className="signup-container">
            <div className="left-section">
                <img src={image} alt="Signup Image" />
            </div>
            <div className="right-section">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already signed up? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default SignupForm;

