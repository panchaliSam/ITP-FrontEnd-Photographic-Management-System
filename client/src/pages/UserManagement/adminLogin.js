import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import adminImage from '../../images/UserManagement/AdminLogin/admin.jpg';

const AdminLoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [validationError, setValidationError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setValidationError('Please enter both email and password.');
            return;
        }

        setValidationError('');
        setLoginError('');
        setLoginSuccess(false);

        try {
            const response = await fetch('/api/adminTask/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                setLoginSuccess(true);
                
                // Navigate to adminDashboard on successful login
                window.location.href = '/adminLogin/adminDashboard/manageSystem';

            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
                setLoginError(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container mt-5">
            <Card className="rounded p-4">
                <div className="row">
                    <div className="col-md-6">
                        <Card.Img
                            src={adminImage}
                            alt="Login Image"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="w-75 mx-auto">
                            <h2 className="text-center mb-4">Login</h2>
                            {validationError && <Alert variant="danger">{validationError}</Alert>}
                            {loginError && <Alert variant="danger">{loginError}</Alert>}
                            {loginSuccess && <Alert variant="success">Login successful!</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
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
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AdminLoginPage;
