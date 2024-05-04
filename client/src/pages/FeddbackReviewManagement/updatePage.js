import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const UpdateRating = () => {
    const { ratingId } = useParams();
    const navigate = useNavigate();
   // const [formData, setRatingData] = useState(null);
    const [formData, setFormData] = useState({
        RatingID: '',
        UserID: '',
        StaffID: '',
        JobTitle: '',
        Description: '',
        NoOfStars: ''
      });
    
      const handleStarClick = (stars) => {
        setFormData({
          ...formData,
          NoOfStars: stars
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to your backend API to store in the staffRatingModel
        console.log(formData.RatingID)
        console.log("jjjjjjj")
        fetch(`/api/staffRating/staffRating/${formData.RatingID}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            // Handle successful submission
            console.log('Rating submitted successfully');
            alert("Updated successfully")
            setFormData({
              RatingID: '',
              UserID: '',
              StaffID: '',
              JobTitle: '',
              Description: '',
              NoOfStars: ''
            });
            navigate('/progress')
          } else {
            // Handle 
            console.error('Rating submission failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };
    

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRatingData = async () => {
            try {
                const response = await axios.get(`/api/staffRating/staffRating/${ratingId}`);
                setFormData(response.data);
                setLoading(false);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching rating data:', error);
                setLoading(false);
            }
        };

        fetchRatingData();
    }, [ratingId]);

    return (
        <div>   
        <h1 style={{ textAlign: 'center'}}>Update Rating</h1>

        <Card style={{ padding: '20px' }}>
          <Card.Body>
            <Card.Title style={ {color:'#E6B31E' }}>Staff Rating Form</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="RatingID">
                    <Form.Label>Rating ID</Form.Label>
                    <Form.Control
                     disabled
                      type="text"
                      name="RatingID"
                      value={formData.RatingID}
                      onChange={(e) => setFormData({ ...formData, RatingID: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group controlId="UserID">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="UserID"
                      value={formData.UserID}
                      onChange={(e) => setFormData({ ...formData, UserID: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group controlId="StaffID">
                    <Form.Label>Staff ID</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="StaffID"
                      value={formData.StaffID}
                      onChange={(e) => setFormData({ ...formData, StaffID: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="JobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="JobTitle"
                      value={formData.JobTitle}
                      onChange={(e) => setFormData({ ...formData, JobTitle: e.target.value })}
                    />

                    <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      
                      type="text"
                      name="Description"
                      value={formData.Description}
                      onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                    />
                  </Form.Group>

                  </Form.Group>
                  <Form.Group controlId="NoOfStars">
                    <Form.Label>Number of Stars</Form.Label>
                    <div>
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <Button
                          key={stars}
                          variant={formData.NoOfStars >= stars ? "warning" : "light"}
                          onClick={() => handleStarClick(stars)}
                          style={{ marginRight: '5px' }}
                        >
                          ★
                        </Button>
                      ))}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-right">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
        </div>
      );
};

export default UpdateRating;
