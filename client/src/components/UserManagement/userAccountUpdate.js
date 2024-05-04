import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Assuming you use axios for API calls
import { useParams } from 'react-router-dom';

const AccountDetailsPage = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        address: '',
        contact: '',
        dateOfBirth: '',
        password: '', // You might not want to show the password in a real application
    });

    useEffect(() => {
        // Fetch user data from API and set it to state
        axios.get(`/api/regUserTask/users/${userId}`)
            .then(response => {
                const userDataFromApi = response.data.userData; // Assuming the API response has userData key
                setUserData(userDataFromApi); // Set the fetched user data to state
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]); // Dependency array with userId

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleUpdate = () => {
        axios.put(`/api/regUserTask/users/${userId}`, userData)
            .then(response => {
                console.log('User updated successfully:', response.data);
                window.location.href = `/userAccount/${userId}`; // Redirect to the specified URL after successful update
            })
            .catch(error => {
                console.error('Error updating user:', error);
                // Optionally, you can add logic to handle errors, like showing an error message
            });
    };


    return (
        <div style={{ marginLeft: '200px' }}>
            <Container>
                <Form>
                    <Form.Group controlId="username" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="address" className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="address"
                            value={userData.address}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="dateOfBirth" className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="text"
                            name="dateOfBirth"
                            value={userData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="contact" className="mb-3">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            type="text"
                            name="contact"
                            value={userData.contact}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                   
                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" style={{ marginRight: '10px' }} onClick={handleUpdate}>Update</Button>
                


                </Form>
            </Container>
        </div>
    );
};

export default AccountDetailsPage;