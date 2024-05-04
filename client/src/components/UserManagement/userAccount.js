import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Assuming you use axios for API calls
import { useParams } from 'react-router-dom';

// const AccountDetailsPage = () => {
//     const { userId } = useParams();
//     const [userData, setUserData] = useState({
//         fullName: '',
//         email: '',
//         address: '',
//         contact: '',
//         dateOfBirth: '',
//         password: '', // You might not want to show the password in a real application
//     });

//     useEffect(() => {
//         // Fetch user data from API and set it to state
//         axios.get(`/api/regUserTask/users/${userId}`)
//             .then(response => {
//                 setUserData(response.data.userData); // Assuming the API returns data in { userData: {...} } format
//             })
//             .catch(error => {
//                 console.error('Error fetching user data:', error);
//             });
//     }, [userId]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Make API call to update user data
//         axios.post('api/endpoint-to-update-user-data', userData)
//             .then(response => {
//                 console.log('User data updated successfully:', response.data);
//                 // You can show a success message or redirect the user after successful update
//             })
//             .catch(error => {
//                 console.error('Error updating user data:', error);
//             });
//     };
//     import React, { useState, useEffect } from 'react';
//     import { Container, Form, Button } from 'react-bootstrap';
//     import axios from 'axios'; // Assuming you use axios for API calls
//     import { useParams } from 'react-router-dom';
    
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
                    setUserData(response.data.userData); // Assuming the API returns data in { userData: {...} } format
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }, [userId]);
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setUserData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Make API call to update user data
            axios.post('api/endpoint-to-update-user-data', userData)
                .then(response => {
                    console.log('User data updated successfully:', response.data);
                    // You can show a success message or redirect the user after successful update
                })
                .catch(error => {
                    console.error('Error updating user data:', error);
                });
        };
    

    return (
        <Container>
            <h1>Account Details</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={userData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="address">
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
                <Form.Group controlId="contact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                        type="text"
                        name="contact"
                        value={userData.contact}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={userData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </Container>
    );
};

export default AccountDetailsPage;
