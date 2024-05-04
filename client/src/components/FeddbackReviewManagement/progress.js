import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ProgressComponent = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [progressData, setProgressData] = useState([]);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const fetchProgressData = async () => {
    try {
      const response = await axios.get(`/api/staffRating/staffRating/user/${userId}`);
      setProgressData(response.data);
    } catch (error) {
      console.error('Error fetching progress data:', error);
      setProgressData([]);
    }
  };

  useEffect(() => {
    if (userId !== '') {
      fetchProgressData();
    }
  }, [userId]);

  const handleSubmit = () => {
    fetchProgressData();
  };

  const handleDelete = (ratingId) => {
    axios.delete(`/api/staffRating/staffRating/${ratingId}`);
    window.location.reload();
    alert("Deleted successfully")

  };

  return (
    <div>
      <Form.Group controlId="userId">
        <Form.Label >Enter User ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={handleUserIdChange}
          style={{ padding: '10px', backgroundColor: '#F2F2F2' }}
        />
      </Form.Group>

      <Row>
        {progressData.map((progress, index) => (
          <Col key={index} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Rating ID: {progress.RatingID}</Card.Title>
                <Card.Text>Staff ID: {progress.StaffID}</Card.Text>
                <Card.Text>Job Title: {progress.JobTitle}</Card.Text>
                <Card.Text>Description: {progress.Description}</Card.Text>
                <Card.Text>No of Stars: {progress.NoOfStars}</Card.Text>
              </Card.Body>
              <Button style= {{ backgroundColor:'#E6B31E' }} variant="primary" onClick={() => navigate(`/update/${progress.RatingID}`)}>Update</Button>
              <Button style= {{ backgroundColor:'black' }} variant="danger" onClick={() => handleDelete(progress.RatingID)}>Delete</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

ProgressComponent.propTypes = {};

export default ProgressComponent;
