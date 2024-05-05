import React, { useState, useEffect } from 'react';
import { Card,Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProgressComponent = () => {
  const navigate = useNavigate();
  const { userId, eventId } = useParams();
  const [progressData, setProgressData] = useState([]);

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
    if (userId) {
      fetchProgressData();
    }
  }, [userId]);

  const handleDelete = async (ratingId) => {
    try {
      await axios.delete(`/api/staffRating/staffRating/${ratingId}`);
      // Remove the deleted item from the progressData state instead of reloading the page
      setProgressData(prevProgressData => prevProgressData.filter(progress => progress.RatingID !== ratingId));
      alert("Deleted successfully");
    } catch (error) {
      console.error('Error deleting progress:', error);
    }
  };

  return (
    <div style={{ marginLeft: '200px' }}>
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
              <Button style= {{ backgroundColor:'#E6B31E' }} variant="primary" onClick={() => navigate(`update/${progress.RatingID}`)}>Update</Button>
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
