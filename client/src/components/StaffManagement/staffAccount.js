import React, { useState, useEffect } from 'react';
import { Container, Form} from 'react-bootstrap';
import axios from 'axios'; // Assuming you use axios for API calls
import { useParams } from 'react-router-dom';
import staffimage from "../../images/Staff Management/staffimage.png"


const StaffDetailsPage = () => {
    const { staffId } = useParams();
    const [staffData, setStaffData] = useState({
        staffId: '',
        empName: '',
        email: '',
        contact: '',
        role: '' // You might not want to show the password in a real application
    });

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`/api/staffDetails/${staffId}`);
                setStaffData(response.data.staffData);
            } catch (error) {
                console.error('Error fetching details:', error);
                // Handle error
            }
        };

        fetchDetails();
    }, [staffId]);


    return (
        <div style={{ display: 'flex', marginLeft: '200px' }}>
            <Container>
           
                <Form>
                    <Form.Group controlId="staff" className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="staff"
                            value={staffData.staffId}
                            style={{ width: '100px' }}

                        />
                    </Form.Group>
                    <Form.Group controlId="empName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="empName"
                            value={staffData.empName}
                            style={{ width: '300px' }}

                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={staffData.email}
                            style={{ width: '300px' }}

                        />
                    </Form.Group>
                    <Form.Group controlId="contact" className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="contact"
                            value={staffData.contact}
                            style={{ width: '300px' }}

                        />
                    </Form.Group>
                    <Form.Group controlId="role" className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            type="text"
                            name="role"
                            value={staffData.role}
                            style={{ width: '300px' }}

                        />
                    </Form.Group>
                    
</Form>
            </Container>

            <img 
                src={staffimage} 
                alt="Staff"
                style={{
                  top: 0,
                  left: '50px',
                  height: '500px',
                  width: '750px'
                }} 
              />
        </div>
    );
};

export default StaffDetailsPage;