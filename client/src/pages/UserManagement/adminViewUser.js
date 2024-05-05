import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Form, Button } from 'react-bootstrap';
import image from "../../images/UserManagement/SignupPage/signupPage.jpg";
import AdminAccountSideBar from '../../components/UserManagement/adminAccountSideBar';

// Define the UserDetailsPage component

const UserDetailsPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const [userDetails, setUserDetails] = useState({
        userId: null,
        username: null,
        reservationId: null,
        eventName: null,
        eventDate: null
    });

  // Define the handleChange function to update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
    }));
};

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`/api/adminTask/admin_user/${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const data = await response.json();
                setUserDetails(data.eventdata); 

            } catch (error) {
                console.error('Error fetching user details:', error);
                // Handle error or navigate to an error page
            }
        };

        fetchUserDetails();
    }, [userId]);

    const handleEditUser = () => {
        navigate(`/adminLogin/adminDashboard/manageSystem/manageUsers/adminViewUser/${userId}/edit`,{ state: { userDetails } });
    };

    const handleDeleteUser = () => {
        // Implement delete user functionality here
        console.log("Delete user functionality");
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <AdminAccountSideBar />
                </div>
                <div className="col-md-7">
                    <h2>User Details</h2>

                    <Form>
                        <Form.Group controlId="userId" className="mb-3">
                            <Form.Label>User ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="userId"
                                value={userDetails.userId || ''}
                                onChange={handleChange}
                                disabled
                            />

                        </Form.Group>
                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={userDetails.username || ''}
                                onChange={handleChange}
                                disabled
                            />

                        </Form.Group>


                        <Form.Group controlId="reservationId" className="mb-3">
                            <Form.Label>Event ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="reservationId"
                                value={userDetails.reservationId || ''}
                                onChange={handleChange}
                                disabled
                            />

                        </Form.Group>

                        <Form.Group controlId="eventName" className="mb-3">
                            <Form.Label>Event Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="eventName"
                                value={userDetails.eventName || ''}
                                onChange={handleChange}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group controlId="eventDate" className="mb-3">
                            <Form.Label>Event Date:</Form.Label>
                            <Form.Control
                                type="text"
                                name="eventDate"
                                value={userDetails.eventDate || ''}
                                onChange={handleChange}
                                disabled
                            />

                        </Form.Group>
                    </Form>
                    <div className="row">
                        <div className="col">
                            <Button type="button" onClick={() => handleEditUser()} className="btn btn-dark">Edit User</Button>
                            <Button type="button" onClick={() => handleEditUser()} className="btn btn-danger">Delete User</Button>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <img
                        src={image}
                        alt="Profile Image"
                        className="rounded-circle"
                        style={{ top: 10, right: 10, width: 200, height: 200, borderRadius: '50%' }}
                    />
                </div>
            </div>
        </div>

    );
};

export default UserDetailsPage;
