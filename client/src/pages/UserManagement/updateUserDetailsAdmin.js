import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Alert } from 'react-bootstrap';
import AdminAccountSideBar from '../../components/UserManagement/adminAccountSideBar';
import image from "../../images/UserManagement/SignupPage/signupPage.jpg";
import { useLocation } from 'react-router-dom';


const UserDetailsPage = () => {
    const location = useLocation();
    const userDetails = location.state.userDetails;
    const [updatedDetails, setUpdatedDetails] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await fetch(`/api/adminTask/adminUpdateUser/${userDetails.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDetails),
            });
            if (response.ok) {
                setUpdateSuccess(true); // Set update success to true
            } else {
                const data = await response.json();
                setError(data.error || 'Update failed');
            }
        } catch (error) {
            setError('Network error');
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <AdminAccountSideBar />
                </Col>
                <Col md={7}>
                    <h2>User Details</h2>
                    <Row>
                    <Col>
                        <div className="mb-3">
                            <label className="form-label">User ID:</label>
                            <input type="text" className="form-control" value={userDetails.userId} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" value={userDetails.username} disabled />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Event ID:</label>
                            <input type="text" className="form-control" value={userDetails.reservationId} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Event Name:</label>
                            <input type="text" className="form-control" name="eventName" value={userDetails.eventName} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Event Date:</label>
                            <input type="text" className="form-control" value={userDetails.eventDate} />
                        </div>
                        {/* Add onChange handlers to update 'updatedDetails' state */}
                        {/* Example: 
                            <input type="text" className="form-control" value={updatedDetails.someField} onChange={(e) => setUpdatedDetails({ ...updatedDetails, someField: e.target.value })} />
                        */}
                        {/* Update button */}
                        <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
                        {/* Add onClick handler to the update button */}
                        {/* Example: onClick={handleUpdate} */}
                    </Col>
                </Row>
                {/* Success alert */}
                {updateSuccess && (
                    <Row>
                        <Col>
                            <Alert variant="success" onClose={() => setUpdateSuccess(false)} dismissible>
                                User details updated successfully!
                            </Alert>
                        </Col>
                    </Row>
                )}
                {/* Error alert */}
                {error && (
                    <Row>
                        <Col>
                            <Alert variant="danger" onClose={() => setError('')} dismissible>
                                {error}
                            </Alert>
                        </Col>
                    </Row>
                )}
            </Col>
                <Col>
                    <Image
                        src={image}
                        alt="Profile Image"
                        roundedCircle
                        style={{ top: 10, right: 10, width: 200, height: 200,borderRadius:'50%' }}
                    />
                </Col>
            </Row>

        </Container>
    );
};

export default UserDetailsPage;
