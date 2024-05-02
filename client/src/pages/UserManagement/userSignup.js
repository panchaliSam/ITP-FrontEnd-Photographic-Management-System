import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button, Alert } from 'react-bootstrap';
import image from "../../images/UserManagement/SignupPage/signupPage.jpg";
import logo from '../../images/V De Silva Logo PNG.png';

const SignupForm = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        userId: '',
        username: '',
        email: '',
        address: '',
        dateOfBirth:'',
        contact: '',
        password: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // Event handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/regUserTask/users/add', formData);
            console.log(response); // Log the response data
            setSuccessMessage('Registration successful!'); // Set success message
            setErrorMessage(''); // Clear error message
            window.location.href = '/signin'; // Change the URL to your home page
        } catch (error) {
            console.error('Error submitting data:', error);
            setSuccessMessage(''); // Clear success message
            setErrorMessage('Error registering user.'); // Set error message
        }
    };

    return (
        <div className="container mt-5">
            <Card className="rounded p-">
                <div className="row">
                    <div className="col-md-6">
                        <Card.Img
                            src={image}
                            alt="Login Image"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="w-75 mx-auto">
                            <div className="logo">
                                <img src={logo} alt="Logo" />
                            </div>
                            <h2 className="text-center mb-4">Registration</h2>
                            {successMessage && <Alert variant="success">{successMessage}</Alert>}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formUserId">
                                    <Form.Label>User ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your user ID"
                                        name="userId"
                                        value={formData.userId}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDateOfBirth">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control
                                        type="Date"
                                        placeholder="Enter your Date of birth"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formContact">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your contact"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Register
                                </Button>
                            </Form>
                            <p>Already signed up? <a href="/signin">Login</a></p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignupForm;


// // Inside your component
// <div className="signup-container">
//     {/* <div className="left-section">
//         <img src={image} alt="Signup Image" />
//     </div> */}
//     <div className="right-section">
//         <div className="logo">
//             <img src={logo} alt="Logo" />
//         </div>
//         <h2>Registration</h2>
//         <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" name = "username" value={formData.name} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" name = "email" value={formData.email} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="formAddress">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your address" name = "address" value={formData.address} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="formContact">
//                 <Form.Label>Contact</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your contact number" name = "contact" value={formData.contact} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter your password" name = "password" value={formData.password} onChange={handleChange} />
//             </Form.Group>
//             <Button variant="primary" type="submit">Sign Up</Button>
//         </Form>
//         <p>Already signed up? <a href="/signin">Login</a></p>
//     </div>
// </div>