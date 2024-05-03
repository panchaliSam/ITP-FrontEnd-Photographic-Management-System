import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import AdminAccountSideBar from '../../components/UserManagement/adminAccountSideBar';

const UpdateUserDetails = () => {
    const { userId } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        userId: null,
        username: null,
        reservationId: null,
        eventName: null,
        eventDate: null
    });

    useEffect(() => {
        // Fetch user details using userId and update formData state
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`/api/adminTask/admin_user/${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const data = await response.json();
                setFormData(data.eventdata);
            } catch (error) {
                console.error('Error fetching user details:', error);
                // Handle error or navigate to an error page
            }
        };

        fetchUserDetails();
    }, [userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/adminTask/admin/updateUserDetails/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to update user details');
            }
            navigate(`/adminLogin/adminDashboard/adminViewUser/${userId}`);
        } catch (error) {
            console.error('Error updating user details:', error);
            // Handle error or navigate to an error page
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <AdminAccountSideBar />
                </div>
                <div className="col-md-7">
                    <h2>User Details</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="userId" className="mb-3">
                            <Form.Label>User ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="userId"
                                value={formData.userId || ''}
                                onChange={handleChange}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username || ''}
                                onChange={handleChange}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group controlId="reservationId" className="mb-3">
                            <Form.Label>Event ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="reservationId"
                                value={formData.reservationId || ''}
                                onChange={handleChange}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group controlId="eventName" className="mb-3">
                            <Form.Label>Event Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="eventName"
                                value={formData.eventName || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="eventDate" className="mb-3">
                            <Form.Label>Event Date:</Form.Label>
                            <Form.Control
                                type="text"
                                name="eventDate"
                                value={formData.eventDate || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary">Update</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserDetails;
