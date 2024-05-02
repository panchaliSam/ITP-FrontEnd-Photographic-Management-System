import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import AdminAccountSideBar from '../../components/UserManagement/adminAccountSideBar';

const StaffRegistration = () => {
    const { staffId } = useParams();
    const [formData, setFormData] = useState({
        empName: '',
        email: '',
        contact: '',
        role: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 

        try {
            const response = await fetch(`/api/adminTask/admin/${staffId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Update successful:', data);
                handleNavigationAfterUpdate();

            } else {
                console.error('Error updating staff details:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating staff details:', error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };
    const handleNavigationAfterUpdate = () => {
        // Navigate back to manageUsers.js page using window.location or any other method
        window.location.href = '/adminLogin/adminDashboard/manageUsers';
    };
    useEffect(() => {
        async function fetchStaffDetails() {
            try {
                const response = await fetch(`/api/adminTask/admin/${staffId}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    const { staffDetails } = data;
                    setFormData(staffDetails);
                } else {
                    console.error('Error fetching staff details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching staff details:', error);
            }
        }

        fetchStaffDetails(); 
    }, []);
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/adminTask/admin/${staffId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('User deleted successfully.');
                // Perform any additional actions after successful deletion, such as updating UI or redirecting
                handleNavigationAfterDelete();
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleNavigationAfterDelete = () => {
        // Navigate to another page after successful deletion
        window.location.href = '/adminLogin/adminDashboard/manageUsers';
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <AdminAccountSideBar />
                </div>

                <div className="col-lg-9">
                    <div className="form-container">
                        <h2>Staff Account Details</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="empName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    name="empName"
                                    value={formData.empName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="contact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter contact number"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="role">
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <div className="button-container">
                                <Button variant="danger" type='submit' onClick={handleDelete}>
                                    Delete
                                </Button>

                                <Button variant="primary" type='submit' disabled={isLoading} className="update-button">
                                    {isLoading ? 'Updating...' : 'Update'}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffRegistration;
