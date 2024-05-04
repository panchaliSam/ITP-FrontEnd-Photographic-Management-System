// export default SignUp;

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import image1 from "../../images/Staff Management/image1.jpg";

const SignUp = () => {
  const [staffId, setStaffId] = useState('');
  const [empName, setEmpName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send sign up request with form data
    const StaffUser = { 
      staffId, 
      empName, 
      email,
      contact,
      role,
      password 
    };

    axios.post("http://localhost:4001/api/staffSignup/signup", StaffUser)
      .then(() => {
          alert("Staff Member signed up successfully");
          // Reset the form fields after successful submission
          setStaffId("");
          setEmpName("");
          setEmail("");
          setContact("");
          setRole("");
          setPassword("");
      })
      .catch((err) => {
          console.error(err);
          // alert("Failed. Please check the console for more details.");
      })
  };

  return (
    <Row>
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formStaffId">
            <Form.Label>Staff ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter staff ID"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmpName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee name"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col md={6} className="d-none d-md-block">
      <img 
                src={image1} 
                alt="image1"
                style={{
                  top: 0,
                  left: '1000px',
                  height: '600px',
                  width: '400px'
                }} 
              />
      </Col>
    </Row>
  );
};

export default SignUp;
